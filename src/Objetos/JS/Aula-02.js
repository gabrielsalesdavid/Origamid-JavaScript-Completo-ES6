// Aula 02: Prototype


function Pessoa(nome, sobreNome, idade) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.idade = idade;

    this.abracar = function() {
        return 'Abraçou';
    }

    this.andar = function() {
        return 'andou pelo projeto';
    }
}

Pessoa.prototype.andar = function() {
    return 'andar';
}

const andre = new Pessoa('André', 28);

console.log(Pessoa.prototype);
console.log(andre.prototype);

andre.nome;
andre.idade;
andre.andar();

Object.prototype;
andre.toString();
andre.isPrototypeOf();
andre.valueOf();

const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0);
cidade.charAt(0);

String.prototype;

const list = document.querySelectorAll('li');

const listaArray = Array.prototype.slice.call(lista);

Array.prototype.slice.call(lista);
Array.from(lista);

Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

const Carro = {
    marca: 'Ford',
    preco: 2000,
    acelerar() {
        return true;
    }
}

Carro;
Carro.marca;
Carro.preco;
Carro.acelerar();
Carro.acelerar;
Carro.marca.charAt;
Carro.marca.charAt(0);

Pessoa.prototype.nomeCompleto = function() {
    return `${yhis.nome} ${this.sobreNome}`;
}

const bruno = new Pessoa('Bruno', 'Silva', 38);

const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

li.hidden.constructor.name;

Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);