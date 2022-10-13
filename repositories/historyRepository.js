"use strict";

const History = require("../models/History");

const createHistory = async (history) => {
  const createdHistory = (await History.create(history)).toObject();
  return createdHistory;
};

const find = async () => {
  const histories = await History.find().lean().exec();
  return histories;
};

module.exports = {
  createHistory,
  find,
};
