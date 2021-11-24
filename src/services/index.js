const users = require('./users/users.service.js')
const requests = require('./requests/requests.service.js');
const products = require('./products/products.service.js');
const blogs = require('./blogs/blogs.service.js');
const works = require('./works/works.service.js');
const oems = require('./oems/oems.service.js');
const careers = require('./careers/careers.service.js');
const teams = require('./teams/teams.service.js');
const events = require('./events/events.service.js');
const messages = require('./messages/messages.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users)
  app.configure(requests);
  app.configure(products);
  app.configure(blogs);
  app.configure(works);
  app.configure(oems);
  app.configure(careers);
  app.configure(teams);
  app.configure(events);
  app.configure(messages);
}
