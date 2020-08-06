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
		console.log(i);
		contadorDivisores++;
	}
}

//mostrar los numeros divisores
console.log("La cantidad de divisores encontrados son: " + contadorDivisores);

}//FIN DE LA FUNCIÓN