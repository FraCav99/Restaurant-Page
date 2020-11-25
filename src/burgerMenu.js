const navSlide = () => {
    const burger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.menu-open');
    const navLinks = nav.querySelectorAll('.nav-links .nav-link');

    burger.addEventListener('click', () => {
        // Toggle menu slide
        nav.classList.toggle('nav-active');

        // Animate each link
        navLinks.forEach((link, index) => {
            link.style.animation ?
            link.style.animation = '' :
            link.style.animation =  `navLinkFade 0.5s forwards ease ${index / 7 + 1}s`;
        });

        // Burger menu animation
        burger.classList.toggle('toggle');
    });
}

export default navSlide;