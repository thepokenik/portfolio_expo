new TypeIt("#simpleUsage", {
    speed: 50,
    waitUntilVisible: true,
}).go();

const chk = document.getElementById('checkboxInput');
const socialLinks = document.querySelectorAll('.socialLink');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');

    socialLinks.forEach(link => {
        const icon = link.querySelector('img');
        if (document.body.classList.contains('dark')) {
            if (link.classList.contains('linkedin')) {
                icon.src = 'img/linkedin2.svg'; // Altere o caminho para a imagem do LinkedIn no modo escuro
            } else if (link.classList.contains('github')) {
                icon.src = 'img/github2.svg'; // Altere o caminho para a imagem do GitHub no modo escuro
            } else if (link.classList.contains('mail')) {
                icon.src = 'img/mail2.svg'; // Altere o caminho para a imagem de e-mail no modo escuro
            } else if (link.classList.contains('expo')) {
                icon.src = 'img/react2.svg'; // Altere o caminho para a imagem de e-mail no modo escuro
            }
            
            
        } else {
            if (link.classList.contains('linkedin')) {
                icon.src = 'img/linkedin.svg'; // Altere o caminho para a imagem do LinkedIn no modo claro
            } else if (link.classList.contains('github')) {
                icon.src = 'img/github.svg'; // Altere o caminho para a imagem do GitHub no modo claro
            } else if (link.classList.contains('mail')) {
                icon.src = 'img/mail.svg'; // Altere o caminho para a imagem de e-mail no modo claro
            } else if (link.classList.contains('expo')) {
                icon.src = 'img/react.svg'; // Altere o caminho para a imagem de e-mail no modo escuro
            }
        }
    });
});

window.sr = ScrollReveal({ reset: true });

sr.reveal('.projects-list', {duration: 1000})
sr.reveal('.section-header', {duration: 1000})
sr.reveal('.project-section', {duration: 1000})
sr.reveal('.project', {duration: 1000})
sr.reveal('.project-img', {duration: 1000})
sr.reveal('.project-img img', {duration: 1000})
sr.reveal('.project-content', {duration: 1000})
sr.reveal('.project-description', {duration: 1000})
sr.reveal('.btn-group button', {duration: 1000})
sr.reveal('.btn', {duration: 1000})
sr.reveal('.btn i', {duration: 1000})





