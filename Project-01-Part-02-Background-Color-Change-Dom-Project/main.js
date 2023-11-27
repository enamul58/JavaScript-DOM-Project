let colorChange = document.getElementById("colorChange");
colorChange.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("body-color-chage");
  document
    .querySelector("#colorChange")
    .classList.toggle("button-color-change");
});
