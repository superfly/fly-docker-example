var http = require('http');
// We want to be able to specify the SERVER_NAME and the PORT.  This will come in handy, later!
var serverName = process.env.SERVER_NAME || 'default';
var port = process.env.PORT || 8000;

// The server will receive requests and return the name of the server that we've specified.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(`You have reached ${serverName}\n`);
});

server.listen(port);

// It's good to remind yourself when things start up!
console.log(`Server alive at localhost:${port}!`);
