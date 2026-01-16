const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: 6, 
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 20 }, // mobile
    768: { slidesPerView: 3, spaceBetween: 25 }, // tablet
    1024: { slidesPerView: 4, spaceBetween: 30 } // desktop
  }
});