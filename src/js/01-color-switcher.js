const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const bgColor = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const handleStartBtnClick = startButton.addEventListener(
  'click',
  onStartBtnClick
);

function onStartBtnClick() {
  bgColor.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    bgColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
  if (onStartBtnClick) {
    startButton.disabled = true;
    stopButton.disabled = false;
  }
}

stopButton.disabled = true;

const handleStopBtn = stopButton.addEventListener('click', stopInterval);

function stopInterval() {
  clearInterval(timerId);
  if (stopInterval) {
    startButton.disabled = false;
    stopButton.disabled = true;
  }
}
