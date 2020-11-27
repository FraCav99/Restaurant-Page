// =============== ABOUT SECTION ================= //
const aboutSection = () => {
    const contentDiv = document.getElementById('content');
    const backgroundDiv = document.querySelector('.background');

    backgroundDiv.style.backgroundImage = 'url("./images/restaurant.jpg")';

    const innerContent = document.createElement('div');
    innerContent.className = 'inner-content about';
    contentDiv.appendChild(innerContent);

    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = "What's our story?";

    const para = document.createElement('p');
    para.textContent = `
    Since 1969 Lorem ipsum dolor sit amet
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `;

    // Append element to inner-content div
    innerContent.appendChild(aboutTitle);
    innerContent.appendChild(para);
}

export default aboutSection;