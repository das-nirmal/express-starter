const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('morgan')('short'));

app.get('/jwt/:id', (req, res) => {
    //todo

    //URL: https://api.npoint.io/c60250ef07844b83e913

    res.json({name: 'temp'});
});

app.get('/', (req, res) => res.json('Hello from API!'));

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.end('error');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Express server running at port ${port}`));
