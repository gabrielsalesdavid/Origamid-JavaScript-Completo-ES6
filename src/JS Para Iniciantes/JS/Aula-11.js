// Aula 11: Atribuição e Ternário

var idade = 18;

var resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(resultado);

var calculo = 10 + 5 * 2;

console.log(calculo);

var nome = "João";
var sobrenome = "Silva";

var nomeCompleto = `${nome} ${sobrenome}`;

var nomeDigitado = prompt("Digite seu nome:");

console.log(`${nomeDigitado === nomeCompleto ? "Nomes iguais" : "Nomes diferentes"}`);

console.log(nomeCompleto);

var idade = prompt("Digite sua idade:");

console.log(`${idade >= 18 ? "Você é maior de idade" : "Você é menor de idade"}`);

var obeso = prompt("Digite seu IMC:");
var altura = prompt("Digite sua altura:");

var imc = obeso / (altura * altura);

console.log(`${imc >= 30 ? "Você está obeso" : "Você não está obeso"}`);