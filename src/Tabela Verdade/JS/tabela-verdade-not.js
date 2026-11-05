// Tabela de Verdade - Operador NOT (!)

const a = true;
const b = false;

const resultado1 = !a; // NOT true = false
console.log(`NOT true = ${resultado1}`);

const resultado2 = !b; // NOT false = true
console.log(`NOT false = ${resultado2}`);

const c = true;
const d = true;

const resultado3 = !(c && d); // NOT (true AND true) = false
console.log(`NOT (true AND true) = ${resultado3}`);

const e = false;
const f = false;

const resultado4 = !(e || f); // NOT (false OR false) = true
console.log(`NOT (false OR false) = ${resultado4}`);

const resultado5 = !(a || b); // NOT (true OR false) = false
console.log(`NOT (true OR false) = ${resultado5}`);

const resultado6 = !(c || d); // NOT (true OR true) = false
console.log(`NOT (true OR true) = ${resultado6}`);

const resultado7 = !(e && f); // NOT (false AND false) = true
console.log(`NOT (false AND false) = ${resultado7}`);

const resultado8 = !(a && b); // NOT (true AND false) = true
console.log(`NOT (true AND false) = ${resultado8}`);

const resultado9 = !(c && !d); // NOT (true AND NOT true) = true
console.log(`NOT (true AND NOT true) = ${resultado9}`);

const resultado10 = !(!e || f); // NOT (NOT false OR false) = true
console.log(`NOT (NOT false OR false) = ${resultado10}`);