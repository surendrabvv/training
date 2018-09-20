const users = [{
  id: 1,
  username: 'John'
}, {
  id: 2,
  username: 'Ken'
}, {
  id: 3,
  username: 'Lenny'
}, {
  id: 4,
  username: 'Penny'
}];

let getUser = (parent, args, context, info) => {
  if (args.id) {
    let user = {};
    for (let i = 0, len = users.length; i < len; i++) {
      if (users[i].id === args.id) {
        user = users[i];
        break;
      }
    }
    user.token = context.token;
    return user;
  }
  return users[0];
};

let getUsers = () => {
  return users;
};

module.exports = {
  user: getUser,
  users: getUsers
};