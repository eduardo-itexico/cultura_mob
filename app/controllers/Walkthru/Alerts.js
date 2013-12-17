
/** INSTANTIATION **/

var APP = require( "/core" );
var args = arguments[ 0 ] || {};

/** FUNCTION **/

function start(){
	APP.animation.slideIn($.address_list, {
		side		: 'right',
		duration	: 250,
		sideValue	: 3,
		offset		: 10
	});
	APP.animation.slideIn($.dashboard, {
		side		: 'left',
		duration	: 250,
		sideValue	: 3,
		offset		: 10
	});
	APP.animation.slideIn($.refresh, {
		side		: 'right',
		duration	: 250,
		sideValue	: 5,
		offset		: 10
	});
	APP.animation.slideIn($.settings, {
		side		: 'left',
		duration	: 250,
		sideValue	: 5,
		offset		: 10
	}); 
	APP.animation.slideIn($.listview, {
		side		: 'right',
		duration	: 250,
		sideValue	: 5,
		offset		: 10
	}); 
	return true;
}

/** CODE **/

$.address_list.top	= APP.fixSizeIos7( $.address_list.top );
$.dashboard.top		= APP.fixSizeIos7( $.dashboard.top );
$.refresh.top		= APP.fixSizeIos7( $.refresh.top );

$.container.addEventListener('click',function(){
	APP.walkthru.openNext();
	APP.masterWindow.getView().remove( $.container );
	return true;
});

exports.start = start;



