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
  // Find the nav element - try multiple selectors
  const nav = document.querySelector('header.navbar nav') || 
              document.querySelector('.navbar nav') ||
              document.querySelector('nav');
  
  if (!nav) {
    console.error('Nav element not found!');
    return;
  }
  
  const isActive = nav.classList.contains('active');
  
  if (isActive) {
    // Close menu
    nav.classList.remove('active');
    document.body.classList.remove('menu-open');
  } else {
    // Open menu
    nav.classList.add('active');
    document.body.classList.add('menu-open');
  }
}

// Close Menu Function
function closeMenu() {
  const nav = document.querySelector('header.navbar nav') || 
              document.querySelector('.navbar nav') ||
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
  console.log('DOM loaded, initializing menu...');
  
  // Close menu when clicking on nav links
  const navLinks = document.querySelectorAll('.nav-links a, .nav-links button');
  console.log('Found nav links:', navLinks.length);
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      console.log('Nav link clicked, closing menu');
      closeMenu();
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const nav = document.querySelector('header.navbar nav') || 
                document.querySelector('.navbar nav') ||
                document.querySelector('nav');
    
    if (nav && nav.classList.contains('active')) {
      const clickedInsideNav = nav.contains(event.target);
      const clickedOnBottomNav = event.target.closest('.mobile-bottom-nav');
      const clickedOnMenuButton = event.target.closest('.mobile-nav-item') && 
                                 (event.target.closest('.mobile-nav-item').textContent.trim().includes('Menu') ||
                                  event.target.closest('.mobile-nav-item').querySelector('i.fa-bars'));
      
      // Don't close if clicking inside nav, on bottom nav, or on menu button
      if (!clickedInsideNav && !clickedOnBottomNav && !clickedOnMenuButton) {
        console.log('Clicking outside, closing menu');
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

  // FAQs expandable functionality
document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.parentElement;
      const isActive = faqItem.classList.contains('active');
      
      // Close all other FAQs
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
        }
      });
      
      // Toggle current FAQ
      if (isActive) {
        faqItem.classList.remove('active');
      } else {
        faqItem.classList.add('active');
      }
    });
  });
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

// FAQs expandable functionality
function initFAQs() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  console.log('FAQs initialized, found questions:', faqQuestions.length);
  
  faqQuestions.forEach(question => {
    // Remove any existing listeners
    const newQuestion = question.cloneNode(true);
    question.parentNode.replaceChild(newQuestion, question);
    
    // Add click listener to the new element
    newQuestion.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const faqItem = this.closest('.faq-item');
      if (!faqItem) return;
      
      const isActive = faqItem.classList.contains('active');
      
      console.log('FAQ clicked, currently active:', isActive);
      
      // Close all other FAQs (optional - remove if you want multiple open)
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
        }
      });
      
      // Toggle current FAQ
      if (isActive) {
        faqItem.classList.remove('active');
        console.log('FAQ closed');
      } else {
        faqItem.classList.add('active');
        console.log('FAQ opened');
      }
    });
  });
}

// Initialize FAQs when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFAQs);
} else {
  // DOM is already ready
  initFAQs();
}

// Also try initializing after a short delay in case script loads before DOM
setTimeout(initFAQs, 100);
