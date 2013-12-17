
/** INSTANTIATION **/

	var APP = require( "/core" );
	var args = arguments[ 0 ] || {};
	var _ws_request;

/** FUNCTIONS **/

	function blur(){
		$.username.blur();
		return true;
	}
	
	function invalidEmail( _email ){
		var regExp = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)+$/; 
		return !regExp.test( _email );
	}
	
	function normalize(){
		$.username.borderWidth = 0;
		return true;
	}
	
	function send(){
		if( validate() ){
			_ws_request = {
				cusername 	: $.username.value,
				action		: 1
			};
			/**** / Ti.API.info( 'send >>> _ws_request:' + JSON.stringify( _ws_request ) ); /****/
			APP.http.request({
				url 		: L( 'ws_forgotpassword' ),
				type 		: 'GET',
				format 		: 'JSON',
				data 		: _ws_request
			}, setSendResponse );
		}
		return true;
	}
	
	function setSendResponse( response ){
		/**** / Ti.API.info( 'setSendResponse >>> response:' + JSON.stringify( response ) ); /****/
		if( response._result == 0 ){
			alert(L( 'something_wrong' ));
			APP.hideActivityindicator();
		}
		else{
			if( response._data.errorcode != 0 ){
				alert( response._data.message );
				APP.hideActivityindicator();
			}
			else{
				alert( response._data.message );
				response._data.data[0].atoken
				blur();
				APP.popOut(function(){
					APP.openLogin();
					return true;
				});
			}
		}
		APP.hideActivityindicator();
		return true;
	}
	
	function validate(){
		if( invalidEmail( $.username.value ) ){
			alert(L( 'invalid_username' ));
			$.username.borderColor = 'red';
			$.username.borderWidth = 1;
			return false;
		}
		return true;
	}
	
/** CODE **/

	function initialize(){
		$.username	.hintText = L( 'username'		);
		return true;
	} initialize();

