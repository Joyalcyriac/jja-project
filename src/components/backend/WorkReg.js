const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://joyal:joyal@cluster0.yehvnsz.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("worker vannu")})
.catch(err=>console.log(err));

const workerSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  job: String,
  experience: String,
  location: String,
  username: String,
  password: String,
  image1: {
    data: Buffer,
    contentType: String,
  },
});

const Workermodel=mongoose.model("WorkerReg",workerSchema)
module.exports=Workermodel;