// =============== MENU SECTION ================= //
const menuSection = () => {
    const contentDiv = document.getElementById('content');
    const backgroundDiv = document.querySelector('.background');

    backgroundDiv.style.backgroundImage = 'url("./images/restaurant.jpg")';

    const innerContent = document.createElement('div');
    innerContent.className = 'inner-content about';
    contentDiv.appendChild(innerContent);

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Menu";

    innerContent.appendChild(menuTitle);
}

export default menuSection;