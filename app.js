//aqui guardamos en la variable el numero generado en la funcion
let numeroSecreto = 0;
let intentos =1;
//Declarar una lista
let listaNumerosSorteados= [];
let numeroMaximo =10;


//Esta funcion sirve para que mandemos titulos en los diferentes selectores que necesitemos
function asignarTextoElemento(elemento,texto) 
{
    let elementoHTML =document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
//usamos el getElementID del input,por eso le dimos ese indentificador 
function verificarIntento()
{
    let NumeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(NumeroDeUsuario==numeroSecreto)
   {
    //aqui usamos la funcion que nos cambia el encabezado, usamos template string y el operador ternario
    asignarTextoElemento('p',`Acertaste el número secreto en ${intentos} ${(intentos==1) ? 'vez': 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
   }
   else 
   { //condicional para las ayudas, El usuario no acertó
   
    if(NumeroDeUsuario>numeroSecreto)
    {
        asignarTextoElemento('p', 'el numero secreto es menor');        
    }
    else{ asignarTextoElemento('p','el numero secreto es mayor');
    }
    intentos++;
    limpiarCaja();
   }
    return;
}

function limpiarCaja()
{
    let valorCaja=document.getElementById('valorUsuario').value='';   

} 
//en esta funcion generarNumeroSecreto, se usa el return, para evitar crear una var. 
function generarNumeroSecreto()
{
    //podemos dejarlo en el return solamente, pero podemos mandarselo a una variable
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  //ya no se multiplica por 10,sino por el maximo que definimos al inicio
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //preguntar si el numero generado ya esta incluido en la lista hacemos algo, sino hacemos otro
    //include barre la lista para chequear si ya existe en la lista

    //preguntar si ya sorteamos todos los numeros disponibles 
    if(listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }

    else //si aun no sorteas todos los numeros, entonces sigues jugando
    {   
        if(listaNumerosSorteados.includes(numeroGenerado))
        { //cuando el numero ya existe en la lista, hagamos recursividad:variable llama a esa misma variable
            return generarNumeroSecreto(); //returna a usar de nuevo la variable 

            //que hacer cuando ya 
        }
        else 
        {//si no existe en la lista ya, ese lo retornamos y además lo agregamos en la lista con el push (asi no se repite)
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

   

}

function condicionesIniciales()
{
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
    
}

function reiniciarJuego()
{  //limpiar la caja,reiniciar el numero random,
   // indicar mensaje de intervalo de numeros, deshabilitar el boton de nuevo juego, iniciar el numero de veces
  limpiarCaja();   
  condicionesIniciales(); 
  document.getElementById('reiniciar').setAttribute('disabled','true');   
}

condicionesIniciales();

