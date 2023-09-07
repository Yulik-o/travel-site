"use strict";

var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".menu");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});