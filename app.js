let numeroSecreto;
let intentos;
let listaNumerosSorteados= [];
let numeroMaximo=10;


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return
} 

function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
    console.log (numeroSecreto)
    
    if (numeroDeUsuario===numeroSecreto) {
        asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos=== 1)? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','el numero secreto es menor');
        } else {
            asignarTextoElemento('p','el numero es mayor')

        }
        intentos++;
        limpiarCaja();
    }  
    return;   
}
 
function limpiarCaja() {
      document.querySelector('#valorUsuario').value='';

}
function generarNumeroSecreto(){
    let numeroGenerdo =Math.floor(Math.random()*numeroMaximo)+1;

    if(listaNumerosSorteados.length ==numeroMaximo){
        asignarTextoElemento("p",'ya se sortearon todos los numeros posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerdo)){
            return generarNumeroSecreto();
    
        } else {
            listaNumerosSorteados.push(numeroGenerdo);
            return numeroGenerdo;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto =generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){

  limpiarCaja();

  condicionesIniciales();
  document.querySelector('#reiniciar').setAttribute('disabled','true');

  
}

condicionesIniciales();