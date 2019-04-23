const debug = require('debug')('start:index');
const express = require('express');
const path = require('path');
const lokkaClient = require('../../shared/lokkaClient');
const makeQuery = require('../../shared/makeQuery');

const { PORT, PORT_ZOOLANDER } = process.env;

const client = lokkaClient(`http://localhost:${PORT_ZOOLANDER}/graphql`);

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

function makeCopy(copy) {
  // INFO: copy = [{key,value}];
  return copy.reduce((accumulator, current) => {
    accumulator[current.key] = current.value;
    return accumulator;
  }, {});
}

app.get('/start', (req, res) => {
  client.query(makeQuery('start')).then(result => {
    const { model } = result;

    res.render('index', {
      ...Object.assign({}, model, { copy: makeCopy(model.copy) })
    });
  });
});

app.locals.pretty = true;

app.listen(PORT, () => debug(`http://localhost:${PORT}/start`));
