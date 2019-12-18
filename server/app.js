const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const multer = require('multer');

const app = express();
const upload = multer();

const api = require('./routes/register')(upload);
const auth = require('./routes/auth');

app.use(session({
    secret: 'newtechnologyproject',
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', api);
app.use('/auth', auth);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Listening on port ' + port + '...');
});

module.exports = app;
