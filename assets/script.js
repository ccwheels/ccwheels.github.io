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
  slides[current].classList.add('active');
  dots[current].classList.add('active');
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

showSlide(0);
startTimer();

// Mobile menu toggle - more robust version
function toggleMenu() {
  const nav = document.querySelector('nav');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (nav && menuToggle) {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
  }
} 

function closeMenu() {
  const nav = document.querySelector('nav');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (nav && menuToggle) {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
  }
}


// Also add event listener as backup
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleMenu();
    });
  }
  
  // Close menu when clicking nav links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeMenu();
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar');
    if (navbar && nav && !navbar.contains(event.target) && nav.classList.contains('active')) {
      closeMenu();
    }
  });
});

// Contact form - FormSubmit handles submission
// Form will redirect to FormSubmit's thank you page after submission

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
