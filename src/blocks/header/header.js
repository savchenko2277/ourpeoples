(() => {

    const header = document.querySelector('.header');

    const headerMobileColumnLeft = header.querySelector('.header__mobile-column_left');
    const headerMobileColumnRight = header.querySelector('.header__mobile-column_right');
    const headerTopContainer = header.querySelector('.header__top-container');

    const headerList = header.querySelector('.header__list');
    const headerTopMobileItems = headerTopContainer.querySelectorAll('.header__top_in-mobile');
    const headerLogo = header.querySelector('.header__logo');
    const headerBurger = header.querySelector('.header__burger');

    const headerAccordeons = header.querySelectorAll('.header__accordeon');

    window.addEventListener('scroll', () => {
        header.classList.toggle('is-scroll', window.scrollY > 0);
    });

    window.addEventListener('resize', () => {
        transferItems();
    });

    const transferItems = () => {
        if (window.matchMedia('(max-width: 1100px)').matches) {
            headerMobileColumnLeft.append(headerList);
            headerMobileColumnRight.append(...headerTopMobileItems);
        } else {
            headerTopContainer.append(...headerTopMobileItems);
            headerLogo.after(headerList);
        }
    }

    headerAccordeons.forEach(accordeon => {
        const accordeonBtn = accordeon.querySelector('.header__accordeon-btn');

        accordeonBtn.addEventListener('click', (e) => {
            if (!accordeon.classList.contains('active')) {
                headerAccordeons.forEach(accordeon => {
                    if (accordeon !== this) {
                        accordeon.classList.remove('active');
                    }
                })
                accordeon.classList.add('active');
            } else {
                accordeon.classList.remove('active');
            }

            e.preventDefault();

        })
    })

    transferItems();

    headerBurger.addEventListener('click', () => {
        if(header.classList.contains('is-open')) {
            header.classList.remove('is-open');
        } else {
            header.classList.add('is-open');
        }
    })

})();
