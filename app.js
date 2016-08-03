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
app.get('/get-categories', routes.crud.getCategories);
app.post('/create-category', routes.crud.createCategory);
app.post('/update-category', routes.crud.updateCategory);
app.get('/get-images/:category', routes.crud.getImages);
// how to get the item to delete?
app.post('/delete-image', routes.crud.deleteImage);

app.get('/getUrlsFromInstagram/:q/:token', routes.instagram.getUrls);

app.listen(3000, function () {
  console.log('rodando na porta 3000 :D!');
});
