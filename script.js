let burger = document.querySelector('.header__burger');
let nav = document.querySelector('.header__nav');
let logo = document.querySelector('.header__logo');

burger.addEventListener("click", function (e) {
    e.preventDefault();
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    logo.classList.toggle('active');
})