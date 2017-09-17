import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('floating-mobile-children-wrapper', 'Integration | Component | floating mobile children wrapper', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{floating-mobile-children-wrapper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#floating-mobile-children-wrapper}}
      template block text
    {{/floating-mobile-children-wrapper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
