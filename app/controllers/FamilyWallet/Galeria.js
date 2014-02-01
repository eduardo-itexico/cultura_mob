// INSTANTIATION
var APP 	= require("/core");
var args 	= arguments[0] || {};
var params  = args.params;
Ti.API.info('Imagenes'+ JSON.stringify(params));

loadImages();

function loadImages(){
	if(params && params.length >0 ){
		var longitud = params.length;
		var imagenes = new Array();
		for(var i=0; i < longitud;i++){
			var elemento = params[i];
			var url = L('path_base_img_inmuebles_galeria') + elemento.nombre;
			//Ti.API.info('URK--'+url);
			var imageTemp = Ti.UI.createImageView({
				image: url
			});
			var scrollWrapper = Ti.UI.createScrollView({
    				maxZoomScale:4.0,
			});
			scrollWrapper.add(imageTemp);
			//Ti.API.info('AGREGO');
			imagenes.push(scrollWrapper);
			
		}
		$.mainContainer.views = imagenes;
	}
}

