// Aula 08: Objetos

var pessoa = {
    nome: "Maria",
    idade: 30,
    profissao: "Engenheira",
    saudacao: function() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
};

console.log(pessoa.saudacao());

var carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    detalhes: function() {
        return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
};

console.log(carro.detalhes());

var livro = {
    titulo: "JavaScript para Iniciantes",
    autor: "João Silva",
    paginas: 250,
    descricao() {
        return `Livro: "${this.titulo}" por ${this.autor}, Páginas: ${this.paginas}`;
    }
};

console.log(livro.descricao());

var Math = {
    PI: 3.14159,
    areaCirculo: function(raio) {
        return this.PI * raio * raio;
    }
};

var raio = 5;
console.log(`Área do círculo com raio ${raio}: ${Math.areaCirculo(raio)}`);

var menu = {
    width: 800,
    height: 600,
    backgroundColor: "#333",
    metadeHeight() {
        return this.height / 2;
    },
    itens: ["Início", "Sobre", "Serviços", "Contato"],
    exibirMenu: function() {
        return `Menu: ${this.itens.join(", ")}`;
    }
};

menu.hasOwnProperty("width"); // true
menu.hasOwnProperty("color"); // false

menu.width = 1024;
menu.height = 768;

menu.backgroundColor = "#555";
menu.color = "#fff";
console.log(menu.exibirMenu());

var usuario = {
    nome: "Carlos",
    idade: 28,
    email: "carlos@example.com"
}

usuario.idade = 29;
usuario.email = "carlos.novo@example.com";

var cachorro = {
    nome: "Rex",
    raca: "Labrador",
    idade: 5,
    latir(usuario) {
        return `${usuario.nome ? "Está latindo" : "Quer carinho"}`;
    }
}

console.log(cachorro.latir(usuario));