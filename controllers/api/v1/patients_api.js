const Patient = require("../../../models/patients");
const { Status } = require("../../../models/reports");
const Report = require("../../../models/reports");

//Patient register
module.exports.register = function (req, res) {
  try {
    return res.render("patient_register", { title: "Patient Register" });
  } catch (err) {
    return res.redirect("back");
  }
};
module.exports.create = async function (req, res) {
  try {
    const { name, phone } = req.body;

    //Find patient by name
    let patient = await Patient.findOne({ phone: phone });

    if (!patient) {
      patient = await Patient.create({ name: name, phone: phone });
    }

    return res.json(200, { message: "Patient Register", patient: patient });
    /*return res.render("create_report", {
      title: "Create Report",
      patient: patient,
    });*/
  } catch (err) {
    return res.json(422, { message: err });
    //return res.redirect("back");
  }
};
module.exports.create_report = async function (req, res) {
  console.log(req);
  try {
    let patientid = req.params.id;
    let status;

    switch (req.body.status) {
      case Status.Negative:
        status = req.body.status;
        break;
      case Status.TravelledQuarantine:
        status = req.body.status;
        break;
      case Status.SymptomsQuarantine:
        status = req.body.status;
        break;
      case Status.PositiveAdmit:
        status = req.body.status;
        break;
      default:
        "";
    }
    let report = await Report.create({ patientid: patientid, status: status });
    let patient = await Patient.findById(patientid);
    report.name = patient.name;
    report.phone = patient.phone;

    return res.json(200, { message: "Create Report", report: report });
    /*return res.render("status", {
    title: "Status Report",
    report: report,
  });*/
  } catch (err) {
    return res.json(422, { message: err });
    //return res.redirect("back");
  }
};

module.exports.all_reports = async function (req, res) {
  try {
    let report = await Report.find({ patientid: req.params.id });
    let patient = await Patient.findById(req.params.id);

    for (r of report) {
      r.name = patient.name;
      r.phone = patient.phone;
    }
    console.log(report);
    return res.json(200, { message: "Reports of a patient", report: report });
    /* return res.render("report", {
    title: "List of Reports",
    report: report,
  });*/
  } catch (err) {
    return res.json(422, { message: err });
    //return res.redirect("back");
  }
};
