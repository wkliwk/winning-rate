const mongoose = require("mongoose");

const { Schema } = mongoose;

const historySchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    walletAddress: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    gameid: {
      type: String,
      required: true,
    },
    roundid: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    bet: {
      type: Number,
      required: true,
    },
    betMultiple: {
      type: String,
      required: true,
    },
    jumpMultiple: {
      type: String,
      required: true,
    },
    reward: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    betTime: {
      type: Number,
      required: true,
    },
    rewardTime: {
      type: Number,
      required: true,
    },
    resultTime: {
      type: Number,
      required: true,
    },
    meta: {
      // e.g. title, description, image, video, url, siteName, originalImage.....
      type: Schema.Types.Mixed,
      required: false,
    },
  },
  { timestamps: true }
);

historySchema.index({ uid: 1 }, { unique: true });
historySchema.index({ bet: 1 });
historySchema.index({ reward: 1 });

// NOTE: destructing `model` make mongoose stuck in query
module.exports = mongoose.model("History", historySchema, "histories");

// {
//   "uid": "3990348",
//   "walletAddress": "R9ENN8R4E21DQ7TAU6O3MH0N",
//   "nickname": "wkliwk",
//   "gameid": "96",
//   "roundid": "202210131858350001",
//   "number": "202210131858350001",
//   "bet": 300000000000000,
//   "betMultiple": "1.1",
//   "jumpMultiple": "1.1",
//   "reward": 328500000000000,
//   "tax": 1500000000000,
//   "betTime": 1665687519,
//   "rewardTime": 1665687524,
//   "resultTime": 1665687537
// }
