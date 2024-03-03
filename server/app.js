const express = require('express');
const cors = require('cors');
const router = require('./routes');
const { errorHendler, dbErrorHendler } = require('./middleware/errorHandlers');

const app = express();

const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api', router);
app.use(dbErrorHendler);
app.use(errorHendler);
module.exports = app;
