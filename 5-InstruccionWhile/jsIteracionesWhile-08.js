/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	// declarar las variables
    
	let numero=0;
	let positivos = 0;
	let negativos = 1;
	let seguir;
    let flag = 0;
	
	// genero un bucle del tipo mientras el usuario quiera (do while)
    do {
		// pido un numero X
		numero = parseInt(prompt("Ingrese un numero: "));
	
    // pido un numero
	// analizar el signo (pos/neg)
	if (numero >= 0 ) {
		
	alert("positivo");	      // positivo
     positivos = positivos + numero; 
	}
	else {
    alert("Negativo");        // negativo 
	negativos = negativos * numero;
	flag = 1;
	}
	// acumulo el numero donde corresponda
	seguir = prompt("Quiere ingresar otro numero?: ");
 }while (seguir == 's');

	
	if (flag == 0) {
		// si entro aca es porque el usuario no ingreso ningun numero negativo
		// entonces cambio el 1 por un 0 para mostrar el resultado correcto.
	 negativos = 0;
	}
	
	document.getElementById("txtIdProducto").value = negativos;
	
	// mostramos los resultados 
	document.getElementById("txtIdSuma").value = positivos;
	// me tengo que fijar si el usuario no ingreso ningun negativo ---asignar 0 al contador de negativos 
	



}   //FIN DE LA FUNCIÓN