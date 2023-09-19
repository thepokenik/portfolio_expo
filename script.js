//<!-- ============== Written Animation ================ -->
new TypeIt("#simpleUsage", {
    speed: 50,
    waitUntilVisible: true,
}).go();


//<!-- ============== Dark/White Theme ================ -->
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


//<!-- ============== Scroll Reveal================ -->

// window.sr = ScrollReveal({ reset: true });

// sr.reveal('.projects-list', {duration: 1000})
// sr.reveal('.section-header', {duration: 1000})
// sr.reveal('.project-section', {duration: 1000})
// sr.reveal('.project', {duration: 1000})
// sr.reveal('.project-img', {duration: 1000})
// sr.reveal('.project-img img', {duration: 1000})
// sr.reveal('.project-content', {duration: 1000})
// sr.reveal('.project-description', {duration: 1000})
// sr.reveal('.btn-group button', {duration: 1000})
// sr.reveal('.btn', {duration: 1000})
// sr.reveal('.btn i', { duration: 1000 })


//<!-- ============== Scroll Bar================ -->
const checkboxInput = document.getElementById('checkboxInput');

checkboxInput.addEventListener('change', function () {
  const isDarkMode = checkboxInput.checked;

  // Função para atualizar a cor da barra de rolagem com base no estado do switch
  function updateScrollbarColor() {
    const scrollbarThumbColor = isDarkMode ? 'black' : '#6bdb43';

    // Aplicar a cor à barra de rolagem
    document.documentElement.style.setProperty('--scrollbar-thumb-color', scrollbarThumbColor);
  }

  // Chame a função para atualizar a cor da barra de rolagem quando o switch for alterado
  updateScrollbarColor();
});

// Execute a função para configurar a cor inicial com base no estado inicial do switch
updateScrollbarColor();
