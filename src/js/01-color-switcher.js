const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const bgColor = document.querySelector('body');

// ------------ Интервал-----------//
const handleInterval = setInterval(changeBgColor, 2000);

// /----------- Генератор цветов -------------/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// --------------- Кнопка старт ----------//
const handleStartBtnClick = startButton.addEventListener(
  'click',
  changeBgColor
);

// function disableStartBtn() {
//   if (handleStartBtnClick) {
//     startButton.setAttribute('disabled', 'true');
//     console.log('останавливаем!');
//   }
// }

// ------------ Меняет цвет фона-------------//
function changeBgColor() {
  bgColor.style.backgroundColor = getRandomHexColor();
  if (changeBgColor) {
    startButton.disabled = true;
  }
}

// -------------- Кнопка стоп ------------///
const handleStopBtn = stopButton.addEventListener('click', stopInterval);

// ------------- Очищает интервал -------------//
function stopInterval() {
  clearInterval(handleInterval);
  if (stopInterval) {
    startButton.disabled = false;
  }
}
