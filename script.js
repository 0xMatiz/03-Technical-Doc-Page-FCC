// Obtener elementos que requieren traducción
const translateHeader = document.querySelector('.translate-header');
const translateSections = document.querySelectorAll('.translate-section');

// Definir los textos en inglés y español
const translations = {
  en: {
    header: 'Polkadot - Technical Documentation',
    sectionOne: 'Introduction',
    sectionTwo: 'Getting Started',
    sectionThree: 'Polkadot Architecture',
    sectionFour: 'Consensus Mechanisms',
    sectionFive: 'Tools and Resources',
  },
  es: {
    header: 'Polkadot - Documentación Técnica',
    sectionOne: 'Introducción',
    sectionTwo: 'Empezando',
    sectionThree: 'Arquitectura de Polkadot',
    sectionFour: 'Mecanismos de Consenso',
    sectionFive: 'Herramientas y Recursos',
  },
};

// Función para traducir el contenido según el idioma seleccionado
function translateContent(lang) {
  translateHeader.textContent = translations[lang].header;

  translateSections.forEach((section, index) => {
    section.querySelector('.translate-header').textContent = translations[lang][`section${index + 1}`];
  });
}

// Evento para cambiar el idioma a inglés
document.getElementById('lang-en').addEventListener('click', () => {
  translateContent('en');
});

// Evento para cambiar el idioma a español
document.getElementById('lang-es').addEventListener('click', () => {
  translateContent('es');
});

// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
