const mongoose = require("mongoose");

const Status = Object.freeze({
  Negative: "Negative",
  TravelledQuarantine: "Travelled-Quarantine",
  SymptomsQuarantine: "Symptoms-Quarantine",
  PositiveAdmit: "Positive-Admit",
});

const reportSchema = new mongoose.Schema(
  {
    patientid: { type: mongoose.Schema.ObjectId },
    status: {
      type: String,
      enum: Object.values(Status),
    },
  },
  { timestamps: true } //created at and updated at
);

Object.assign(reportSchema.statics, {
  Status,
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
