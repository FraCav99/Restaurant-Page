// =============== CONTACT SECTION ================= //
const contactSection = () => {
    const contentDiv = document.getElementById('content');
    const backgroundDiv = document.querySelector('.background');

    backgroundDiv.style.backgroundImage = 'url("./images/restaurant.jpg")';

    const innerContent = document.createElement('div');
    innerContent.className = 'inner-content about';
    contentDiv.appendChild(innerContent);

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = "Contact";

    innerContent.appendChild(contactTitle);
}

export default contactSection;