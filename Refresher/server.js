var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app
.use('/', express.static(__dirname + '/app'))
.use('/*', express.static(__dirname + '/app/index.html'))
.use(bodyParser.json());

app.listen(8000);