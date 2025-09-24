import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

(() => {

    const infoSwiper = new Swiper('.info-block__swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: 1, 
        spaceBetween: 24,
        centeredSlides: true,
        
        navigation: {
            nextEl: document.querySelector('.info-block__side-navigation .custom-navigation__next'),
            prevEl: document.querySelector('.info-block__side-navigation .custom-navigation__prev'),
        },

        pagination: {
            el: '.info-block__side-pagination',
            clickable: true,
        }
    });

})();
