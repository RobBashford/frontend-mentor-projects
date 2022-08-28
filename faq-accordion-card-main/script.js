"use strict";

const title1 = document.querySelector(".title-1");
const title2 = document.querySelector(".title-2");
const title3 = document.querySelector(".title-3");
const title4 = document.querySelector(".title-4");
const title5 = document.querySelector(".title-5");

const info1 = document.querySelector(".info-1");
const info2 = document.querySelector(".info-2");
const info3 = document.querySelector(".info-3");
const info4 = document.querySelector(".info-4");
const info5 = document.querySelector(".info-5");

title1.addEventListener("click", function () {
  if (info1.classList.contains("hidden-el")) {
    info1.classList.remove("hidden-el");
  } else {
    info1.classList.add("hidden-el");
  }
});

title2.addEventListener("click", function () {
  if (info2.classList.contains("hidden-el")) {
    info2.classList.remove("hidden-el");
  } else {
    info2.classList.add("hidden-el");
  }
});

title3.addEventListener("click", function () {
  if (info3.classList.contains("hidden-el")) {
    info3.classList.remove("hidden-el");
  } else {
    info3.classList.add("hidden-el");
  }
});

title4.addEventListener("click", function () {
  if (info4.classList.contains("hidden-el")) {
    info4.classList.remove("hidden-el");
  } else {
    info4.classList.add("hidden-el");
  }
});

title5.addEventListener("click", function () {
  if (info5.classList.contains("hidden-el")) {
    info5.classList.remove("hidden-el");
  } else {
    info5.classList.add("hidden-el");
  }
});
