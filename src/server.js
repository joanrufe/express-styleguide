// load the things we need
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

// CONSTANTS
const templateDir = path.join(__dirname, '/templates/');

// Build styleguide object
var styleguide = require('./modules/styleguide')(templateDir);

// set the view engine to ejs
app.set('view engine', 'ejs');
// set templates path
app.set('views', templateDir);

function htmlWrapper(body){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>${body}</body>
    </html>`
}


// index page 
app.get('/', function (req, res) {
    var html = htmlWrapper(styleguide.render())
    res.send(html)
});

// about page 
app.get('/:page', function (req, res) {
    var html = htmlWrapper(styleguide.renderPage(req.params.page));
    res.send(html)
});

app.listen(8080);
console.log('8080 is the magic port');
