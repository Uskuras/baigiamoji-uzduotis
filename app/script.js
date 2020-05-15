"use strict"

// Initializing swiper for reviews section

var reviewsSwiper = new Swiper ('.reviews-slideshow', {

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 280,
      },

      421: {
        slidesPerView: 1,
        spaceBetween: 361,
      },
        768: {
          slidesPerView: 2,
          spaceBetween: 88,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },

        1401: {
          slidesPerView: 3,
          spaceBetween: 120,
        },
      }
});

// Slider

let navBlocks = document.querySelectorAll('.nav-block');
let featureBlocks = document.querySelectorAll('.feature-block');

for (let i = 0; i < navBlocks.length; i++) {
    navBlocks[i].addEventListener('click', function() {
        
        for (let z = 0; z < navBlocks.length; z++) {
            navBlocks[z].classList.remove('active');
        }

        this.classList.add('active');
        // Get data-target value
        let targetSlide = this.dataset.target; 
        // Select feature-block elements by data-slide value
        let slide = document.querySelector('.feature-block[data-slide="'+ targetSlide +'"]');

        for (let x = 0; x < featureBlocks.length; x++) {
            featureBlocks[x].classList.remove('active');
        }

        slide.classList.add('active');
        
    });
}

const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelectorAll('.nav__item');
let isMenuOpen = false;

// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', e => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;
  toggleMenu(isMenuOpen);
});

navLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    isMenuOpen = false;
    toggleMenu(isMenuOpen)
  })
});

// TRAP TAB INSIDE NAV WHEN OPEN
nav.addEventListener('keydown', e => {
  // abort if menu isn't open or modifier keys are pressed
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
  return;
  }
  
  // listen for tab press and move focus
  // if we're on either end of the navigation
  const menuLinks = menu.querySelectorAll('.nav__link');
  if (e.keyCode === 9) {
  if (e.shiftKey) {
    if (document.activeElement === menuLinks[0]) {
    menuToggle.focus();
    e.preventDefault();
    }
  } else if (document.activeElement === menuToggle) {
    menuLinks[0].focus();
    e.preventDefault();
  }
  }
});

function toggleMenu(openMenu) {
  menuToggle.setAttribute('aria-expanded', String(openMenu))
  menu.hidden = !openMenu
  if (nav.classList.contains('nav--open')) {
    nav.classList.remove('nav--open')
  } else {
    nav.classList.add('nav--open')
  }
}