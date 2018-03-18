var express = require('express');

var port = process.env.PORT || 3000;

var app = express();

app.use(require('./src/api/UserApi.js'));

app.listen(port, function () {
    console.log('Server started @ localhost:' + port);
});