const inputamigos = document.getElementById("amigo"); 
const listaAmigos = []; 
const ullistaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    const nombreAmigo = inputamigos.value.trim();

    //Verificamos que no esté vacío
    if (!nombreAmigo) {
        alert("Por favor inserte un nombre");
        return;
    }

    // Validamos que solo tenga letras y espacios
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!regex.test(nombreAmigo)) {
        alert("El nombre solo puede contener letras y espacios");
        return;
    }

    //Reglas extra: mínimo 3 letras y máximo 30
    if (nombreAmigo.length < 3 || nombreAmigo.length > 30) {
        alert("El nombre debe tener entre 3 y 30 caracteres");
        return;
    }

    //Debe contener al menos una vocal
    const tieneVocal = /[aeiouáéíóúAEIOUÁÉÍÓÚ]/.test(nombreAmigo);
    if (!tieneVocal) {
        alert("El nombre debe contener al menos una vocal");
        return;
    }

    //Evitar duplicados
    if (listaAmigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya está en la lista`);
        return;
    }

    // Agregar a la lista
    listaAmigos.push(nombreAmigo);
    console.log(listaAmigos);
    ullistaAmigos.innerHTML += `<li>${nombreAmigo}</li>`;
    inputamigos.value = ""; // limpiar input después de agregar
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista");
        return;
    }

    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigosecreto = listaAmigos[random];
    console.log(random);
    ulResultado.innerHTML = `<li> El amigo secreto es: ${amigosecreto}</li>`;
}
