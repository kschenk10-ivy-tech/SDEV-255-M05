// Include third party library
const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');  // Ensure this module is implemented and used

// Express App
const app = express();

// Connect to MongoDB
const dbURI = "mongodb+srv://user1:g0D9oCoCVvTYtqzo@cluster0.azmfvjo.mongodb.net/";  // Ensure this is properly configured
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => {
    app.listen(3000, function() {
      console.log('Server is ready to receive requests.')
    })
  })
  .catch(err => console.log(`Connection error: ${err}`));

// Register View Engine
app.set("view engine", "ejs");

// Middleware & Static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Example Route
app.get("/", function (req, res) {
  const blogs = [
    { title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet consectetur" },
    { title: "Mario finds stars", snippet: "Lorem ipsum dolor sit amet consectetur" },
    { title: "How to defeat bowser", snippet: "Lorem ipsum dolor sit amet consectetur" },
  ];
  res.render("index", { title: "Home", blogs });
});

// Use blogRoutes for specific paths
// app.use('/blogs', blogRoutes);  // Uncomment this line if blogRoutes are defined and intended for use
