import Component from '@ember/component';
import layout from '../templates/components/floating-mobile-children-wrapper';

export default Component.extend({
  layout,
  tagName: 'ul',
  classNames: ['floating-button-wrapper'],
  classNameBindings: ['active:enabled:disabled'],
  active:false,
});
