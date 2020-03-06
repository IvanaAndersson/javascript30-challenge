const secondsHand = document.querySelector(".seconds-hand");
const minsHand = document.querySelector(".mins-hand");
const hoursHand = document.querySelector(".hours-hand");

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;

  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minsHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

setInterval(setDate, 1000);
