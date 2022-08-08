import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputDateRef = document.getElementById('datetime-picker');
const startButton = document.querySelector('button[data-start]');
const timerRef = document.querySelector('.timer');
const daysValue = document.querySelector('span[data-days]');
const hoursValue = document.querySelector('span[data-hours]');
const minutesValue = document.querySelector('span[data-minutes]');
const secondsValue = document.querySelector('span[data-seconds]');

const onButtonStart = startButton.addEventListener('click', () => {
  counter.start();
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const fp = flatpickr(inputDateRef, { options });

const counter = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const timeComponents = convertMs(deltaTime);

      //   if (counter.start) {
      //     startButton.disabled = true;
      //   }
      if (deltaTime <= 0) {
        clearInterval;
      } else {
        counterValue(timeComponents);
      }
      console.log(timeComponents);
    }, 1000);
  },
};
// counter.start(convertMs);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function counterValue(deltaTime) {
  daysValue.textContent = timeComponents.days;
  hoursValue.textContent = timeComponents.hours;
  minutesValue.textContent = timeComponents.minutes;
  secondsValue.textContent = timeComponents.seconds;
}
