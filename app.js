const imputamigos = document.getElementById("amigo");
const listaAmigos = [];
const ullistaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById ("resultado");
function agregarAmigo(){
    if (!imputamigos.value){
        alert ("Por favor inserte un nombre")
    }
    listaAmigos.push(imputamigos.value);
    console.log(listaAmigos)
    ullistaAmigos.innerHTML += `<li>${imputamigos.value}</li>`;

}; 
function sortearAmigo() {
    const random = Math.floor((Math.random() * listaAmigos.length));
    const amigosecreto = listaAmigos[random]
    console.log (random)
    ulResultado.innerHTML = `<li> El amigo secreto es: ${amigosecreto}</li>`;
}