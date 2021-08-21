const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  
  speed: 2000,
 /* effect: "flip",*/
  grabCursor: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});