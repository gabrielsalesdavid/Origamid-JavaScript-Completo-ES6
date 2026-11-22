// Aula 01: Dataset

const h1 = document.querySelector('h1');
Object.prototype.toString.call(h1);

let div = document.querySelector('div');
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]');

div.dataset;

div.dataset.cor;
div.dataset.width;
div.dataset.tempo = 1000;

delete div.dataser.width;

const divs = document.querySelectorAll('[data-anima]');
divs.forEach((div) => {
    div.classList.add(div.dataset.anima);
});

div.dataset.animaScroll;
delete div.dataset.animaScroll;

console.log(tabContent[index].dataset.anime);
console.log(tabContent[index].classList.add('ativo', tabContent[index].dataset.anime));

const direcao = tabContent[index].dataset.anime;

