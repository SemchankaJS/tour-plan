const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect: 'flip',
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

$('.parallax-window').parallax({imageSrc: 'img/newslatter-bg.jpeg'});

const menuButton = document.querySelector('.menu-button');
menuButton = addEventListener("click", function () {
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visibile');
});