const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const constants = require('./constants');

const {
    initroutes
} = require('./routes');
const app = express();

app.use('/',express.static(__dirname + '/public/homepage/public/index.html'));
mongoose.connect(constants.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/dashboard', express.static(__dirname + 'public/dashboard/public/index.html'));



app.use(bodyParser.json());
initroutes(app);
app.listen(constants.PORT, () => {
    console.log(`server is listening on: ${constants.PORT}`)
})