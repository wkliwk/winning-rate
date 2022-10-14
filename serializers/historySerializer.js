const R = require("ramda");
const { toNativeAmount } = require("../utils/historyHelper");
// sample:
// {
//   "uid": "3990341",
//   "walletAddress": "R9ENN8R4E21DQ7TAU6O3MH0A",
//   "nickname": "wkliwk",
//   "gameid": "91",
//   "roundid": "202210131854430001",
//   "number": "202210131854430001",
//   "bet": 300000000000000,
//   "betMultiple": "1.1",
//   "jumpMultiple": "1.04",
//   "reward": 311400000000000,
//   "tax": 600000000000,
//   "betTime": 1665687285,
//   "rewardTime": 1665687290,
//   "resultTime": 1665687301
// }
const historySerializer = R.pipe(
  R.pick([
    "resultTime",
    "reward",
    "bet",
    "betMultiple",
    "jumpMultiple",
    "roundid",
  ]),
  (res) => {
    return {
      ...res,
      result: toNativeAmount(res),
      resultTime: new Date(res.resultTime * 1000),
    };
  }
);

module.exports = {
  historySerializer,
};
