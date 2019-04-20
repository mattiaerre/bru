const debug = require('debug')('api:index');
const express = require('express');

const app = express();

app.get('/api', (req, res) => res.send({ message: 'API' }));

const { PORT } = process.env;
app.listen(PORT, () => debug(`http://localhost:${PORT}/api`));
