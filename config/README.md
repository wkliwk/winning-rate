# Config file design

## Config Priority

From highest priority to lowest
1. config.<env>.js
  - config for different environment
2. .env
  - dotenv is ignored by git, so you can have you custom local setting
3. index.js
  - default config

## Notes

Don't enable logs in config.test.js, to avoid mess up test reports
