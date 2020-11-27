// =============== CONTACT SECTION ================= //
const contactSection = () => {
    const contentDiv = document.getElementById('content');
    const backgroundDiv = document.querySelector('.background');

    // Apply some styles to background div
    backgroundDiv.style.backgroundImage = '';
    backgroundDiv.style.backgroundColor = 'red';

    // Create the inner-content container
    const innerContent = document.createElement('div');
    innerContent.className = 'inner-content contact';
    contentDiv.appendChild(innerContent);

    // Create inner-content elements
    const contactTitle = document.createElement('h1');
    contactTitle.textContent = "Contact Us";

    const form = document.createElement('form');
    const email = document.createElement('input');
    email.type = 'email';
    email.placeholder = 'Email@email.com';
    form.appendChild(email);

    const message = document.createElement('textarea');
    message.placeholder = 'Your message';
    message.rows = '10';
    message.cols = '30';
    form.appendChild(message);

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Submit';
    form.appendChild(submitBtn);

    // Append element to inner-content div
    innerContent.appendChild(contactTitle);
    innerContent.appendChild(form);
}

export default contactSection;