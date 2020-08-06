function mostrar()
{
	let estacion;
	let destino;
	let estadia;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	estadia = 15000;

	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					estadia = estadia + (estadia*0.2);
					break;
				case "Cataratas":
				case "Cordoba":
					estadia = estadia - (estadia*0.1);
					break;
				case "Mar del plata":
					estadia = estadia - (estadia*0.2);
					break;
			}
			break;
		case "Verano":
			switch(destino){
				case "Bariloche":
					estadia = estadia - (estadia*0.2);
					break;
				case "Cataratas":
				case "Cordoba":
					estadia = estadia + (estadia*0.1);
					break;
				case "Mar del plata":
					estadia = estadia + (estadia*0.2);
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destino){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					estadia = estadia + (estadia*0.1);
					break;
				case "Cordoba":
					estadia = estadia
					break;
			}
			break;

	}
	alert(`En ${estacion} el precio final para ${destino} es de $${estadia}`);

}//FIN DE LA FUNCIÓN