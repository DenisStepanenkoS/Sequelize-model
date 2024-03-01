const express = require('express');
const router = require('./routes');
const { errorHendler, dbErrorHendler} = require('./middleware/errorHandlers');

const app = express();

app.use(express.json());

app.use('/api', router);
app.use(dbErrorHendler);
app.use(errorHendler);
module.exports = app;




