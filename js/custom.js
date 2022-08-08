function toggleMenu() {
  const toggleMenu = document.querySelector('.toggleMenu');
  const navLinks = document.querySelector('.navLinks');
  const btns = document.querySelector('.btns');
  
  toggleMenu.classList.toggle("active");
  navLinks.classList.toggle("active");
  btns.classList.toggle("active");
}