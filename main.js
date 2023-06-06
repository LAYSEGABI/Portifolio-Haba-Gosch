const botao = document.querySelector(".btn-fixed")

window.addEventListener("scroll", function (event) {
    if (this.window.scrollY == 0) {
        botao.classList.remove("visible");
    } else {
        botao.classList.add("visible");
    }
})