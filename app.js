const settings = require('./settings');
const express = require('express');
const app = express();

let userData = null;

app.use(express.urlencoded({extended: false}));

app.use('/data', (req, resp, next) => {
    if(userData.firstname == '' || userData.lastname == ''){
        resp.send('Нет данных');
    }
    next();
});

app.get('/home', (req, resp) => {
    resp.sendFile(__dirname + '/home.html');
});

app.post('/home', (req, resp) => {
    resp.redirect('/add');
});

app.get('/data', (req, resp) => {
    resp.send(`<div>
                    <p>${userData.firstname}</p>
                    <p>${userData.lastname}</p>
                    <p>${userData.age}</p>
                    <p>${userData.email}</p>
                    <p>${userData.sity}</p>
                    <p>${userData.country}</p>
                </div>`);
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