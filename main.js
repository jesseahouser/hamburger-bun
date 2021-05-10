const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', toggleActive);
navMenu.addEventListener('click', toggleActive);

function toggleActive(e) {
  e.preventDefault();
  menuBtn.classList.toggle('active'); // toggles .active on and off
  navMenu.classList.toggle('active'); // toggles .active on and off
}

