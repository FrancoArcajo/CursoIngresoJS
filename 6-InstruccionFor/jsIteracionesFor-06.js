function mostrar()
{ // declaro las variables
	let numero;
	let cantidadPares = 0;
	// pido el numero una vez

	numero = parseInt(prompt("Ingrese un numero: "));
	// deberia hacer que una variable tome los valores
	// desde el 1 hasta el numero ingresado ( utilizando un bucle )

   for (let i = 1; i < numero; i++) {
   // tengo que analizar si el valor tomado por la variable tomado por la variable par 
   // para mostrarlo y contarlo
   if (i % 2 == 0) {
   console.log(i);
   contadorPares;
	 }

   }

   // despues del bucle
   // mostrar la cantidad de pares encontrados
   console.log("Cantidad de pares encontrados" + contadorPares);




}//FIN DE LA FUNCIÓN