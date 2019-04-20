const debug = require('debug')('search:index');
const express = require('express');
const nav = require('../_partials/nav');

const app = express();
const { PORT } = process.env;

app.get('/search', (req, res) => res.send(`${nav()}<h1>SEARCH PAGE</h1>`));

app.listen(PORT, () => debug(`http://localhost:${PORT}/search`));
