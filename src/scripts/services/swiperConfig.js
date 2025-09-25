export const swiperHero = new Swiper('#swiperHero', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
export const swiperFeaturedCollection = new Swiper('#featuredCollection', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
