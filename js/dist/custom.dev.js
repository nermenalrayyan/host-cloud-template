"use strict";

function toggleMenu() {
  var toggleMenu = document.querySelector('.toggleMenu');
  var navLinks = document.querySelector('.navLinks');
  var btns = document.querySelector('.btns');
  toggleMenu.classList.toggle("active");
  navLinks.classList.toggle("active");
  btns.classList.toggle("active");
}