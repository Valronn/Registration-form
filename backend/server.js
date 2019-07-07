const express = require("express");
const app = express();
const PORT = process.env.PORT || 2000;
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connected to DB");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
