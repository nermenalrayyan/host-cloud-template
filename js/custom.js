function toggleMenu() {
  const toggleMenu = document.querySelector('.toggleMenu');
  // const menu = document.querySelector('.menu');
  const navLinks = document.querySelector('.navLinks');
  const btns = document.querySelector('.btns');
  // const toggleMenu = document.querySelector('.toggleMenu');
  
  toggleMenu.classList.toggle("active");
  // menu.classList.toggle("active");
  navLinks.classList.toggle("active");
  btns.classList.toggle("active");
}