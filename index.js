var express = require('express'),
app = express(),
port = process.env.PORT || 8000;
const cors = require('cors')
const http = require('http').createServer(app);
// var sslRedirect = require('heroku-ssl-redirect');
// const redirectSSL = require('./ssl-redirect');

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

http.listen(port, () => {
    console.log(`listening on port ${port}`)
});