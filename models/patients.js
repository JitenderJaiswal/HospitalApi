const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: true },
  },
  { timestamps: true } //created at and updated at
);

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
