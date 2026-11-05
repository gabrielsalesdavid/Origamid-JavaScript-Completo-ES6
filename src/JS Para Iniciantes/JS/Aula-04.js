// Aula 4: Operadores Lógicos e Incremento/Decremento

var idade = 20;

var maiorDeIdade = idade >= 18; // Operador lógico de comparação
console.log(`Maior de idade: ${maiorDeIdade}`);

var menorDeIdade = idade < 18; // Operador lógico de comparação
console.log(`Menor de idade: ${menorDeIdade}`);

var podeDirigir = maiorDeIdade && !menorDeIdade; // Operador lógico AND e NOT
console.log(`Pode dirigir: ${podeDirigir}`);

var podeVotar = maiorDeIdade || menorDeIdade; // Operador lógico OR
console.log(`Pode votar: ${podeVotar}`);

var idadeIncrementada = ++idade; // Incremento
console.log(`Idade incrementada: ${idadeIncrementada}`);

var idadeDecrementada = --idade; // Decremento
console.log(`Idade decrementada: ${idadeDecrementada}`);

var idadePosIncremento = idade++; // Pós-incremento
console.log(`Idade pós-incremento: ${idadePosIncremento}, Idade atual: ${idade}`);

var idadePosDecremento = idade--; // Pós-decremento
console.log(`Idade pós-decremento: ${idadePosDecremento}, Idade atual: ${idade}`);