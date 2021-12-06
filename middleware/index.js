// index.js

const express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')

const app = express()


app.use(session({secret: 'secret  session'}))

app.use(function (req, res, next) {
  if (!req.session.views) {
    req.session.views = {}
  }

  // get the url pathname
  var pathname = parseurl(req).pathname

  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

  next()
})

app.get('/', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/'] + ' times')
})


app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})