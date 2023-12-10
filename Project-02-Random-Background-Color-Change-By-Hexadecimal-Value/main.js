const inputFieldValue = document.getElementById("assignHexValue");
const myButton = document.querySelector("#myButton");
const bodyTag = document.getElementsByTagName("body");

myButton.addEventListener("click", function () {
  const hexValue = getHexValue();
  inputFieldValue.value = hexValue;
  bodyTag[0].style.backgroundColor = hexValue;
});

function getHexValue() {
  const red = Math.floor(Math.random() * 255).toString(16);
  const green = Math.floor(Math.random() * 255).toString(16);
  const blue = Math.floor(Math.random() * 255).toString(16);
  const redHex = red.length == 1 ? "0" + red : red;
  const greenHex = green.length == 1 ? "0" + green : green;
  const blueHex = blue.length == 1 ? "0" + blue : blue;
  return `#${redHex}${greenHex}${blueHex}`;
}
