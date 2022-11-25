const express = require("express");
const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/jsdemo";

const app = express();

mongoose.connect(url);

const con = mongoose.connection;
app.use(express.json());
con.on("open", function () {
  console.log("connected...");
});

app.listen(9000, () => {
  console.log("server started..");
});

const studentRoutes = require("./routes/student");

app.use("/students", studentRoutes);
