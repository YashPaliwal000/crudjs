const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
