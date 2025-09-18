import Swiper from "swiper";

(() => {

    const offersSwiper = new Swiper('.offers__swiper', {
        slidesPerView: 1.1, 
        spaceBetween: 12,
        breakpoints: {
            768: {
                slidesPerView: 2.5
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 16
            },
            1600: {
                slidesPerView: 3,
                spaceBetween: 24
            }
        }
    });

})();
