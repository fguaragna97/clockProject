//we need to use transform rotate for the clock hands , and give transition timing function

function getDate() {
  const time = new Date().getTime();
  const date = new Date(time);
  const day = date.toString();

  // getting the hour , minute and seconds
  let minute = date.getMinutes();
  const minuteDegrees = (minute / 60) * 360 + 90;
  let hour = date.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  let second = date.getSeconds();
  const secondsDegrees = (second / 60) * 360 + 90;

  // get elements
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");

  //change the style
  hours.style.transform = "rotate(" + hourDegrees + "deg)";
  minutes.style.transform = "rotate(" + minuteDegrees + "deg)";
  seconds.style.transform = "rotate(" + secondsDegrees + "deg)";
}

window.addEventListener("load", async () => {
  try {
    setInterval(getDate, 1000);
  } catch (error) {
    console.error(error);
  }
});
