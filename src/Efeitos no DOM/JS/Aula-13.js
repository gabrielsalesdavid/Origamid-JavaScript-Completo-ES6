// Aula 13: LocalStorage

const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

const handleStyle = {
    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },

    height(value) {
        this.element.style.height = value + 'px';
    },

    width(value) {
        this.element.style.width = value + 'px';
    },

    texto(value) {
        this.element.innerText = value;
    },

    color(value) {
        this.element.style.color = value;
    },

    border(value) {
        this.element.style.border = value;
    },

    borderRadius(value) {
        this.element.style.borderRadius = value + 'px';
    },

    fontFamily(value) {
        this.element.style.fontFamily = value;
    },

    fontSize(value) {
        this.element.style.fontSize = value + 'rem';
    }
}

function handleChange(event) {
    const name = event.targe.name;
    const value = event.target.value;
    handleStyle[name](value)
    btn.style.backgroundColor = value;

    localStorage[name](value);
    saveValues(name, value);
    showCSS();
}

function showCSS() {
    cssText.innerText = `<span> ${btn.style.cssText.split('; ').join(';</span><span>')}`;
}

function setValues() {
    const properties = Object.keys(localStorage);
    properties.forEach(properties => {
        handleStyle[properties](localStorage[properties]);
        controles.elements[properties].value = localStorage[properties];
    })
    showCSS();
}

function saveValues(name, value) {
    localStorage[name] = value;
}