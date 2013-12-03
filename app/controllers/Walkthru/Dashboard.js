
/** INSTANTIATION **/

var APP = require( "/core" );
var args = arguments[ 0 ] || {};

/** FUNCTION **/

function start(){
	APP.openCloseMenu();
	APP.animation.slideIn($.category, {
		side		: 'left',
		duration	: 250,
		sideValue	: 0,
		offset		: 10
	});
	return true;
}

/** CODE **/

$.category.top	= APP.fixSizeIos7( $.category.top );

$.container.addEventListener('click',function(){
	APP.walkthru.openNext();
	APP.masterWindow.getView().remove( $.container );
	return true;
});

exports.start = start;

