var express = require('express');
var routes = require('./routes');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public')); //Serving front from public
app.use(cors());

// routes
app.post('/create-category', routes.instalkergram.createCategory);
app.post('/update-category', routes.instalkergram.updateCategory);

app.listen(3000, function () {
  console.log('rodando na porta 3000 :D!');
});
