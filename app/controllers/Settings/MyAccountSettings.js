
/** INSTANTIATION **/

	var APP = require( "/core" );
	var args = arguments[ 0 ] || {};
	var _textfields,_ws_request,_saveButton;

/** FUNCTIONS **/

	function blur(){
		for( var i = 0 ; i < _textfields.length ; i++ ){
			_textfields[ i ].blur();
		}
		return true;
	}
	
	function getInformation(){
		_ws_request = {
			atoken : args.params.token
		};
		/**** / Ti.API.info( 'getInformation >>> _ws_request:' + JSON.stringify( _ws_request ) ); /****/
		APP.showActivityindicator();
		APP.http.request({
			url 	: L( 'ws_getmyaccount' ),
			type 	: 'GET',
			format 	: 'JSON',
			data	: _ws_request 
		}, setGetInformationResponse );
		return true;
	}
	
	function invalidPhone( phone ){
		var _regExp,_phone;
		_regExp	= /\D/g;
		_phone	= String( phone );
		return _regExp.test( _phone ) || ( _phone.length < 10 );
	}
	
	function next( event ){
		this.next && this.next.focus();
		return true;
	}
	
	function normalize( event ){
		for( var i = 0 , _textfield ; i < _textfields.length ; i++ ){
			_textfield = _textfields[ i ];
			_textfield.borderWidth = 0;
		}
		return true;
	}
	
	function save(){
		if( validate() ){
			APP.showActivityindicator();
			APP.getCurrentLocation(function(event) {
				if (event.success) {
					_ws_request = {
						atoken 		: args.params.token,
						flat 		: event.lat,
						flon 		: event.lon,
						falias 		: $.account_alias.getValue(),
						fpromocode 	: $.promocode.getValue(),
						fpassword 	: $.password.getValue(),
						fcphone 	: $.cell_phone.getValue(),
						fhphone 	: $.home_phone.getValue(),
						fwphone 	: $.work_phone.getValue()
					};
					/**** / Ti.API.info( 'save >>> _ws_request:' + JSON.stringify( _ws_request ) ); /****/
					APP.http.request({
						url 		: L( 'ws_putmyaccount' ),
						type 		: 'GET',
						format 		: 'JSON',
						data 		: _ws_request
					}, setSaveResponse );
				} else {
					alert( L( 'failed_to_get_current_location' ) );
					APP.hideActivityindicator();
				}
			});
		}
		return true;
	}
	
	function setGetInformationResponse( response ){
		/**** / Ti.API.info( 'setGetInformationResponse >>> response:' + JSON.stringify( response ) ); /****/
		if( response._result == 0 ){
			alert( L( 'something_wrong' ) );
			APP.closeWindow();
		}
		else{
			if( response._data.errorcode != 0 ){
				alert( response._data.message );
				APP.closeWindow();
			}
			else{
				var _data = response._data.data[ 0 ];
				_data.atoken;
				$.account_alias		.setValue	( String( _data.falias		) );
				$.username			.setText	( String( _data.fusername	) );
				$.password			.setValue	( String( _data.fpassword	) );
				$.confirm_password	.setValue	( String( _data.fpassword	) );
				$.promocode			.setValue	( String( _data.fpromocode	) );
				$.cell_phone		.setValue	( String( _data.fcphone		) );
				$.home_phone		.setValue	( String( _data.fhphone		) );
				$.work_phone		.setValue	( String( _data.fwphone		) );
			}
		}
		APP.hideActivityindicator();
		return true;
	}
	
	function setSaveResponse( response ){
		/**** / Ti.API.info( 'setSaveResponse >>> _result:' + JSON.stringify( response ) ); /****/
		if(response._result == 0){
			alert(L( 'something_wrong' ));
		}
		else{
			if( response._data.errorcode != 0 ){
				alert( response._data.message );
			}
			else {
				response._data.data[ 0 ].atoken;
				blur();
				APP.closeWindow();
				alert(L( 'save_successful' ));
			}
		}
		APP.hideActivityindicator();
		return true;
	}
	
	function validate(){
		blur();
		
		if( !$.account_alias.value.length ){
			alert(L( 'enter_account' ));
			$.account_alias.borderColor = 'red';
			$.account_alias.borderWidth = 1;
			return false;
		}
		
		if( invalidPhone( $.cell_phone.value ) ){
			alert(L( 'invalid_cell' ));
			$.cell_phone.borderColor = 'red';
			$.cell_phone.borderWidth = 1;
			return false;
		}
		
		if( $.password.value.length < 7 ){
			alert(L( 'invalid_password' ));
			$.password.borderColor = 'red';
			$.password.borderWidth = 1;
			return false;
		}
		
		if( $.password.value != $.confirm_password.value ){
			alert(L( 'diff_pass_conf' ));
			$.confirm_password.borderColor = 'red';
			$.confirm_password.borderWidth = 1;
			return false;
		}
		return true;
	}

/** CODE **/

	function initialize(){
		/** TOOLBAR **/
		_saveButton = Ti.UI.createButton({
			title 			: "Save",
			right 			: 5,
			width			: 50,
			height			: 44,
			color 			: 'white',
			backgroundImage : 'transparent'
		});
		_saveButton.addEventListener('click',save);
		args.toolBar.removeAllCustomViews();
		args.toolBar.setRightButton( 0 , false );
		args.toolBar.setTitle(L( 'my_account_settings' ));
		args.toolBar.addCustomView( _saveButton );
		args.toolBar.setCloseAction(function(){
			blur();
			return true;
		});
		/** ADDITIONAL WINDOW SETTINGS **/
		$.account_alias.hintText 	= L( 'account_alias'	);
		$.cell_phone.hintText 		= L( 'cell_phone'		);
		$.home_phone.hintText 		= L( 'home_phone'		);
		$.work_phone.hintText 		= L( 'work_phone'		);
		$.password.hintText 		= L( 'password'			);
		$.confirm_password.hintText = L( 'confirm_password'	);
		$.promocode.hintText 		= L( 'promocode'		);
		_textfields = [
			$.account_alias,
			$.cell_phone,
			$.home_phone,
			$.work_phone,
			$.password,
			$.confirm_password,
			$.promocode
		];
		for (var i = 0; i < _textfields.length - 1; i++) {
			_textfields[ i ].next = _textfields[ i + 1 ];
		}
		/** LOAD INFORMATION **/
		getInformation();
		return true;
	}	initialize();

