import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Components | FooBar', function(hooks) {
  setupTest(hooks)

  test('calculates complex logic', function(assert) {
    let instance = this.owner.lookup('component:foobar');
    assert.equal(instance.foobar(), 'foo baz');
  });
});
