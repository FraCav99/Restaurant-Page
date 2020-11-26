import {createBackgroundDiv, createNavSlide} from './burgerMenu';
import togglingEffects from './toggleAnimation';

createBackgroundDiv();
createNavSlide();

// Add event listeners
const navLinks = document.querySelectorAll('.menu-links .menu-link');
const headerLinks = document.querySelectorAll('.nav-links .nav-link');
const burger = document.querySelector('.hamburger-menu');
const slideNav = document.querySelector('.menu-open');


// Burger menu
burger.addEventListener('click', () => {
    togglingEffects(slideNav, navLinks, burger);
});


// header links
headerLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log(link.textContent);
    });
});


// slide menu links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        togglingEffects(slideNav, navLinks, burger);
        console.log(link.textContent);
    });
});