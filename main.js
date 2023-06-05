let paralaxImagem = document.getElementById('img-terra')
let paralaxTexto = document.getElementById('paralax-texto')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    //paralaxImagem.style.left = value * 1 + 'px';
    paralaxTexto.style.color = value;

})

