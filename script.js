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
                icon.src = 'img/linkedin2.svg'; 
            } else if (link.classList.contains('github')) {
                icon.src = 'img/github2.svg'; 
            } else if (link.classList.contains('mail')) {
                icon.src = 'img/mail2.svg'; 
            } else if (link.classList.contains('expo')) {
                icon.src = 'img/react2.svg'; 
            }
            
            
        } else {
            if (link.classList.contains('linkedin')) {
                icon.src = 'img/linkedin.svg'; 
            } else if (link.classList.contains('github')) {
                icon.src = 'img/github.svg';
            } else if (link.classList.contains('mail')) {
                icon.src = 'img/mail.svg'; 
            } else if (link.classList.contains('expo')) {
                icon.src = 'img/react.svg';
            }
        }
    });
});





