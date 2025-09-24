import { setStyle } from "scroll-padlock";

(() => {

    const modals = document.querySelectorAll('.modal');
    const buttons = document.querySelectorAll('[data-modal]');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modal);
            modal.classList.add('active');
            setStyle();
            document.body.classList.add('scroll-padlock');
        });
    });

    modals.forEach(modal => {
        const modalBtn = modal.querySelector('[data-modal-close]');

        modalBtn?.addEventListener('click', () => {
            setStyle();
            document.body.classList.remove('scroll-padlock');
            modal.classList.remove('active');
        });

        modal.addEventListener('click', (e) => {
            if (!e.target.closest('.modal__content')) {
                modal.classList.remove('active');
                setStyle();
                document.body.classList.remove('scroll-padlock');
            }
        });
    });

})();
