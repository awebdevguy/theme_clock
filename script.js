const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minute');
const secondElement = document.getElementById('second');
const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');

  html.classList.contains('dark') ? (html.classList.remove('dark'), e.target.innerHTML = 'Dark Mode') : (html.classList.add('dark'), e.target.innerHTML = 'Light Mode');
});

setInterval(setTime, 1000);

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  timeElement.innerHTML = `
    ${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} <span class="ampm">${ampm}</span>
  `;

  dateElement.innerHTML = `
    ${days[day]}, ${months[month]} <span class="circle">${date}</span> 
  `;

  hourElement.style.transform = `
    translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)
  `;

  minuteElement.style.transform = `
    translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)
  `;

  secondElement.style.transform = `
    translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)
  `;

}

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}