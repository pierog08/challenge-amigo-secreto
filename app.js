let nombresAmigos = [];

// Agregar un nombre al array

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

        if (nombre === "") {
            alert("Por favor, inserte un nombre.");
            return;
        }

        nombresAmigos.push(nombre);
        input.value = ""; 
        console.log(nombresAmigos);
}