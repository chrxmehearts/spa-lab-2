let pageUrls = {
    about: '/index.html?about',
    gallery: '/index.html?gallery',
    contact: '/index.html?contact'
};

function OnStartUp() {
    popStateHandler();
}
OnStartUp();

document.querySelector('#about-link').addEventListener('click', () => {
    let stateObj = { page: 'about' };
    document.title = 'About';
    history.pushState(stateObj, "about", "?about");
    RenderAboutPage();
});

document.querySelector('#contact-link').addEventListener('click', () => {
    let stateObj = { page: 'contact' };
    document.title = 'Contact';
    history.pushState(stateObj, "contact", "?contact");
    RenderContactPage();
});

document.querySelector('#gallery-link').addEventListener('click', () => {
    let stateObj = { page: 'gallery' };
    document.title = 'Gallery';
    history.pushState(stateObj, "gallery", "?gallery");
    RenderGalleryPage();
});

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function RenderAboutPage() {
    document.querySelector('main').innerHTML = `
        <h1 class="title">About Me</h1>
        <p>Jestem studentem i uczę się tworzyć aplikacje SPA w chmurze.</p>
        <p>To jest przykład nawigacji bez przeładowania strony.</p>`;
}

function RenderGalleryPage() {
    document.querySelector('main').innerHTML = `
        <h1 class="title">Gallery</h1>
        <div class="gallery-grid">
            <img src="https://via.placeholder.com/150/0000FF/808080" class="gallery-item">
            <img src="https://via.placeholder.com/150/FF0000/FFFFFF" class="gallery-item">
            <img src="https://via.placeholder.com/150/FFFF00/000000" class="gallery-item">
            <img src="https://via.placeholder.com/150/008000/FFFFFF" class="gallery-item">
            <img src="https://via.placeholder.com/150/000000/FFFFFF" class="gallery-item">
            <img src="https://via.placeholder.com/150/800080/FFFFFF" class="gallery-item">
            <img src="https://via.placeholder.com/150/FFA500/FFFFFF" class="gallery-item">
            <img src="https://via.placeholder.com/150/A52A2A/FFFFFF" class="gallery-item">
            <img src="https://via.placeholder.com/150/808080/000000" class="gallery-item">
        </div>`;
}

function RenderContactPage() {
    document.querySelector('main').innerHTML = `
        <h1 class="title">Contact with me</h1>
        <form id="contact-form" style="display: flex; flex-direction: column; max-width: 300px; margin: 0 auto;">
            <label>Name:</label>
            <input type="text" id="name" required style="margin-bottom: 10px;">
            <label>Email:</label>
            <input type="email" id="email" required style="margin-bottom: 10px;">
            <label>Message:</label>
            <textarea id="message" required style="margin-bottom: 10px;"></textarea>
            <button type="submit">Send</button>
        </form>`;

    setTimeout(() => {
        document.getElementById('contact-form').addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Form submitted! (Dane nie zostały wysłane nigdzie, to tylko demo)');
        });
    }, 0);
}

function popStateHandler() {
    let loc = window.location.href.toString().split(window.location.host)[1];
    if (loc && loc.includes('?contact')) { RenderContactPage(); }
    else if (loc && loc.includes('?gallery')) { RenderGalleryPage(); }
    else if (loc && loc.includes('?about')) { RenderAboutPage(); }
}

window.onpopstate = popStateHandler;