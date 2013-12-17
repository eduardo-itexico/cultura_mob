
/** INSTANTIATION **/

	var APP = require( "/core" );
	var args = arguments[ 0 ] || {};
	var _ws_request;

/** FUNCTIONS **/

	function closeDialog(){
		APP.popOut();
		args.cancel && args.cancel(); 
		return true;	
	}
	
	function normalize(){
		$.username.borderWidth = 0;
		$.password.borderWidth = 0;
		return true;
	}
	
	function goNext(){
		$.password.focus();
		return true;
	}
	
	function openNewAccount(){
		APP.openWindow({
			controller : 'Login/NewAccount',
			controllerParams : {
				
			}
		});
		return true;
	}
	
	function openRetrievePassword(){
		APP.popUp({
			title		: 'Retrieve Password',
			container : {
				width	: 300,
				height	: 160
			},
			controller 	: 'Login/RetrievePassword',
			onClose : function( event ){
				APP.openLogin();
				return true;
			}
		});
		return true;
	}
	
	function doLogin(){
		var invalid = false;
		if( $.username.value === '' ){
			$.username.borderColor = 'red';
			$.username.borderWidth = 1;
			invalid = true;
		}
		if( $.password.value === '') {
			$.password.borderColor = 'red';
			$.password.borderWidth = 1;
			invalid = true;
		}
		if( invalid ){
			Ti.UI.createAlertDialog({
				title : 'Login',
				message : L( 'invalid_input' )
			}).show();
			return false;
		}
		_ws_request = {
			cusername 	: $.username.value,
			cpassword 	: $.password.value,
			action 		: 1
		};
		APP.http.request({
			url 	: L( 'ws_login' ),
			type 	: 'POST',
			format	: 'JSON',
			data 	: _ws_request
		}, setResponseLogin );
		return true;
	}
	
	function setResponseLogin( response ){
		if( response._result == 1 ) {
			if( response._data.errorcode == 0 ){
				Ti.API.info( 'LOGIN:' + JSON.stringify( response._data.data ) );
				Ti.App.Properties.setInt	( 'pkfamily'	, response._data.data[ 0 ].pkfamily		);
				Ti.App.Properties.setString	( 'user_token'	, response._data.data[ 0 ].fglobalid	);
				Ti.App.Properties.setString	( 'user_name'	, $.username.value						);
				args.callback && args.callback( response._data.data[ 0 ].fglobalid );
				APP.popOut();
				if(APP.currentController.initializeView){
				    APP.currentController.initializeView();
				}
				APP.notifications.subscribe();
			}
			else{
				alert( response._data.message );
			}
		}
		else{
			alert( L( 'fail_on_webservice' ) );
		}
		return true;
	}

/** CODE **/

	$.username.hintText 	= L( 'username'	);
	$.password.hintText		= L( 'password'	);


