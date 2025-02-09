const successData = (request, response) => {
  const success = {
    message: 'This is a successful response',
  };

  let responseMessage; let
    contentType;

  if (request.acceptedTypes[0] === 'text/xml') {
    responseMessage = `<response><message>${success.message}</message></response>`;
    contentType = 'text/xml';
  } else {
    responseMessage = JSON.stringify(success);
    contentType = 'application/json';
  }

  response.writeHead(200, { 'Content-Type': `${contentType}` });
  response.write(responseMessage);
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
