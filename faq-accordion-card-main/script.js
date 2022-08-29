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

const arrow1 = document.querySelector(".arrow-1");
const arrow2 = document.querySelector(".arrow-2");
const arrow3 = document.querySelector(".arrow-3");
const arrow4 = document.querySelector(".arrow-4");
const arrow5 = document.querySelector(".arrow-5");

title1.addEventListener("click", function () {
  if (info1.classList.contains("hidden-el")) {
    info1.classList.remove("hidden-el");
    arrow1.classList.add("rotate-svg");
    title1.classList.add("title-bold");
  } else {
    info1.classList.add("hidden-el");
    arrow1.classList.remove("rotate-svg");
    title1.classList.remove("title-bold");
  }
});

title2.addEventListener("click", function () {
  if (info2.classList.contains("hidden-el")) {
    info2.classList.remove("hidden-el");
    arrow2.classList.add("rotate-svg");
    title2.classList.add("title-bold");
  } else {
    info2.classList.add("hidden-el");
    arrow2.classList.remove("rotate-svg");
    title2.classList.remove("title-bold");
  }
});

title3.addEventListener("click", function () {
  if (info3.classList.contains("hidden-el")) {
    info3.classList.remove("hidden-el");
    arrow3.classList.add("rotate-svg");
    title3.classList.add("title-bold");
  } else {
    info3.classList.add("hidden-el");
    arrow3.classList.remove("rotate-svg");
    title3.classList.remove("title-bold");
  }
});

title4.addEventListener("click", function () {
  if (info4.classList.contains("hidden-el")) {
    info4.classList.remove("hidden-el");
    arrow4.classList.add("rotate-svg");
    title4.classList.add("title-bold");
  } else {
    info4.classList.add("hidden-el");
    arrow4.classList.remove("rotate-svg");
    title4.classList.remove("title-bold");
  }
});

title5.addEventListener("click", function () {
  if (info5.classList.contains("hidden-el")) {
    info5.classList.remove("hidden-el");
    arrow5.classList.add("rotate-svg");
    title5.classList.add("title-bold");
  } else {
    info5.classList.add("hidden-el");
    arrow5.classList.remove("rotate-svg");
    title5.classList.remove("title-bold");
  }
});
