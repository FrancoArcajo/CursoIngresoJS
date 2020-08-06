/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	// declarar variables
	let numero;
	let seguir;
	let sumaNegativos = 0;
	let contadorNegativos = 0;
	let sumaPositivos = 0;
	let contadorPositivos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

	 // generar un bucle del tipo mientras el usuario quiera (do while)
	 do {
			 numero = parseInt(prompt("Ingrese un numero"));
		
		     seguir = prompt("Quiere ingresar otro numero?: ");


	 } while( seguir == 's');

	 // codigo dentro del bucle (es el codigo que se debe realizar n cantidad de veces)


	 // codigo despues del bucle (esto se realiza una vez terminado el bucle)







	// mostrar informacion
	document.write("Hola " + nombre + "</br>");
	document.write("Hola " + nombre2);
}//FIN DE LA FUNCIÓN