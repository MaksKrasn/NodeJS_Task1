const settings = require('./settings');
const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    console.log('Hello, Maks!!!')
});

app.listen(settings.port, settings.host);