"use strict";

const History = require("../models/History");

const createHistory = async (history) => {
  const createdHistory = await History.findOneAndUpdate(
    { roundid: history.roundid },
    history,
    { new: true, upsert: true }
  );
  return createdHistory;
};

const find = async (limit) => {
  const histories = await History.find()
    .sort({ resultTime: -1 })
    .limit(limit)
    .lean()
    .exec();
  return histories;
};

module.exports = {
  createHistory,
  find,
};
