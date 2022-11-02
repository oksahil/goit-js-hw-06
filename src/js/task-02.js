const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector("ul");

const createItem = ((ingredient) => {
const ingredientItem = document.createElement("li");
  ingredientItem.classList.add('item');
  ingredientItem.textContent = ingredient;
  // console.log(ingredientItem);
  return ingredientItem;
});

const addItem = ingredients.map((ingredient) => {
return createItem(ingredient);
});
  
listEl.append(...addItem);
console.log(listEl);