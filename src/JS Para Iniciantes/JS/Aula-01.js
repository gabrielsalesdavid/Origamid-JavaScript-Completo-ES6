// Aula 01 - Introdução ao JavaScript

console.log("Olá, Mundo!");

var nome = "João";
var idade = 25;
var cidade = "São Paulo";
var profissao = "Desenvolvedor";
var hobbies = ["programar", "jogar videogame", "ler livros"];
var faculdade = "Engenharia de Software";
var estuda = true;

console.log(`Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade},
    trabalho como ${profissao} e gosto de ${hobbies.join(", ")}, estuda: ${estuda ? " sim" : " não"}.`);

var preco = 25;
var totalComprado = 5;
var total = preco * totalComprado;

console.log(`O preço total da compra é: R$ ${total}.`);

const time = "Flamengo";
time = "Palmeiras"; // Isso vai gerar um erro, pois const não pode ser reatribuída
console.log(`Meu time do coração é o ${time}.`);

let numero1 = 10;
numero1 = 5; // Isso é permitido, pois let permite reatribuição
console.log(`O valor da variável numero1 é: ${numero1}.`);