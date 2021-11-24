const { Service } = require('feathers-mongodb');

exports.Oems = class Oems extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('oems');
    });
  }
};
