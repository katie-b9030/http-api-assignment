const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const dataHandler = require('./responses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  request.acceptedTypes = request.headers.accept.split(',');

  if (request.url === '/') {
    htmlHandler.getIndex(request, response);
  } else if (request.url === '/style.css') {
    htmlHandler.getCSS(request, response);
  } else if (request.url === '/success') {
    dataHandler.successData(request, response);
  } else if (request.url === '/badRequest') {
    dataHandler.badData(request, response);
  } else if (request.url === '/badRequest?valid=true') {
    dataHandler.badDataValid(request, response);
  } else if (request.url === '/unauthorized') {
    dataHandler.unauthorizedData(request, response);
  } else if (request.url === '/unauthorized?loggedIn=yes') {
    dataHandler.unauthorizedDataLoggedIn(request, response);
  } else if (request.url === '/forbidden') {
    dataHandler.forbiddenData(request, response);
  } else if (request.url === '/internal') {
    dataHandler.internalData(request, response);
  } else if (request.url === '/notImplemented') {
    dataHandler.notImplemetedData(request, response);
  } else {
    dataHandler.notFoundData(request, response);
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
