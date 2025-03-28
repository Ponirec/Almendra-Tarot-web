const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const carouselContainer = document.querySelector('.carousel-container');

let counter = 0;
const size = carouselImages[0].clientWidth;

// Set initial position
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button listeners
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Automatic sliding
let intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds

function nextSlide() {
    if (counter >= carouselImages.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Pause on hover
carouselContainer.addEventListener('mouseover', () => {
    clearInterval(intervalId);
});

carouselContainer.addEventListener('mouseout', () => {
    intervalId = setInterval(nextSlide, 3000);
});

// Reset transition on transition end
carouselSlide.addEventListener('transitionend', () => {
    carouselSlide.style.transition = "none";
});
