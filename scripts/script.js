// JavaScript Document
console.log("hi");

const searchToggle = document.querySelector('.search-toggle');
const searchDesktop = document.querySelector('.search-desktop');

searchToggle.addEventListener('click', () => {
    searchDesktop.classList.toggle('visible');
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 1200) {
    searchDesktop.classList.remove('visible');
  }
})

// HAMBURGER MENU
const hamburger = document.querySelector('header button'); // hamburger streepjes
const nav = document.querySelector('nav');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburger.classList.toggle('open');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  hamburger.classList.remove('open');
  overlay.classList.remove('active');
});


// 2e pagina menu
const allDetails = document.querySelectorAll('nav details');

allDetails.forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      // Sluit alle andere details
      allDetails.forEach((other) => {
        if (other !== detail) {
          other.removeAttribute('open');
        }
      });
    }
  });
});

// ARTICLES SHOWEN OP KLIK
const menuItems = document.querySelectorAll('.stappen-menu li');
const articles = document.querySelectorAll('.items article');
const details = document.querySelector('.stappen-menu');

// standaard: eerste artikel zichtbaar
articles[0].classList.add('active');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const articleNumber = item.getAttribute('data-article');
    
    articles.forEach(article => {
      if (article.getAttribute('data-article') === articleNumber) {
        article.classList.add('active');
      } else {
        article.classList.remove('active');
      }
    });
    details.removeAttribute('open');
  });
});

