"use strict";

const historyRepository = require("../repositories/historyRepository");
const aaxFetcher = require("../fetchers/aaxFetcher");
const R = require("ramda");
const { toNativeAmount } = require("../utils/historyHelper");

// todo: move to service
const getHistories = async (limit) => {
  const histories = await historyRepository.find(limit);
  console.log(histories);
  return histories;
};

const getEarnAmounts = (histories) => {
  return histories.map((history) => toNativeAmount(history));
};

const countLoss = (earnAmounts) => {
  return earnAmounts.filter((num) => num < 0).length;
};

const countWin = (earnAmounts) => {
  return earnAmounts.filter((num) => num > -1).length;
};

const calcTotalEarn = (earnAmounts) => {
  return R.sum(earnAmounts);
};

const createHistory = async (histories) => {
  const created = histories.map(async (history) => {
    return await historyRepository.createHistory(history);
  });
  return created;
};

const fetchMyHistories = async (page) => {
  const aaxResponse = await aaxFetcher.getMyHistories(1);
  const totalPage = aaxResponse.result.counts / aaxResponse.result.pagenum;

  if (page === 1) {
    console.log("first page ");
    await createHistory(aaxResponse.result.list);
  } else {
    console.log("second page ");
    await recurrsiveFetch(page || totalPage);
  }
  const histories = await historyRepository.find();
  return histories;
};

const recurrsiveFetch = async (totalPage) => {
  // let result = [];
  for (let i of R.range(1, totalPage + 1)) {
    await aaxFetcher.getMyHistories(i).then(async (history) => {
      await createHistory(history.result.list);
      // await new Promise((res) => setTimeout(res, 500));
    });
  }
};

module.exports = {
  getHistories,
  getEarnAmounts,
  countLoss,
  countWin,
  calcTotalEarn,
  createHistory,
  fetchMyHistories,
};
