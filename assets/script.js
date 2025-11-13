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

// Contact form status message
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    
    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        formStatus.textContent = 'Thank you! We\'ll be in touch soon.';
        formStatus.style.display = 'block';
        formStatus.style.color = '#16a34a';
        contactForm.reset();
      } else {
        formStatus.textContent = 'Oops! There was a problem. Please try again.';
        formStatus.style.display = 'block';
        formStatus.style.color = '#dc2626';
      }
    } catch (error) {
      formStatus.textContent = 'Oops! There was a problem. Please try again.';
      formStatus.style.display = 'block';
      formStatus.style.color = '#dc2626';
    }
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
