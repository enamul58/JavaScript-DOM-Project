const dtnColorChange = document.querySelector(".btn");
const container = document.querySelector(".container");
const h1 = document.querySelector("h1");
console.log(h1);

dtnColorChange.addEventListener("click", () => {
  h1.style.color = "white";
  container.style.backgroundColor = randomBackgroundColor();
});

function randomBackgroundColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}
