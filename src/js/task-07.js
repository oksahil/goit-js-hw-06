const refs = {
  input: document.querySelector('input#font-size-control'),
  span: document.querySelector('span#text'),
  
}

refs.input.addEventListener('input', changeInput);

function changeInput(size) {
  refs.span.style.fontSize = size.currentTarget.value + "px";
};