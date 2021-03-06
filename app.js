const express = require("express");
const path = require("path");

let app = express();
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) =>
{
    res.render("index");
});

module.exports = app;