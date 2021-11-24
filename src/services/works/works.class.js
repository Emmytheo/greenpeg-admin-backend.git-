const { Service } = require('feathers-mongodb');

exports.Works = class Works extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('works');
    });
  }
};
