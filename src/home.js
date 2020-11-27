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
    homeTitle.textContent = "Carlo's";

    const subTitle = document.createElement('h2');
    subTitle.textContent = "Since 1969";

    const subTitle3 = document.createElement('h3');
    subTitle3.textContent = "We deliver you the finest food!";

    // Append element to inner-content div
    innerContent.appendChild(homeTitle);
    innerContent.appendChild(subTitle);
    innerContent.appendChild(subTitle3);
}

export default homeSection;