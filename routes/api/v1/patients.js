const express = require("express");
const router = express.Router();
const passport = require("passport");

const patientsApi = require("../../../controllers/api/v1/patients_api");

router.get(
  "/register",
  passport.authenticate("jwt", { session: false }),
  patientsApi.register
);
router.post("/create", patientsApi.create);
router.post(
  "/create_report/:id",
  passport.authenticate("jwt", { session: false }),
  patientsApi.create_report
);
router.get(
  "/all_reports/:id",
  passport.authenticate("jwt", { session: false }),
  patientsApi.all_reports
);

module.exports = router;
