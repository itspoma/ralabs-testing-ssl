var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
  console.log('request ', request.url);

  fs.readFile('./src/index.html', function(error, content) {
    console.log('content');
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(content, 'utf-8');
  });
}).listen(8125);

console.log('Server running at http://127.0.0.1:8125/');