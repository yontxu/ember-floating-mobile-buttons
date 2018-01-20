import Component from '@ember/component';
import { assert } from '@ember/debug';
import { schedule } from '@ember/runloop';
import $ from 'jquery';
import layout from '../templates/components/floating-mobile-buttons';

export default Component.extend({
  layout,
  tagName: 'ul',
  classNames: ['floating-buttons'],
  classNameBindings: ['active:active', 'bottom:bottom', 'top:top', 'left:left', 'right:right'],
  active: false,
  childrenActive: false,
  hasChildren: false,
  position: 'bottom right',
  didReceiveAttrs(){
    this._super(...arguments);

    this.set('active', true);

    let classes = this.get('position').trim().split(" ");
    let vClasses = classes.filter( c => {
      if(c.match(/(bottom|top)/i)){
        return c;
      }
    });
    let hClasses = classes.filter( c => {
      if(c.match(/(right|left)/i)){
        return c;
      }
    });

    if(vClasses.length === 0 || vClasses.length > 1 || hClasses.length === 0 || hClasses.length > 1){
      assert('The position property must be a string with the values top|bottom and left|right.');
    }

    classes.forEach( c => {
        this.set(c, true);
    });

    schedule('afterRender', () => {
      if($(`#${this.get('elementId')} .floating-child-button`).length > 1){
        this.set('hasChildren', true);
      }
    });
  },
  actions: {
    toggleChildren(){
      this.toggleProperty('childrenActive');
    }
  }
});
