import Component from '@ember/component';
import $ from 'jquery';
import layout from '../templates/components/floating-mobile-child-buttons';

export default Component.extend({
  layout,
  tagName: 'li',
  classNames: ['floating-child-button'],
  buttonClassNames: 'floating-button',
  didInsertElement(){
    this._super(...arguments);
    $('button,a').addClass(this.get('buttonClassNames'));
  }
});
