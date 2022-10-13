const express = require("express");
const router = express.Router();

const { getMyHistories } = require("../controllers/spaceController.js");

router.get("/", getMyHistories);

module.exports = router;
