window.addEventListener("DOMContentLoaded", () => {

    const modoGuardado = localStorage.getItem("modo");

    if (modoGuardado === "oscuro") {
        document.body.classList.add("dark-mode");
    }

});


function cambiarModo() {

    // guardar posición actual
    const scrollPos = window.scrollY;

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("modo", "oscuro");
    } else {
        localStorage.setItem("modo", "claro");
    }

    // restaurar posición
    window.scrollTo({
        top: scrollPos,
        behavior: "instant"
    });

}

window.addEventListener("DOMContentLoaded", () => {

    const modoGuardado = localStorage.getItem("modo");

    if (modoGuardado === "oscuro") {
        document.body.classList.add("dark-mode");
    }

});

document.addEventListener("DOMContentLoaded", function () {

    const boton = document.getElementById("btnModalPrivacidad");
    const modalElemento = document.getElementById("modalPoliticaPrivacidad");

    const modal = new bootstrap.Modal(modalElemento);

    boton.addEventListener("click", function () {
        modal.show();
    });

});


// Guardar la posición del scroll antes de recargar
window.addEventListener("beforeunload", function () {
    sessionStorage.setItem("scrollPos", window.scrollY);
});

// Restaurar la posición después de cargar
window.addEventListener("DOMContentLoaded", function () {
    const scrollPos = sessionStorage.getItem("scrollPos");

    if (scrollPos !== null) {
        window.scrollTo(0, parseInt(scrollPos));
    }
});

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('[onclick="cambiarModo()"]').forEach(el => {
        el.addEventListener("click", function (e) {
            e.preventDefault(); // evita que el enlace suba al top
        });
    });

});