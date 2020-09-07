const mongoose = require("mongoose");

const docterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true } //created at and updated at
);

const Docter = mongoose.model("Docter", docterSchema);

module.exports = Docter;
