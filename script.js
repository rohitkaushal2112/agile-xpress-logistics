(function () {
  'use strict';

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', open);
      menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  // Close menu when clicking a nav link (anchor)
  var navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        if (menuToggle) {
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.setAttribute('aria-label', 'Open menu');
        }
        document.body.style.overflow = '';
      }
    });
  });

  // Smooth scroll for anchor links (same page)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Hero carousel: cycle background slides with dot indicators
  var heroSlides = document.querySelectorAll('.hero-slide');
  var heroDots = document.querySelectorAll('.hero-dot');
  if (heroSlides.length > 0) {
    var currentSlide = 0;
    function goToSlide(idx) {
      heroSlides[currentSlide].classList.remove('hero-slide-active');
      if (heroDots.length) heroDots[currentSlide].classList.remove('hero-dot-active');
      currentSlide = idx % heroSlides.length;
      heroSlides[currentSlide].classList.add('hero-slide-active');
      if (heroDots.length) heroDots[currentSlide].classList.add('hero-dot-active');
    }
    setInterval(function () { goToSlide(currentSlide + 1); }, 5000);
    heroDots.forEach(function(dot, i) {
      dot.addEventListener('click', function() { goToSlide(i); });
    });
  }

  // Optional: form submit handling (show message if Formspree redirect is not used)
  var quoteForm = document.getElementById('quote-form');
  var contactForm = document.getElementById('contact-form');

  function handleFormSubmit(form, successMessage) {
    if (!form) return;
    form.addEventListener('submit', function (e) {
      // Let form submit normally to Formspree; they will redirect or show their own message.
      // If you want to use fetch instead and show a custom message, uncomment below and
      // prevent default, then send via fetch and display successMessage.
      // e.preventDefault();
      // var formData = new FormData(form);
      // fetch(form.action, { method: 'POST', body: formData }).then(function() {
      //   form.innerHTML = '<p class="form-success">' + successMessage + '</p>';
      // });
    });
  }

  handleFormSubmit(quoteForm, 'Thank you! We will get back to you with a quote soon.');
  handleFormSubmit(contactForm, 'Thank you! We have received your message and will respond shortly.');
})();
