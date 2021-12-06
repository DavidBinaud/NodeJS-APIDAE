// form.js

const express = require('express')
const urlEncodedParser = express.urlencoded({ extended: false })

const app = express()

app.get('/', function(req, res) {
  res.send('Hello world !')
})

app.post('/form', urlEncodedParser, function(req, res) {
  console.log(req.body)
  res.send('form')
})

app.post('/concat', urlEncodedParser, function(req, res){
  res.send(req.body.string1  +  req.body.string2)
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
