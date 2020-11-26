// =============== ABOUT SECTION ================= //
const aboutSection = () => {
    const contentDiv = document.getElementById('content');
    const backgroundDiv = document.querySelector('.background');

    backgroundDiv.style.backgroundImage = 'url("./images/restaurant.jpg")';

    const innerContent = document.createElement('div');
    innerContent.className = 'inner-content about';
    contentDiv.appendChild(innerContent);

    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = "About";

    innerContent.appendChild(aboutTitle);
}

export default aboutSection;