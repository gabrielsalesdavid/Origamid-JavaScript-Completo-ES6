// Tabela de Verdade - Operador AND (&&)

const a = true;
const b = true;

const resultado1 = a && b; // true AND true = true
console.log(`true AND true = ${resultado1}`);

const c = true;
const d = false;

const resultado2 = c && d; // true AND false = false
console.log(`true AND false = ${resultado2}`);

const e = false;
const f = true;

const resultado3 = e && f; // false AND true = false
console.log(`false AND true = ${resultado3}`);

const g = false;
const h = false;

const resultado4 = g && h; // false AND false = false
console.log(`false AND false = ${resultado4}`);