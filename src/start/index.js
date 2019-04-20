const debug = require('debug')('start:index');
const express = require('express');
const nav = require('../_partials/nav');

const app = express();

app.set('view engine', 'pug');

app.get('/start', (req, res) => {
  res.render('index', { nav: nav(), title: 'START PAGE' });
});

const { PORT } = process.env;
app.listen(PORT, () => debug(`http://localhost:${PORT}/start`));
