var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello world Hahaha" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 8080);
module.exports = app;
