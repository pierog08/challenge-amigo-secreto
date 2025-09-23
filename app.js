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