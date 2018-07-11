// load the things we need
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('dist/styleguide'));

var indexHtml = path.join(__dirname + '/dist/styleguide/index.html')
// about page 
app.get('/', function (req, res) {
    res.sendFile(indexHtml);
});

// about page 
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + indexHtml));
});

app.listen(8080);
