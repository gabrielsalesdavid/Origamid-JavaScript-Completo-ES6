// Aula 05: Condicioanais e Operadores Ternários

var idade = 20;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

var podeDirigir = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";
console.log(podeDirigir);

var nota = 7;
var resultado = nota >= 6 ? "Aprovado" : "Reprovado";
console.log(`Resultado: ${resultado}`);

while (false) {
    console.log("Este bloco não será executado.");
}

var diaSemana = 3;
var dia = "";

switch (diaSemana) {
    case 1:
        dia = "Domingo";
        break;
    case 2:
        dia = "Segunda-feira";
        break;
    case 3:
        dia = "Terça-feira";
        break;
    case 4:
        dia = "Quarta-feira";
        break;
    case 5:
        dia = "Quinta-feira";
        break;
    case 6:
        dia = "Sexta-feira";
        break;
    case 7:
        dia = "Sábado";
        break;
    default:
        dia = "Dia inválido";
}

console.log(`Hoje é: ${dia}`);