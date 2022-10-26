const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector("ul");

ingredients.forEach(ingredient => {
  const listIngredientsEl = document.createElement("li");
  listIngredientsEl.classList.add('item');
  listIngredientsEl.textContent = ingredient;
  listEl.appendChild(listIngredientsEl);
}
);
console.log(listEl);
