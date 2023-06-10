const express = require("express");

////Import controller
const cloController = require("../controllers/cloController");

const router = express.Router();

router.post("/calculateClo", cloController.calculateClo);

module.exports = router;
