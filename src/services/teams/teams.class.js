const { Service } = require('feathers-mongodb');

exports.Teams = class Teams extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('teams');
    });
  }
};
