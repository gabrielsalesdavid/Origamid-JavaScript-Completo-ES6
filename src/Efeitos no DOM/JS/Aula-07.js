// Aula 07: Set Timeout & Set Interval

function espera(texto) {
    console.log(texto);
}

setTimeout(espera, 1000, 'Depois de 1s');

setTimeoout(() => {
    console.log('Após 0s?');
});

for (let i = 0; i < 20; i++) {
    setTimeout(() => {
        console.log(i);
    }, 300)
}

const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

function handleClick(event) {
    setTimeout(function () {
        this.classList.add('active');
    }, 1000)
};

function loop(texto) {
    console.log(texto);
}

setTimeout(loop, 1000, 'Passou 1s');

let i = 0;
setInterval(() => {
    console.log(i++);
}, 1000);

const contarAte10 = setTimeout(useCallback, 1000);

let j = 0;
function callback() {
    console.log(i++);
    if (i > 10) {
        clearEnterval(contarAte10);
    }
}

function mudarClasse() {
    document.body.classList.toggle('active');
}

setInterval(mudarClasse, 2000);

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
tempo.addEventListener('dblclick', resetarTempo);

let k = 0;
let timer;

function iniciarTempo() {
    timer = setInterval(() => {
        tempo.innerText = k++;
    }, 100);
    iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
    clearInterval(timer);
    iniciar.removeAttribute('disabled');
}

function resetarTempo() {
    tempo.innerText = 0;
    i = 0;
}