const http = require('http');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': ' text/html' });
    res.end(
      '<h1>Shimay Shimay yay, Schimay yay, Schimay yawa, drunk, falalalaaa</h1>'
    );
  })
  .listen(8080);
