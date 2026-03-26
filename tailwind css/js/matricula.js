document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("toggle");
    const extra = document.getElementById("extra");
    const matricular = document.getElementById("matricular");

    toggle.addEventListener("click", function () {
        if (extra.style.display === "block") {
            extra.style.display = "none";
            toggle.innerText = "Mostrar mais";
        } else {
            extra.style.display = "block";
            toggle.innerText = "Mostrar menos";
        }
    });

    matricular.addEventListener("click", function () {
        alert("Matrícula realizada com sucesso!");
    });
});