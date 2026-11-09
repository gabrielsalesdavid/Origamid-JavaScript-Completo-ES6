// Aula 05: Classes e Atributos

const menu = document.querySelector('.menu');

menu.className;
menu.classList;
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile');
menu.classList.remove('ativo');
menu.classList.toggle('ativo');
menu.classList.contains('ativo');
menu.classList.replace('ativo', 'inativo');

const animais = document.querySelector('.animais');

animais.attributes;
animais.attributes[0];

console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');

img.getAttribute('src');
img.getAttribute('alt', 'Texto Alternativo');
img.getAttribute('id');
img.removeAttribute('alt');

img.hasAttribute();

const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
    item.classList.add('ativo');
});

itensMenuforeach((item) => {
    item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');

const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
    const contem = img.hasAttribute('alt');
    console.log(img, contem);
});

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://google.com')

console.log(link);