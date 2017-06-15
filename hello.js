var express = require('express');
var http = require('http');
var Gun = require('gun');
var path = require('path');

var port    = process.env.OPENSHIFT_NODEJS_PORT || process.env.VCAP_APP_PORT || process.env.PORT || process.argv[2] || 8080;

var app = express();
app.use(Gun.serve);

var server = app.listen(port);
var gun = Gun({ web: server });

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
