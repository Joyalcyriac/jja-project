const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require('multer');
const ClientModel = require("./clientlogin");
const Workermodel = require("./WorkReg");
// const workerlogModel = require("./workerlogin");
const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({ storage: storage });

mongoose.connect("mongodb+srv://joyal:joyal@cluster0.yehvnsz.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true, // Add useNewUrlParser option
  useUnifiedTopology: true // Add useUnifiedTopology option
})
.then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

  // Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Start the server
const PORT = process.env.PORT || 3006; // Change to a different port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.post("/csignup", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if user with provided email already exists
      const existingUser = await ClientModel.findOne({ email });
      if (existingUser) {
        // User already exists
        return res.send("exist");
      } else {
        // User doesn't exist, create a new user
        await ClientModel.create({ email, password });
        return res.send("notexist");
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send("Server Error");
    }
  });
  
  // Endpoint for user login
  app.post("/clogin", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await ClientModel.findOne({ email, password });
      if (user) {
        return res.json({ success: true, message: "Login Successfully" });
      } else {
        return res.json({ success: false, message: "Invalid Email or Password" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: "Server Error" });
    }
  });
  

  app.post('/wsignup', upload.single('image1'), async (req, res) => {
    try {
      const { name, phone, job, experience, location, username, password } = req.body;
      const newWorker = new Workermodel({
        username,
        password,
        name,
        phone,
        job,
        experience,
        location,
        image1: {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        },
      });
      await newWorker.save();
      res.status(200).json({ message: 'Record saved' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post("/wlogin", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await Workermodel.findOne({ username, password });
      if (user) {
        return res.json({ success: true, message: "Login Successfully" });
      } else {
        return res.json({ success: false, message: "Invalid Username or Password" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: "Server Error" });
    }
  });

  app.get('/view', async (request, response) => {
    var data = await Workermodel.find();
    // console.log(data)
    response.send(data)
})
