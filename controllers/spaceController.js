// const products = require("../data.js");
const buildResponse = require("../utils/buildResponse");
const historyService = require("../services/historyService");

const getMyHistories = async (req, res) => {
  const histories = await historyService.getHistories();

  const { headers, statusCode, body } = buildResponse({ spaces: histories });
  res.set(headers).status(statusCode).json(body);
};

const createMyHistories = async (req, res) => {
  const histories = [];

  const createdHistories = await historyService.createHistory(histories);
  const { headers, statusCode, body } = buildResponse({
    spaces: createdHistories,
  });
  res.set(headers).status(statusCode).json(body);
};

module.exports = {
  getMyHistories,
  createMyHistories,
};
