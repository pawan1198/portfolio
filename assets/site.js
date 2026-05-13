/* site.js — shared interactions */
(function () {
  'use strict';

  // Progress bar
  const bar = document.getElementById('progress-bar');
  const btt = document.getElementById('back-to-top');

  window.addEventListener('scroll', function () {
    const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (bar) bar.style.width = Math.min(pct, 100) + '%';
    if (btt) btt.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });

  if (btt) {
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Fade-up on scroll
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(function (el) {
    observer.observe(el);
  });

})();
