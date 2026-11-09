// Aula 07: Eventos

const img = document.querySelector('img');

img.addEventListener('click', function() {
    console.log('clicou');
});

img.addEventListener('click', callback);
img.addEventListener('click', callback());
img.addEventListener('click', function() {
    console.log('clicou');
});

img.addEventListener((event) => {
    console.log(event.currentTarget);
    console.log(event.target);
});

const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
    const currentTarget = event.currentTarget;
    const target = event.target;
    const type = event.type;
    const path = event.path;
    console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);

const linkExterno = document.querySelector('a[href^="http"]');

function clickLink(event) {
    event.preventDefault();
    console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickLink);

function callback(event) {
    console.log(this);
    console.log(this.getAttribute('src'));
}

img.addEventListener('click', callback);

const h1 = document.querySelector('h1');

function callback(event) {
    console.log(event.type, event);
}

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);

function handlekeyboard(event) {
    if (event.key === 'a') {
        document.body.classList.toggle('azul');
    } else if (event.key === 'v') {
        document.body.classList.toggle('vermelho');
    }
}

window.addEventListener('keydown', callback);

const imgs = document.querySelectorAll('img');

function imgSrc(event) {
    const src = event.currentTarget.getAttribute('src');
    console.log(src);
}

imgs.forEach((img) => {
    img.addEventListener('click', imgSrc);
});

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo');
    console.log(event);
};

linksInternos.forEach((link) => {
    link.addEventListener('click', handlelink);
});

const todosElementos = document.querySelectorAll('body *');

function handleElemento(event) {
    console.log(event.currentTarget);
};

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento);
});

console.log(todosElementos);

function removeElemento(event) {
    event.currentTarget.remove();
};

function handleClickT(event) {
    console.log(event.key);
    if(event.key === 't') {
        document.documentElement.classList.toggle('texto-maior');
    }
}

window.addEventListener('keydown', handleClickT);