const debug = require('debug')('booking:index');
const express = require('express');
const nav = require('../_partials/nav');

const app = express();
const { PORT } = process.env;

app.get('/booking', (req, res) => res.send(`${nav()}<h1>BOOKING PAGE</h1>`));

app.listen(PORT, () => debug(`http://localhost:${PORT}/booking`));
