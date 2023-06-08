//..............................................................Import statements..................................................................
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const jwt = require("jsonwebtoken");
const session = require("express-session");
const { default: context } = require("react-bootstrap/esm/AccordionContext");

const app = express();

app.use(cors()); 
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(
  session({
    secret: "f3b418618baf39187b0c79e8c4d6b51b428151ec36f7007f090fecb60cb82cf0",
    resave: false,
    saveUninitialized: false,
  })
);

//.............................................................. Storage Configurations ..................................................................


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname);
  },
});

const filefilter = (req, file, cb) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "application/pdf") {
    cb(null, true);
  } else cb(null, false);
};

const upload = multer({ storage: storage, fileFilter: filefilter });


//.............................................................. Schema Models ..................................................................


const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  Folder: [{ type: mongoose.Schema.Types.ObjectId, ref: "Folder" }],
  Documents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Documents" }],
  Projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Projects" }],
  Certificates: [{ type: mongoose.Schema.Types.ObjectId, ref: "Certificates" }],
  Referals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Referals" }],
  Notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Notes" }],
});

const FileSchema = new mongoose.Schema(
  {
    fileName: { type: String, required: true },
    filePath: { type: String, required: true },
    fileType: { type: String, required: true },
    fileSize: { type: String, required: true },
    data: { type: Buffer, required: true },
  },
  { timestamps: true }
);
const FolderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  link: { type: String },
  pictures: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
  resumes: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
  cvs: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
});

const DocumentsSchema = new mongoose.Schema({
  Documents: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
});

const ProjectsSchema = new mongoose.Schema({
  Projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
});

const CertificatesSchema = new mongoose.Schema({
  Certificates: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
});

const ReferalsSchema = new mongoose.Schema({
  Referals: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
});

const NoteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});


const User = mongoose.model("User", userSchema);
const File = mongoose.model("File", FileSchema);
const Folder = mongoose.model("Folder", FolderSchema);
const Documents = mongoose.model("Documents", DocumentsSchema);
const Projects = mongoose.model("Projects", ProjectsSchema);
const Certificates = mongoose.model("Certificates", CertificatesSchema);
const Referals = mongoose.model("Referals", ReferalsSchema);
const NOtes = mongoose.model("Notes", NoteSchema);

//.............................................................. Connect to DB ....................................................................


mongoose
  .connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.2", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("success connection");
  });


//.............................................................. Route Statements ..................................................................


router.post("/File", upload.single("file"), async (req, res, next) => {
  try {
    const file = new FileSchema({
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
      data: req.file.data
    });
    await file.save();
    res.status(201).send("file uploaded successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// router.post("/Notes", upload.single("file"), async (req, res, next) => {
//   try {
//     const Notes = new NoteSchema({
//       title: req.file.title,
//       content: req.file.content
//     });
//     await Notes.save();
//     res.status(201).send("file uploaded successfully");
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

router.get("/getFile", async (req, res, next) => {
  try {
    const files = await File.find();
    res.status(201).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


//.............................................................. Singup and Login  ..................................................................


router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const user = new User({
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    });

    await user.save();

    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: `Invalid password ${password} ${user.password}` });
    } else {
      req.session.user = { username: `${user.name}` };
      const token = jwt.sign({ userId: user._id }, "266dea6ac458a77c864ac549509c84bcf82f3daa9b2edea33686f0946e367416");
      // res.json({ name: user.name });

      res.status(200).json({ message: `Login successful ${user.name}`, token: token });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("jwt");
  res.status(200).json({ message: "Logout successful" });
});



//.............................................................. Configs ..................................................................



app.get("/", (req, res) => {
  res.send("hahma");
});

const a = { routes: router };

app.use("/api", a.routes);
app.listen(5000, () => console.log("server working"));























// const singleFileSchema = new Schema(
//   {
//     fileName: { type: String, required: true },
//     filePath: { type: String, required: true },
//     fileType: { type: String, required: true },
//     fileSize: { type: String, required: true },
//   },
// );
// const singleFile = mongoose.model("SingleFile", singleFileSchema);


// router.post("/singleFile", upload.single("file"), async (req, res, next) => {
//   try {
//     const file = new singleFile({
//       fileName: req.file.originalname,
//       filePath: req.file.path,
//       fileType: req.file.mimetype,
//       fileSize: req.file.size,
//     });
//     await file.save();
//     res.status(201).send("file uploaded successfully");
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// router.get("/getSingleFile", async (req, res, next) => {
//   try {
//     const files = await singleFile.find();
//     res.status(201).send(files);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });