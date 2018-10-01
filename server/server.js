const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT  || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));
app.use('/messages', require('./messages.router'));

app.listen(port, () => {
    console.log('App is listening at localhost: ', port);
})
