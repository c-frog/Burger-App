// DEPENDENCIES
const express = require("express");
const app = express();
const PORT = procces.env.PORT || 8080;

// SERVING STATIC CONTENT FOR APP
app.use(express.static("public"));

// DATA PARSING SET UP
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SET UP HANDLEBARS
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// REQUIRE ROUTES FROM CONTROLLER
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

// LISTENER
app.listen(PORT, function() {
   console.log("Server listening on: http://localhost:" + PORT);
})