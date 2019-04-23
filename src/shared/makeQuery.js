const makeQuery = q =>
  `
  {
    model(q: "${q}") {
      copy {
        key
        value
      }
      title
    }
  }
  `;

module.exports = makeQuery;
