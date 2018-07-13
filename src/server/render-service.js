import express from 'express'
const app = express()
import templates from '../common/templates'

app.use(express.static('dist/render-service/'))

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send({ ready: true })
})


// GET -> render with default parameters
app.get('/render/:page/:component', function (req, res) {
  const {page, component} = req.params
  const tpl = templates.getByPath(`${page}/${component}`)
  if (!tpl || tpl.length == 0) {
    res.status(404).send('Not found')
    return
  }
  
  const html = tpl.render(tpl.defaults)
  res.setHeader('Content-Type', 'application/json')
  res.send({
      data: html,
      status: 'ok'
  })
})

//@TODO render with POST parameters 

app.listen(5000);
