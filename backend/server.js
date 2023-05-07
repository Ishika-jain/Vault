const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { error } = require("console");
const router = express.Router();

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});


const filefilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else cb(null, false);
};


const upload = multer({ storage: storage, fileFilter: filefilter });

const Schema = mongoose.Schema;

const singleFileSchema = new Schema({
  fileName :{
    type: String,
    required: true
  },
  filePath:{
    type: String,
    required: true
  },
  fileType:{
    type: String,
    required: true
  },
  fileSize:{
    type: String,
    required: true
  }
}, {timestamps: true})

const singleFile = mongoose.model('SingleFile', singleFileSchema)

mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.2", {
    useNewUrlParser: true
}).then(()=>{  console.log("success connection")})

const singleFileUpload = async (req,res,next) =>{
    try{
        const file = new singleFile ({ 
          fileName : req.file.originalname,
          filePath: req.file.path,
          fileType: req.file.mimetype,
          fileSize: req.file.size
        });
        await file.save();
        console.log(file)
        res.status(201).send('file uploaded successfully');
    }
    catch(error){
        res.status(400).send(error.message);
    }
}

const getallSingleFiles = async (req,res,next)=>{
  try{
      const files = await singleFile.find();
      res.status(201).send(files);
  }
  catch(error){
    res.status(400).send(error.message)
  }
}



app.get("/", (req,res)=>{
    res.send("hahma") 
})

router.post('/singleFile', upload.single('file'), singleFileUpload)
router.get('/getSingleFile', getallSingleFiles);
// module.exports = { upload };
const a = {routes : router}

app.use('/api', a.routes)
app.listen(5000, ()=> console.log('server working'))