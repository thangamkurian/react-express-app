var express = require('express');

var app = new express();

var port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', './app');

app.get('/', function (req, res) {
    res.render('index');
});

//Listen.....
app.listen(port, function (err) {
    console.log('Server started on port ' + port);
});
