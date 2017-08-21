import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('floating-mobile-child-buttons', 'Integration | Component | floating mobile child buttons', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{floating-mobile-child-buttons}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#floating-mobile-child-buttons}}
      template block text
    {{/floating-mobile-child-buttons}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
