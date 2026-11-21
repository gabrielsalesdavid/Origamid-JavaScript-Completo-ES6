// Aula 06: Array


const instrumentos = [
    'Guitarra',
    'Baixo',
    'Violão'
];

const precos = [
    49,
    99,
    69,
    89
];

const dados = [
    new String('Tipo 1'),
    [
        'Carro',
        'Portas',
        {
            cor: 'Azul',
            preco: 2000
        }
    ],
    function andar(nome) {
        console.log(nome);
    }
];

dados[2]('Fors');
dados[1][2].cor;

const carros = new Array('Corola', 'Mustang', 'Honda');

carros[1];
carros[2] = 'Ferrari';
carros[10]= 'Parati';
carros.length;

let li = document.querySelectorAll('li');
li = Array.from(li);

const carros = {
    0: 'Fiat',
    1: 'Honda',
    2: 'Ford',
    length: 4,
}

const carrosArray = Array.from(carros);

Array.isArray(li);
Array.of(10);
Array.of(1,2,3,4);
new Array(5);
Array(5);
Array(1,2,3,4);

const frutas = [
    'Banana',
    'Pêra',
    [
        'Uva Roxa',
        'Uva Verde'
    ]
];

frutas.length;

frutas[0].length;
frutas[1].length;
frutas[2].length;

instrumentos.sort();
instrumentos;

const idades = [
    32,
    21,
    33,
    43,
    1,
    12,
    8
];

idades.sort();
idades;

carros.unshift('Honda', 'Kia');
carros.push('Ferrari');

carros.pop();
carros.shift();

carros.reverse();

carros.splice(1, 0, 'Voyagem Argentino', 'Gol G1');
carros.splice(3, 2, 'HB20S');

['Gol G1', 'Voyagem Argentino', 'HB20S', 'FZ600N'].copyWithin(2, 0, 3);
['Gol G1', 'Voyagem Argentino', 'HB20S', 'FZ600N', 'CG 150 Titan'].copyWithin(-1);

['Gol G1', 'Voyagem Argentino', 'HB20S', 'FZ600N'].fill('CG 150 Titan', 0, 3);
['Gol G1', 'Voyagem Argentino', 'HB20S', 'FZ600N'].fill('CG 150 Titan');

const transporte = ['Barco', 'Avião'];
const transport = ['Carro', 'Moto'];

const transportes = transporte.concat(transport);

const maisTransportes = [].concat(transporte, transport, 'Ônibus');

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css');
linguagens.includes('ruby');
linguagens.indexOf('python');
linguagens.indexOf('js');
linguagens.lastIndexOf('js');

linguagens.join();
linguagens.join('   ');
linguagens.join(' -_- ');

let htmlString = '<h2>Título Principal</h2>';
htmlString = htmlString.split('h2');
htmlString = htmlString.join('h1');

linguagens.slice(3);
linguagens.slice(1, 4);

const cloneLinguagens = linguagens.slice();

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

const primeiroValor = comidas.shift();
const ultimoValor = comidas.pop();

comidas.push('Arroz');
comidas.unshift('Feijoada');

const estudantes = [
    'Marcio',
    'Brenda',
    'Joana',
    'Kleber',
    'Julia'
];

estudantes.sort();
estudantes.reverse();
estudantes.includes('Joana');

const hmtl = `
            <section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contatos</div>
            </section>
`;

html = html.split('section');
html = html.join('ul');
html = html.split('div');
html = html.join('li');

const cloneCarros = carros.slice();

carros.pop();