
/** INSTANTIATION **/

	var APP = require( "/core" );
	var args = arguments[ 0 ] || {};

/** CODE **/

	function initialize(){
		$.row.data 			= args.data;
		$.row.annotation 	= args.annotation;
		if( $.row.data.agency ){
			$.title.text 		= $.row.data.agency;
			$.subtitle.text		= $.row.data.incidentdate;
			$.description.text 	= $.row.data.message;
			$.icon.image 		= '/images/Crimes/multiple.png';
		}
		else{
			$.title.text 		= $.row.data.cdagency;
			$.subtitle.text		= $.row.data.cddatetime;
			$.description.text 	= $.row.data.cdtype;
			$.icon.image 		= $.row.data.image;
		}
		return true;
	}	initialize();
	
