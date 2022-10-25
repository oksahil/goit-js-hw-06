const category = document.querySelectorAll('.item');
console.log('Number of categories: ', category.length);
category.forEach(elem => {
    let titleCategory = elem.querySelector('h2');
    console.log('Category:', titleCategory.textContent);
    let countItem = elem.querySelectorAll('li');
    console.log('Elements:', countItem.length);
});