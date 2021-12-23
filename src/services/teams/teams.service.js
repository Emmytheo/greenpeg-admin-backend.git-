// Initializes the `teams` service on path `/teams`
const { Teams } = require('./teams.class');
const hooks = require('./teams.hooks');

module.exports = function (app) {
  const options = {
    // paginate: app.get('paginate')
  };
  const teams = new Teams(options, app);

  teams.docs = {
    description: 'A Team management endpoint',
    definitions: {
      teams: {
        "type": "object",
        "required": [
          
        ],
        "properties": {
          
          
        }
      },
      "teams list": {
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
  app.use('/teams', teams);

  // Get our initialized service so that we can register hooks
  const service = app.service('teams');

  service.hooks(hooks);
};
