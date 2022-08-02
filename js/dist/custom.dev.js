"use strict";

function toggleMenu() {
  var toggleMenu = document.querySelector('.toggleMenu'); // const menu = document.querySelector('.menu');

  var navLinks = document.querySelector('.navLinks');
  var btns = document.querySelector('.btns'); // const toggleMenu = document.querySelector('.toggleMenu');

  toggleMenu.classList.toggle("active"); // menu.classList.toggle("active");

  navLinks.classList.toggle("active");
  btns.classList.toggle("active");
}