(() => {

    const cookies = document.querySelector('.cookies');

    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/`;
    }

    const getCookie = (name) => {
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : null;
    }

    document.addEventListener("DOMContentLoaded", () => {

        if (!getCookie("cookiesAccepted")) {
            cookies.classList.add('active');
        }
    });

    cookies.addEventListener('click', (e) => {
        if (e.target.closest('.cookies__btn')) {
            cookies.classList.remove('active');
            setCookie('cookiesAccepted', 'true', 365);
        } else if (e.target.closest('.cookies__close')) {
            cookies.classList.remove('active');
        }
    });

})();
