const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const { getegid } = require("process");
const bcrypt = require("bcrypt");
const { Hash } = require("crypto");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
var bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
// generate unique id
const generateID = () => Math.random().toString(36).substring(2, 10);
// user array to save the users
// const people = [];
// connecting to mongoDb
const db = process.env.MONGODB_URL;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("The db is up and running");
  });

//   creating the schema
const MyModel = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model("user_2", MyModel);

// Signup route
app.post("/api/register", async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  // Validate inputs
  if (!email || !password || password !== confirmPassword) {
    return res.status(400).json({ error_message: "Sorry Invalid input" });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error_message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    // console.log("*****", newUser);

    res.status(200).json({ message: "User signed up successful.." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error_message: "Server error" });
  }
});

//login route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("==>", email);
  // validate inputs
  try {
    if (!email || !password) {
      return res.status(400).json({
        message: "Sorry, Invalid input"
      });
    }
    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error_message: "Sorry, User not found" });
    }

    // compare the passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({
        error_message: "Incorrect password"
      });
    }

    //   set user session
    // req.session.user = user;
    // return res.status(200).json({ message: "Login successfully" });
    // Generate token (e.g., using JWT) and return it as a response
    // const token = generateToken(user._id); // Replace with your token generation logic
    res.json({
      success: true,
      err: null
    });
    return res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error_message: "Server error"
    });
  }
});

app.listen(port, () => {
  console.log("The server is up and running on port", port);
});
