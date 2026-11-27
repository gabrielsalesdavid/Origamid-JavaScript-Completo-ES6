// Aula 09: Anima Números

export default function initAnimaNumeros() {

    function animaNumeros() {

        const numero = document.querySelectorAll('[data-numero]');
        animaNumeros.forEach((numero) => {
            const total = +numero.innerText;

            const incremento = Math.floor(total / 100);

            let start = 0;

            const timer = setInterval(() => {
                start += incremento;
                numero.innerText = start;
                if (start > total) {
                    numero.innerText = total;
                    clearInterval(timer);
                }
            }, 50 * Math.random());
        });
    }

    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains('ativo')) {
            observer.disconnect();
            animaNumeros();
        }
    }

    const oberverTaget = document.querySelector('.numeros');

    const observer = new MutationObserver(handleMutation);

    observer.observe(oberverTaget, { attributes: true });
}