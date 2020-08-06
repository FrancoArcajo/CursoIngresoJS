/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
let nombre;
let edad;
// obtengo el nombre y la edad de las cajas de texto a traves de su Id y los guardo en variables
nombre = document.getElementById("txtIdNombre").value;

edad = document.getElementById("txtIdEdad").value;

alert("Usted se llama " + nombre + " y tiene " + edad + " años")

}

