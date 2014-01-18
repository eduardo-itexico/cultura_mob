/**
 * Hugo Flores <hugoafj@gmail.com> 
 * Network Helper
 * April 2013
 */

var _listener;
var _callback;
/**
 * Standard HTTP Request
 * @param {Object} _params
 * @description The following are valid options to pass through:
 *  _params.type		: string GET/POST/DELETE/REQUEST
 *  _params.format		: string json, etc.
 */
exports.request = function(_params,_callback) {
	/**** / Ti.API.info( 'http.request >>> _param:' + JSON.stringify( _params ) ); /****/
	var anXhr = Ti.Network.createHTTPClient();
	anXhr.onload = function(e) {
		if (e.error){
			//alert('error ' + JSON.stringify(e.error));
			var data={_result:0};
			_callback(data);
			return;
		}
		
		if(_params.format == "JSON"){		
			var data={_result:1,_data:JSON.parse(this.responseText)};
		}else{
			var data={_result:1,_data:{responseXML:this.responseXML,responseText:this.responseText}};
		}
		
		_callback(data);
	};
	
	anXhr.onerror = function(e) {
		//Ti.API.info("1 -> "+JSON.stringify(this.responseText));
		//alert('Your Internet connection failed.  Please try again.');
		var data={_result:0};
		_callback(data);
	};
	
	anXhr.open(_params.type,_params.url);
	anXhr.setTimeout(45 * 1000);
	anXhr.send(_params.data);

};

exports.createNetChange = function(_CB) {
	_callback = _CB;
	_listener = function(_event){
		if(_event.online){
			_callback(true);
		}else{
			_callback(false);
		}
	};
	Ti.Network.addEventListener("change",_listener);
};

exports.removeNetChange = function() {
	Ti.Network.removeEventListener("change",_listener);
};