const debug = require('debug')('gate:index');
require('dotenv').config();
const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const proxyServer = httpProxy.createProxyServer();

const {
  PORT_API,
  PORT_BOOKING,
  PORT_GATE,
  PORT_PROFILE,
  PORT_SEARCH,
  PORT_START
} = process.env;

const µsites = {
  api: PORT_API,
  booking: PORT_BOOKING,
  profile: PORT_PROFILE,
  search: PORT_SEARCH,
  start: PORT_START
};

app.use(express.static('public'));

Object.keys(µsites).forEach(key => {
  app.get(`/${key}`, (req, res) => {
    debug(`redirecting to ${key} µsite`);
    proxyServer.web(req, res, { target: `http://localhost:${µsites[key]}` });
  });
});

app.get('/', (req, res) => res.send('<a href="/start">GO TO START PAGE</a>'));

app.listen(PORT_GATE, () => debug(`http://localhost:${PORT_GATE}`));
