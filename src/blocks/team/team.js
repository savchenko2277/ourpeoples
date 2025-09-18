import Swiper from "swiper";

(() => {

    const teamSwiper = new Swiper('.team__swiper', {
        slidesPerView: 2.1, 
        spaceBetween: 4,
        breakpoints: {
            768: {
                slidesPerView: 4.6
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 12
            }
        }
    });

})();
