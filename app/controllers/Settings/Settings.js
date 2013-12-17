
/** INSTANTIATION **/

	var APP 	= require( "/core" );
	var args 	= arguments[ 0 ] || {};
	

/** FUNCTIONS **/

	function openAbout( event ){
		APP.openWindow({
			controller : 'Widgets/Browser',
			controllerParams : {
				title	: L( 'about' 		),
				url 	: L( 'url_about'	)
			}
		});
		return true;
	}
	
	function openMyAccountSettings( event ){
		APP.getToken({
			openLogin 	: true,
			callback	: function( _token ){
				APP.openWindow({
					controller : 'Settings/MyAccountSettings',
					controllerParams : {
						token : _token
					}
				});
				return true;
			}
		});
		return true;
	}
	
	function openMyAlertSettings( event ){
		APP.getToken({
			openLogin 	: true,
			callback	: function( _token ){
				return APP.openWindow({
					controller : 'Settings/MyAlertSettings',
					controllerParams : {
						token : _token
					}
				});
				return true;
			}
		});
		return true;
	}
	
	function openMyAddresses( event ){
		APP.getToken({
			openLogin 	: true,
			callback	: function( _token ){
				APP.openWindow({
					controller : 'Settings/MyAddresses',
					controllerParams : {
						token : _token
					}
				});
				return true;
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
	
	function openShareApp( event ){			
		var _emailDialog 			= Ti.UI.createEmailDialog();
		_emailDialog.subject 		= L( 'share_subject'	);
		_emailDialog.messageBody	= L( 'share_body'		) + '\n';
		_emailDialog.open();
		return true;
	}
	
	function setState( event ){
		switch( event.source.id ){
			case 'law_enforcement_switch' :
				Ti.App.Properties.setBool( 'lawEnforcementS' , event.value );
				break;
			case 'send_anonymosly_switch' :
				Ti.App.Properties.setBool( 'anonymousS' , event.value );
				break;
			case 'community_watch_switch' :
				Ti.App.Properties.setBool( 'communityS' , event.value );
				break;
			case 'media_switch' :
				Ti.App.Properties.setBool( 'mediaS' , event.value );
				break;
		}
		return true;	
	}
	
/** CODE **/
	
	function updateView(){
	    APP.headerbar.setLeftButton(0,false);
	    APP.headerbar.setRightButton(0,false);
	    APP.headerbar.setLeftButton(APP.OPENMENU,true);
		APP.headerbar.setTitle( 'Settings' );
		$.law_enforcement_switch 	.value = Boolean( Ti.App.Properties.getBool( 'lawEnforcementS'	) );
		$.send_anonymosly_switch 	.value = Boolean( Ti.App.Properties.getBool( 'anonymousS'		) );
		$.community_watch_switch 	.value = Boolean( Ti.App.Properties.getBool( 'communityS'		) );
		$.media_switch 				.value = Boolean( Ti.App.Properties.getBool( 'mediaS'			) );
		return true;
	}

/** EXPORTS **/

	exports.updateView = updateView;

