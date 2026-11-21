// Aula 07: Array e Iteração

const carros = [
    'Ford',
    'Fiat',
    'Honda'
];

carros.forEach(function (item, index, array) {
    console.log(item.toUpperCase());
});

carros.forEach((item, index, array) => {
    console.log(item.toUpperCase());
});

const li = document.querySelectorAll('li');

li.forEach(i => i.classList.add('ativa'));

li.forEach(function (item) {
    item.classList.add('ativa');
});

carros.forEach((item, index, array) => {
    array[index] = `Carro ${item}`;
    array[index] = 'Carro ' + item;
});

const newCarros = carros.map((item) => {
    return 'Carro ' + item;
});

const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map(n => n * 3);

const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    }
];

const tempoAulas = aulas.map(aula => aula.min);

const total = aulas.reduce((acumulaor, atual) => {
    return acumulador + atual;
});

const tot = aulas.reduce((ActiveXObject, cur) => acc + cur, 100);

const maiorValor = numeros.reduce((anterior, atual) => {
    return anterior < atual ? atual : anterior;
});

/*
aulas.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
    {}[0] = 'HTML 1';
    return {0: 'HTML 1'};
}, {})
*/

const frutas = [
    'Banana',
    'Pêra',
    'Uva'
];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

function maiorQue100(numero) {
    return numero > 100;
}

const numeros01 = [
    0, 43, 22, 88, 101, 2
]

const temMaior = numeros01.some(maiorQue100);

const temUva = frutas.some((fruta) => {
    return fruta === 'Uva';
});

const arraysCheias = frutas.every((fruta) => {
    return fruta;
});

const maiorQue3 = numeros.every(x => x > 3);

const arrayLimpa = frutas.filter((fruta) => {
    return fruta;
});

const cursos = document.querySelectorAll('.curso');

const arrayCursos = Array.from(cursos);

const objetoCurso = arrayCursos.map((curso) => {
    const titulo = curso.querySelector('h1').innerText;
    const descricao = curso.querySelector('p').innerText;
    const aulas = curso.querySelector('.aulas').innerText;
    const horas = curso.querySelector('.horas').innerText;
    return {
        titulo,
        descricao,
        aulas,
        horas
    }
});

const maioresQue100 = numeros.filter(n => n > 100);

const instrumentos = [
    'Guitarra',
    'Baixo',
    'Bateria',
    'Teclado'
];

const contemBaixo = instrumentos.some((item) => {
    return item === 'Baixo';
});

const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    }
]

const valorTotal = compras.reduce((acumulador, item) => {
    const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.');
    return acumulador + precoLimpo;
}, 0);