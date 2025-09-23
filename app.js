let nombresAmigos = [];

function asignarTextoElemento(id, texto) {
    document.getElementById(id).innerHTML = texto;
}

// Agregar un nombre al array

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

        if (nombre === "") {
            asignarTextoElemento("resultado", "Ingresa un nombre válido.");
            return;
        }

        if (nombresAmigos.includes(nombre)) {
            asignarTextoElemento("resultado", "Ese nombre ya fue agregado.");
            return;
        }

        nombresAmigos.push(nombre);
        input.value = ""; 
        mostrarLista();
}

// Mostrar nombres de amigos en la lista

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    for (let i = 0; i < nombresAmigos.length; i++) {
        lista.innerHTML += `<li>${nombresAmigos[i]}</li>`;
    }
}

// Sorteo de los nombres

function sortearAmigo() {
    if (nombresAmigos.length === 0) {
        asignarTextoElemento("resultado", "No hay amigos para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    let amigoSorteado = nombresAmigos[indiceAleatorio];

    asignarTextoElemento("resultado", `El amigo secreto es: <b>${amigoSorteado}</b>`);
}
