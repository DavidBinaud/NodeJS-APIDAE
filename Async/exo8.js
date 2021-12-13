const express = require('express')
const app = express()
const axios = require('axios')
const nunjucks = require('nunjucks')

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/myspecialusers', async function(req, res){
	const p1 = axios.get('https://jsonplaceholder.typicode.com/users/1');
	const p2 = axios.get('https://jsonplaceholder.typicode.com/users/4');
	const p3 = axios.get('https://jsonplaceholder.typicode.com/users/6');

	const results = await Promise.all([p1, p2 ,p3])

	let user1 = results[0].data
	let user4 = results[1].data
	let user6 = results[2].data

	const html = await nunjucks.render('template.html', {
	    user1,
	    user4,
	    user6
	})
  
  	res.send(html)
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})