// const products = require("../data.js");
const buildResponse = require("../utils/buildResponse");

const getMyHistories = (req, res) => {
  res.json(buildResponse({}));
};

module.exports = {
  getMyHistories,
};
