var express = require("express");

var app = express();
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes);

var PORT = 8080;
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
