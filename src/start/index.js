const debug = require('debug')('start:index');
const express = require('express');
const nav = require('../_partials/nav');

const app = express();
const { PORT } = process.env;

app.get('/start', (req, res) => res.send(`${nav()}<h1>START PAGE</h1>`));

app.listen(PORT, () => debug(`http://localhost:${PORT}/start`));
