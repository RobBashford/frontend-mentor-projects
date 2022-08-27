"use strict";

let x = 0;

const btn1 = document.querySelector(".btn--1");
const btn2 = document.querySelector(".btn--2");
const btn3 = document.querySelector(".btn--3");
const btn4 = document.querySelector(".btn--4");
const btn5 = document.querySelector(".btn--5");
const errorMsg = document.querySelector(".error");

const container1 = document.querySelector(".container");
const container2 = document.querySelector(".container2");

const submit = document.querySelector(".submit-button");
const numSelectionText = document.querySelector(".numSelection");

const numSelection = function () {
  x = this.textContent;
  console.log(typeof x, x);
};

btn1.addEventListener("click", numSelection);
btn2.addEventListener("click", numSelection);
btn3.addEventListener("click", numSelection);
btn4.addEventListener("click", numSelection);
btn5.addEventListener("click", numSelection);

submit.addEventListener("click", function () {
  if (x === 0) {
    errorMsg.classList.remove("hidden");
  } else {
    container1.classList.add("hidden");
    container2.classList.remove("hidden");
    numSelectionText.textContent = `You have selected ${x} out of 5`;
  }
});
