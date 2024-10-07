// server.js
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8001;

require("dotenv").config({ path: "./config.env" });

// Middleware to parse JSON bodies
app.use(express.json());

// get driver connection
const dbo = require("./db/conn");


// Basic route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Listen on the specified port
app.listen(PORT, () => {
  // throw error message if fauild
  dbo.connectToServer(function (err) {
    if(err) console.error(err);
  });
  console.log(`Server running on port ${PORT}`);
});
