import { Swiper } from "swiper";


(() => {

    const articlesSwiper = new Swiper('.articles__swiper', {
        slidesPerView: 1.15, 
        spaceBetween: 24,
        centeredSlides: false,
        breakpoints: {
            768: {
                slidesPerView: 2.33,
                centeredSlides: false
            },
            1024: {
                slidesPerView: 3,
                centeredSlides: false
            }
        }
    });

})();
