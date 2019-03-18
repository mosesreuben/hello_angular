//Imports
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
//Config
app.use(bodyParser.json());

app.use(express.static( __dirname + '/public/dist/public' ));
// app.use(express.static(__dirname + ))
//Routes
require("./backend/routes.js")(app);

//Port
app.listen(8000, function(){
    console.log("Listening on port: 8000");
})