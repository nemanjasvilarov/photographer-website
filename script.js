const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(lnk =>
    lnk.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
    }));


