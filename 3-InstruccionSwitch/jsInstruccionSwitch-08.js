function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {
	
	case "Ushuaia":
	case "Bariloche":
		alert("Frio");
		break;
	case "Cataratas":		
	case "Mar del plata":
		alert("Calor");
		break;

	}

}//FIN DE LA FUNCIÓN