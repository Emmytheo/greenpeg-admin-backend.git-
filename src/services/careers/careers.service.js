// Initializes the `careers` service on path `/careers`
const { Careers } = require('./careers.class');
const hooks = require('./careers.hooks');

module.exports = function (app) {
  const options = {
    // paginate: app.get('paginate')
  };
  const careers = new Careers(options, app);

  careers.docs = {
    description: 'A Career management endpoint',
    definitions: {
      careers: {
        "type": "object",
        "required": [
          
        ],
        "properties": {
          
          
        }
      },
      "careers list": {
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
  app.use('/careers', careers);

  // Get our initialized service so that we can register hooks
  const service = app.service('careers');

  service.hooks(hooks);
};
