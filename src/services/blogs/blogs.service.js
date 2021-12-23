// Initializes the `blogs` service on path `/blogs`
const { Blogs } = require('./blogs.class');
const hooks = require('./blogs.hooks');

module.exports = function (app) {
  const options = {
    // paginate: app.get('paginate')
  };
  const blogs = new Blogs(options, app);

  blogs.docs = {
    description: 'A Blog management endpoint',
    definitions: {
      blogs: {
        "type": "object",
        "required": [
          
        ],
        "properties": {
          
          
        }
      },
      "blogs list": {
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
  app.use('/blogs', blogs);

  // Get our initialized service so that we can register hooks
  const service = app.service('blogs');

  service.hooks(hooks);
};
