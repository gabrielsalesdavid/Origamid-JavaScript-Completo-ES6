// Aula 08: Traversing e Manipulação

const menu = document.querySelector('.menu');

menu.outerHTML;
menu.innerHTML;
menu.innerText;

menu.innerHTML = '<p>Texto</p>';
menu.innerText = '<p>Texto</p>';

const lista = document.querySelector('.animais-lista');

lista.parentElement;
lista.parentElement.parentElement;
lista.previousElementSibling;
lista.nextElementSibling;

lista.children;
lista.children[0];
lista.children[--lista.children.lenght];

lista.querySelectorAll('li');
lista.querySelector('li:last-child');

lista.previousElementSibling;
lista.previousSibling;

lista.firstChild;
lista.childNodes;

const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista);
contato.insertBefore(lista, titulo);
contato.removeChild(titulo);
contato.replaceChild(lista, titulo);

const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Titulo';
novoH1.classList.add('titulo');

animais.appendChild(novoH1);

const titulos = document.querySelector('h1');
const titulos01 = document.querySelector('h1');
const novoTitulo = titulos;

const cloneTitulo = titulos.cloneNode(true);
const contatos = document.querySelector('.contato');
contatos.appendChild(cloneTitulo);

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(ture);
copy.appendChild(cloneMenu);

const dt = document.querySelector('.faq');
const primeiroDt = dt.querySelector('dt');

const proximoDD = primeiroDt.nextElementSibling;

console.log(primeiroDt);

faq.innerHTML = animais.innerHTML;