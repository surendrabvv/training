const user = `
  type User {
    email: String!,
    name: String!
  }

  extend type Mutation {
    resetPassword(
      email: String!,
      oldPassword: String!,
      newPassword: String!
    ): User
  }
`;

module.exports = user;