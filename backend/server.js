const express = require('express');
const Sprofiles = require('./data/Sprofiles');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get("/", (req,res)=>{
    res.send("this is data")
});

app.get("/profiles", (req,res)=>{
    res.json(Sprofiles);
});

const PORT = process.env.PORT || 8900;

app.get("/profiles/:id", (req,res)=>{
    let profile = Sprofiles.find((n)=> n._id === req.params.id);
    res.send(profile);
})

app.listen(PORT, console.log(`server started at ${PORT}`));