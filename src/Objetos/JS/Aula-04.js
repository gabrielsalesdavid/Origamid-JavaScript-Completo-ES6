// Aula 04: String


const comida = 'Pizza';
const bebida = new String('Água');
const ano = new String(2018);

const frase = 'A melhor comida';

comida.length;
frase.length;

comida[0];
frase[0];
frase[frase.length - 1];

const linguagem = 'JavaScript';

linguagem.charAt(0);
linguagem.charAt(2);
linguagem.charAt(linguagem.length - 1);

const fraseInicial = 'A melhor linguagem é ';
const fraseFinal = 'JavaScript';

const fraseCompleta = fraseInicial.concat(fraseFinal, '!!', '[...]');

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta);
fruta.includes(listaFrutas);

fruta.endsWith('nana');
fruta.startsWith('Ba');
fruta.startsWith('na');

const transacao01 = 'Depósito de cliente';
const transacao02 = 'Depósito de fornecedor';
const transacao03 = 'Taxa de camisas';

transacao01.slice(0, 3);
transacao02.slice(0, 3);
transacao03.slice(0, 3);

transacao01.slice(12);
transacao01.slice(-4);
transacao01.slice(3, 6);

linguagem.substring(3, 5);
linguagem.substring(0, 4);
linguagem.substring(4);
linguagem.substring(-3);

const instrumento = 'Guitarra';

instrumento.indexOf('r');
instrumento.lastIndexOf('r');
instrumento.indexOf('ta');

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '.'));
});

listaPrecos[0].padStart(10, '.');
listaPrecos[0].padStart(10, '.');

frase.repeat(5);

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', ',');


const listasItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listasItens.split(' ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.split('sction');

const sexoCalmeCase = 'Feminino';
const sexoToLowerCase = 'feminino';
const sexoToUpperCase = 'FEMININO';

(sexoCalmeCase.toLowerCase() === 'feminino');
(sexoToLowerCase.toLowerCase() === 'feminino');
(sexoToUpperCase.toLowerCase() === 'feminino');

const valor = ' R$23.00 ';
valor.trim();
valor.trimStart();
valor.trimEnd();

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    }
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
    const totalLimpo = +item.valor.replace('R$ ', '');
    if (item.descricao.slice(0, 4) === 'Taxa') {
        taxaTotal += totalLimpo;
    } else {
        recebimentoTotal += totalLimpo;
    }
});

console.log(taxaTotal);

const transporte = 'Carro;Avião;Trem;ônibus;Bicicleta';

const arrayTransporte = transporte.split(';');
console.log(arrayTransporte);

const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span</li>
                <li><span>Contato</span></li>
                </ul>`;

html = html.split('span').join('a').toLowerCase();

const fraseAno = 'Melhor do ano!';
fraseAno.slice(-1);

let totalTaxa = 0;
const transaction = ['Taxa do banco', ' TAXA DO PÃO', ' taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

transaction.forEach((item) => {
    item = item.toLowerCase();
    item = item.trim();
    item = item.slice(0, 4);

    if(item === 'taxa') {
        totalTaxa++;
    }
});

console.log(totalTaxa);