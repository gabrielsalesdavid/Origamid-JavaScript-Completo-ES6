// Aula 09: Tudo é objeto

var nome = "Maria";

nome.length; // 5
nome.toUpperCase(); // "MARIA"
nome.toLocaleLowerCase(); // "maria"
nome.charAt(0, 2); // "MA"
nome.replace("a", "A"); // "MAria"
nome.replace("Maria", "Carlos"); // "Carlos"
nome; // "Maria"
nome.search("a"); // 1
nome.substring(1, 4); // "ari"
nome.trim(); // "Maria"
nome.trimEnd(); // "Maria"
nome.trimStart(); // "Maria"
nome.valueOf(); // "Maria"
nome.fixed(); // "<tt>Maria</tt>"
nome.at(0); // "M"
nome.slice(1, 4); // "ari"

string.prototype.reverse = function() {
    return this.split("").reverse().join("");
};

nome.reverse(); // "airaM"

var Document = {
    title: "Curso de JavaScript",
    body: "Aprenda JavaScript do básico ao avançado",
    footer: "Todos os direitos reservados"
};

Document.title; // "Curso de JavaScript"
Document.body; // "Aprenda JavaScript do básico ao avançado"
Document.footer; // "Todos os direitos reservados"

var btn = document.querySelector(".btn");
btn.addEventListener("click", function() {
    alert("Você clicou no botão!");
});

btn.classList.add("btn-success");

navigator.clipboard.writeText("Olá, mundo!"); // Escreve no clipboard