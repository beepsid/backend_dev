const http = require('http');

const routes = require('../test_app/routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);