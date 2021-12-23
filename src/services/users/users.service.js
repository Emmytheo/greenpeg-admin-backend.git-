// Initializes the `users` service on path `/users`
const { Users } = require('./users.class');
const hooks = require('./users.hooks');

module.exports = function (app) {
  const options = {
    // paginate: app.get('paginate')
  };
  const users = new Users(options, app);

  users.docs = {
    description: 'A User management endpoint',
    definitions: {
      users: {
        "type": "object",
        "required": [
          
        ],
        "properties": {
          
          
        }
      },
      "users list": {
        "type": "object",
        "required": [
          
        ],
        "properties": {
          
          
        }
      }
    },
    idType: "string",
    securities: ['find', 'create', 'get', 'update', 'patch', 'remove'],
  }
  // Initialize our service with any options it requires
  app.use('/users', users);

  // Get our initialized service so that we can register hooks
  const service = app.service('users');

  service.hooks(hooks);
};
