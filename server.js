'use strict';

var express = require('express');
var app = express();

app.get('/', function(request,response){
  response.send(['Welcome Message'=>'Hello, My name is Tim Owens']);
}
app.listen(8080,function(callback){
  console.log('Tim\'s API is now live at http://localhost:3000/');
});