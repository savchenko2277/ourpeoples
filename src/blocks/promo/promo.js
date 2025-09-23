import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

(() => {

    new Swiper('.promo__swiper', {
        modules: [Navigation, Pagination, Autoplay, EffectFade],
        slidesPerView: 1, 
        spaceBetween: 0,
        effect: 'fade',
        loop: true,
        allowTouchMove: false,
        fadeEffect: {
            crossFade: true,

        },
        navigation: {
            nextEl: document.querySelector('.promo .custom-navigation__next'),
            prevEl: document.querySelector('.promo .custom-navigation__prev'),
        },
        pagination: {
            el: '.promo .swiper-pagination',
            clickable: true,
        }
    });

})();
