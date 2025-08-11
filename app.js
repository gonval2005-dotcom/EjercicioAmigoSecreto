// array para los nombres
let amigos = []

// funcion para agregar un amigo
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();
    if (nombre !== '' && !amigos.includes(nombre)){
        amigos.push(nombre);
        document.getElementById('amigo').value = ''; // Limpiar el campo de entrada
        mostrarAmigos(); 
        console.log(amigos);
    } else {
        alert('Por favor, ingresa un nombre válido y único.');
    }
}

// funcion para mostrar los amigos
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        const nombre = amigos[i];
        lista.innerHTML += `<li>${nombre}</li>`;
    }
}

// funcion para sortear un amigo
function sortearAmigo(){
    if (amigos.length < 2) {
        alert("Escriba por lo menos 2 nombres para el sorteo.");
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];
    document.getElementById("resultado").innerText = "El amigo seleccionado es: " + amigoSorteado;
    amigos=[];
    mostrarAmigos();
}