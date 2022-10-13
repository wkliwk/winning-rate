const express = require("express");
const router = express.Router();

const {
  getMyHistories,
  createMyHistories,
} = require("../controllers/spaceController.js");

router.get("/histories", getMyHistories);
router.post("/histories", createMyHistories);

module.exports = router;
