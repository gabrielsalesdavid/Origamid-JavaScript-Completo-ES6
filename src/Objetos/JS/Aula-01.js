// Aula 01: Constructor Function

const carro = {
    marca: 'Marca',
    preco: 0,
}

const honda = carro;
honda.marca = 'Honda';
honda.preco = 4000;

honda = {};
honda.prototype = Car.prototype;
this = honda;

return honda = {
    marca: 'Marca',
    preco: 0,
}

const fiat = carro;
fiat.marca = 'Fiat';
fiat.preco = 3000;

function Car() {
    this.marca = 'Marca';
    this.preco = 0;
}

const honda = new Car();
honda.marca = 'Honda';
honda.preco = 4000;

const fiat = new Car();
fiat.marca = 'Fiat';
fiat.preco = 3000;

function Carro(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoInicial;
    console.log(this);
}

const toyota = new Carro('Corolla', 4000);
const hyundai = new Carro('HB20S', 3000);

const Dom = {
    selector: 'li',
    element() {
        return document.querySelector(this.selector);
    },
    ativo() {
        this.element().classList.add('ativo');
    },
}

Dom.ativo();
Dom.selector = 'ul';
Dom.ativo();

const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(`${this.nome} andou!`);
    }
}

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function() {
        console.log(`${this.nome} andou`);
    }
}

const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 35);

function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.add(classe);
        });
    }
    this.removeClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.remove(classe);
        });
    }
}

const listaItens = new Dom('li');
const ul = new Dom('ul')

listaItens.addClass('ativar');
ul.addClass('ativar-ul');