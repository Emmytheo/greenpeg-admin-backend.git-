// Initializes the `oems` service on path `/oems`
const { Oems } = require('./oems.class');
const hooks = require('./oems.hooks');

module.exports = function (app) {
  const options = {
    // paginate: app.get('paginate')
  };
  const oems = new Oems(options, app);

  oems.docs = {
    description: 'An Oem management endpoint',
    definitions: {
      oems: {
        "type": "object",
        "required": [
          
        ],
        "properties": {
          
          
        }
      },
      "oems list": {
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
  app.use('/oems', oems);

  // Get our initialized service so that we can register hooks
  const service = app.service('oems');

  service.hooks(hooks);
};
