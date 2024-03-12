
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const loader = document.querySelector(".loader")
export const loadBtn = document.querySelector(".load-button")


export function showLoader() {
    loader.classList.remove("is-hide")
}

export function hideLoader() {
    loader.classList.add("is-hide")
}
export function showMessage(message) {
    const msgOptions = {
        message,
        messageSize: '16px',
        messageLineHeight: '24px',
        messageColor: '#fff',

        backgroundColor: '#EF4040',
        progressBarColor: '#B51B1B',

        theme: 'dark',
        position: 'topRight',
        class: 'message',
    };
    iziToast.show(msgOptions);
}

export function showLoadBtn() {
    loadBtn.classList.remove("is-hide")
}

export function hideLoadBtn() {
    loadBtn.classList.add("is-hide")
}


