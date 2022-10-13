"use strict";

const historyRepository = require("../repositories/historyRepository");

// todo: move to service
const getHistories = async () => {
  const histories = await historyRepository.find();
  console.log(histories);
  return histories;
};
const createHistory = async (histories) => {
  const created = histories.map(async (history) => {
    return await historyRepository.createHistory(history);
  });
  return created;
};

module.exports = {
  getHistories,
  createHistory,
};
