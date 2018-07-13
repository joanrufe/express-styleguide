import express from 'express'
import path from 'path'

const app = express()

app.use(express.static('dist/styleguide'))

var indexHtml = path.join(__dirname + '/dist/styleguide/index.html')

app.get('/', function (req, res) {
    res.sendFile(indexHtml)
})

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + indexHtml))
})

app.listen(8080)
