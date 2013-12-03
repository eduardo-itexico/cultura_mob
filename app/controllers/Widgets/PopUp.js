
/** INSTANTIATION **/

var APP = require( "/core" );
var args = arguments[ 0 ] || {};

/** FUNCTIONS **/

function closePopup(){
	APP.popOut(function(){
		args.onClose && args.onClose();
	});
	return true;
}

/** CODE **/

$.title.text = args.title;
if( args.container ){
	for( var param in args.container ){
		$.container[ param ] = args.container[ param ];
	}
}
if( args.content ){
	for( var param in args.content ){
		$.content[ param ] = args.content[ param ];
	}
}
if( args.controller ){
	var contentController = Alloy.createController(args.controller,{params:args.controllerParams});
	$.content.add(contentController.getView());
}else if(args.view){
    $.content.add(args.view);
}
