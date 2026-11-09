// Aula 04: ForEach e Arrow Function

const imgs = document.querySelectorAll('img');

imgs.forEach(function(item) {
    console.log(item);
});

imgs.forEach(function(valorAtual, index, array) {
    console.log(valorAtual);
    console.log(index);
    console.log(array);
});

const titulos = document.getElementsByClassName('titulo');
const tituloArray = Array.from(titulos);

titulosArray.forEach(function(item) {
    console.log(item);
});

imgs.forEach((item) => {
    console.log(item);
});

const paragrafo = document.querySelectorAll('p');
console.log(paragrafo);

paragrafo.forEach((item) => {
    console.log(item);
});

paragrafo.forEach((item) => {
    console.log(item.innerText);
});