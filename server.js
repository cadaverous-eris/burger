var express = require('express');
var exphbs = require("express-handlebars");
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var routes = require('./controllers/burgers_controller.js');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use("/", routes);

app.listen(port);