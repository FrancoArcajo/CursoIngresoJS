function mostrar()
{
//variables
let numero;
let contadorDivisores = 0;

//pedir un numero
numero = parseInt(prompt("Ingrese un numero cualquiera: "));

//contar del 1 al numero ingresado
for (let i = 1; i <= numero; i++) {
	if(numero % i == 0){	
		contadorDivisores++;
	}
}


//mostrar los numeros divisores
if(contadorDivisores != 2){
console.log("El numero ingresado no es primo: " + numero);
}else{
	console.log("El numero ingresado es primo: " + numero);
}
}//FIN DE LA FUNCIÓN


