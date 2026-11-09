// Aula 11: Scroll Suave Link Interno


function initTabNav() {

    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((content) => {
                content.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function () {
                activeTab(index);
            });
        });
    }
}

initTabNav();

function initAccordion() {

    const accordionList = document.querySelectorAll('.js-accordion dt');

    const classActive = 'ativo';

    if (accordionList.length) {

        accordionList[0].classList.add(classActive);
        accordionList[0].nextElementSibling.add(classActive);

        function activeAccordion() {
            this.classList.toggle(classActive);
            this.nextElementSibling.classList.toggle(classActive);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}

initAccordion();

function initScrollSuave() {

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.prevenDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        /*
            const topo = section.offseTop;
            window.scrollTo( {
                top: topo,
                behavior: 'smooth',
            });
        */
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

initScrollSuave();