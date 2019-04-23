const debug = require('debug')('api:index');
const express = require('express');
const lokkaClient = require('../shared/lokkaClient');
const makeQuery = require('../shared/makeQuery');

const { PORT, PORT_ZOOLANDER } = process.env;

const client = lokkaClient(`http://localhost:${PORT_ZOOLANDER}/graphql`);

const app = express();

app.get('/api', (req, res) => {
  const { q } = req.query;
  client.query(makeQuery(q)).then(result => {
    res.send(result);
  });
});

app.listen(PORT, () => debug(`http://localhost:${PORT}/api`));
