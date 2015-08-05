// var angular = require('angular');
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
var jade = require('jade');
var path = require('path');
var request = require('request');

var app = express();

app.use(bodyParser());
app.use(express.static(process.cwd() + '/public'));
app.use(express.static(process.cwd() + '/bower_components'));


app.get('/', function (req, res) {
	var html = jade.renderFile('views/index.jade');
    res.send(html);
});

app.get('/landingTest', function (req, res) {
	res.send(jade.renderFile('views/landing.jade'));
});


var port = '12345';
app.listen(port);
console.log('Magic happens on port '+port);
exports = module.exports = app;