const userObj = require('./user');
const emailObj = require('./email');

const resolvers = {
  Query: {
    user: userObj.user,
    users: userObj.users,
    email: emailObj.email,
    emails: emailObj.emails
  },
  User: {
    emails: emailObj.getUserEmails
  }
};

module.exports = resolvers;