// Tabela de Verdade - Operador OR (||)

const a = true;
const b = true;

const resultado1 = a || b; // true OR true = true
console.log(`true OR true = ${resultado1}`);

const c = true;
const d = false;

const resultado2 = c || d; // true OR false = true
console.log(`true OR false = ${resultado2}`);

const e = false;
const f = true;

const resultado3 = e || f; // false OR true = true
console.log(`false OR true = ${resultado3}`);

const g = false;
const h = false;

const resultado4 = g || h; // false OR false = false
console.log(`false OR false = ${resultado4}`);