var http = require('http');
var app = require('./module1');

http.createServer(app.handleRequest).listen(8000);