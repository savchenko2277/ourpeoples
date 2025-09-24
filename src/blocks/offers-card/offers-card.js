import { setStyle } from "scroll-padlock";

(() => {
    const setModalInfo = () => {
        const modal = document.querySelector('.modal_appointment');
        if (!modal) {
            console.warn('Modal .modal_appointment not found');
            return;
        }

        document.querySelectorAll('.offers-card').forEach(card => {
            const btn = card.querySelector('.offers-card__btn');
            if (!btn) return;

            btn.addEventListener('click', () => {
                // modal.classList.add('active');

                [...card.querySelectorAll('*')].forEach(el => {
                    const names = el.getAttributeNames ? el.getAttributeNames() : Array.from(el.attributes).map(a => a.name);
                    names.forEach(attr => {
                        if (!attr.startsWith('data-appointment')) return;

                        const key = attr.slice('data-appointment-'.length);
                        const target = modal.querySelector(`[data-appointment-${key}]`);
                        if (!target) return;

                        const attrValue = el.getAttribute(attr);
                        const content = (attrValue !== null && attrValue !== '') ? attrValue : el.innerHTML;
                        target.innerHTML = content;
                    });
                });
            });
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setModalInfo);
    } else {
        setModalInfo();
    }
})();
