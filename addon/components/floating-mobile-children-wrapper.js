import Ember from 'ember';
import layout from '../templates/components/floating-mobile-children-wrapper';

export default Ember.Component.extend({
  layout,
  tagName: 'ul',
  classNames: ['floating-button-wrapper'],
  classNameBindings: ['active:enabled:disabled'],
  active:false,
});
