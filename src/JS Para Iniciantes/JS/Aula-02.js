// Aula 02 - Variáveis e Tipos de Dados

var nome = "Maria";
var sobrenome = "Silva";
var idade = 30;
var peso = 65.5;
var cidade = "Rio de Janeiro";
var profissao = "Designer";
var hobbies = ["pintar", "ler livros", "viajar"];
var comida = null;
var faculdade = "Arquitetura e Urbanismo";
var estuda = false;
var dataNascimento = new Date("1993-05-15");

console.log(`Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade},
    trabalho como ${profissao} e gosto de ${hobbies.join(", ")},
    peso: ${peso} kg, comida favorita: ${comida}, estuda: ${estuda ? " sim" : " não"}.`);

console.log(typeof nome); // string
console.log(typeof idade); // number
console.log(typeof peso); // number
console.log(typeof cidade); // string
console.log(typeof profissao); // string
console.log(typeof hobbies); // object (array)
console.log(typeof comida); // object (null)
console.log(typeof faculdade); // string
console.log(typeof estuda); // boolean
console.log(typeof dataNascimento); // object (Date)

nomeCompleto = nome + " " + sobrenome; // Concatenação de strings
console.log(`Nome: ${nomeCompleto}`); // Nome: Maria Silva

var melhor = "Palmeiras";
melhorQue = "A melhor camisa é a do \"Palmeiras\" ";
console.log(melhorQue); // A melhor camisa é a do "Palmeiras"

var idade = '30';
console.log(`Isto seria uma: ${typeof idade}`); // string
var idadeEmNumero = Number(idade); // Conversão de string para número
console.log(`Idade em número: ${idadeEmNumero}`); // Idade em número: 30