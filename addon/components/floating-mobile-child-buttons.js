import Ember from 'ember';
import layout from '../templates/components/floating-mobile-child-buttons';

export default Ember.Component.extend({
  tagName: 'li',
  active:false,
  actions: {
    toggleButtons() {
      this.toggleProperty('active');
    },
    showDialog() {
      this.set('active', false);
      this.get('showDialog')(...arguments);
    }
  }
});
