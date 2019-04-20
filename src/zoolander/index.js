const debug = require('debug')('zoolander:index');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    message: String
  }
`);

const root = {
  message: () => 'ZOOLANDER'
};

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

const { PORT } = process.env;
app.listen(PORT, () => debug(`http://localhost:${PORT}/graphql`));
