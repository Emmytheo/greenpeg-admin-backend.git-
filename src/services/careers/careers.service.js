// Initializes the `careers` service on path `/careers`
const { Careers } = require('./careers.class');
const hooks = require('./careers.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/careers', new Careers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('careers');

  service.hooks(hooks);
};
