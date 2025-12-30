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

// Hamburger Menu Toggle Function (works from bottom nav)
function toggleMenu() {
  // Try multiple selectors to find the nav
  const nav = document.querySelector('.navbar nav') || 
              document.querySelector('header.navbar nav') ||
              document.querySelector('nav');
  
  console.log('toggleMenu called, nav found:', nav); // Debug
  
  if (!nav) {
    console.error('Nav element not found!');
    return;
  }
  
  const isActive = nav.classList.contains('active');
  
  if (isActive) {
    nav.classList.remove('active');
    document.body.classList.remove('menu-open');
  } else {
    nav.classList.add('active');
    document.body.classList.add('menu-open');
  }
  
  console.log('Menu toggled, active:', !isActive); // Debug
}

// Close Menu Function
function closeMenu() {
  const nav = document.querySelector('.navbar nav') || 
              document.querySelector('header.navbar nav') ||
              document.querySelector('nav');
  
  if (nav) {
    nav.classList.remove('active');
  }
  
  if (document.body) {
    document.body.classList.remove('menu-open');
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing menu...'); // Debug
  
  // Close menu when clicking on nav links
  const navLinks = document.querySelectorAll('.nav-links a, .nav-links button');
  console.log('Found nav links:', navLinks.length); // Debug
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      console.log('Nav link clicked, closing menu'); // Debug
      closeMenu();
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const nav = document.querySelector('.navbar nav') || 
                document.querySelector('header.navbar nav') ||
                document.querySelector('nav');
    
    if (nav && nav.classList.contains('active')) {
      const clickedInsideNav = nav.contains(event.target);
      const clickedOnBottomNav = event.target.closest('.mobile-bottom-nav');
      const clickedOnMenuButton = event.target.closest('.mobile-nav-item') && 
                                 (event.target.closest('.mobile-nav-item').textContent.trim().includes('Menu') ||
                                  event.target.closest('.mobile-nav-item').querySelector('i.fa-bars'));
      
      // Don't close if clicking inside nav, on bottom nav, or on menu button
      if (!clickedInsideNav && !clickedOnBottomNav && !clickedOnMenuButton) {
        console.log('Clicking outside, closing menu'); // Debug
        closeMenu();
      }
    }
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
  
  // Close menu when window is resized to desktop size
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
});

// Footer year
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
