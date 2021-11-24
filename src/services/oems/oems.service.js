// Initializes the `oems` service on path `/oems`
const { Oems } = require('./oems.class');
const hooks = require('./oems.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/oems', new Oems(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('oems');

  service.hooks(hooks);
};
