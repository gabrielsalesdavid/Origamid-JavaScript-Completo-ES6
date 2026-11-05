// Aula 07: Funções

function saudacao(nome) {
    return `Olá, ${nome}!`;
}

var mensagem = saudacao("João");
console.log(mensagem);

function soma(a, b) {
    return a + b;
}

var resultadoSoma = soma(5, 3);
console.log(`Resultado da soma: ${resultadoSoma}`);

function verificarParidade(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

var numero = 10;
var paridade = verificarParidade(numero);
console.log(`O número ${numero} é: ${paridade}`);

function calcularMedia(notas) {
    var soma = 0;
    for (var i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

var notasAluno = [7, 8, 9, 6, 10];
var media = calcularMedia(notasAluno);
console.log(`A média do aluno é: ${media}`);

addEventListener("DOMContentLoaded", function() {
    var botao = document.getElementById("meuBotao");
    botao.addEventListener("click", function() {
        alert("Botão clicado!");
    });
});

function terceiraIdade(idade) {
    if (typeof idade !== "number" || idade < 0) {
        return "Idade inválida";
    } else if (idade >= 60) {
        return "Você está na terceira idade.";
    } else {
        return "Você não está na terceira idade.";
    }
}

var idadePessoa = 65;
var mensagemIdade = terceiraIdade(idadePessoa);
console.log(mensagemIdade);

function isTruthy(value) {
    return !!value;
}

var valor = 0;
console.log(`O valor ${valor} é truthy? ${isTruthy(valor)}`);

function perimetroRetangulo(largura, altura) {
    return 2 * (largura + altura);
}

var largura = 5;
var altura = 10;
var perimetro = perimetroRetangulo(largura, altura);
console.log(`O perímetro do retângulo é: ${perimetro}`);

typeof perimetroRetangulo; // "function"

addEventListener("scroll", function() {
    console.log("Você rolou a página!");
});

function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar.`;
}

var paisesVisitados = 20;
console.log(precisoVisitar(paisesVisitados));

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de 193 países.`;
}

console.log(jaVisitei(paisesVisitados));