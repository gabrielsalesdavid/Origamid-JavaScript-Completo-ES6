// Aula 05: Number & Math

const ano = 2018;
const preco = new Number(99);

Number.isNaN(NaN);
Number.isNaN(4 + 5);

Number.isInteger(20);
Number.isInteger(23.6);

parseFloat('99.50');
Number.parseFloat('99.50');
Number.parseFloat('100 Reais');
Number.parseFloat('R$ 100');

parseInt('99.50', 10);
parseInt(5.43434355555, 10);
Number.parseInt('100 Reais', 10);

preco.toFixed();
+preco.toFixed(2);

(99.99).toFixed();

preco.toString();

preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

Math.abs(-5.5);
Math.ceil(4.8334);
Math.ceil(4.3);
Math.floor(4.8334);
Math.floor(4.3);
Math.round(4.8334);
Math.round(4.3);

Math.PI;
Math.E;
Math.LN10;

Math.max();
Math.min();

Math.random();
Math.floor(Math.random() * 100);
Math.floor(Math.random() * 500);

Math.floor(Math.random() * (72 - 32 + 1) + 32) + 12;
Math.floor(Math.random() * (max - min + 1) + min);

const  aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(aleatorio);

const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumeros);
console.log(numeroMaximo);

const listaPrecos = [
    'R$ 59,99', 'R$100,222',
    'R$ 230 ', 'r$  200'
];

function limparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);
    return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
    soma += limparPreco(preco);
});

console.log(`pt-BR ${style, 'currency', currency, 'BRL'}`);

limparPreco(listaPrecos[0]);