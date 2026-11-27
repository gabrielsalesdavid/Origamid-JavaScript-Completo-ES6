// Aula 04: Tooltip

export default function initTooltip() {

    const tooltips = document.querySelectorAll('[data-tooltip]');

    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
    });

    function onMouseOver(event) {
        const tooltipBox = criarTooltipBox(this);

        onMouseMove.tooltipBox = tooltipBox;
        this.addEventListener('mousemove', onMouseMove);

        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;

        this.addEventListener('mouseleave', onMouseLeave);
    }

    const onMouseLeave = {
        handleEvent() {
            this.tooltipBox.remove();
            this.element.removeElementListener('mouseleave', onMouseLeave);
            this.element.removeElementListener('mousemove', onMouseMove);
        }
    }

    const onMouseMove = {
        handleEvent(event) {
            tooltipBox.style.top = event.pageY + 20 + 'px';
            tooltipBox.style.left = event.pageX + 20 + 'px';
        }
    }

    function criarTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = Element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild('tooltip');
        return tooltipBox;
    }
}