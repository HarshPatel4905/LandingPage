const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/landing-page'));


//PATH LOCATION STARTEGY

app.get('/*', function (req, res) {
const fullPath = path.join(__dirname + '/dist/landing-page/');
res.sendFile(fullPath);
})


app.listen(process.env.PORT || 8080);