const startButton = document.querySelector('button[data-start]');
const bgColor = document.querySelector('body');
console.log(startButton);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const handleClick = startButton.addEventListener('click', getRandomHexColor);
