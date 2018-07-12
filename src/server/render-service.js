var express = require('express');
var app = express();
var templates = require('../common/templates').default;

app.use(express.static('dist/render-service/'));

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send({ ready: true });
});


// GET -> render with default parameters
app.get('/render/:page/:component', function (req, res) {
  var {page, component} = req.params;
  var tpl = templates.getByPath(`${page}/${component}`);
  if (!tpl || tpl.length == 0) {
    res.status(404).send('Not found');
    return;
  }
  
  var html = tpl.render(tpl.defaults)
  res.setHeader('Content-Type', 'application/json');
  res.send({
      data: html,
      status: 'ok'
  });
});

//@TODO render with POST parameters 

app.listen(5000);
