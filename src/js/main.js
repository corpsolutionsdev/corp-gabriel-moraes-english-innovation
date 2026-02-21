(function () {
  'use strict';

  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 600,
      offset: 60,
      once: true,
      easing: 'ease-out-cubic'
    });
  }

  var menuBtn = document.querySelector('.header__menu-btn');
  var nav = document.querySelector('.nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isOpen);
      nav.classList.toggle('is-open');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    document.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        menuBtn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }
})();
