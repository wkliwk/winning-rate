const express = require("express");
const router = express.Router();

const {
  getMyHistories,
  fetchMyHistories,
} = require("../controllers/spaceController.js");

router.get("/histories", getMyHistories);
router.get("/histories/fetch", fetchMyHistories);

module.exports = router;
