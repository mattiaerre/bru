const debug = require('debug')('zoolander:index');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema
  })
);

const { PORT } = process.env;
app.listen(PORT, () => debug(`http://localhost:${PORT}/graphql`));
