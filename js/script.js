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

const people = [
  {
    name: 'Albert Abello',
    job: 'Director of Growth',
    review: 'This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.',
    number: '01',
    photo: 'url(./img/albert-abello.jpg)'
  },
  {
    name: 'Maria Brown',
    job: 'Lead Designer',
    review: 'It’s revolutionized our workflow and made team collaboration 10x easier.',
    number: '02',
    photo: 'url(./img/maria-brown.jpg)'
  },
  {
    name: 'Tom Chen',
    job: 'Marketing Expert',
    review: 'We’ve doubled our campaign reach using Big Invest. Truly a game-changer.',
    number: '03',
    photo: 'url(./img/tom-chen.jpg)'
  },
  {
    name: 'Lucy Smith',
    job: 'Startup Founder',
    review: 'From 0 to 1000 customers in two months. Enough said.',
    number: '04',
    photo: 'url(./img/lucy-smith.jpg)'
  }
];

let currentIndex = 0;

// DOM Elements
const nameElements = document.querySelectorAll('.person-name');
const jobElements = document.querySelectorAll('.person-job');
const reviewElements = document.querySelectorAll('.person-review');
const numberElements = document.querySelectorAll('.number-of-person');
const photoElements = document.querySelectorAll('.person-photo');

// Content updating function
function updateContent(index) {
  const person = people[index];
  nameElements.forEach(el => el.textContent = person.name);
  jobElements.forEach(el => el.textContent = person.job);
  reviewElements.forEach(el => el.textContent = person.review);
  numberElements.forEach(el => el.textContent = person.number);
  photoElements.forEach(el => {
    el.style.backgroundImage = person.photo;
    el.style.backgroundSize = 'cover';
    el.style.backgroundRepeat = 'no-repeat';
    el.style.backgroundPosition = 'center';
  });
}

const prevButtons = document.querySelectorAll(
  '.btn-previous-person, .btn-previous-person-tablet, .btn-previous-person-mobile'
);
const nextButtons = document.querySelectorAll(
  '.btn-next-person, .btn-next-person-tablet, .btn-next-person-mobile'
);

prevButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + people.length) % people.length;
    updateContent(currentIndex);
  });
});

nextButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % people.length;
    updateContent(currentIndex);
  });
});

updateContent(currentIndex);

/* Frequently Asked Questons */ 

const toggleButtons = document.querySelectorAll('.see-answwer-btn');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const questionContainer = button.closest('.question-container');
    const answerText = questionContainer.querySelector('.answer-text');
    const icon = button.querySelector('.see-answer-btn-icon');

    const isVisible = answerText.style.display === 'block';

    if (isVisible) {
      answerText.style.display = 'none';
      icon.style.backgroundImage = "url('./icons/more-info-btn.svg')";
    } else {
      answerText.style.display = 'block';
      icon.style.backgroundImage = "url('./icons/close-info-btn.svg')";
    }
  });
});

