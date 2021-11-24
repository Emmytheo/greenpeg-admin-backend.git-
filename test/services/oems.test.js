const assert = require('assert');
const app = require('../../src/app');

describe('\'oems\' service', () => {
  it('registered the service', () => {
    const service = app.service('oems');

    assert.ok(service, 'Registered the service');
  });
});
