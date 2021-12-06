//index.js

const express =  require('express')
const app = express()
const calc = require('./calc.js');

app.use(function(req, res, next) {
  console.log('Time:', Date.now())
  next()
})

app.get('/', function(req, res){
	res.send('Hello World')
})

app.get('/sum/:param1/:param2', function(req, res){
	let result = calc.sum(parseInt(req.params.param1), parseInt(req.params.param2))
	res.send(`The result is ${result}`)
})

app.get('/minus/:param1/:param2', function(req, res){
	let result = calc.minus(parseInt(req.params.param1), parseInt(req.params.param2))
	res.send(`The result is ${result}`)
})

app.get('/multp/:param1/:param2', function(req, res){
	let result = calc.multp(parseInt(req.params.param1), parseInt(req.params.param2))
	res.send(`The result is ${result}`)
})

app.get('/div/:param1/:param2', function(req, res){
	let result = calc.div(parseInt(req.params.param1), parseInt(req.params.param2))
	res.send(`The result is ${result}`)
})

app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
})