// const products = require("../data.js");
const buildResponse = require("../utils/buildResponse");
const historyService = require("../services/historyService");
const { historySerializer } = require("../serializers/historySerializer");

const getMyHistories = async (req, res) => {
  const histories = await historyService.getHistories(
    parseInt(req.query.limit) || 0
  );
  const { headers, statusCode, body } = myHistoriesResponse(histories);
  res.set(headers).status(statusCode).json(body);
};

const fetchMyHistories = async (req, res) => {
  const histories = await historyService.fetchMyHistories(
    parseInt(req.query.page)
  );
  const { headers, statusCode, body } = myHistoriesResponse(histories);
  res.set(headers).status(statusCode).json(body);
};

const myHistoriesResponse = (histories) => {
  const total = histories.length;
  const earnAmounts = historyService.getEarnAmounts(histories);
  const win = historyService.countWin(earnAmounts);
  const loss = historyService.countLoss(earnAmounts);

  return buildResponse({
    total: total,
    winRatio: (win / total) * 100,
    win: win,
    loss: loss,
    earn: historyService.calcTotalEarn(earnAmounts),
    spaces: histories.map((history) => historySerializer(history)),
  });
};

module.exports = {
  getMyHistories,
  fetchMyHistories,
};
