const successData = (request, response) => {
  const responseData = {
    message: 'This is a successful response',
  };

  let responseMessage;
  let contentType;

  if (request.acceptedTypes[0] === 'text/xml') {
    responseMessage = `<response><message>${responseData.message}</message></response>`;
    contentType = 'text/xml';
  } else {
    responseMessage = JSON.stringify(responseData);
    contentType = 'application/json';
  }

  response.writeHead(200, { 'Content-Type': `${contentType}` });
  response.write(responseMessage);
  response.end();
};

const badData = (request, response) => {
  const responseData = {
    message: 'Missing valid query parameter set to true',
    id: 'badRequest',
  };

  let responseMessage;
  let contentType;

  if (request.acceptedTypes[0] === 'text/xml') {
    responseMessage = `<response><message>${responseData.message}</message><id>${responseData.id}</id></response>`;
    contentType = 'text/xml';
  } else {
    responseMessage = JSON.stringify(responseData);
    contentType = 'application/json';
  }

  response.writeHead(400, { 'Content-Type': `${contentType}` });
  response.write(responseMessage);
  response.end();
};

const badDataValid = (request, response) => {
  const responseData = {
    message: 'This request has the required parameters',
  };

  let responseMessage;
  let contentType;

  if (request.acceptedTypes[0] === 'text/xml') {
    responseMessage = `<response><message>${responseData.message}</message></response>`;
    contentType = 'text/xml';
  } else {
    responseMessage = JSON.stringify(responseData);
    contentType = 'application/json';
  }

  response.writeHead(200, { 'Content-Type': `${contentType}` });
  response.write(responseMessage);
  response.end();
};

const unauthorizedData = (request, response) => {
  const responseData = {
    message: 'Missing loggedIn query parameter set to yes',
    id: 'unauthorized',
  };

  let responseMessage;
  let contentType;

  if (request.acceptedTypes[0] === 'text/xml') {
    responseMessage = `<response><message>${responseData.message}</message>${responseData.id}</response>`;
    contentType = 'text/xml';
  } else {
    responseMessage = JSON.stringify(responseData);
    contentType = 'application/json';
  }

  response.writeHead(401, { 'Content-Type': `${contentType}` });
  response.write(responseMessage);
  response.end();
};

const unauthorizedDataLoggedIn = (request, response) => {
  const responseData = {
    message: 'You have successfully viewed the content',
  };

  let responseMessage;
  let contentType;

  if (request.acceptedTypes[0] === 'text/xml') {
    responseMessage = `<response><message>${responseData.message}</message></response>`;
    contentType = 'text/xml';
  } else {
    responseMessage = JSON.stringify(responseData);
    contentType = 'application/json';
  }

  response.writeHead(200, { 'Content-Type': `${contentType}` });
  response.write(responseMessage);
  response.end();
};

const forbiddenData = (request, response) => {
  const responseData = {
    message: 'You do not have access to this content',
    id: 'forbidden',
  };

  let responseMessage;
  let contentType;

  if (request.acceptedTypes[0] === 'text/xml') {
    responseMessage = `<response><message>${responseData.message}</message><id>${responseData.id}</id></response>`;
    contentType = 'text/xml';
  } else {
    responseMessage = JSON.stringify(responseData);
    contentType = 'application/json';
  }

  response.writeHead(403, { 'Content-Type': `${contentType}` });
  response.write(responseMessage);
  response.end();
};

const internalData = (request, response) => {
  const responseData = {
    message: 'Internal Server Error. Something went wrong.',
    id: 'internalError',
  };

  let responseMessage;
  let contentType;

  if (request.acceptedTypes[0] === 'text/xml') {
    responseMessage = `<response><message>${responseData.message}</message><id>${responseData.id}</id></response>`;
    contentType = 'text/xml';
  } else {
    responseMessage = JSON.stringify(responseData);
    contentType = 'application/json';
  }

  response.writeHead(500, { 'Content-Type': `${contentType}` });
  response.write(responseMessage);
  response.end();
};

const notImplemetedData = (request, response) => {
  const responseData = {
    message:
      'A get request for this page has not been implemented yet. Check again later for updated content.',
    id: 'notImplemented',
  };

  let responseMessage;
  let contentType;

  if (request.acceptedTypes[0] === 'text/xml') {
    responseMessage = `<response><message>${responseData.message}</message><id>${responseData.id}</id></response>`;
    contentType = 'text/xml';
  } else {
    responseMessage = JSON.stringify(responseData);
    contentType = 'application/json';
  }

  response.writeHead(501, { 'Content-Type': `${contentType}` });
  response.write(responseMessage);
  response.end();
};

const notFoundData = (request, response) => {
  const responseData = {
    message:
      'The page you are looking for was not found.',
    id: 'notFound',
  };

  let responseMessage;
  let contentType;

  if (request.acceptedTypes[0] === 'text/xml') {
    responseMessage = `<response><message>${responseData.message}</message><id>${responseData.id}</id></response>`;
    contentType = 'text/xml';
  } else {
    responseMessage = JSON.stringify(responseData);
    contentType = 'application/json';
  }

  response.writeHead(404, { 'Content-Type': `${contentType}` });
  response.write(responseMessage);
  response.end();
};

module.exports = {
  successData,
  badData,
  badDataValid,
  unauthorizedData,
  unauthorizedDataLoggedIn,
  forbiddenData,
  internalData,
  notImplemetedData,
  notFoundData,
};
