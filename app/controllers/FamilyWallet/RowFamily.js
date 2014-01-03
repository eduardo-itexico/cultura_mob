var Utils  = require("/utils");

var args 	= arguments[0] || {};
var elemento 	= args.element;
elemento = elemento.Inmueble;
var precio		= 0;
//Ti.API.info('MEMBERS---------------->'+args.element);
$.viewProfile.id_profile 		=  elemento.id;

/*
if(element.blobimage){
    //Ti.API.info("[atention] "+JSON.stringify(element));
	var file = Ti.Filesystem.createTempFile(Ti.Filesystem.resourcesDirectory);
	file.write(element.blobimage);
	$.imageProfile.backgroundImage 	= file.nativePath;
	if(OS_ANDROID){
	    $.imageProfile.backgroundImage = element.m_photo;
	}
}
*/

$.nameProfile.text 		= elemento.tipo;
//precio = parseFloat(elemento.precio_venta);
//elemento.precio_venta = String.formatCurrency(elemento.precio_venta);

//precio = precio.replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
//elemento.precio_venta 	= Utils.toMoney(elemento.precio_venta);
//elemento.precio_renta 	= Utils.toMoney(elemento.precio_renta);

switch(elemento.movimiento){
	case "Venta":
		precio = elemento.precio_venta;
		break;
	case "Renta":
		precio = elemento.precio_renta;
		break;
	case "Venta/Renta":
		precio = elemento.precio_venta + " " +elemento.precio_renta ;
		break;
	case "Traspaso":
		precio = elemento.precio_venta;
		break;	
}

$.kinshipProfile.text			=  precio;