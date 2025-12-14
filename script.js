const mobileMenu = document.querySelector('.mobile-menu');
const pageContent = document.querySelector('main');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');


openMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    mobileMenu.toggleAttribute('hidden');
    pageContent.toggleAttribute('inert');
    document.body.classList.toggle('menu-open');
}