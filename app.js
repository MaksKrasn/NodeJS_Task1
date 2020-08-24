const settings = require('./settings');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));

app.get('/home', (req, resp) => {
    var now = new Date();
    resp.sendFile(__dirname + '/index.html');
    console.log('Hello, Maks!!!');

});

app.get('/data', (req, resp) => {

});

app.get('/add', (req, resp) => {
    resp.sendFile(__dirname + '/add.html');
});

app.post('/add', (req, resp) => {
    console.log(req.body);
    resp.send('Success!!');
});

app.listen(settings.port, settings.host, () => {
    console.log('Success start!!!');
}); 