let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slide').length;
const slideWidth = document.querySelector('.slide').offsetWidth;

function moveCarousel() {
    const carousel = document.querySelector('.carousel');
    const offset = -currentSlide * slideWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    moveCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    moveCarousel();
}

document.querySelector('.carousel').addEventListener('transitionend', () => {
    document.querySelector('.carousel').style.transition = 'none';
    moveCarousel();
    setTimeout(() => {
        document.querySelector('.carousel').style.transition = '';
    });
});

document.querySelector('.next-button').addEventListener('click', nextSlide);
document.querySelector('.prev-button').addEventListener('click', prevSlide);

moveCarousel();
