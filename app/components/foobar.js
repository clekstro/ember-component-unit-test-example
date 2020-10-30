import Component from '@ember/component';

export default Component.extend({
  foo: 'foo',
  bar: 'bar',

  foobar() {
    return `${this.foo} ${this.bar}`;
  },
});
