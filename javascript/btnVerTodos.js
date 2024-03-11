var btn = document.querySelector(".btn-ver-todos")
var lista = document.querySelector("#ProjetosLista")
var swiftleft = document.querySelector(".swiftleft")
var swiftright = document.querySelector(".swiftright")

var atual = "projetos__carrossel";
var anterior = "projetos__carrossel--none";
var aux = ""

btn.addEventListener("click", alteraCarrossel)

function alteraCarrossel () {
    aux = atual
    atual = anterior
    anterior = aux

    lista.classList.remove(anterior)
    lista.classList.add(atual)

    if (lista.classList.contains("projetos__carrossel--none")) {
        btn.textContent = "Fechar"
        swiftleft.style.display = "none"
        swiftright.style.display = "none"
    }else {
        btn.textContent = "Ver todos"
        swiftleft.style.display = "block"
        swiftright.style.display = "block"
    }
}

