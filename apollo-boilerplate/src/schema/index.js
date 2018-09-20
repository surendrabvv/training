const gql = require('apollo-server-express').gql;

const user = require('./user');
const email = require('./email');

const schema = gql`
  type Query {
    user(id: Int, username: String): User
    users: [User]

    email(id: Int): Email
    emails: [Email]
  }

  ${user}
  ${email}
`;

module.exports = schema;
