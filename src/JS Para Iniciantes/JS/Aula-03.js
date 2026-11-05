// Aula 03 - Operadores e Expressões

var idade = 30;
var gols = 1000;
var pi = 3.14;
var exp = 2e10; // 2 * 10^10

console.log(`Idade: ${idade}, Gols: ${gols}, Pi: ${pi}, Exp: ${exp}`);

var soma = 10 + 5; // Adição
var subtracao = 10 - 5; // Subtração
var multiplicacao = 10 * 5; // Multiplicação
var divisao = 10 / 5; // Divisão
var resto = 10 % 3; // Resto da divisão

console.log(`Soma: ${soma}, Subtração: ${subtracao},
    Multiplicação: ${multiplicacao}, Divisão: ${divisao}, Resto: ${resto}`);

var incremento = 5;
incremento++; // Incremento em 1
console.log(`Incremento: ${incremento}`);

var decremento = 5;
decremento--; // Decremento em 1
console.log(`Decremento: ${decremento}`);

var resultado = (10 + 5) * 2; // Expressão com parênteses
console.log(`Resultado da expressão: ${resultado}`);

var comparacao = 10 > 5; // Comparação maior que
console.log(`10 é maior que 5? ${comparacao}`);

var igualdade = 10 == "10"; // Igualdade (valor)
console.log(`10 é igual a "10"? ${igualdade}`);

var identidade = 10 === "10"; // Identidade (valor e tipo)
console.log(`10 é idêntico a "10"? ${identidade}`);

var diferente = 10 != "20"; // Diferente (valor)
console.log(`10 é diferente de "20"? ${diferente}`);

var diferenteIdentico = 10 !== "10"; // Diferente e não idêntico (valor e tipo)
console.log(`10 é diferente e não idêntico a "10"? ${diferenteIdentico}`);

var eLogico = true && false; // Operador lógico AND
console.log(`true AND false: ${eLogico}`);

var ouLogico = true || false; // Operador lógico OR
console.log(`true OR false: ${ouLogico}`);

var naoLogico = !true; // Operador lógico NOT
console.log(`NOT true: ${naoLogico}`);

var condicional = idade >= 18 ? "Maior de idade" : "Menor de idade"; // Operador ternário
console.log(`Situação: ${condicional}`);