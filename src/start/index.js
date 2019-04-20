const debug = require('debug')('start:index');
const express = require('express');
const nav = require('../_partials/nav');

const app = express();
const { PORT } = process.env;

app.set('view engine', 'pug');

app.get('/start', (req, res) => {
  res.render('index', { nav: nav(), title: 'START PAGE' });
});

app.listen(PORT, () => debug(`http://localhost:${PORT}/start`));
