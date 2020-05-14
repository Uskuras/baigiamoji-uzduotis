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