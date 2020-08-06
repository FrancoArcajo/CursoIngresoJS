let eleccionMaquina;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;


function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.round(Math.random()*(3-1)+1);

}

function piedra()
{
    if (eleccionMaquina==3){
		alert("Ganaste");
		contadorDeGanadas++
    }
    else if (piedra == eleccionMaquina) {
		alert("Empate");
		contadorDeEmpates++
    }
    else{
		contadorDePerdidas++
        alert("Perdiste");
	}
	mostrarResultado();
	

}//FIN DE LA FUNCIÓN
function papel()
{
	let papel=2;
    if (eleccionMaquina==1){
		contadorDeGanadas++
        alert("Ganaste");
    }
    else if (papel == eleccionMaquina) {
		contadorDeEmpates++
        alert("Empate");
    }
    else{
		contadorDeEmpates++
        alert("Perdiste");
	}
	mostrarResultado();

}//FIN DE LA FUNCIÓN
function tijera()
{
	let tijera=3;
    if (eleccionMaquina==2){
		contadorDeGanadas++
        alert("Ganaste");
    }
    else if (tijera == eleccionMaquina) {
		contadorDeEmpates++
        alert("Empate");
    }
    else{
		contadorDePedidas++
        alert("Perdiste");
	}
	mostrarResultado();

function mostrarResultado()
{
document.getElementById("txtIdGanadas").value = contadorDeGanadas
document.getElementById("txtIdPerdidas").value = ContadorDePerdidas
document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates
}
}