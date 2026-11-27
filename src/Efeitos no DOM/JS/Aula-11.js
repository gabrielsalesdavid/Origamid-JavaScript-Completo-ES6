// Aula 11: Forms

const form = document.getElementById('contato');
const texto = document.querySelector('.texto');

function handleKEyUp(event) {
    console.log(event.target.value);
    texto.innerText = event.target.value;
}

form.addEventListener('keyup', handleKeyUp);

function handleChange(event) {
    const target = event.target;
    if(!target.checkValidity()) {
        target.classList.add('invalido');
        target.nextElementSibling.innerText = target.validationMessage;
        target.setCustomValidity('Este campo é super importante!');
    } else {
        target.classList.remove('invalido');
    }

    document.body.style.backgroundColor = event.target.value;

    if(event.target.checked) console.log(event.target.value);

    dados[event.target.name] = event.target.value;
}

form.addEventListener('change', handleChange);

const dados = {};