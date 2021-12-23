// Initializes the `events` service on path `/events`
const { Events } = require('./events.class');
const hooks = require('./events.hooks');

module.exports = function (app) {
  const options = {
    // paginate: app.get('paginate')
  };
  const events = new Events(options, app);

  events.docs = {
    description: 'An Event management endpoint',
    definitions: {
      events: {
        "type": "object",
        "required": [
          
        ],
        "properties": {
          
          
        }
      },
      "events list": {
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
  app.use('/events', events);

  // Get our initialized service so that we can register hooks
  const service = app.service('events');

  service.hooks(hooks);
};
