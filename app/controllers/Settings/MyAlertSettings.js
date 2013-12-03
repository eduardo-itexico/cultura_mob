
/** INSTANTIATION **/

	var APP = require( "/core" );
	var args = arguments[ 0 ] || {};
	var _ws_request,_falertEAemail='',_fatidistance=1,_fdistance=2,_fweatherlevel=1,_falertlevel=1;

/** FUNCTIONS **/

	function getInformation(){
		_ws_request = {
			atoken : args.params.token,
			date	: new Date().getTime()
		};
		/**** / Ti.API.info( 'getInformation >>> _ws_request:' + JSON.stringify( _ws_request ) ); /****/
		APP.showActivityindicator();
		APP.http.request({
			url		: L( 'ws_getmyalertsettings' ),
			type	: 'GET',
			format	: 'JSON',
			data	: _ws_request
		}, function( _result ){
			/**** / Ti.API.info( 'getInformation >>> _result:' + JSON.stringify( _result ) ); /****/
			if( _result._result == 0 ){
				alert( L( 'something_wrong' ) );
				APP.closeWindow();
			}
			else{
				if( _result._data.errorcode != 0 ){
					alert( _result._data.message );
					APP.closeWindow();
				}
				else{
					setInformation( _result._data.data[ 0 ] );
				}
			}
			APP.hideActivityindicator();
			return true;
		});
		return true;
	}
	
	function saveInformation(){
		APP.showActivityindicator();
		APP.getCurrentLocation(function(event){
			if( event.success ){
				_ws_request = {
					atoken 				: args.params.token,
					flat 				: event.lat,
					flon 				: event.lon,
					falertEAemail		: _falertEAemail,
					falertEAcell		: $.falertEAcell.value			? 'Y' : 'N',
					falertcell			: $.falertcell.value			? 'Y' : 'N',
					falertemail			: $.falertemail.value			? 'Y' : 'N',
					fnalertemail		: $.fnalertemail.value 			? 'Y' : 'N',
					falertMediaEmail	: $.falertMediaEmail.value 		? 'Y' : 'N',
					fealertemail		: $.fealertemail.value 			? 'Y' : 'N',
					falertIDEmail		: $.falertIDEmail.value 		? 'Y' : 'N',
					fsodemail			: $.fsodemail.value 			? 'Y' : 'N',
					falertWeatherEmail	: $.falertWeatherEmail.value	? 'Y' : 'N',
					fweatherlevel		: _fweatherlevel, 	// 1 - 4
					falertlevel			: _falertlevel,		// 1 - 5
					fatidistance		: _fatidistance,
					fati				: $.ati_switch.value ? 'Y' : 'N',
					fdistance			: _fdistance
				};
				/**** / Ti.API.info('saveInformation >>> _ws_request:' + JSON.stringify(_ws_request)); /****/
				APP.http.request({
					url 				: L( 'ws_putmyalertsettings' ),
					type 				: 'GET',
					format 				: 'JSON',
					data 				: _ws_request
				}, function(_result) {
					/**** / Ti.API.info('saveInformation >>> _result:' + JSON.stringify(_result)); /****/
					if (_result._result == 0) {
						alert(L('something_wrong'));
					} else {
						if (_result._data.errorcode != 0) {
							alert( _result._data.message );
						} else {
							alert(L('save_successful'));
							_result._data.data[0].atoken
							APP.closeWindow();
						}
					}
					APP.hideActivityindicator();
					return true;
				});
			} else {
				APP.hideActivityindicator();
				alert(L('failed_to_get_current_location'));
			}
		});
		return true;
	}
	
	function setAlertLevel(event){
		_falertlevel = String( event.value || this.value );
		$.cb_1						.setImage( '/images/bt_radio_unselect.png' 	);
		$.cb_2						.setImage( '/images/bt_radio_unselect.png' 	);
		$.cb_3						.setImage( '/images/bt_radio_unselect.png' 	);
		$.cb_4						.setImage( '/images/bt_radio_unselect.png' 	);
		$.cb_5						.setImage( '/images/bt_radio_unselect.png' 	);
		$[ 'cb_' + _falertlevel  ]	.setImage( '/images/bt_radio_select.png' 	);
		return true;
	}
	
	function setCellValue( cell_checker , value ){
		cell_checker.setImage( value ? '/images/ic_phone_active.png' : '/images/ic_phone_inactive.png');
		cell_checker.value = Boolean( value );
		return true;
	}
	
	function setEmailValue( email_checker , value ){
		email_checker.setImage( value ? '/images/ic_mail_active.png' : '/images/ic_mail_inactive.png');
		email_checker.value = Boolean( value );
		return true;
	}
	
	function setInformation( data ){
		data.atoken;
		/** SET THREAD DISTANCE FROM YOUR ADRESS(ES) PICKER **/
		_fatidistance 	= String( data.fatidistance );
		_fdistance 		= String( data.fdistance );
		$.ati_switch.setValue( data.fati == "Y" );
		setState({
			value : $.ati_switch.value
		});
		/** SET CHECKBOXES **/
		_falertEAemail = data.falertEAemail;
		setCellValue	( $.falertEAcell		, data.falertEAcell			== 'Y' );
		setCellValue	( $.falertcell			, data.falertcell			== 'Y' );
		setEmailValue	( $.falertemail			, data.falertemail			== 'Y' );
		setEmailValue	( $.fnalertemail		, data.fnalertemail			== 'Y' );
		setEmailValue	( $.falertMediaEmail	, data.falertMediaEmail		== 'Y' );
		setEmailValue	( $.fealertemail		, data.fealertemail			== 'Y' );
		setEmailValue	( $.falertIDEmail		, data.falertIDEmail		== 'Y' );
		setEmailValue	( $.fsodemail			, data.fsodemail			== 'Y' );
		setEmailValue	( $.falertWeatherEmail	, data.falertWeatherEmail	== 'Y' );
		( data.falertWeatherEmail	== 'Y' ) && ( $.weather_select.height = 40 );
		/** SET SEVERE WEATHER ALERTS PICKER **/
		setWeather({
			value	: parseInt( data.fweatherlevel ),
			show	: data.falertWeatherEmail == 'Y'
		});
		/** SET CRIME, FIRE & WEATHER ADVISORY LEVEL **/
		setAlertLevel({
			value : String( data.falertlevel )
		});
		return true;
	}
	
	function setState( event ){
		if( event.value ){
			$.distance_picker.setHeight( 0 );
			$.threat_distance.setText(
				_fdistance + ( _fdistance == 1 ? 'Mile.' : ' Miles.' )
			);
		}
		else{
			$.distance_picker.setHeight( Ti.UI.SIZE );
			switch( String( _fatidistance ) ){
				case '0.25'	: $.threat_distance.setText( L( 'td_0_25' 	) ); break;
				case '0.5'	: $.threat_distance.setText( L( 'td_0_5' 	) ); break;
				case '1'	: $.threat_distance.setText( L( 'td_1' 		) ); break;
				case '2'	: $.threat_distance.setText( L( 'td_2' 		) ); break;
				case '3'	: $.threat_distance.setText( L( 'td_3' 		) ); break;
			}
		}
		return true;	
	}
	
	function setThreatDistance( event ){
		_fatidistance = String( this.value );
		$.threat_distance.setText( this.text );
		$.distance_picker.setHeight( 0 );	
		return true;
	}
	
	function setWeather( event ){
		_fweatherlevel = String( event.value || this.value );
		switch( parseInt( _fweatherlevel ) ){
			case 1 : $.fweatherlevel.setText( L( 'wl_extreme' 	) ); break;
			case 2 : $.fweatherlevel.setText( L( 'wl_severe' 	) ); break;
			case 3 : $.fweatherlevel.setText( L( 'wl_moderate'	) ); break;
			case 4 : $.fweatherlevel.setText( L( 'wl_minor' 	) ); break; 
		}
		$.weather_picker.setHeight( 0 );
		return true;	
	}
	
	function toggleCellValue( event ){
		setCellValue( this , !Boolean( this.value ) );
		return true;
	}
	
	function toggleEmailValue( event ){
		setEmailValue( this , !Boolean( this.value ) );
		return true;
	}
	
	function toggleEmailWeatherAlerts( event ){
		setEmailValue( this , !Boolean( this.value ) );
		if( Boolean( this.value ) ){
			$.weather_select.setHeight( 40 );
			$.spin_arr.setImage( '/images/ic_down_arrow.png' );
		}
		else{
			$.weather_select.setHeight( 0 );
			$.weather_picker.setHeight( 0 );
			$.spin_arr.setImage( '/images/ic_up_arrow.png' );
		}
		return true;
	}
	
	function toggleThreatDistancePicker( event ){
		if( !$.ati_switch.value ){
			( $.distance_picker.height == 0 )
			? $.distance_picker.setHeight( Ti.UI.SIZE )
			: $.distance_picker.setHeight( 0 );
		}
		return true;
	}
	
	function toggleWeatherPicker( event ){
		if( Boolean( $.falertWeatherEmail.value ) ){
			if( $.weather_picker.height == 0 ){
				$.weather_picker.setHeight( Ti.UI.SIZE );
				$.spin_arr.setImage( '/images/ic_up_arrow.png' );
			}
			else{
				$.weather_picker.setHeight( 0 );
				$.spin_arr.setImage( '/images/ic_down_arrow.png' );
			}
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
		_saveButton.addEventListener('click',saveInformation);
		args.toolBar.removeAllCustomViews();
		args.toolBar.setRightButton( 0 , false );
		args.toolBar.setTitle( L( 'my_alert_settings' ) );
		args.toolBar.addCustomView(_saveButton);
		/** LOAD INFORMATION **/
		getInformation();
		return true;
	}

/** CODE **/

	initialize();
