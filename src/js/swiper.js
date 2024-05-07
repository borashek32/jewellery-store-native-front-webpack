import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiperPromo = new Swiper('#swiper-promo', {
  lazy: true,
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>'
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      const preloader = this.slides[this.activeIndex].querySelector('.swiper-lazy-preloader');
      preloader.style.display = 'flex';

      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    },
  },
})

const swiperAdv = new Swiper('#swiper-adv', {
  direction: 'horizontal',
  loop: true,
})
