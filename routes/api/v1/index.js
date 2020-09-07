const express = require("express");

const router = express.Router();

router.use("/docters", require("./docters"));
router.use("/patients", require("./patients"));
router.use("/reports", require("./reports"));

module.exports = router;
