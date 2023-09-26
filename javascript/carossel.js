const sliders = document.querySelector(".projetos__carrossel")
var imagepadding = 16;

var scrollPerClick = document.querySelector(".img-1").clientWidth + imagepadding;

var scrollPosition = 0;

function sliderScrollLeft() {
    sliders.scrollTo({
        top: 0,
        left: (scrollPosition -= scrollPerClick),
        behavior: "smooth",
    });


    if (scrollPosition < 0 ) {
        scrollPosition = 0
    }
}

function sliderScrollRight() {
    if (scrollPosition <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
            top: 0,
            left: scrollPosition += scrollPerClick,
            behavior: "smooth",
        })
    }
}