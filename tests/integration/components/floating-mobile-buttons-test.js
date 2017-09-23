import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('floating-mobile-buttons', 'Integration | Component | floating mobile buttons', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{floating-mobile-buttons}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#floating-mobile-buttons}}
      template block text
    {{/floating-mobile-buttons}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it displays expected dom elements', function(assert) {
  this.render(hbs`
  {{#floating-mobile-buttons}}
    <a href>test</a>
  {{/floating-mobile-buttons}}
  `);
  assert.equal(this.$('ul > li').length, 1, 'has one element');
  assert.equal(this.$('ul > li > ul').length, 0, 'has no child buttons');
});

test('it displays "button" and "right" classes by default', function(assert) {
  this.render(hbs`{{floating-mobile-buttons}}`);

  assert.ok(this.$('ul').hasClass('bottom'), 'has class "bottom" by default');
  assert.ok(this.$('ul').hasClass('right'), 'has class "right" by default');
});

test('it displays the classes passed in the position property', function(assert) {
  this.render(hbs`{{floating-mobile-buttons position="top left"}}`);

  assert.ok(this.$('ul').hasClass('top'), 'has class "top" by default');
  assert.ok(this.$('ul').hasClass('left'), 'has class "left" by default');
});

test('it should trim position param', function(assert) {
  this.render(hbs`{{floating-mobile-buttons position=" top  left "}}`);

  assert.ok(this.$('ul').hasClass('top'), 'has class "top" by default');
  assert.ok(this.$('ul').hasClass('left'), 'has class "left" by default');
});

test('it throws an error if the passed position property is not correct', function(assert) {
  assert.expectAssertion(() => {
      this.render(hbs`{{floating-mobile-buttons position="test"}}`);
    }, 'The position property must be a string with the values top|bottom and left|right.');
});

test('it could have child buttons', function(assert) {
  this.render(hbs`
  {{#floating-mobile-buttons}}
    {{floating-mobile-child-buttons}}
  {{/floating-mobile-buttons}}
  `);

  assert.equal(this.$('ul ul').length, 1, 'has one child buttons');
  assert.equal(this.$('ul > li:not(.floating-child-button)').length, 2, 'has two li elements on first level');
  assert.equal(this.$('ul ul > li').length, 1, 'has one li elements on second level');
});
