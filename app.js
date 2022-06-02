"use strict";

const input = document.querySelector("input");
const inputValue = document.querySelector(".inputValue");
input.addEventListener("input", () => {
  inputValue.textContent = input.value;
});
