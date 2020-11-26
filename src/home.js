// =============== HOME SECTION ================= //
const homeSection = () => {
    const contentDiv = document.getElementById('content');
    const backgroundDiv = document.querySelector('.background');

    // Set background image
    backgroundDiv.style.backgroundImage = 'url("./images/dish.jpg")';

    // Create the element "inner-content"
    const innerContent = document.createElement('div');
    innerContent.className = 'inner-content home';
    contentDiv.appendChild(innerContent);

    // Create inner-content elements
    const homeTitle = document.createElement('h1');
    homeTitle.textContent = "Home";

    innerContent.appendChild(homeTitle);
}

export default homeSection;