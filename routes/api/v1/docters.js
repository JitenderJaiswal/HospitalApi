const express = require("express");
const router = express.Router();

const doctersApi = require("../../../controllers/api/v1/docters_api");

router.get("/register", doctersApi.register);
router.get("/login", doctersApi.login);
router.post("/create", doctersApi.create);
router.post("/create_session", doctersApi.create_session);

module.exports = router;
