// Individual query types and mutations
const user = require('./user');
const auth = require('./auth');

// Root Query
const root = `
  type Query {
    dummy: String
  }

  type Mutation {
    dummy: String
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = [root, user, auth];