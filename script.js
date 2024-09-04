// theme
let theme = document.querySelector('#theme');
theme.onclick = () => {
    // if(theme) {
    //     theme.classList.toggle('bxs-sun');
    //     document.querySelector('body').classList.toggle('dark');
    // } else {
        //     theme.classList.toggle('bxs-moon');
        // }
    theme.classList.toggle('bxs-sun');
    document.querySelector('body').classList.toggle('dark');
}
// menubar
let menu = document.querySelector('#menu');
menu.onclick = () => {
    menu.classList.toggle('active');
    menu.classList.toggle('bx-x');
    document.querySelector('header').classList.toggle('active');
  }
  
// Sticky
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0){
        header.classList.add('sticky');
        menu.classList.remove('bx-x');
        header.classList.remove('active');
    } else {
        header.classList.remove('sticky');
    }
    }

)

const slides = document.querySelectorAll('.home-slide');
const prevButton = document.querySelector('.left-button');
const nextButton = document.querySelector('.right-button');
let currentIndex = 0;
const totalSlides = slides.length;

function updateSlides() {
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlides();
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlides();
}

// Event listeners for buttons
nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

// Auto slide every 5 seconds
setInterval(showNextSlide, 5000);

// Initial setup
updateSlides();
