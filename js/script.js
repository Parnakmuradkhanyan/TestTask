/* Navbar */

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Langauge dropdown desktop
const languageToggle = document.getElementById('languageToggle');
languageToggle?.addEventListener('click', e => {
  e.stopPropagation();
  languageToggle.classList.toggle('open');
});

// Langauge dropdown phone
const languageToggleMobile = document.getElementById('languageToggleMobile');
languageToggleMobile?.addEventListener('click', e => {
  e.stopPropagation();
  languageToggleMobile.classList.toggle('open');
});

// Closing dropdown
document.addEventListener('click', () => {
  languageToggle?.classList.remove('open');
  languageToggleMobile?.classList.remove('open');
});

/* People Love Invest Section */