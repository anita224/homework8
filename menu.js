const menuMobile = document.querySelector('.mobile-menu');
const menuMobileButton = document.querySelector('.mobile-btn');
const menuMobileClose = document.querySelector('.mobile-menu-close');

menuMobileButton.addEventListener('click', () => {
    menuMobile.classList.add('mobile-menu-active');
});
menuMobileClose.addEventListener('click', () => {
    menuMobile.classList.remove('mobile-menu-active');
});