function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  colorText: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
}

refs.btn.addEventListener('click', btnClick);

function btnClick() {
  const colorClick = getRandomHexColor();
  console.log(colorClick);
  refs.colorText.textContent = colorClick;
  refs.body.style.backgroundColor = colorClick;
// refs.colorText.style.color = colorClick;
};