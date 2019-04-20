const debug = require('debug')('api:index');
const express = require('express');

const app = express();
const { PORT } = process.env;

app.get('/api', (req, res) => res.send({ message: 'API' }));

app.listen(PORT, () => debug(`http://localhost:${PORT}/api`));
