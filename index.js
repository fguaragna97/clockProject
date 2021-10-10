//we need to use transform rotate for the clock hands , and give transition timing function

window.addEventListener("load", async () => {
  try {
    const day = new Date("July 20, 69 00:20:18");

    let hours = day.getHours();
    let minutes = day.getMinutes();
    let seconds = day.getSeconds();
    // const data = await getData();
    console.log(hours, minutes, seconds);
  } catch (error) {
    console.error(error);
  }
});
