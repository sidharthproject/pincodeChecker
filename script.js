const secondHand = document.querySelector(".sec-hand");

const minuteHand = document.querySelector(".min-hand");

const hourHand = document.querySelector(".hour-hand");
function getTime() {
  const date = new Date();

  const second = date.getSeconds();
  const secondDegree = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  console.log(secondDegree);
  console.log(second);
  if (second === 0) {
    secondHand.style.transition = "none";
  } else {
    secondHand.style.transition = " cubic-bezier(0.1, 2.7, 0.55, 1)";
  }

  const minute = date.getMinutes();
  const minuteDegree = (minute / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

  const hour = date.getHours();
  const hourDegree = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(getTime, 1000);
getTime(0)