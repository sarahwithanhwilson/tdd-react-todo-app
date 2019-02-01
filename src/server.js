const express = require('express');
const app = express();
const port = 4000;
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../dist'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));