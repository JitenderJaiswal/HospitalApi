const { Status } = require("../../../models/reports");
const Report = require("../../../models/reports");
const Patient = require("../../../models/patients");

module.exports.reports = async function (req, res) {
  try {
    let status;

    switch (req.params.status) {
      case Status.Negative:
        status = req.params.status;
        break;
      case Status.TravelledQuarantine:
        status = req.params.status;
        break;
      case Status.SymptomsQuarantine:
        status = req.params.status;
        break;
      case Status.PositiveAdmit:
        status = req.params.status;
        break;
      default:
        "";
    }

    let reports = await Report.find({ status: status });

    return res.json(200, { message: "Reports of patients", reports: reports });
    /* return res.render("report", {
    title: "List of Reports",
    report: report,
  });*/
  } catch (err) {
    return res.json(422, { message: err });
    //return res.redirect("back");
  }
};
