const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    name: String,
    fathername: String,
    dateofbirth: String,
    bloodgroup: String,
    image: String,
    gender: String,
    address: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Student", StudentSchema);
