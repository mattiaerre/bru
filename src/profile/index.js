const debug = require('debug')('profile:index');
const express = require('express');
const nav = require('../_partials/nav');

const app = express();
const { PORT } = process.env;

app.get('/profile', (req, res) => res.send(`${nav()}<h1>PROFILE PAGE</h1>`));

app.listen(PORT, () => debug(`http://localhost:${PORT}/profile`));
