var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('dashboard-admin/dist'));
app.use(cors());


app.listen(3000, function () {
  console.log('rodando na porta 3000 :D!');
});
