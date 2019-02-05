const toggleMenu = () => {
  menu.classList.toggle('menu-open');
}

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu());

// change text on contact buttons

displayEmailForm = () => {
  document.querySelector('.email').inHTML = Form();
}

