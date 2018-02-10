var express = require("express");
var consign = require("consign");
var bodyParser = require("body-parser");

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

/*midleware*/
app.use(bodyParser.urlencoded({extended:true}));

/* todas as rotas*/
consign()
  .include('app/routes').into(app)
  .then('config/dbConnection.js')
  .then('app/models')
  .into(app);




module.exports = app;