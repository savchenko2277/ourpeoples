import { Swiper } from "swiper";


(() => {

    const articlesSwiper = new Swiper('.articles__swiper', {
        slidesPerView: 1.07, 
        spaceBetween: 24,
        centeredSlides: true,
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
