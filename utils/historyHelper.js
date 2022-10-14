const toNativeAmount = (history) =>
  (history.reward - history.bet) / 1000000000000;

module.exports = {
  toNativeAmount,
};
