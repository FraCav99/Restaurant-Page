const createBackgroundDiv = () => {
    const contentDiv = document.getElementById('content');
    const background = document.createElement('div');
    background.classList.add('background');

    contentDiv.append(background);
}

const createNavSlide = () => {
    const contentDiv = document.getElementById('content');

    // Create menu-open div
    const nav = document.createElement('div');
    nav.className = "menu-open nav-active";
    contentDiv.append(nav);

    // Create links container
    const navLinksContainer = document.createElement('ul');
    navLinksContainer.classList.add("menu-links");
    nav.appendChild(navLinksContainer);

    // Create links inside links container
    const menuVoices = ["Home", "About", "Menu", "Contact"];
    menuVoices.forEach((voice) => {
        let link = document.createElement('li');
        link.classList.add("menu-link");
        link.innerText = voice;

        navLinksContainer.append(link);
    });
}

export {
    createBackgroundDiv,
    createNavSlide
};