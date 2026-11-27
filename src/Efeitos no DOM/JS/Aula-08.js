// Aula 08: Menu Mobile

import outsideClick from 'outsideClick.js';

export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos = ['click', 'touchstart'];

    function openMenu(event) {
        menuList.classList.add('acitve');
        menuButton.classList.add('acitve');
        outsideClick(menuList, ['click', 'touchstart'], () => {
            menuList.classList.remove('active');
            menuButton.classList.remove('active');
        })
    }

    eventos.forEach((evento) => {
        menuButton.addEventListener(evento, openMenu);
    });
}