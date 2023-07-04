const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const jwt = require("jsonwebtoken");
const session = require("express-session");

const nodemailer = require("nodemailer");
const schedule = require("node-schedule");

//get the .env file
require("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

//uploads folder storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname);
  },
});

//file filter
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

//connect to mongo atlas
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Success: Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error: MongoDB connection failed", error);
  });
console.log(process.env.MONGO_URI);

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

const noteSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    username: { type: String, required: true },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);

router.post("/scheduleEmail", (req, res) => {
  const { title, email, message, dateTime } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ishika2413@gmail.com",
      pass: "fuckU@1373",
    },
  });

  const date = new Date(dateTime);
  const cronSchedule = `${date.getSeconds()} ${date.getMinutes()} ${date.getHours()} ${date.getDate()} ${date.getMonth() + 1} *`;

  const task = schedule.scheduleJob(cronSchedule, () => {
    const mailOptions = {
      from: "ishika2413@gmail.com",
      to: email,
      subject: title,
      text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error occurred while sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  });

  res.send("Email scheduled successfully");
});

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
    console.log(error);

    res.status(400).send(error.message);
  }
});

router.get("/getSingleFile/:username/:lastPart", async (req, res, next) => {
  try {
    const { username, lastPart } = req.params;

    const files = await SingleFile.find({ username: username, lastPart: lastPart });
    res.status(200).send(files);
  } catch (error) {
    console.log(error);

    res.status(400).send(error.message);
  }
});

router.delete("/getSingleFile/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await SingleFile.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
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

      //generate jwt with secret key for signing in the token
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);

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

router.post("/home", (req, res) => {
  res.send("working");
});

router.post("/notes", upload.none(), async (req, res) => {
  try {
    const { title, content, username } = req.body;

    const note = new Note({
      title: title,
      content: content,
      username: username,
    });

    await note.save();

    res.status(201).json({ message: "Note created successfully", note });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

router.get("/notes/:username", async (req, res, next) => {
  try {
    const { username } = req.params;

    const notes = await Note.find({ username: username });
    res.status(200).send(notes);
  } catch (error) {
    console.log(error);

    res.status(400).send(error.message);
  }
});

app.use("/api", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
