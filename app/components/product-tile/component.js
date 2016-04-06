import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('shoppingCart').adds(item);
    },
    removeFromCart(item) {
      this.get('shoppingCart').removes(item);
    }
  }
});
