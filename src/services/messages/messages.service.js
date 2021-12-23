// Initializes the `messages` service on path `/messages`
const { Messages } = require('./messages.class');
const hooks = require('./messages.hooks');

module.exports = function (app) {
  const options = {
    // paginate: app.get('paginate')
  };
  const messages = new Messages(options, app);

  messages.docs = {
    description: 'A Message management endpoint',
    definitions: {
      messages: {
        "type": "object",
        "required": [
          
        ],
        "properties": {
          
          
        }
      },
      "messages list": {
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
  app.use('/messages', messages);

  // Get our initialized service so that we can register hooks
  const service = app.service('messages');

  service.hooks(hooks);
};
