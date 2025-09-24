import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

(() => {

    const sSwiper = new Swiper('.service-container__certificates-swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.custom-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: document.querySelector('.service-container__certificates-next'),
            prevEl: document.querySelector('.service-container__certificates-prev'),
        },
    });

})();
