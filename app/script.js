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