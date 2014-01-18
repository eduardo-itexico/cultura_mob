// INSTANTIATION
var APP 	= require("/core");
var args 	= arguments[0] || {};
var params  = args.params;
var imagenes = params.Imagen;
var inmueble = params.Inmueble;
var colonia	 = params.Colonia;
var opcionador = params.Opcionador;
Ti.API.info('----'+JSON.stringify(params));

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

function getPrecio(elemento){
	var precio = "0.00";
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

function capitalize(cadena){
	return  cadena[0].toUpperCase() + cadena.slice(1).toLowerCase();
};

$.imagenPrincipal.addEventListener('postlayout', function(e) {
    $.imagenPrincipal.backgroundImage =  L('path_base_img_inmuebles_main') + inmueble.imagen_principal;
 });
 

function showGaleria(){
	APP.openWindow({controller:"FamilyWallet/Galeria",
								controllerParams:imagenes});
}

$.tipo.text 		= inmueble.inmueble;
$.movimiento.text 	= inmueble.movimiento;
$.colonia.text 	= capitalize(colonia.nombre);
$.precio.text	= "$ "+getPrecio(inmueble);
if(inmueble.comentarios != null){
	$.contentDescripcion = inmueble.comentarios;	
}else{
	$.descripcion.visible 			= false;
	$.contentDescripcion.visible 	= false;
}
$.plantas.text 		= inmueble.plantas;
$.recamaras.text 	= inmueble.recamaras;
$.banos.text		= inmueble.banos;
$.medios_banos.text = inmueble.medios_banos;
$.cochera.text		= inmueble.cochera;
$.superficie_terreno.text 	= inmueble.superficie_terreno;
$.superficie_construida.text = inmueble.superficie_construida;
$.jardin.text				= inmueble.jardin ? "Si" : "No";
$.alberca.text				= inmueble.alberca ? "Si" : "No";
$.cuarto_servicio.text		= inmueble.cuarto_servicio ? "Si" : "No";

$.nombre_asesor.text 	= opcionador.nombre;
$.correo.text 			= opcionador.correo;
$.telefono_oficina.text = opcionador.telefono_oficina;
$.telefono.text 		= opcionador.telefono;
$.celular.text 			= opcionador.celular;

$.imagenAsesor.addEventListener('postlayout', function(e) {
    $.imagenAsesor.backgroundImage =  L('path_base_img_inmuebles_asesor') + (opcionador.mostrar_foto ?  
    																	opcionador.imagen:
    																	"usuario_default_pagina.jpg");
 });
// API calls to the map module need to use the Alloy.Globals.Map reference
var latitude = "";
var longitude = "";

if(inmueble.lat_long != ""){
	var arrays = inmueble.lat_long.split(",");
	lat  = arrays[0];
	long = arrays[1];
	var point = Alloy.Globals.Map.createAnnotation({
	    latitude:latitude,
	    longitude:longitude,
	    //title:"Appcelerator Headquarters",
	    //subtitle:'Mountain View, CA',
	    pincolor:Alloy.Globals.Map.ANNOTATION_RED,
	    myid:1 // Custom property to uniquely identify this annotation.
	});
	$.mapview.addAnnotation(point);
} 
