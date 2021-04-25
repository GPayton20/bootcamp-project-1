const menuButton = document.querySelector('.hamburger');
const menuBar = document.querySelector('.navBar ul');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('arrow');
  menuBar.classList.toggle('open');
})