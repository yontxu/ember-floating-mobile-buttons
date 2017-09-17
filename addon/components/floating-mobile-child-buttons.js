import Ember from 'ember';
import layout from '../templates/components/floating-mobile-child-buttons';

export default Ember.Component.extend({
  layout,
  tagName: 'li',
  classNames: ['floating-child-button'],
  buttonClassNames: 'floating-button',
  didInsertElement(){
    this._super(...arguments);
    Ember.$('button,a').addClass(this.get('buttonClassNames'));
  }
});
