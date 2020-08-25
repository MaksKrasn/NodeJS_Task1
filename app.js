const settings = require('./settings');
const express = require('express');
const app = express();

let userData = null;

app.use(express.urlencoded({extended: false}));

app.use('/data', (req, resp, next) => {
    if(userData.firstname == '' || userData.lastname == ''){
        resp.send(`<h3>Нет данных пользователя</h3>`);
    }
    next();
});

app.get('/', (req, resp) => {
    resp.redirect('/home');
});

app.get('/home', (req, resp) => {
    resp.sendFile(__dirname + '/home.html');
});

app.post('/home', (req, resp) => {
    resp.redirect('/add');
});

app.get('/data', (req, resp) => {
    resp.sendFile(__dirname + '/data.html');
});

app.post('/data', (req,resp) => {
    var serializedUser = JSON.stringify(userData);
    resp.send(serializedUser);
});

app.get('/add', (req, resp) => {
    resp.sendFile(__dirname + '/add.html');
});

app.post('/add', (req, resp) => {
    userData = req.body;
    resp.redirect('/data');
});

app.listen(settings.port, settings.host, () => {
    console.log('Success start!!!');
}); 