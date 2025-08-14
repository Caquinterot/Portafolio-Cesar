import loader from './components/loader.js';
import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import sendEmail from './components/send_form.js';
import dateUpdater from './helpers/date_updater.js';
import resetToHome from './helpers/reload_page.js';

loader();
resetToHome();
dateUpdater();
parallax();
activeMenu();
sendEmail();

// Carrusel About
function aboutCarouselInit() {
  const track = document.querySelector('.about__carousel-track');
  if (!track) return;
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.about__carousel-btn.next');
  const prevButton = document.querySelector('.about__carousel-btn.prev');
  let currentIndex = 0;
  const slideWidth = slides[0].offsetWidth;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });
}

document.addEventListener('DOMContentLoaded', aboutCarouselInit);
