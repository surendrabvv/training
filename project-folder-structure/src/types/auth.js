const auth = `

  extend type Mutation {
    register(
      email: String!,
      password: String!,
      confirmPassword: String!,
      name: String!
    ): authObj

    login(
      email: String!,
      password: String!
    ): authObj
  }

  type authObj {
    token: String
    user: User
  }
`;

module.exports = auth;