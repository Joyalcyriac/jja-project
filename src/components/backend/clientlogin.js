const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://joyal:joyal@cluster0.yehvnsz.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("DB Connected");
  })
  .catch(err => console.log(err));

const clientSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true 
  }
});

const ClientModel = mongoose.model("clientlogs", clientSchema);
module.exports = ClientModel;