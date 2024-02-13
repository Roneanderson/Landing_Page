document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero) {
            ocultaElementoDoHeader();
        } else {
            exibeElementoDoHeader();
        }
    })



    // seção de atrações alvoo
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const tagAlvo = botao.target.dataset.tabButton;
            const alvoo = document.querySelector(`[data-tab-id=${tagAlvo}]`)
            escoderTodasAlvo();
            alvoo.classList.add('shows__list--is--active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is--active');
        })
    }
})


//secção accordion
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active');
    }
}

function ocultaElementoDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementoDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function escoderTodasAlvo() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}