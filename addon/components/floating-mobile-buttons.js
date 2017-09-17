import Ember from 'ember';
import layout from '../templates/components/floating-mobile-buttons';

export default Ember.Component.extend({
  layout,
  tagName: 'ul',
  classNames: ['floating-buttons'],
  classNameBindings: ['active:active', 'bottom:bottom', 'top:top', 'left:left', 'right:right'],
  active: false,
  childrenActive: false,
  hasChildren: false,
  didReceiveAttrs(){
    this._super(...arguments);
    if(Ember.typeOf(this.get('bottom')) !== 'undefined'){
      this.set('bottom', true);
    }
  },
  didInsertElement(){
    this._super(...arguments);
    this.set('active', true);
    if(Ember.$('.floating-child-button').length > 0){
      this.set('hasChildren', true);
    }
  },
  actions: {
    toggleChildren(){
      this.toggleProperty('childrenActive')
    }
  }
});
