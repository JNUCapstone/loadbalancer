var os = require('os');
var express = require('express');
var app = express();

var server = app.listen(5000, function(){
  console.log("Express server has started on port 5000")
})
