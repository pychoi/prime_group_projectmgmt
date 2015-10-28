//var http = require('http');
var express = require('express');
var app = express();
var path = require('path');

var employeeInfo = require('./server/createemployee');

app.set('port', (process.env.PORT || 5000));

app.get('/people', function(request, response){
    response.send(employeeInfo());
});

app.get('/*', function(request, response){
    var file = request.params[0] || "index.html";
    response.sendFile(path.join(__dirname, "./public/", file))
});

app.listen(5000);

//http.createServer(function(request, response){
//    response.writeHead(200);
//    response.write(employeeInfo());
//    response.end();
//}).listen(8000);
//
//module.exports = http;