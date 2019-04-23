const { GraphQLObjectType, GraphQLString } = require('graphql');
const getModel = require('../resolvers/getModel');
const Model = require('./Model');

const Query = new GraphQLObjectType({
  fields: {
    model: {
      args: {
        q: {
          type: GraphQLString
        }
      },
      resolve: getModel,
      type: Model
    }
  },
  name: 'Query'
});

module.exports = Query;
