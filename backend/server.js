const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const jwt = require("jsonwebtoken");
const session = require("express-session");

const app = express();
app.use(express.urlencoded({ extended: true }));

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
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: filefilter });

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

mongoose.connect("mongodb+srv://admin:admin@cluster0.01mgq59.mongodb.net/test", { useNewUrlParser: true })
  .then(() => {
    console.log("Success: Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error: MongoDB connection failed", error);
  });

  const singleFileSchema = new Schema(
    {
      fileName: { type: String, required: true },
      filePath: { type: String, required: true },
      fileType: { type: String, required: true },
      fileSize: { type: String, required: true },
      username: { type: String, required: true },
      lastPart: { type: String, required: true },
    },
    { timestamps: true }
  );
  
const SingleFile = mongoose.model("SingleFile", singleFileSchema);

router.post("/singleFile", upload.single("file"), async (req, res) => {
  try {
    const file = new SingleFile({
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
      username: req.body.username, // Access the username from the request body
      lastPart: req.body.lastPart, // Access the lastPart from the request body
    });

    await file.save();
    res.status(201).json({ message: "File uploaded successfully", file });
  } catch (error) {
    res.status(400).send(error.message);
  }
});


router.get("/getSingleFile/:username/:lastPart", async (req, res, next) => {
  try {
    const { username, lastPart } = req.params;


    const files = await SingleFile.find({ username: username, lastPart: lastPart});
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


 

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
      confirmPassword: confirmPassword,
    });

    await user.save();

    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
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
      return res.status(400).json({ message: "Invalid password" });
    } else {
      req.session.user = { username: `${user.name}` };
      const token = jwt.sign({ userId: user._id }, "266dea6ac458a77c864ac549509c84bcf82f3daa9b2edea33686f0946e367416");

      res.status(200).json({
        message: `Login successful ${user.name}`,
        token: token,
        user: { username: user.name },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("jwt");
  res.status(200).json({ message: "Logout successful" });
});

router.post("/api/home", (req, res) => {
 res.send("working")
});


app.use("/api", router);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
