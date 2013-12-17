
/** INSTANTIATION **/

var APP = require( "/core" );
var args = arguments[ 0 ] || {};
var fixSizeIpad = Ti.Platform.osname == 'ipad' ? -12 : 0;

/** FUNCTION **/

function start(){
	APP.handleNavigation("Report/Report");
	APP.animation.slideIn($.add_photos, {
		side		: 'top',
		duration	: 250,
		sideValue	: 0 + fixSizeIpad,
		offset		: 10
	});
	APP.animation.slideIn($.share_options, {
		side		: 'top',
		duration	: 250,
		sideValue	: 35 + fixSizeIpad,
		offset		: 10
	});
	APP.animation.slideIn($.category, {
		side		: 'top',
		duration	: 250,
		sideValue	: 28 + fixSizeIpad,
		offset		: 10
	});
	return true;
}

/** CODE **/

$.container.addEventListener('click',function(){
	APP.walkthru.openNext();
	APP.masterWindow.getView().remove( $.container );
	return true;
});

exports.start = start;

