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

var menuButton = $(".menu-button");
  menuButton.on("click", function(){    
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });