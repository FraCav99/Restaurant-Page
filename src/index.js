import {createBackgroundDiv, createNavSlide} from './burgerMenu';
import togglingEffects from './toggleAnimation';
import deletePrevDiv from './deletePrevDiv';
import homeSection from './home';
import aboutSection from './about';
import menuSection from './menu';
import contactSection from './contact'; 

createBackgroundDiv();
createNavSlide();

// Home section by default
homeSection();

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
        switch (link.textContent) {
            case 'Home':
                deletePrevDiv();
                homeSection();
                break;
            case 'About':
                deletePrevDiv();
                aboutSection();
                break;
            case 'Menu':
                deletePrevDiv();
                menuSection();
                break;
            case 'Contact':
                deletePrevDiv();
                contactSection();
                break;
            default:
                break;
        }
    });
});


// slide menu links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        togglingEffects(slideNav, navLinks, burger);
        switch (link.textContent) {
            case 'Home':
                deletePrevDiv();
                homeSection();
                break;
            case 'About':
                deletePrevDiv();
                aboutSection();
                break;
            case 'Menu':
                deletePrevDiv();
                menuSection();
                break;
            case 'Contact':
                deletePrevDiv();
                contactSection();
                break;
            default:
                break;
        }
    });
});