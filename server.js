var express = require('express')
var bodyParser = require('body-parser')
var server = express()

const recipeRouter = require('./data/recipebook/recipebook-router');

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

server.use('/api/recipes', recipeRouter);

module.exports = server;
