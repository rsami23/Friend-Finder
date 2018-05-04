// REQUIRED DEPENDENCIES

var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");

// SET UP EXPRESS   
var app = express();
var PORT = process.env.PORT || 8080;

// MAKE CSS ACCSSIBLE
app.use(express.static(path.join(__dirname, "./app/public")));

// SET UP EXPRESS TO HANDLE DATA PARSING
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// APPLICATION ROUTES
// require(path.join(__dirname, "./app/routing/apiRoutes"));
// require(path.join(__dirname, "./app/routing/htmlRoutes"));
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
 // STARTS SERVER TO BEGIN LISTENING 
 app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

