// Get elements from DOM
const menuButton = document.querySelector('.hamburger');
const menuBar = document.querySelector('.navBar ul');
const aboutLink = document.getElementById('aboutLink');

// Open/close side nav menu, change hamburger icon styling
function changeMenu() {
  menuButton.classList.toggle('arrow');
  menuBar.classList.toggle('open');
}

// Change nav on hamburger/arrow click
menuButton.addEventListener('click', changeMenu);

// Close menu when 'About' link is clicked
aboutLink.addEventListener('click', changeMenu);