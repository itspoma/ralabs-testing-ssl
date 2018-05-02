var https = require('https');
var fs = require('fs');
var path = require('path');

var options = {
  key: fs.readFileSync('/etc/letsencrypt/live/ssl-testing.ralabs.org/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/ssl-testing.ralabs.org/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/ssl-testing.ralabs.org/chain.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);

console.log('Server running at https://127.0.0.1:8000/');