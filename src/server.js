const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');
const xmlHandler = require('./xmlResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const typeSelector = 'djfwi';

const onRequest = (request, response) => {
  console.log(request.url);

  if (request.url === '/') {
    htmlHandler.getIndex(request, response);
  } else if (request.url === '/style.css') {
    htmlHandler.getCSS(request, response);
  } else if (typeSelector.value === 'text/xml') {
    if (request.url === '/success') {
      xmlHandler.successData(request, response);
    } else if (request.url === '/badRequest') {
      xmlHandler.badData(request, response);
    } else if (request.url === '/badRequest?valid=true') {
      xmlHandler.badValidData(request, response);
    } else if (request.url === '/unauthorized') {
      xmlHandler.unauthorizedData(request, response);
    } else if (request.url === '/unauthorized?loggedIn=yes') {
      xmlHandler.unauthorizedLoggedInData(request, response);
    } else if (request.url === '/forbidden') {
      xmlHandler.forbiddenData(request, response);
    } else if (request.url === '/internal') {
      xmlHandler.internalData(request, response);
    } else if (request.url === '/notImplemented') {
      xmlHandler.notImplemetedData(request, response);
    } else {
      xmlHandler.notFoundData(request, response);
    }
  } else if (request.url === '/success') {
    jsonHandler.successData(request, response);
  } else if (request.url === '/badRequest') {
    jsonHandler.badData(request, response);
  } else if (request.url === '/badRequest?valid=true') {
    jsonHandler.badValidData(request, response);
  } else if (request.url === '/unauthorized') {
    jsonHandler.unauthorizedData(request, response);
  } else if (request.url === '/unauthorized?loggedIn=yes') {
    jsonHandler.unauthorizedLoggedInData(request, response);
  } else if (request.url === '/forbidden') {
    jsonHandler.forbiddenData(request, response);
  } else if (request.url === '/internal') {
    jsonHandler.internalData(request, response);
  } else if (request.url === '/notImplemented') {
    jsonHandler.notImplemetedData(request, response);
  } else {
    jsonHandler.notFoundData(request, response);
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
