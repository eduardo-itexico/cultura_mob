
/** INSTANTIATION **/

var APP = require( "/core" );
var args = arguments[ 0 ] || {};

/** FUNCTION **/

function start(){
	APP.openCloseMenu();
	APP.handleNavigation("MyNeighborhoods/MyNeighborhoods", {
		type : 0,
		fake :[{
			"total" : "0",
			"cdagency" : "",
			"nmlatestdate" : "11/8/2013 8:20:15 AM",
			"miles" : "4.3684",
			"pknmessage" : "250675341",
			"pknmessage1" : "0",
			"pkFamily" : "250266019",
			"pkFamily1" : "0",
			"nmessage" : "202 Visits From Police",
			"nmtimestamp" : "11/8/2013 8:20:15 AM",
			"fpicture" : "https://alertid.com/files/uploads/alertidmedia/alertidmediaMedium.png",
			"falias" : "AlertIDMedia",
			"nmessage1" : "",
			"nmtimestamp1" : "1/1/1900",
			"falias1" : "",
			"fpicture1" : "",
			"cdcadid" : "0",
			"ncttype" : "",
			"nmFamilyPicture" : "",
			"nmFamilyPicture1" : "",
			"AlertMessage" : "N",
			"UserFollowing" : "N",
			"ftoken" : "1E3F4517A76A9",
			"ftoken1" : "",
			"nmHeadline" : "Please help to find my iphone",
			"nmURL" : "http://sfappeal.com/2013/11/sf-files-suit-against-internet-cafe-known-for-illegal-gambling-202-visits-from-police/"
		},
		{
			"total" : "0",
			"cdagency" : "",
			"nmlatestdate" : "11/8/2013 8:20:15 AM",
			"miles" : "4.3684",
			"pknmessage" : "250675341",
			"pknmessage1" : "0",
			"pkFamily" : "250266019",
			"pkFamily1" : "0",
			"nmessage" : "SF Files Suit Against Internet Cafe Known For Illegal Gambling  202 Visits From Police",
			"nmtimestamp" : "11/8/2013 8:20:15 AM",
			"fpicture" : "https://alertid.com/files/uploads/alertidmedia/alertidmediaMedium.png",
			"falias" : "AlertIDMedia",
			"nmessage1" : "",
			"nmtimestamp1" : "1/1/1900",
			"falias1" : "",
			"fpicture1" : "",
			"cdcadid" : "0",
			"ncttype" : "",
			"nmFamilyPicture" : "https://alertid.com/files/uploads/alertidmedia/pcar.jpg",
			"nmFamilyPicture1" : "",
			"AlertMessage" : "N",
			"UserFollowing" : "N",
			"ftoken" : "1E3F4517A76A9",
			"ftoken1" : "",
			"nmHeadline" : "SF Files Suit Against Internet Cafe Known For Illegal Gambling, 202 Visits From Police",
			"nmURL" : "http://sfappeal.com/2013/11/sf-files-suit-against-internet-cafe-known-for-illegal-gambling-202-visits-from-police/"
		}]
	});
	APP.animation.slideIn($.options, {
		side		: 'right',
		duration	: 250,
		sideValue	: 5,
		offset		: 10
	});
	APP.animation.slideIn($.like, {
		side		: 'left',
		duration	: 250,
		sideValue	: 5,
		offset		: 10
	});
	APP.animation.slideIn($.reply, {
		side		: 'right',
		duration	: 250,
		sideValue	: 5,
		offset		: 10
	});
	APP.animation.slideIn($.add, {
		side		: 'left',
		duration	: 250,
		sideValue	: 7,
		offset		: 10
	});
	return true;
}

/** CODE **/
$.options.top	= APP.fixSizeIos7( $.options.top );
$.like.top		= APP.fixSizeIos7( $.like.top );
$.reply.top		= APP.fixSizeIos7( $.reply.top );
$.container.addEventListener('click',function(){
	APP.walkthru.openNext();
	APP.masterWindow.getView().remove( $.container );
	return true;
});

exports.start = start;

