"use strict";

const axios = require("axios");
const config = require("../config");

const { auth_token } = config.get("aax_api");
const getMyHistories = async (page) => {
  const apiRequest = (page) => {
    return {
      method: "get",
      url: `https://gaming-svc.aax.com/history?page=${page}`,
      headers: {
        authority: "gaming-svc.aax.com",
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7",
        authorization: auth_token,
        origin: "https://gaming.aax.com",
        referer: "https://gaming.aax.com/",
        "sec-ch-ua":
          '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
      },
    };
  };

  const resp = await axios(apiRequest(page));
  return resp.data;
};

const getGameHistories = async (page) => {
  const apiRequest = (page) => {
    return {
      method: "get",
      url: `https://gaming-svc.aax.com/game/history?page=${page}`,
      headers: {
        authority: "gaming-svc.aax.com",
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7",
        authorization: auth_token,
        origin: "https://gaming.aax.com",
        referer: "https://gaming.aax.com/",
        "sec-ch-ua":
          '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
      },
    };
  };
  const resp = await axios(apiRequest(page));
  return resp.data;
};

module.exports = {
  getMyHistories,
  getGameHistories,
};
