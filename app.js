const inputamigos = document.getElementById("amigo"); //variable inputamigos sera el contenedor del elemento obtenido con la fincion getelementbyId
const listaAmigos = [];// variable constante lista de amigos
const ullistaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById ("resultado");
function agregarAmigo(){ //funcion que evalua si la variable inputamigos esta: vacia, solo contiene letras, si existe en el arreglo listaAmigos
    if (!inputamigos.value){
        alert ("Por favor inserte un nombre")
    }
    listaAmigos.push(inputamigos.value);
    console.log(listaAmigos)
    ullistaAmigos.innerHTML += `<li>${inputamigos.value}</li>`;

}; 
function sortearAmigo() {//recibe la variable inputamigos y verifica su existencia en la lista de Amigos, retornara verdadero si existe y falso si no se encuentra en la lista
    const random = Math.floor((Math.random() * listaAmigos.length));
    const amigosecreto = listaAmigos[random]
    console.log (random)
    ulResultado.innerHTML = `<li> El amigo secreto es: ${amigosecreto}</li>`;

}
