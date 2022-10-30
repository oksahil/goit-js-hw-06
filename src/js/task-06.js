const refs = {
    input: document.querySelector('#validation-input'),
     };



refs.input.addEventListener('blur', () => {
         
    if (refs.input.value.length === Number(refs.input.dataset.length)) {
            refs.input.classList.remove('invalid');  
            refs.input.classList.add('valid');  
            // console.log(refs.input.value.length);
            // console.log('valid');
        } else {
        // console.log("invalid");
            refs.input.classList.remove('valid'); 
            refs.input.classList.add('invalid'); 
            // console.log(refs.input.value.length);
        }
    });