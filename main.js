const menuIcon = document.querySelector('#menu-icon');
const closeIcon = document.querySelector('#close-icon');
const menu = document.querySelector('#menu');

menuIcon.addEventListener('click', function() {
    menu.style.display = 'flex';
});

closeIcon.addEventListener('click', function() {
    menu.style.display = 'none';
});