import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  active:false,
  buttonClassNames: 'pure-button pure-button-primary floating-button',
  init(){
    this._super(...arguments);
    Ember.$('button, a').addClass(this.get('buttonClassNames'));
  },
  actions: {
    toggleButtons() {
      this.toggleProperty('active');
    }
  }
});
