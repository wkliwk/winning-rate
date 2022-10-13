"use strict";

const mongoose = require("mongoose");

module.exports = {
  getClient: () => mongoose,
  connect: async ({ debug, uri, name }) => {
    mongoose.set("debug", debug);
    return mongoose.connect(uri, {
      keepAlive: true,
      dbName: name,
      // Disable auto index creation due to significant performance impact
      // See https://mongoosejs.com/docs/guide.html#indexes
      autoIndex: false,
      // The options below is used to remove deprecated warnings from MongoDB 3.6.9
      useNewUrlParser: true,
    });
  },
  disconnect: () => mongoose.disconnect(),
};
