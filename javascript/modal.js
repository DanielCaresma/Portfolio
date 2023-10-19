var modal = document.getElementById("myModal");
var cards = document.querySelectorAll(".carrossel__projeto");
var close = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

for(var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', ()=> modal.style.display = "block")
}


// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

