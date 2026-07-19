document.addEventListener('DOMContentLoaded', () => {
  // Menu Mobile Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  const dropdowns = document.querySelectorAll('.dropdown');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
      document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
  }

  // Mobile Dropdown Toggle
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
      if (window.innerWidth <= 992) {
        if (e.target.tagName.toLowerCase() === 'a' && e.target.nextElementSibling && e.target.nextElementSibling.classList.contains('dropdown-menu')) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      }
    });
  });

  // Scroll Animations
  const fadeElements = document.querySelectorAll('.fade-in');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  fadeElements.forEach(element => {
    fadeObserver.observe(element);
  });
});
