const { Lokka } = require('lokka');
const { Transport } = require('lokka-transport-http');

function lokkaClient(endpoint) {
  const client = new Lokka({
    transport: new Transport(endpoint)
  });

  return client;
}

module.exports = lokkaClient;
