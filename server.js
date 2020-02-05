const express = require("express");
const exphBar = require("express-handlebars");
const PORT = process.env.PORT ||8000;

const app = express();

app.listen(PORT, () => {
    console.log("Listning on " + PORT);
})