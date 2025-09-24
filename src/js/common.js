import { throttle } from "./libs/utils";
// import { driveAdaptive } from "./libs/driveAdaptive.js";
import "./polyfills.js";
import "./blocks.js";

/* Тут можно писать код общий для всего проекта и требующий единого пространства имен */

// Ширина скроллбара
document.documentElement.style.setProperty('--sw', `${window.innerWidth - document.documentElement.clientWidth}px`);

// Единицы высоты (ширины) экрана
function updateVH() {
    const { height = window.innerHeight, width = window.innerWidth } = window.visualViewport || {};
    document.documentElement.style.setProperty('--vh', `${height * 0.01}px`);
    // document.documentElement.style.setProperty('--vw', `${width * 0.01}px`);
}

['resize', 'orientationchange'].forEach(event => {
    window.addEventListener(event, throttle(updateVH, 200), { passive: true });
});

updateVH();

// Динамический адаптив
/* new driveAdaptive({
    type: 'max',
    className: 'moved',
    aliases: {
        xxxs: 360,
        xxs: 480,
        xs: 640,
        sm: 780,
        md: 960,
        lg: 1100,
        xlg: 1280,
        xxlg: 1440,
        xxxlg: 1680,
        xxxxlg: 1920
    }
}); */

document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.length > 0) {
            input.classList.add('is-input');
        } else {
            input.classList.remove('is-input');
        }
    });
});

document.querySelectorAll(".accordeon").forEach(accordeon => {
    const accordeonBtn = accordeon.querySelector('.accordeon__btn');
    const accordeonContent = accordeon.querySelector('.accordeon__content');

    accordeonBtn.addEventListener('click', () => {
        accordeon.classList.toggle('active');
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const compareItems = document.querySelectorAll('.compare');

    compareItems.forEach(compare => {
        const afterImg = compare.querySelector('.compare__image--after');
        const divider = compare.querySelector('.compare__divider');

        function move(x) {
            const rect = compare.getBoundingClientRect();
            let pos = ((x - rect.left) / rect.width) * 100;
            pos = Math.max(0, Math.min(100, pos)); // ограничить
            afterImg.style.clipPath = `inset(0 0 0 ${pos}%)`;
            divider.style.left = `${pos}%`;
        }

        // Десктоп — движение мыши
        compare.addEventListener('mousemove', (e) => move(e.clientX));

        // Мобильные — тапы/перетаскивания
        compare.addEventListener('touchstart', (e) => {
            move(e.touches[0].clientX);
        });
        compare.addEventListener('touchmove', (e) => {
            move(e.touches[0].clientX);
        });
    })

});