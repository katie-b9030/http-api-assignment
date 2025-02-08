const text = require('./textResponses.js');

const successData = (request, response) => {
  const successJSON = {
    message: 'This is a successful response',
  };
  const stringMessage = JSON.stringify(successJSON);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

const badData = (request, response) => {

};

const badValidData = (request, response) => {

};

const unauthorizedData = (request, response) => {

};

const unauthorizedLoggedInData = (request, response) => {

};

const forbiddenData = (request, response) => {

};

const internalData = (request, response) => {

};

const notImplemetedData = (request, response) => {

};

const notFoundData = (request, response) => {

};

module.exports = {
  successData,
  badData,
  badValidData,
  unauthorizedData,
  unauthorizedLoggedInData,
  forbiddenData,
  internalData,
  notImplemetedData,
  notFoundData,
};
