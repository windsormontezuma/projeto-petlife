var ElementosDuvida = document.querySelectorAll(".duvida")

ElementosDuvida.forEach(function (duvida) {
    duvida.addEventListener("click", function (){
        duvida.classList.toggle("ativa")
    })
})
