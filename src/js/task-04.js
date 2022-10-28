let counterValue = 0;
const countValue = document.querySelector('[id="value"]');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
buttonDecrement.addEventListener('click', () => {
    counterValue -= 1;
    countValue.textContent = counterValue;
});
const buttonIncrement = document.querySelector('button[data-action="increment"]');
buttonIncrement.addEventListener('click', () => {
    counterValue += 1;
    countValue.textContent = counterValue;
});



