const assert = require('assert');
const app = require('../../src/app');

describe('\'careers\' service', () => {
  it('registered the service', () => {
    const service = app.service('careers');

    assert.ok(service, 'Registered the service');
  });
});
