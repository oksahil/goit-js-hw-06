const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector("ul");

function createItem() {
  document.createElement("li").classList.add('item');
  console.log()
}

const addItem = ingredients.forEach(ingredient => {
  createItem(ingredient);

//   const listIngredientsEl = document.createElement("li");
//   listIngredientsEl.classList.add('item');
//   listIngredientsEl.textContent = ingredient;
  // listEl.appendChild(listIngredientsEl);
}
);
// console.log(listEl);
listEl.insertAdjacentHTML('beforeend', addItem);
