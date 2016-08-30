var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));


app.get('/', function (req, res) {
    res.redirect('/src/main/index.html');
});

app.get('/landing',function (req, res){
    res.send('In landing page');
});

app.listen(8080, function () {
  console.log('server loaded on port 8080');
});

