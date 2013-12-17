
/** INSTANTIATION **/

	var APP = require( "/core" );
	var args = arguments[ 0 ] || {};
	var _data,_saveButton,_pkfamilyaddress,_textfields;

/** FUNCTIONS **/

	function blur(){
		for( var i = 0 ; i < _textfields.length ; i++ ){
			_textfields[ i ].blur();
		}
		$.fastate_field.blur();
		return true;
	}
	
	function confirmDelete(){
		APP.createDialog(
			L( 'question_delete_address' ),
			[ L( 'delete' ) , L( 'cancel' ) ],
			[ deleteAddress	, false		]
		);
		return true;
	}
	
	function deleteAddress(){
		blur();
		APP.getToken({
			openLogin 	: true,
			callback	: function( token ){
				APP.showActivityindicator();
				APP.getCurrentLocation(function( event ){
					if (event.success) {
						_ws_request = {
							pkfamilyaddress : parseInt( _data.pkfamilyaddress ),
							fdelete			: 'Y'
						};
						/**** / Ti.API.info( 'deleteAddress >>> _ws_request:' + JSON.stringify( _ws_request ) ); /****/
						APP.http.request({
							url 	: L( 'ws_putmyaddresses' ),
							type 	: 'GET',
							format 	: 'JSON',
							data 	: _ws_request
						}, function(_result) {
							/**** / Ti.API.info( 'deleteAddress >>> _result:' + JSON.stringify( _result ) ); /****/
							if (_result._result == 0) {
								alert( L( 'something_wrong' ) );
							} else {
								if (_result._data.errorcode != 0) {
									alert( _result._data.message );
								} else {
									alert(L( 'deleted_successful' ));
							  		_result._data.data[ 0 ].atoken;
									args.params && args.params.callback && args.params.callback();
									APP.closeWindow();
								}
							}
							APP.hideActivityindicator();
							return true;
						});
					}else {
						alert(L('failed_to_get_current_location'));
						APP.hideActivityindicator();
					}
					return true;
				});
				return true;
			}
		});
		return true;
	}
	
	function setInformation(){
		/**** / Ti.API.info('setInformation >>> _result:' + JSON.stringify( _data ) ); /****/
		_pkfamilyaddress 		= parseInt( _data.pkfamilyaddress );
		$.faenable		.value 	= _data.faenable == 'Y';
		$.faname		.value 	= String( _data.faname 		);
		$.faplace		.text	= String( _data.faplace 	);
		$.faaddress		.value	= String( _data.faaddress	);
		$.facity		.value	= String( _data.facity 		);
		$.fapostal		.value 	= String( _data.fapostal 	);
		$.facountry		.text	= String( _data.facountry 	);
		$.fastate		.text	= String( _data.fastate 	);
		$.fastate_field	.value	= String( _data.fastate 	);
		setStateRow();
	}
	
	function saveAddress(){
		blur();
		if( APP.addresses ){
			for( var i = 0 ; i < APP.addresses.length ; i++ ){
				if(
					( APP.addresses[ i ].faname == $.faname.getValue() )
					&&
					( _pkfamilyaddress != APP.addresses[ i ].pkfamilyaddress )
				){
					alert( 'Please enter a different alias name, this is already in use!' );
					return false;
				}
			}
		}
		if( !/^(\#*\-*\s*\d+[\,*\-*\s*\d*a-zA-Z]+\w*)/.test( $.faaddress.getValue() ) ){
			alert( 'Please enter a valid address!\n(number, street)' );
			return false;
		}
		APP.getToken({
			openLogin 	: true,
			callback	: function( token ){
				APP.showActivityindicator();
				APP.getCurrentLocation(function( event ){
					if( event.success ){
						_ws_request = {
							atoken 				: token,
							pkfamily			: Ti.App.Properties.getString( 'pkfamily' ),
							flat				: event				.lat,
							flon				: event				.lon,
							faddress			: $.faaddress		.getValue(),
							faname				: $.faname			.getValue(),
							fcity				: $.facity			.getValue(),
							fstate : 
								( $.facountry						.getText() == 'United States' ) 
								? $.fastate							.getText()
								: $.fastate_field 					.getValue() || ' ',
							fpostal				: $.fapostal		.getValue(),
							fcountry			: $.facountry		.getText(),
							faplace				: $.faplace			.getText(),
							faenable			: $.faenable		.getValue()	? 'Y' : 'N'
						};
						_pkfamilyaddress && ( _ws_request.pkfamilyaddress = _pkfamilyaddress );
						/**** / Ti.API.info( 'saveAddress >>> _ws_request:' + JSON.stringify( _ws_request ) ); /****/
						APP.http.request({
							url 	: L( 'ws_putmyaddresses' ),
							type 	: 'GET',
							format 	: 'JSON',
							data 	: _ws_request
						}, function(_result) {
							/**** / Ti.API.info( 'saveAddress >>> _result:' + JSON.stringify( _result ) ); /****/
							if (_result._result == 0) {
								alert( L( 'something_wrong' ) );
							} else {
								if (_result._data.errorcode != 0) {
									alert( _result._data.message );
								} else {
									alert( L( 'successful' ) );
							  		_result._data.data[ 0 ].atoken;
									args.params && args.params.callback && args.params.callback();
									APP.closeWindow();
								}
							}
							APP.hideActivityindicator();
							return true;
						});
					}else {
						alert(L('failed_to_get_current_location'));
						APP.hideActivityindicator();
					}
					return true;
				});
				return true;
			}
		});
		return true;
	}
	
	function pickCountry(){
		blur();
		APP.popUp({
			title		: 'Select a Country',
			container : {
				width	: 300,
				height	: 300
			},
			controller 	: 'Settings/CountryPicker',
			controllerParams : {
				callback : function( event ){
					$.facountry.setText( event.value );
					setStateRow();
					return true;
				}
			}
		});
		return true;
	}
	
	function pickPlace(){
		blur();
		APP.popUp({
			title : 'Select a Place',
			container : {
				width : 300,
				height : 245
			},
			controller : 'Settings/PlacePicker',
			controllerParams : {
				callback : function( event ){
					$.faplace.setText( event.value );
					return true;
				}
			}
		});
		return true;
	}
	
	function pickState(){
		blur();
		APP.popUp({
			title:'Select a State',
			container:{
				width	: 300,
				height	: 300
			},
			controller : 'Settings/StatePicker',
			controllerParams : {
				callback : function( event ){
					$.fastate.setText( event.value );
					return true;
				}
			}
		});
		return true;
	}
	
	function setStateRow(){
		if( $.facountry.getText() == 'United States' ){
			$.state_row_field	.height = 0;
			$.state_row_picker	.height	= 40;
		}
		else{
			$.state_row_field	.height = Ti.UI.SIZE;
			$.state_row_picker	.height	= 0;
		}
		return true;
	}
	
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
		_saveButton.addEventListener('click',saveAddress);
		args.toolBar.removeAllCustomViews();
		args.toolBar.setRightButton( 0 , false );
		args.toolBar.addCustomView(_saveButton);
		args.toolBar.setCloseAction(function(){
			blur();
			return true;
		});
		/** ADDITIONAL WINDOW SETTINGS **/
		_textfields = [
			$.faname,
			$.faaddress,
			$.facity,
			$.fapostal
		];
		$.faname		.hintText = L( 'name_address'	);
		$.faaddress		.hintText = L( 'address' 		);
		$.facity		.hintText = L( 'city' 			);
		$.fapostal		.hintText = L( 'postal_code' 		);
		$.fastate_field	.hintText = L( 'state' 			);
		/** LOAD INFORMATION **/
	    if(args.params&&args.params.data){
	    	_data = args.params.data; 
		    args.toolBar.setTitle( L( 'edit_address' ) );
		    setInformation();
	    }
	    else{
	    	args.toolBar.setTitle( L( 'new_address' ) );
	    	if( args.params ){
		    	$.faaddress	.value 	= String( args.params.faaddress || '' );
		    	$.facity	.value 	= String( args.params.facity 	|| '' );
		    	$.fastate	.text	= String( args.params.fastate 	|| '' );
	    	}
	    	setStateRow();
	    	$.delete_btn.height = 0;
	    }
		/** LISTENERS **/
		for (var i = 0; i < _textfields.length - 1; i++) {
			_textfields[ i ].next = _textfields[i + 1];
			_textfields[ i ].addEventListener('return', function(event) {
				this.next.focus();
				return true;
			});
		}
		return true;
	}

/** EXECUTE **/

	initialize();

