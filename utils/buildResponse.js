"use strict";

const { OK } = require("http-status-codes");

const CONTENT_TYPE = "application/json";

const buildResponse = (body, statusCode, headers) => ({
  statusCode: statusCode || OK,
  headers: {
    "content-type": CONTENT_TYPE,
    ...headers,
  },
  body: body || {},
});

module.exports = buildResponse;
