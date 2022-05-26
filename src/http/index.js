const http = require('http');

const port = 6000;

const server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
});

server.listen(port, function() {
  console.log(`Server listening for connection requests on socket localhost: ${port}`);
});
