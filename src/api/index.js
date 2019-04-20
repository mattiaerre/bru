const debug = require('debug')('api:index');
const express = require('express');
const { Lokka } = require('lokka');
const { Transport } = require('lokka-transport-http');

const { PORT, PORT_ZOOLANDER } = process.env;

const client = new Lokka({
  transport: new Transport(`http://localhost:${PORT_ZOOLANDER}/graphql`)
});

const app = express();

const makeQuery = q =>
  `
  {
    message
    model(q: "${q}")
    title
  }
  `;

app.get('/api', (req, res) => {
  const { q } = req.query;
  client.query(makeQuery(q)).then(result => {
    res.send(result);
  });
});

app.listen(PORT, () => debug(`http://localhost:${PORT}/api`));
