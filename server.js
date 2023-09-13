// Budget API
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
var budget = require('./data.json');

app.use(cors());

app.use('/',express.static('public'));

app.get('/budget', (req, res, next) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});