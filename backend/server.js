const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', function (req, res){
    return res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('*', function (req, res) {
    return res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);