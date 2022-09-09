"use strict";

const errorIcon = document.querySelector(".error-icon");
const errorMsg = document.querySelector(".error-msg");
const emailInput = document.querySelector(".email-input");

function validate() {
  const input = document.createElement("input");
  input.type = "email";
  input.value = document.getElementById("test").value;

  if (input.checkValidity()) {
    console.log("yes");
  } else {
    console.log("no");
    errorIcon.classList.remove("hidden");
    errorMsg.classList.remove("hidden");
    emailInput.style.border = "2px solid #f96464";
  }
  return false;
}
