"use strict";

function validate() {
  const input = document.createElement("input");
  input.type = "email";
  input.value = document.getElementById("test").value;

  if (input.checkValidity()) {
    console.log("yes");
  } else {
    console.log("no");
  }

  return false;
}
