const refs = {
    input: document.querySelector('[id="name-input"]'),
    name: document.querySelector('span#name-output'),
};

    refs.input.addEventListener('input', () => {
    refs.name.textContent = refs.input.value;

});