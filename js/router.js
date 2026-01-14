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
        <p>Jestem studentem WSB MERITO i uczę się tworzyć aplikacje SPA w chmurze.</p>
        <p>To jest przykład nawigacji bez przeładowania strony</p>
        <p>Napisane na Vanilla JavaScript, HTML5, i CSS3.</p>`;
}

function RenderGalleryPage() {
    document.querySelector('main').innerHTML = `
        <h1 class="title">Photo Gallery</h1>
        <div class="gallery-grid">
            <img src="https://picsum.photos/id/1018/400/300" class="gallery-item" alt="Nature">
            <img src="https://picsum.photos/id/1015/400/300" class="gallery-item" alt="River">
            <img src="https://picsum.photos/id/1019/400/300" class="gallery-item" alt="Tech">
            <img src="https://picsum.photos/id/103/400/300" class="gallery-item" alt="Feet">
            <img src="https://picsum.photos/id/1025/400/300" class="gallery-item" alt="Dog">
            <img src="https://picsum.photos/id/1039/400/300" class="gallery-item" alt="Waterfall">
            <img src="https://picsum.photos/id/1043/400/300" class="gallery-item" alt="Architecture">
            <img src="https://picsum.photos/id/1050/400/300" class="gallery-item" alt="Structure">
            <img src="https://picsum.photos/id/106/400/300" class="gallery-item" alt="Lights">
        </div>`;
}

function RenderContactPage() {
    document.querySelector('main').innerHTML = `
        <h1 class="title">Contact Me</h1>
        <form id="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="your@email.com" required>
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
            
            <button type="submit">Send Message</button>
        </form>`;

    setTimeout(() => {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                alert('Message sent successfully! (Demo mode)');
                form.reset();
            });
        }
    }, 0);
}

function popStateHandler() {
    let loc = window.location.href.toString().split(window.location.host)[1];
    if (loc && loc.includes('?contact')) { RenderContactPage(); }
    else if (loc && loc.includes('?gallery')) { RenderGalleryPage(); }
    else if (loc && loc.includes('?about')) { RenderAboutPage(); }
}

window.onpopstate = popStateHandler;