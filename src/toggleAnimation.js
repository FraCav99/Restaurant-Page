const togglingEffects = (slider, links, burger) => {
        // Toggle menu slide
        slider.classList.toggle('nav-active');

        // Animate each link
        links.forEach((link, index) => {
            link.style.animation ?
            link.style.animation = '' :
            link.style.animation =  `navLinkFade 0.5s forwards ease ${index / 7 + 1}s`;
        });
    
        // Burger menu animation
        burger.classList.toggle('toggle');
}

export default togglingEffects;