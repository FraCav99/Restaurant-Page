// =============== MENU SECTION ================= //
const menuSection = () => {
    const contentDiv = document.getElementById('content');
    const backgroundDiv = document.querySelector('.background');

    // Apply some styles to background div
    backgroundDiv.style.backgroundImage = '';
    backgroundDiv.style.backgroundColor = 'red';

    // Create the inner-content container
    const innerContent = document.createElement('div');
    innerContent.className = 'inner-content menu';
    contentDiv.appendChild(innerContent);

    // Create inner-content elements
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Our Menu";

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    // Create menu items for menu-container
    for (let i = 0; i < 6; i++) {
        let menuItem = document.createElement('p');
        menuItem.textContent = "Lorem ipsum........... 9.99$";
        menuContainer.appendChild(menuItem);
    }

    // Append element to inner-content div
    innerContent.appendChild(menuTitle);
    innerContent.appendChild(menuContainer);
}

export default menuSection;