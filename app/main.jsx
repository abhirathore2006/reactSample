var React = require('react/addons');

console.log('Hello Wolrd JSX!');

var GroceryItemList = require('./components/GroceryItemList.jsx');

var groceryItemStore = require('./stores/GroceryItemStore.jsx');

var initial = groceryItemStore.getItems();

function render() {
  React.render(<GroceryItemList items={initial}/>, app);
}

groceryItemStore.onChange(function (items) {
  initial = items;
  render();
});

render();