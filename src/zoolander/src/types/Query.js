const { GraphQLObjectType, GraphQLString } = require('graphql');

const Query = new GraphQLObjectType({
  fields: {
    message: {
      resolve: () => 'ZOOLANDER',
      type: GraphQLString
    },
    model: {
      args: {
        q: {
          type: GraphQLString
        }
      },
      resolve: (_, args) => args.q,
      type: GraphQLString
    },
    title: {
      resolve: () => 'TODO',
      type: GraphQLString
    }
  },
  name: 'Query'
});

module.exports = Query;
