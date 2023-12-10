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
  if (isValidHex(inputFieldValue.value)) {
    generateToastMessage(`${inputFieldValue.value} copied`);
  } else {
    alert("enter correct hex value");
  }
});

function getHexValue() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
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

//press input vlaue background color change

inputFieldValue.addEventListener("keyup", function (eventObject) {
  let color = eventObject.target.value;
  if (color && isValidHex(color)) {
    bodyTag[0].style.backgroundColor = color;
  }
});

// input vlaue chake for valid hex value

function isValidHex(color) {
  if (color.length !== 7) return false;
  if (color[0] !== "#") return false;

  console.log("valid" + color);
  color = color.substring(1);
  console.log("hex");
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}
