"use strict";

const btn = document.querySelector(".btn");
const email = document.querySelector(".email-input");

function val() {
  const form = document.getElementById("form");
  const email = document.getElementById("email").value;
  const text = document.getElementById("text");

  console.log(email);
}

const validation = function () {
  console.log(email.textContent);
};

btn.addEventListener("click", validation);
