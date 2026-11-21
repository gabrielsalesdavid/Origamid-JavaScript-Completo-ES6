// Aula 09: Object

const carro = {
    marca: 'Ford',
    ano: 2018
};

const pessoa = new object({
    nome: 'Gabriel Sales',
    idade: 34
});

const carros = {
    rodas: 4,
    init(marca) {
        this.marca = marca;
        return this;
    },
    acelerar() {
        return `${this.marca} acelerou as ${this.rodas} rodas`;
    },
    buzinar() {
        return `${this.marca} buzinou`;
    }
}

const honda = Object.create(carro);
honda.init('Honda').acelerar();

const funcaoAutomovel = {
    acelerar() {
        return 'acelerou';
    },
    buzinar() {
        return 'buzinou';
    }
};

const moto = {
    rodas: 2,
    capacete: true
};

const motos = {}
Object.defineProperties(moto, {
    rodas: {
        value: 2,
        configurable: false,
        enumerable: true
    },
    capacete: {
        value: true,
        configurable: true,
        writable: false
    }
});

Object.getOwnPropertyDescriptors(Array);
Object.getOwnPropertyDescriptors(Array.prototype);
Object.getOwnPropertyDescriptors(window, 'innerHeight');

Object.keys(Array);

Object.keys(carro);
Object.values(carro);
Object.entries(carro);

Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

Object.getOwnPropertyNames(carro);

const frutas = [
    'Banana',
    'Pêra'
]

Object.frutas01 = [
    'Banana',
    'Pêra'
]

Object.frutas02 = [
    'Banana',
    'Pêra'
]

Object.is(frutas01, frutas02);

Object.freeze(carro);
Object.seal(carro);
Object.preventExtensions(carro);

Object.isFrozen(carro);
Object.isSealed(carro);
Object.isExtensible(carro);

frutas.constructor;

const frase = 'Isso é uma String';
frase.constructor;

frutas.hasOwnProperty('map');
Array.hasOwnProperty('map');
Array.prototype.hasOwnProperty('map');

Array.prototype.propertyIsEnumerable('map');
window.propertyIsEnumerable('innerHeight');

Array.prototype.isPrototypeOf(frutas);

frutas.toString();
typeof frutas;

frase.toString();
typeof frase;
Object.prototype.toString.call(frase);

carro.toString();
typeof carro;

function verificarDado(dado) {
    return Object.prototype.toString.call(dado);
}

const quadrado = {};
Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        enumerable: true
    }
});

const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
};

Object.freeze(configuracao);

console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(String.prototype));