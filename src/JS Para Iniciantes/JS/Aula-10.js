// Aula 10: Arrays e Loops

var frutas = ["Maçã", "Banana", "Laranja", "Uva"];

frutas.length; // 4
frutas[0]; // "Maçã"
frutas[1]; // "Banana"
frutas[2]; // "Laranja"
frutas[3]; // "Uva"

frutas.push("Abacaxi"); // Adiciona no final
frutas.pop(); // Remove do final
frutas.unshift("Morango"); // Adiciona no início
frutas.shift(); // Remove do início

for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

frutas.forEach(function(fruta) {
    console.log(fruta);
});

var frutasMaiusculas = frutas.map(function(fruta) {
    return fruta.toUpperCase();
});

var frutasFiltradas = frutas.filter(function(fruta) {
    return fruta.length > 5;
});

frutas.forEach(element => {
    if (element === "Banana") {
        var fruta = element;
        console.log(fruta);
    } else {
        console.log("Não é Banana");
    }
});

frutas.forEach(element => {
    if (element === "Banana") {
        element.pop();
        console.log(element);
    } else {
        console.log("Não é Banana");
    }
});

frutas.forEach(element => {
    if (element === "Pera") {
        element.push("Pera");
        console.log(element);
    } else {
        console.log("Não é Pera");
    }
});

var consoles = [];

var qtd = 0;
while (qtd !== 0) {
    consoles.push(prompt("Digite o nome de um console: "));
    qtd = prompt("Deseja adicionar outro console? (Digite 0 para sair)");
}

consoles.forEach(function(console) {
    console.log(console);
});