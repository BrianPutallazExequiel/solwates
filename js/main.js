document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.header__nav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});