const express = require('express')
const app = express()
app.use(express.json())

const nunjucks = require('nunjucks')

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

const jwt = require('jsonwebtoken');

const db = [{email: 'a@gmail.com', password: 'password', name: "A"},{email: 'b@gmail.com', password: 'password', name: "B"}]

//Grosse config de passport
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'exo.iut.fr';
opts.audience = 'localhost';

app.use(passport.initialize());


passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
	console.log(jwt_payload);
	let user = db.find(e => e.email === jwt_payload.email)
	if(user !== null){
		done(null,{email:user.email, name:user.name})
	} else {
		done(null,false, "Wrong credentials")
	}
}));




app.post('/login', function(req, res){
	//get email and pass from form
	//body json
	console.log(req.body)
	let email = req.body.email
	let password = req.body.password
	//find si le couple existe
	let user;
	if(user = db.find(e => e.email === email && e.password === password)){
		const token = jwt.sign({ email: user.email }, opts.secretOrKey , {issuer: opts.issuer, audience: opts.audience,subject: 'Login jwt'});
		res.json({"jwt": token})
	} else {
		res.send('Not Found')
	}

})


app.get('/public', async function(req,res){
	const html = await nunjucks.render('index.html')
	res.send(html)
})

app.get('/private', passport.authenticate('jwt', { session: false }), async function(req,res){
	console.log("/private: ", req.user)
	const html = await nunjucks.render('profile.html', {user:req.user})
  	res.send(html)
})

//Ouvre serveur
app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})