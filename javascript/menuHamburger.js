menu = document.querySelector("#menuHamburguer")
navegacao = document.querySelector("#navegacao")

menu.addEventListener("click", teste)

function teste () {
    navegacao.classList.toggle("navegacao")
    navegacao.classList.toggle("menubar--ativo") 
}