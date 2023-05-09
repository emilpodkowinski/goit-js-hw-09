import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
const inputEl = document.querySelector('#datetime-picker');
const btnStartEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

btnStartEl.disabled = true;

const options = {
enableTime: true,
time_24hr: true,
defaultDate: new Date(),
minuteIncrement: 1,
onClose(selectedDates) {
if (selectedDates[0] < options.defaultDate) {
btnStartEl.disabled = true;
alert('Please choose a date in the future');
} else {
btnStartEl.disabled = false;
}
},
};

const fp = flatpickr(inputEl, options);

btnStartEl.addEventListener('click', onStartTimer);

function onStartTimer() {
const selectedTime = fp.selectedDates[0].getTime();
btnStartEl.disabled = true;
inputEl.disabled = true;

const intervalId = setInterval(() => {
const currentTime = Date.now();
const intervalTime = selectedTime - currentTime;
if (intervalTime < 0) {
clearInterval(intervalId);

return;
}

daysEl.textContent = convertMs(intervalTime).days;
hoursEl.textContent = convertMs(intervalTime).hours;
minutesEl.textContent = convertMs(intervalTime).minutes;
secondsEl.textContent = convertMs(intervalTime).seconds;


});
}

function addLeadingZero(value) {
return String(value).padStart(2, '0');
}

function convertMs(ms) {
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const days = addLeadingZero(Math.floor(ms / day));
const hours = addLeadingZero(Math.floor((ms % day) / hour));
const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
const seconds = addLeadingZero(
Math.floor((((ms % day) % hour) % minute) / second)
);
return { days, hours, minutes, seconds };
}

  
  
 







  


  
    