// Initializes the `works` service on path `/works`
const { Works } = require('./works.class');
const hooks = require('./works.hooks');

module.exports = function (app) {
  const options = {
    // paginate: app.get('paginate')
  };
  const works = new Works(options, app);

  works.docs = {
    description: 'A Work management endpoint',
    definitions: {
      works: {
        "type": "object",
        "required": [
          
        ],
        "properties": {
          
          
        }
      },
      "works list": {
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
  app.use('/works', works);

  // Get our initialized service so that we can register hooks
  const service = app.service('works');

  service.hooks(hooks);
};
