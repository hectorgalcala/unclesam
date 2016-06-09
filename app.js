var express = require('express');
var path = require('path');

// var users = require('./routes/users');

var app = express();

// expose node_modules to client app
app.use(express.static(__dirname + "/node_modules"));
app.use(express.static(path.join(__dirname, 'dist')));
// app.use(express.static(path.join(__dirname, 'src/app')));
app.get('/', function(req, res) {
        res.sendfile('./dist/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
    app.listen(5000);
module.exports = app;
