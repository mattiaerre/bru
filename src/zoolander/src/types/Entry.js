const { GraphQLObjectType, GraphQLString } = require('graphql');

const Entry = new GraphQLObjectType({
  fields: {
    key: {
      type: GraphQLString
    },
    value: {
      type: GraphQLString
    }
  },
  name: 'Entry'
});

module.exports = Entry;
