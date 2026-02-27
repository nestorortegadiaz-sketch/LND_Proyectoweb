
const carrusel = document.getElementsByClassName("carrusel-track")[0];

carrusel.addEventListener("mouseover", () => {
    carrusel.style.animationPlayState = "paused";
});

carrusel.addEventListener("mouseout", () => {
    carrusel.style.animationPlayState = "running";
});


const profesores = document.getElementsByClassName("profesor");

Array.from(profesores).forEach(function (profesor) {
    profesor.addEventListener("mouseenter", function () {
        const filaId = this.getAttribute("data-materia");
        document.getElementById(filaId).classList.add("resaltado");
    });

    profesor.addEventListener("mouseleave", function () {
        const filaId = this.getAttribute("data-materia");
        document.getElementById(filaId).classList.remove("resaltado");
    });
});

document.getElementById("btn-up").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
