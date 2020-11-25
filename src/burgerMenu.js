const navSlide = () => {
    const burger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.menu-open');

    burger.addEventListener('click', () => {
        burger.classList.toggle('nav-active');
    });
}

export default navSlide;