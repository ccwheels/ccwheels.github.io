// Hettinger Painting Group — scripts
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let current = 0;
let timer;

function showSlide(i) {
  if (i >= slides.length) current = 0;
  else if (i < 0) current = slides.length - 1;
  else current = i;
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  if (slides[current]) slides[current].classList.add('active');
  if (dots[current]) dots[current].classList.add('active');
}

function changeSlide(step) {
  showSlide(current + step);
  resetTimer();
}

function currentSlide(i) {
  showSlide(i);
  resetTimer();
}

function nextAuto() { showSlide(current + 1); }
function startTimer() { timer = setInterval(nextAuto, 8000); }
function resetTimer() { clearInterval(timer); startTimer(); }

// Pause auto-advance when user hovers slideshow
const slideshow = document.querySelector('.slideshow');
if (slideshow) {
  slideshow.addEventListener('mouseenter', () => clearInterval(timer));
  slideshow.addEventListener('mouseleave', startTimer);
}

if (slides.length > 0) {
  showSlide(0);
  startTimer();
}

// Mobile menu toggle
function toggleMenu() {
  const nav = document.querySelector('nav');
  const body = document.body;
  
  if (!nav) {
    return;
  }
  
  nav.classList.toggle('active');
  body.classList.toggle('menu-open');
  
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.classList.toggle('active');
  }
}

function closeMenu() {
  const nav = document.querySelector('nav');
  const body = document.body;
  
  if (nav) {
    nav.classList.remove('active');
  }
  
  if (body) {
    body.classList.remove('menu-open');
  }
  
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.classList.remove('active');
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Close menu when clicking nav links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeMenu();
    });
  });
  
  // Close menu when clicking outside nav
  document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    if (nav && nav.classList.contains('active')) {
      if (!nav.contains(event.target)) {
        const isMenuButton = event.target.closest('.menu-toggle') || 
                             event.target.closest('#bottom-menu-toggle') ||
                             event.target.closest('.mobile-nav-item');
        if (!isMenuButton) {
          closeMenu();
        }
      }
    }
  });
});

// Footer year
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
