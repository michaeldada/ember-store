import Ember from 'ember';

var items = [{
  id: 1,
  title: "Veruca Salt",
  description: "San Francisco",
  cost: 15,
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
}, {
  id: 2,
  title: "Mike TV",
  description: "Seattle",
  cost: 1,
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg"
}, {
  id: 3,
  title: "Violet Beauregarde",
  description: "Portland",
  cost: 3,
  image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg"
}];

export default Ember.Route.extend({
  model() {
    return items
  }

});
