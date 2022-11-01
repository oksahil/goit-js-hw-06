const refs = {
    input: document.querySelector('[id="name-input"]'),
    name: document.querySelector('span#name-output'),
};

    refs.input.addEventListener('input', () => {
        refs.name.textContent = refs.input.value;
        if (refs.input.value.length === 0) {
         refs.name.textContent = 'Anonymous';   
        }

});