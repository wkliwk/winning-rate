"use strict";

require("dotenv").config();

const R = require("ramda");
const { join } = require("path");
const convict = require("convict");

const config = convict({
  env: {
    doc: "The application environment.",
    format: ["local", "development", "test", "staging", "production", "uat"],
    default: "local",
    env: "NODE_ENV",
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 3000,
    env: "PORT",
  },
  mongodb: {
    debug: {
      default: false,
      format: Boolean,
      env: "MONGODB_DEBUG",
    },
    uri: {
      default: "mongodb://127.0.0.1",
      format: String,
      env: "MONGODB_URI",
    },
    name: {
      default: "aax",
      format: String,
      env: "MONGODB_NAME",
    },
  },
  aax_api: {
    auth_token: {
      doc: "API bearer token",
      format: String,
      default: "",
      env: "AAX_AUTH_TOKEN",
    },
  },
});

const env = config.get("env");
// eslint-disable-next-line import/no-dynamic-require
const envConfig = require(join(__dirname, `config.${env}`));

/**
 * node-convict merge configuration values from different sources by the follow precedence order
 * (highest to lowest):
 * 1. config.set()
 * 2. Command line argumentsFile (config.loadFile())
 * 3. Environment variables
 * 4. config.load()
 * 5. config.loadFile()
 * 6. Default value
 * @see https://hk01.slack.com/archives/CGBG2TS20/p1558066877037700
 *
 * Priority of config source (highest to lowest)
 * if NODE_ENV === 'test'   **to make sure local/ci will use the consitent config for test**
 * 1. config.<env>.js
 * 2. env
 * 3. config/index/js
 * else
 * 1. .env
 * 2. config.<env>.js
 * 3. config/index/js
 */

config.load(envConfig);

config.validate({ allowed: "strict" });

module.exports = config;
