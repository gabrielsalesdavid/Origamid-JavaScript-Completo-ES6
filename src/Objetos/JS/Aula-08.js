// Aula 08: Function

function areaQuadrado(lado) {
    return lado * lado;
}

const perimetroQuadrado = new Function('lado','return lado * 4');

function somar(n01, n02) {
    return n01 + n02;
};

const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
    }
}

function descricaoCarro() {
    console.log(`${this.marca} ${this.ano}`);
    console.log(`${window.marca} ${window.ano}`);
}

descricaoCarro();
descricaoCarro.call();
descricaoCarro.call(carro);

const carros = [
    'Ford',
    'GM',
    'WV'
];

carros.forEach((item) => {
    console.log(item);
});

carros.forEach.call(carros, (item) => {
    console.log(item);
});

const frutas = [
    'Banana',
    'Pêra',
    'Uva'
]

carros.forEach.call(freutas, (item) => {
    console.log(item);
});

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, function(item) {
    return item.classList.contains('ativo');
});

filtro;

const numeros = [
    3,
    4,
    6,
    1,
    34,
    44,
    32
]

Math.max.apply(null, numeros);
Math.max.apply(null, 3, 4, 5, 6, 7, 20);

function itemPossuiAtivo(item) {
    return item.classList.contains('ativo');
}

const filtro01 = Array.prototype.filter.call(li, itemPossuiAtivo);
const filtro02 = Array.prototype.filter.call(li, [itemPossuiAtivo]);

const filtrarLi = Array.prototype.filter.bind(li, function(item) {
    return item.classList.contains('ativo');
});

carro.acelerar(100, 20);

const honda = {
    marca: 'Honda',
};

const acelerarHonda = carro.acelerar.bind(honda);
acelerarHonda(200, 10);

function imc(altura, peso) {
    return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);

imc(1.80, 70);
imc180(70);

const paragrafos = document.querySelectorAll('p');

const totalCarateres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length;
}, 0);

function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement('div');

    elemento.classList.add(classe);

    return elemento;
}

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');