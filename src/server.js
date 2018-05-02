var https = require('https');
var fs = require('fs');
var path = require('path');

var options = {
  key: fs.readFileSync('/home/ubuntu/www/ralabs-testing-ssl/certs/privkey.pem'),
  cert: fs.readFileSync('/home/ubuntu/www/ralabs-testing-ssl/certs/cert.pem'),
  ca: fs.readFileSync('/home/ubuntu/www/ralabs-testing-ssl/certs/chain.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);

console.log('Server running at https://127.0.0.1:8000/');