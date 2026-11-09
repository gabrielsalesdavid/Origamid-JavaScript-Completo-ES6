// Aula 06: Dimensões e Distancias

const section = document.querySelector('.animais');

section.clientHeight;
section.offsetHeight;
section.scrollHeight;

const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;

console.log(animaisTop);

const rect = section.getBoundingClientRect();
rect.height;
rect.width;
rect.top;

const small = window.matchMedia('(max-width: 600px)');

if (small.matches) {
    console.log('Tela Menor que 600px');
} else {
    console.log('Tela Maior que 600px');
}

window.innerWidth;
window.outerWidth;
window.outerWidth;
window.innerHeight;

window.pageYOffset;
window.pageXOffset;

if (window.innerWidth < 600) {
    console.log('Tela Menor que 600px');
}

const img = document.querySelector('img');
const imgTop = img.offsetTop;

console.log(imgTop);

function somaImagens() {
const imagens = document.querySelectorAll('img');
let soma = 0;
imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
    console.log(imagens.offsetWidth);
});
console.log(soma);
}

window.onload = function() {
    somaImagens();
}

const linkCheck = document.querySelectorAll('a');

linkCheck.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetWidth;

    if (linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, 'Possui acessibilidade');
    } else {
        console.log(link, 'Não possui boa acessibilidade');
    }
});
console.log(linkCheck);

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if (browserSmall) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}