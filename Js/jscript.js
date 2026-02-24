
const carrusel = document.querySelector(".carrusel-track");

carrusel.addEventListener("mouseover", () => {
    carrusel.style.animationPlayState = "paused";
});

carrusel.addEventListener("mouseout", () => {
    carrusel.style.animationPlayState = "running";
});


const profesores = document.querySelectorAll(".profesor");

profesores.forEach(profesor => {
    profesor.addEventListener("mouseenter", () => {
        const filaId = profesor.getAttribute("data-materia");
        document.getElementById(filaId).classList.add("resaltado");
    });

    profesor.addEventListener("mouseleave", () => {
        const filaId = profesor.getAttribute("data-materia");
        document.getElementById(filaId).classList.remove("resaltado");
    });
});
