/** @format */

const env = process.env.APP_ENV || 'local';
const appPort = process.env.PORT||2021;
const host = process.env.APP_HOST;
const secret = process.env.APP_SECRETKEY;
const currencyConverter = process.env.CURRENCY_CONVERTER_URL;
const maximumImageSize = process.env.MAX_IMAGE_SIZE;
const allowedCurrencies = ['BDT', 'USD'];

const variables = {
  appPort,
  env,
  host,
  secret,
  allowedCurrencies,
  maximumImageSize
  currencyConverter
};

module.exports = variables;
