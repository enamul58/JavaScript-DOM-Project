const inputFieldValue = document.getElementById("assignHexValue");
const myButton = document.querySelector("#myButton");
const bodyTag = document.getElementsByTagName("body");
const copyBtn = document.querySelector("#cpy_btn");
let div = null;

myButton.addEventListener("click", function () {
  const hexValue = getHexValue();
  inputFieldValue.value = hexValue;
  bodyTag[0].style.backgroundColor = hexValue;
});

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(inputFieldValue.value);
  generateToastMessage(`${inputFieldValue.value} copied`);
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

function generateToastMessage(message) {
  if (div !== null) {
    div.remove();
    div = null;
  }
  div = document.createElement("div");
  div.className = "toast_message toast_message_in";
  div.innerText = message;
  document.body.appendChild(div);

  div.addEventListener("click", function () {
    div.classList.remove("toast_message_in");
    div.classList.add("toast_message_out");

    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });
  });
}
