document.addEventListener("DOMContentLoaded", function() {
  const logoGreen = document.getElementById('logo-green');
  const logoRed = document.querySelector('.line-red');
  const redCircle = document.querySelector('.red');

  // Escuchar el evento 'animationend' en el logo verde
  logoGreen.addEventListener('animationend', () => {
      // Cuando la animación del logo verde termine, agregar la clase para mostrar el círculo rojo
      logoRed.classList.add('show-red');
  });

  // Escuchar el evento 'animationend' en el logo rojo
  logoRed.addEventListener('animationend', () => {
      // Cuando la animación del logo rojo termine, mostrar el círculo rojo y agregar su clase de animación
      redCircle.classList.remove('hidden');
      redCircle.classList.add('red');
  });

  // Agregar la clase de animación al logo verde
  logoGreen.classList.add('line-green');
});

document.addEventListener("DOMContentLoaded", function() {
  const greenBall = document.querySelector('.green');
  greenBall.classList.add('green');
});

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navigation a');

  navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          const sectionId = link.getAttribute('data-section');
          const section = document.getElementById(sectionId);
          section.scrollIntoView({ behavior: 'smooth' });
          
          // Actualizar la clase activa
          navLinks.forEach(navLink => navLink.classList.remove('active'));
          link.classList.add('active');
      });
  });
});

const button = document.querySelector('.button');

button.addEventListener('click', function() {
    button.classList.remove('done');
    button.classList.add('download');
    setTimeout(function() {
        button.classList.remove('download');
        button.classList.add('done');
    }, 3000);
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navigation a');
let header = document.querySelector('header');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 550; // Ajuste de compensación según sea necesario
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animate');

      // Obtener el índice de la sección actual
      let secIndex = [...sections].indexOf(sec);

      // Actualizar los enlaces de navegación activos
      navLinks.forEach((link, index) => {
        if (index === secIndex) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    } else {
      sec.classList.remove('show-animate');
    }
  });

  // Añadir o quitar la clase 'scrolled' al header
  if (top > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

const COLORS = ["#fff2", "#fff4", "#fff7", "#fffc"];

