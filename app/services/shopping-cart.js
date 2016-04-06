import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  adds(item) {
    this.get('items').pushObject(item);
  },
  removes(item) {
    this.get('items').removeObject(item);
  }
});
