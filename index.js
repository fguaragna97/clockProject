//we need to use transform rotate for the clock hands , and give transition timing function

async function getData(Hours, minutes, seconds) {
  const response = await fetch("http://worldtimeapi.org/api/ip");
  return await response.json();
}

window.addEventListener("load", async () => {
  try {
    const data = await getData();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
});
