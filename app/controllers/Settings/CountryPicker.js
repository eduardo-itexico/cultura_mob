
/** INSTANTIATION **/

	var APP = require( "/core" );
	var args = arguments[ 0 ] || {};

/** FUNCTIONS **/

	function setValue(){
		args.params.callback
		&&	args.params.callback({ value : this.value });
		APP.popOut();
		return true;
	}
