"use strict";

const errorIcon = document.querySelector(".error-icon");
const errorMsg = document.querySelector(".error-msg");
const emailInput = document.querySelector(".email-input");
const emailForm = document.querySelector(".email-form");

function validate() {
  const input = document.createElement("input");
  input.type = "email";
  input.value = document.getElementById("test").value;

  // const html = `<p class="error-msg">Please provide a valid email address</p>`;

  if (input.checkValidity()) {
    console.log("yes");
    emailInput.style.borderColor = "#4f7df3";
    errorMsg.classList.add("hidden");
  } else {
    console.log("no");
    emailInput.style.borderColor = "hsl(354, 100%, 66%)";
    errorMsg.classList.remove("hidden");

    // emailForm.insertAdjacentHTML("afterend", html);
  }
  return false;
}
