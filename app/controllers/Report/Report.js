var APP = require("/core");
var actual_options = [];
var actual_category = null;
var actual_inmueble = null;
var actual_precio_desde = null;
var actual_precio_hasta = null;
var actual_movimiento = null;
var self = this;
var actual_image = null;
var actual_coords = null;
var actual_heading = null;

var array_precios_renta = [1500,2000,2500,3000,3500,4000,4500,5000,6000,8000,10000,15000,20000,30000,40000,50000,100000];
var array_precios_venta = [100000,150000,200000,250000,300000,350000,400000,450000,500000,750000,1000000,2000000,3000000,
							4000000,5000000,7000000,10000000,20000000,30000000,40000000,50000000,100000000];


function clickFields(e){
	switch(e.source.id){
		case "movimiento":
		Ti.API.info('ACTULA----'+JSON.stringify(actual_category));
			APP.popUp({controller:"Report/Categories",
					   controllerParams:{controller:self,
					   	actualCategory:actual_category},
					   	title		: 'Que deseas?',
						container : {
							width	: 300,
							height	: 250
						}
						});
			break;
		case "inmueble":
			APP.popUp({controller:"Report/Inmueble",
					   controllerParams:{controller:self,
					   	actualCategory:actual_inmueble},
					   	title		: 'Que inmueble buscas?',
						container : {
							width	: 300,
							height	: 250
						}
						});
			break;
		case "precio_desde":
			var array = [];
			if($.movimiento.value == "Rentar"){
				array = array_precios_renta;
			}else if($.movimiento.value == "Comprar"){
				array = array_precios_venta;
			}else{
				array = [];
			}
			APP.popUp({controller:"Report/Precios",
					   controllerParams:{controller:self,
					   	actualCategory:actual_precio_desde,
					   	precios: array,
					   	option:"precio_desde"},
					   	title		: 'Desde que precio?',
						container : {
							width	: 300,
							height	: 450
						}
						});
			break; 
		case "precio_hasta":
			var array = [];
			if($.movimiento.value == "Rentar"){
				array = array_precios_renta;
			}else if($.movimiento.value == "Comprar"){
				array = array_precios_venta;
			}else{
				array = [];
			}
			APP.popUp({controller:"Report/Precios",
					   controllerParams:{controller:self,
					   	actualCategory:actual_precio_hasta,
					   	precios: array,
					   	option:"precio_hasta"},
					   	title		: 'Hasta que precio?',
						container : {
							width	: 300,
							height	: 450
						}
						});
			break; 
		case "avanzada":
			
			var vista 		= $.viewAvanzada.opacity ? 0:1;
			var height		= $.viewAvanzada.height  ? 0:600;
			Ti.API.info('HEIGht----'+ height);
			var animation 	= Ti.UI.createAnimation({opacity:vista, height:height});
			var animationHandler = function() {
			  animation.removeEventListener('complete',animationHandler);
			  $.viewAvanzada.opacity = vista;
			  $.viewAvanzada.height = height;
			};
			animation.addEventListener('complete',animationHandler);
			$.viewAvanzada.animate(animation);
			break;
			
		case "buscar":
			
			var dataTemp = {
            url     : L("find_inmuebles_mobile") +(actual_movimiento? actual_movimiento : "-") + "/" + 
            									  ($.inmueble.value ? $.inmueble.value : "-")  + "/"+ 
            									  ($.campoClave.value ? $.campoClave.value:"-")  +"/" + 
            									  (actual_precio_desde? actual_precio_desde.precio : "0") + "/"+
            									  (actual_precio_hasta? actual_precio_hasta.precio : "0")+"/"+
            									  ($.plantas.value? $.plantas.value : "0")+"/"+
            									  ($.recamaras.value? $.recamaras.value : "0")+"/"+
            									  ($.banos.value? $.banos.value : "0")+"/"+
            									  ($.mediosBanos.value? $.mediosBanos.value : "0")+"/"+
            									  ($.cochera.value? $.cochera.value : "0")+"/"+
            									  ($.superficieDesde.value? $.superficieDesde.value : "0")+"/"+
            									  ($.superficieHasta.value? $.superficieHasta.value : "0")+"/"+
            									  ($.m2Desde.value? $.m2Desde.value : "0")+"/"+
            									  ($.m2Hasta.value? $.m2Hasta.value : "0"),
            type    : 'GET',
            format  : 'JSON'
        };
        Ti.API.info('URL------>'+dataTemp.url);
        APP.showActivityindicator();
		APP.http.request(dataTemp,function(_result){
	            Ti.API.info("RESULT------->"+JSON.stringify(_result));
	            if(_result._result == 1){
	            	var longitud = _result._data.length ? _result._data.length : 0;
	            	var data	 = _result._data ? _result._data : 0;
	            	//Ti.API.info('RESULTADO-----'+JSON.stringify(_result));
	                if(longitud > 0){
	                    APP.hideActivityindicator();
	                    APP.openWindow({
							controller : 'FamilyWallet/FamilyWallet',
							controllerParams : {
								data:data
							}
						});
	                }else{
	                    //alert(_result._data.message);
	                    APP.hideActivityindicator();
	                    alert("No messages were found.");
	                }
	                APP.hideActivityindicator();
	            }else{
	                APP.hideActivityindicator();
	                alert("Internet connection error, please try again.");
	            }
	        });
		break;
	}
}

function actualOption(option){
	actual_options = option;
}
function actualCategory(category){
	switch(category.index){
		case "inmueble":
			actual_inmueble = category;
			$.inmueble.value = category.value;
			
		break;
		case "movimiento":
			actual_category = category;
			switch(actual_category.value){
				case "Comprar":
					actual_movimiento = "Venta";
					
				break;
				case "Rentar":
					actual_movimiento = "Renta";
				break;
				case "Comprar/Rentar":
					actual_movimiento = "Venta/Renta";
				break;
				case "Traspasar":
					actual_movimiento  = "Traspaso";
				break;
			}
			$.movimiento.value = actual_movimiento ;	
		break;
		case "precio_desde":
			actual_precio_desde = category;
			$.precio_desde.value = category.value;	
		break;
		case "precio_hasta":
			actual_precio_hasta = category;
			$.precio_hasta.value = category.value;	
		break;
	}
	
}

function clickSpinner(e){
	
	var textfield 	= e.source.parent.children[1];
	var step		= textfield.step ? textfield.step : 1;
	var actual 		= textfield.value;
	step 	= parseFloat(step);
	actual 	= parseInt(actual);
	actual 	= actual == ""? 0 : actual;
	switch(e.source.direction){
		case "increase":
			actual += step;
		break;
		case "decrease":
			actual -= step;
		break;		
	}
	textfield.value = actual;
}

function gettextField(children){
	if(children && children.length>0){
		for(var i =0; i < children.length; i++){
			var child = children[i];
		}
	}
}
function updateView(){
    APP.reportIsOpen = true; // this is used to prevent the blur
    APP.headerbar.removeAllCustomViews();
    APP.headerbar.setLeftButton(0,false);
    APP.headerbar.setRightButton(0,false);
    APP.headerbar.setLeftButton(APP.OPENMENU,true);
    APP.headerbar.setTitle("Busqueda");
    
}


exports.updateView 		= updateView;
exports.actualOption 	= actualOption;
exports.actualCategory  = actualCategory;