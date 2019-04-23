const copy = {
  'Find your table for any occasion': 'Find your table for any occasion',
  'Popular restaurants in Hollywood': 'Popular restaurants in Hollywood',
  'Top Cuisines Near You': 'Top Cuisines Near You'
};

const models = {
  start: {
    copy: Object.keys(copy).map(key => ({ key, value: copy[key] })),
    title: 'START PAGE'
  }
};

const unknown = {
  copy,
  title: 'UNKNOWN'
};

function getModel(_, args) {
  return models[args.q] || unknown;
}

module.exports = getModel;
