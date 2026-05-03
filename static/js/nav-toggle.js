/* OpenHealth5G — Mobile Navigation Toggle */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('#main-nav');
    if (!toggle || !nav) return;

    // Set active state on current page
    var path = window.location.pathname;
    var links = nav.querySelectorAll('.nav-link, .dropdown-link');
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute('href');
      if (href === path || href === path + '/') {
        links[i].classList.add('active');
      }
    }

    function toggleMenu() {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('active');
    }

    toggle.addEventListener('click', toggleMenu);

    // Toggle dropdowns
    var dropdowns = document.querySelectorAll('.has-dropdown');
    for (var i = 0; i < dropdowns.length; i++) {
      var trigger = dropdowns[i].querySelector('.nav-dropdown-trigger');
      if (trigger) {
        trigger.addEventListener('click', function(e) {
          e.stopPropagation();
          var expanded = this.getAttribute('aria-expanded') === 'true';
          // Close all other dropdowns
          for (var j = 0; j < dropdowns.length; j++) {
            if (dropdowns[j] !== this.closest('.has-dropdown')) {
              dropdowns[j].classList.remove('active');
              var otherTrigger = dropdowns[j].querySelector('.nav-dropdown-trigger');
              if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
            }
          }
          this.setAttribute('aria-expanded', String(!expanded));
          this.closest('.has-dropdown').classList.toggle('active');
        });
      }
    }

    // Close menu when a nav link is clicked
    var links2 = nav.querySelectorAll('.nav-link:not(.nav-dropdown-trigger), .dropdown-link');
    for (var i = 0; i < links2.length; i++) {
      links2[i].addEventListener('click', function() {
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('active');
        for (var j = 0; j < dropdowns.length; j++) {
          dropdowns[j].classList.remove('active');
          var t = dropdowns[j].querySelector('.nav-dropdown-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Close menu on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('active');
        for (var i = 0; i < dropdowns.length; i++) {
          dropdowns[i].classList.remove('active');
          var t = dropdowns[i].querySelector('.nav-dropdown-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
        if (toggle) toggle.focus();
      }
    });

    // Close menu if window is resized past 768px
    var resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if (window.innerWidth > 768) {
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
          nav.classList.remove('active');
          for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('active');
            var t = dropdowns[i].querySelector('.nav-dropdown-trigger');
            if (t) t.setAttribute('aria-expanded', 'false');
          }
        }
      }, 150);
    });
  });
})();
