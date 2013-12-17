
/** INSTANTIATION **/

	var APP = require( "/core" );
	var args = arguments[ 0 ] || {};
	var _textfields,_ws_request,_saveButton,_editButton;

/** FUNCTIONS **/

	function blur(){
		for( var i = 0 , _textfield ; i < _textfields.length ; i++ ){
			_textfield = _textfields[ i ];
			_textfield.blur();
		}
		$.state_field.blur();
		return true;
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
		$.state_field.borderWidth			= 0;
		$.country_row_picker.borderWidth	= 0;
		$.state_row_picker.borderWidth		= 0;
		$.agree_row.borderWidth 			= 0;
		return true;
	}
	
	function pickCountry(){
		blur();
		normalize();
		APP.popUp({
			title		: 'Select a Country',
			container : {
				width	: 300,
				height	: 300
			},
			controller 	: 'Settings/CountryPicker',
			controllerParams : {
				callback : function( event ){
					$.country.setText( event.value );
					setStateRow();
					return true;
				}
			}
		});
		return true;
	}

	function pickState(){
		blur();
		normalize();
		APP.popUp({
			title:'Select a State',
			container:{
				width	: 300,
				height	: 300
			},
			controller : 'Settings/StatePicker',
			controllerParams : {
				callback : function( event ){
					$.state.setText( event.value );
					return true;
				}
			}
		});
		return true;
	}
	
	function openPrivacy( event ){
		APP.openWindow({
			controller : 'Widgets/Browser',
			controllerParams : {
				title	: L( 'terms_and_cond'	),
				url 	: L( 'url_privacy' 		)
			}
		});
		return true;
	}
	
	function save(){
		if( validate() ){
			APP.showActivityindicator();
			APP.getCurrentLocation(function( event ){
				if( event.success ){
					_ws_request = {
						cfirstname 	: $.firstname.value,
						clastname 	: $.lastname.value,
						cusername 	: $.username.value,
						faddress1 	: $.address.value,
						fcity 		: $.city.value,
						fcountry	: $.country.text,
						fstate 		: ( $.country.text == 'United States' ) ? $.state.text : $.state_field .value,
						fpostal 	: $.postal_code.value,
						fcphone 	: $.cellphone.value,
						cpassword 	: $.password.value,
						cfpassword 	: $.confirm_password.value,
						agree 		: $.agree.value ? 'Y' : 'N',
						action		: 1
					};
					/**** / Ti.API.info( 'save >>> _ws_request:' + JSON.stringify( _ws_request ) ); /****/
					APP.http.request({
						url 		: L( 'ws_enrollnow' ),
						type 		: 'GET',
						format 		: 'JSON',
						data 		: _ws_request
					}, setSaveResponse );
				} else {
					alert(L( 'failed_to_get_current_location' ));
					APP.hideActivityindicator();
				}
			});
		}
		return true;
	}
	
	function setSaveResponse( response ){
		/**** / Ti.API.info( 'setSaveResponse >>> response:' + JSON.stringify( response ) ); /****/ 
		if( response._result == 1 ){
			if( response._data.errorcode == 0 ){
				Ti.App.Properties.setInt	( 'pkfamily'	, response._data.data[ 0 ].pkfamily		);
				Ti.App.Properties.setString	( 'user_token'	, response._data.data[ 0 ].atoken		);
				Ti.App.Properties.setString	( 'user_name'	, $.username.value						);
				blur();
				APP.closeWindow();
				APP.openCloseMenu();
				APP.hideActivityindicator();
			}
			else{
				alert( response._data.message );
				APP.hideActivityindicator();
			}
		}
		else{
			alert( L( 'fail_on_webservice' ) );
			APP.hideActivityindicator();
		}
		return true;
	}
	
	function setStateRow(){
		if( $.country.text == 'United States' ){
			$.state_row_field	.height = 0;
			$.state_row_picker	.height	= 40;
		}
		else{
			$.state_row_field	.height = Ti.UI.SIZE;
			$.state_row_picker	.height	= 0;
		}
		return true;
	}
	
	function toggleCheckbox( event ){
		$.agree.value = $.agree.value
		? 	( $.agree.image = '/images/bt_radio_unselect.png'	) 
			&& false
		: 	( $.agree.image = '/images/bt_radio_select.png'		) 
			&& 	true; 
		return true;
	}
	
	function validate(){
		blur();
		var _cellphone, _invalid = false;
		
		for( var i = 0,_textfield ; i < _textfields.length ; i++ ){
			_textfield = _textfields[ i ];
			if( !_textfield.value.length ){
				_textfield.borderColor = 'red';
				_textfield.borderWidth = 1;
				_invalid = true;
			}
		}
		if( _invalid ){
			Ti.UI.createAlertDialog({
				title	: 'New Account',
				message	: L( 'invalid_input' )
			}).show();
			return false;
		}

		if( invalidEmail( $.username.value ) ){
			alert(L( 'invalid_username' ));
			$.username.borderColor = 'red';
			$.username.borderWidth = 1;
			return false;
		}
		
		_cellphone = String( parseInt( $.cellphone.value ) );
		if( !parseInt( _cellphone ) || _cellphone.length < 10 ){
			alert(L( 'invalid_cell' ));
			$.cellphone.borderColor = 'red';
			$.cellphone.borderWidth = 1;
			return false;
		}
		
		if( !/^(\#*\d+\,*\s*[a-zA-Z]+\w*)/.test( $.address.value ) ){
			alert(L( 'invalid_address' ));
			$.address.borderColor = 'red';
			$.address.borderWidth = 1;
			return false;
		}

		if( !$.country.text.length ){
			alert(L( 'invalid_country' ));
			$.country_row_picker.borderColor = 'red';
			$.country_row_picker.borderWidth = 1;
			return false;
		}
		else
		if( $.country.text == 'United States' ){
			if( !$.state.text.length ){
				alert(L( 'invalid_state' ));
				$.state_row_picker.borderColor = 'red';
				$.state_row_picker.borderWidth = 1;
				return false;
			}
		}
		else{
			if( !$.state_field.value.length ){
				$.state_field.borderColor = 'red';
				$.state_field.borderWidth = 1;
				alert(L( 'invalid_state' ));
				return false;
			}
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
		
		if( !$.agree.value ){
			alert(L( 'must_accept' ));
			$.agree_row.borderColor = 'red';
			$.agree_row.borderWidth = 1;
			return false;
		}
		
		return true;
	}
	
	function invalidEmail( _email ){
		var regExp = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)+$/; 
		return !regExp.test( _email );
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
		args.toolBar.setTitle(L( 'new_account' ));
		args.toolBar.addCustomView(_saveButton);
		args.toolBar.setCloseAction(function(){
			blur();
			setTimeout(APP.openLogin,300);
			return true;
		});
		/** ADDITIONAL WINDOW SETTINGS **/
		_textfields = [
			$.firstname,
			$.lastname,
			$.username,
			$.cellphone,
			$.address,
			$.city,
			$.postal_code,
			$.password,
			$.confirm_password
		];
		$.firstname			.hintText = L( 'firstname'			);
		$.lastname			.hintText = L( 'lastname'			);
		$.username			.hintText = L( 'username'			);
		$.cellphone			.hintText = L( 'cell_phone'			);
		$.address			.hintText = L( 'address'			);
		$.city				.hintText = L( 'city'				);
		$.postal_code		.hintText = L( 'postal_code'		);
		$.state_field		.hintText = L( 'state'				);
		$.password			.hintText = L( 'password'			);
		$.confirm_password	.hintText = L( 'confirm_password'	);
		for( var i = 0 ; i < _textfields.length - 1 ; i++ ){
			_textfields[ i ].next = _textfields[ i + 1 ];
		}
		setStateRow();
		return true;
	}	initialize();
	


