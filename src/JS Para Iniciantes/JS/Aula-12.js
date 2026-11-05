// Aula 12: Escopo de variáveis

var variavelGlobal = "Eu sou global";

function escopo() {
  var variavelLocal = "Eu sou local";
  console.log(variavelGlobal);
  console.log(variavelLocal);
}

escopo();
console.log(variavelGlobal);
console.log(variavelLocal); // ReferenceError: variavelLocal is not defined

if (carro) {
  var carro = "Fusca";
  let moto = "Honda";
  const bicicleta = "Caloi";
  console.log(carro);
  console.log(moto);
  console.log(bicicleta);
}

console.log(carro); // Fusca
console.log(moto); // ReferenceError: moto is not defined
console.log(bicicleta); // ReferenceError: bicicleta is not defined

const nome = "João";
if (true) {
  const nome = "Maria";
  console.log(nome); // Maria
}

console.log(nome); // João

let idade = 30;
if (true) {
  let idade = 25;
  console.log(idade); // 25
}

console.log(idade); // 30

function teste() {
  var x = 10;
  if (true) {
    var x = 20; // mesma variável
    console.log(x); // 20
  }
  console.log(x); // 20
}

teste();

function testeLet() {
  let y = 10;
  if (true) {
    let y = 20; // variável diferente
    console.log(y); // 20
  }
  console.log(y); // 10
}

testeLet();