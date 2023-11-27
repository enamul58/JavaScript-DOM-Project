const inputFieldValue = document.getElementById("assignHexValue");
const myButton = document.querySelector("#myButton");
const bodyTag = document.getElementsByTagName("body");
const copyBtn = document.querySelector("#cpy_btn");

myButton.addEventListener("click", function () {
  const hexValue = getHexValue();
  inputFieldValue.value = hexValue;
  bodyTag[0].style.backgroundColor = hexValue;
});

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(inputFieldValue.value);
});

function getHexValue() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
