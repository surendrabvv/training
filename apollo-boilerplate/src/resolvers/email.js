const emails = [{
  id: 1,
  subject: 'Something went wrong',
  body: 'Something went wrong',
  hasAttachments: false,
  userId: 1
}, {
  id: 2,
  subject: 'IT Bulletin this weekend',
  body: 'IT Bulletin this weekend',
  hasAttachments: true,
  userId: 3
}, {
  id: 3,
  subject: 'Your leave has been approved',
  body: 'Your leave has been approved',
  hasAttachments: false,
  userId: 1
}, {
  id: 4,
  subject: 'Working from Home today',
  body: 'Working from Home today',
  hasAttachments: true,
  userId: 3
}];

let getEmail = (parent, args) => {
  if (args.id) {
    let email = {};
    for (let i = 0, len = emails.length; i < len; i++) {
      if (emails[i].id === args.id) {
        email = emails[i];
        break;
      }
    }
    return email;
  }
  return emails[0];
};

let getEmails = () => {
  return emails;
};

let getUserEmails = (user) => {
  let userEmails = [];
  for (let i = 0, len = emails.length; i < len; i++) {
    if (emails[i].userId === user.id) {
      userEmails.push(emails[i]);
    }
  }
  return userEmails;
};

module.exports = {
  getUserEmails: getUserEmails,
  email: getEmail,
  emails: getEmails
};