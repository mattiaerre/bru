const { GraphQLList, GraphQLObjectType, GraphQLString } = require('graphql');
const Entry = require('./Entry');

const Model = new GraphQLObjectType({
  fields: {
    copy: {
      type: new GraphQLList(Entry)
    },
    title: {
      type: GraphQLString
    }
  },
  name: 'Model'
});

module.exports = Model;
