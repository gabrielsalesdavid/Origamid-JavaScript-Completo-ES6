// Aula 03: Seleção de Elementos

const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

const naoExiste = document.getElementById('teste');

const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

const ul = document.getElementsByTagName('ul');

console.log(gridSection[0]);

const animais = document.querySelector('.animais');
const contatos = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

const navItem = primeiroUl.querySelector('li');

const gridSectionAll = document.querySelectorAll('.grid-section');
const listasAll = document.querySelectorAll('ul');
const titulosAll = document.querySelectorAll('.titulo');
const fotosAnimaisAll = document.querySelectorAll('.animais-lista img');

console.log(gridSection[1]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNODE = document.getElementsByClassName('.grid-section');

primeiroUl.classList.add('grid-section');

const gridSectionSelectorAll = document.querySelectorAll('.grid-section');

gridSectionSelectorAll.forEach(function(gridItem, index, array){
    gridItem.classList.add('azul');
    console.log(index);
    console.log(array);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function(item) {
    console.log(item);
});

const img = document.querySelectorAll('img');
console.log(img);

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

const linkinterno = document.querySelectorAll('[href^="#"]');
console.log(linkinterno);

const h2Animais = document.querySelector('.animais-descricao h2');
console.log(h2Animais);

const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[--ultimoP.length]);