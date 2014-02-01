var Utils  = require("utils");

var args 	= arguments[0] || {};
var elemento 	= args.element;
elemento 	= elemento.Inmueble;
var colonia = args.element.Colonia;

//Ti.API.info('MEMBERS---------------->'+args.element);
$.viewProfile.elemento 		=  args.element;

function numberToCurrency(number, decimalSeparator, thousandsSeparator, nDecimalDigits){
    //default values
    decimalSeparator = decimalSeparator || '.';
    thousandsSeparator = thousandsSeparator || ',';
    nDecimalDigits = nDecimalDigits == null? 2 : nDecimalDigits;

    var fixed = number.toFixed(nDecimalDigits), //limit/add decimal digits
        parts = new RegExp('^(-?\\d{1,3})((?:\\d{3})+)(\\.(\\d{'+ nDecimalDigits +'}))?$').exec( fixed ); //separate begin [$1], middle [$2] and decimal digits [$4]

    if(parts){ //number >= 1000 || number <= -1000
        return parts[1] + parts[2].replace(/\d{3}/g, thousandsSeparator + '$&') + (parts[4] ? decimalSeparator + parts[4] : '');
    }else{
        return fixed.replace('.', decimalSeparator);
    }
}


function capitalize(cadena){
	return  cadena[0].toUpperCase() + cadena.slice(1).toLowerCase();
};

function getPrecio(elemento){
	var precio = "$ 0.00";
	switch(elemento.movimiento){
		case "Venta":
			precio = numberToCurrency( parseFloat(elemento.precio_venta));
			break;
		case "Renta":
			precio = numberToCurrency( parseFloat(elemento.precio_renta));
			break;
		case "Venta/Renta":
			precio = numberToCurrency( parseFloat(elemento.precio_venta))  + " /$ " +numberToCurrency( parseFloat(elemento.precio_renta)) ;
			break;
		case "Traspaso":
			precio = numberToCurrency( parseFloat(elemento.precio_venta));
			break;	
	}
	return precio;
}




$.kinshipProfile.text	=  "$ " + getPrecio(elemento);
$.movimiento.text		= elemento.movimiento;
$.nameProfile.text 		= capitalize(colonia.nombre);
$.tipo.text 			= capitalize(elemento.inmueble); 
var imagen_principal 	= L('path_base_img_inmuebles_main') + elemento.imagen_principal;
$.imageProfile.image		= imagen_principal;
