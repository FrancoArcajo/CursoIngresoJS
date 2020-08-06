/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/

	// CONDICION
	// OPCION1 mientras el dato sea invalido
	// OPCION2 mientras el dato no sea valido
	// opcion1 que sexo no sea ni 'f' ni 'm'
	// opcion2 que sexo sea distinto de 'f' o 'm'
	//while (sexo != 'f' && sexo != 'm')) {

function mostrar()
{
	let sexo;

	sexo = prompt("Ingrese f ó m .");

	while(!(sexo == "m" || sexo == "f" || sexo == "M" || sexo == "F"))
	{
		sexo = prompt("Ingrese SOLAMENTE f ó m: ");
	}

	document.getElementById("txtIdSexo").value = sexo;

}//FIN DE LA FUNCIÓN