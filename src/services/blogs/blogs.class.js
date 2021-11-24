const { Service } = require('feathers-mongodb');

exports.Blogs = class Blogs extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('blogs');
    });
  }
};
