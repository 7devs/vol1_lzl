var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end('LZL');
})

server.listen(8080);
