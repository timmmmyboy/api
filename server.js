'use strict';

var express = require('express');
var app = express();

app.get('/', function(req,res){
  res.send({"Welcome Message": "Hello, My name is Tim Owens"});
});

var server = app.listen(8080,function(){
  var host = server.address().address
  var port = server.address().port

  console.log('Tim\'s API listening at http://%s:%s', host, port);
});