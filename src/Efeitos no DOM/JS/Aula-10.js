// Aula 10: Date Object

export default function initFuncionamento() {

    const agora = new Date();

    const futuro = new Date('Dec 25 2030');

    agora;

    agora.getDate();
    agora.getDay();
    agora.getMonth();
    agora.getFullYear();
    agora.getHours();
    agora.getMinutes();
    agora.getTime();
    agora.getUTCHours() - 3;

    function transformaDias(tempo) {
        return tempo / (24 * 60 * 60 * 1000);
    }

    const funcionamento = document.querySelector('[data-semana]');
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();

    const test = [1, 2, 3, 4, 5].indexOf(5);

    const semanaAberta = diasSemana.indexOf(diaAgora) !== -1;

    if (horarioAgora >= horarioSemana[0]) {
        return;
    }
}