const express = require('express');

//create express app
const app = express();

//-------------------------------------------
app.get(['/', '/index.html'], function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/contact.html', function(req, res) {
    res.sendFile((__dirname + '/public/contact.html'));
});

app.get('/css/main.css', function(req, res) {
    res.sendFile((__dirname + '/public/css/main.css'));
});

app.get('/js/main.js', function(req, res) {
    res.sendFile((__dirname + '/public/js/main.js'));
});
//-------------------------------------------

app.listen(8080, '127.0.0.1', function () {
  console.log('Example app listening on port 8080')
})




