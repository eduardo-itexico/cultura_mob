/**
 * Main app singleton
 * @type {Object}
 */
var APP = {

	/**
	 * CONSTANTS
	 */
	CLOSEWINDOW        : 2,
	DEVICE_WIDTH       : 0,
	DEVICE_HEIGHT      : 0,
	OPENMENU 	       : 1,
	OPENWINDOW 		   : 2,
	OPENOPTIONS 	   : 1,
	PET_MEMBER		   : 2,
	USER_MEMBER		   : 1,
	
	/**
	 * PROPERTIES
	 */
	ads					: false, // Reference to adMob library
	container			: null, // Reference to the view container (to add/remove more views: currentController.getView())
	currentController  	: null, // Active view Controller
	debug				: 0, // Active to Debug.
	hashControllers		: [],
	headerbar			: null, // HeaderBar Controller
	popUpController	    : null,
	masterWindow		: null, // Main Container Window
	mainContainer		: null, // main cnotainer view
	menubar				: null, // MenuBar Controller
	optionbarContainer	: null, // OptionBar Container
	optionbar			: null, // OptionBar Controller
	stackControllers	: [],
	spinner				: null,
	/**
	 * LIBRARIES 
	 */	
	animation 			: require( 'animation'	),
	http				: require( 'http'		),

	/**
	 * CONSTRUCTOR
	 */
	 
	/**  
	 * Sets up the app singleton and all it's child dependencies
	 * NOTE: This should only be fired in index controller file and only once.
	 */
 	init: function() {
 	    Alloy.Globals.CONTENT_TOP			= APP.fixSizeIos7( Alloy.Globals.CONTENT_TOP );
        Alloy.Globals.CONTENT_BOTTOM		= APP.fixSizeAds( Alloy.Globals.CONTENT_BOTTOM );
 	    Ti.Geolocation.purpose				= L("app_name")+" Threat Level";
 	    Ti.Geolocation.preferredProvider	= Titanium.Geolocation.PROVIDER_GPS;
        Ti.Geolocation.accuracy				= Titanium.Geolocation.ACCURACY_KILOMETER;
        Ti.Geolocation.distanceFilter		= 50;
		APP.masterWindow 					= Alloy.createController( 'MainWindow/MainWindow' );
        setTimeout(function(){
			APP.masterWindow.getView().open();
			APP.walkthru.open();
			Ti.App		.addEventListener( 'pause' 				, APP.pause				);
			Ti.App		.addEventListener( 'resume' 			, APP.resume			);
			Ti.Gesture	.addEventListener( 'orientationchange' 	, APP.orientationchange	);
			APP.getToken({
				openLogin:false,
				callback:function(){
					APP.notifications.subscribe();
					return true;
				}
			});
        },3000);
	},

	/**
	 * METHODS
	 */
	
	/**
     * Global function to remove animated view
     * @param {Function} 
     */
    closeWindow: function(_params){
        if(APP.stackControllers.length > 0){
            var _view = APP.stackControllers.pop().getView();
            var slideOut = Titanium.UI.createAnimation({left: APP.masterWindow.getView().size.width, duration: 300});
            _view.animate(slideOut);
            if(APP.optionbar.getView().isOpen == false && APP.menubar.getView().isOpen == false){
                APP.mainContainer.animate({left:0, duration:220});
            }
            slideOut.addEventListener('complete', function(){
            	APP.masterWindow.getView().remove(_view);
                // APP.container.remove(_view);
                if(_params && _params._callBack){
                    _params._callBack();
                }
            });
            APP.popOut();
        }
        //APP.ads && APP.ads( APP.mainContainer );
    },

	/**
     * Global function to create an alert dialog
     * @param {string}		message
     * @param {string}[]	button_names
     * @param {function}[]	callbacks
     */
	createDialog : function( message , button_names , callbacks ){
		var self = Ti.UI.createAlertDialog({
			buttonNames	: button_names,
			message		: message,
			title		: 'Advice'
		});
		self.show();
		self.addEventListener('click',function(event){
			callbacks[ event.index ] && callbacks[ event.index ]();
		});
		return self;
	},

	/**
	 * Global function to return a fix size for ads bar (0 or 50).
	 **/
	fixSizeAds : function( number ){
		number = number ? parseInt( number ) : 0 ;
		if( APP.ads ){
			APP.ads = require( 'AdMob' );
			return number + 50;
		}
		else{
			return number;
		}
		return 
	},

	/**
	 * Global function to return a fix size for ios7 bar (0 or 20).
	 */
	fixSizeIos7 : function( number ){
		number = number ? parseInt( number ) : 0 ;
		if( ( ( Ti.Platform.osname == 'iphone' ) || ( Ti.Platform.osname == 'ipad' ) ) && ( parseInt( Ti.Platform.version ) >= 7 ) ){
			return number + 20;
		}
		else{
			return number;
		}
	},
	
    /**
     * Global function to get the current position
     * @param {Function} 
     */
    getCurrentLocation:function(_callBack){
        if(Titanium.Geolocation.locationServicesEnabled === false){
            var notificationDialog = Ti.UI.createAlertDialog({
                title :L("app_name"),
                message :L("app_name")+' is turned it off from running geolocation services. \nPlease check your Wi-Fi and GPS connection in order to use '+L("app_name")+' app.',
                buttonNames : ['Open Settings']
            });
            notificationDialog.addEventListener('click', function(e) {
                if(e.index === 0) {
                    var settingsIntent = Titanium.Android.createIntent({
                        action : 'android.settings.LOCATION_SOURCE_SETTINGS'
                    });
                    Ti.Android.currentActivity.startActivity(settingsIntent);
                }
            });
            notificationDialog.show();
            _callBack({success:false});
        }else{
            var authorization = Titanium.Geolocation.locationServicesAuthorization;
            if(authorization == Titanium.Geolocation.AUTHORIZATION_DENIED && OS_IOS) {
                Ti.UI.createAlertDialog({
                    title:L("app_name"),
                    message:L("app_name")+' is turned it off from running geolocation services.\nPlease check your Wi-Fi and GPS connection in order to use '+L("app_name")+' app.'
                }).show();
                _callBack({success:false});
            }else if (authorization == Titanium.Geolocation.AUTHORIZATION_RESTRICTED && OS_IOS) {
                Ti.UI.createAlertDialog({
                    title:L("app_name"),
                    message:'Your system has disallowed '+L("app_name")+' from running geolocation services.\nPlease check your Wi-Fi and GPS connection in order to use '+L("app_name")+' app.'
                }).show();
                _callBack({success:false});
            }else{
                Titanium.Geolocation.getCurrentPosition(function(e){    
                    if (!e.success || e.error){
                        //alert('error ' + JSON.stringify(e.error));
                        alert('We are unable to get your location.  Please verify that your internet connection and your geolocation services are on.');
                        _callBack({success:false});
                    }else{
	                    _callBack({success:true, lat:e.coords.latitude, lon:e.coords.longitude});
                    }
                });
            }
        }
    },
	
	//Database
	getLastInsertByAlloyId : function(rcvCollection,rcvId,rcvIdName){ 
			//collection name, alloy_id (model.id), id column name in the model.
		    var projectInfo = Alloy.Collections.instance(rcvCollection);
   		    projectInfo.fetch();
   		    var lastProject = projectInfo.where({alloy_id:rcvId});
   		    if(lastProject != null && lastProject.length > 0){
   		    	return lastProject[0].get(rcvIdName);
   		    } else{
   		    	return -1;
   		    }
	},
	
	/**
	 * Global function to get the user token
	 * @param 	{function}	args.callback		If you need do a callback. It receive the token as argument.
	 * @param 	{boolean}	args.openLogin		If true, open a login dialog if you are logout.
	 * @return	{string}						The user token.
	 */
	getToken : function( args ){
		var _token = Ti.App.Properties.getString( 'user_token' , false );
		args && ( _token
		?	( args.callback && args.callback( _token ) )
		: 	( args.openLogin && APP.openLogin( args ) ) );
		return _token;
	},
	
	/**
	 * Global event handler to change screens
	 * @param  {Object} _event Params for this navigation event
	 * @example
	 * {
	 * 		controller: String The controller name to load
	 * }
	 */
	handleNavigation: function(path,_params) {
		APP.reportIsOpen = false;
		//Ti.API.info(JSON.stringify(APP.currentController)+" -- "+JSON.stringify(APP.hashControllers[path]));
		if(path !== null) {
		    if(APP.currentController && APP.currentController == APP.hashControllers[path]){
               if(APP.currentController.updateView){
                    APP.currentController.updateView(_params);
               }
            }else{
    			// Remove current controller view
    			APP.removeCurrentScreen(function() {
    
                    if(!APP.hashControllers[path]){
        				// Instantiate the screen controller
        				APP.currentController = Alloy.createController(path,_params);
        				APP.hashControllers[path] = APP.currentController;
        			}else{
        			    APP.currentController = APP.hashControllers[path];
        			}
        			
    				// Add the new screen to the window
    				APP.container.add( APP.currentController.getView());
    				if(APP.currentController.updateView){
    				    APP.currentController.updateView(_params);
    				}
    				APP.ads && APP.ads( APP.mainContainer );
    			});
			}
		} else {
			//Ti.API.error("@APP.handleNavigation() - Index is undefined");
		}
	},

	/**
	 * Global function to do logout
	 * @param {Function} _callback
	 */
	logout : function(){
		alert( L( 'logout_message' ) );
		Ti.App.Properties.removeProperty( 'pkfamily' );
		Ti.App.Properties.removeProperty( 'user_token' );
		Ti.App.Properties.removeProperty( 'user_name' );
		APP.handleNavigation( 'MyAlerts/MyAlerts' );
		return true;
	},
	
	/**
     * Global function to do an operation for numbers
     * @param {Function} 
     */
	numberOperation: function(_value1,_op,_value2,_num){
        var tempOp;
        switch(_op){
            case "-":
                tempOp = parseInt(_value1)-parseInt(_value2);
            break;
            case "+":
                tempOp = parseInt(_value1)+parseInt(_value2);
            break;
            case "/":
                tempOp = parseInt(_value1)/parseInt(_value2);
            break;
            case "*":
                tempOp = parseInt(_value1)*parseInt(_value2);
            break;
        }
        if(_num == true){
            return tempOp+((OS_ANDROID)?"px":"dp");
        }else{
            return tempOp;
        }
       
    },
	/**
     * Global functions for notifications
     **/
	notifications : {
		badge : null,
		subscribe : function(){
			/**
			 * VARIABLES
			 **/
			var UrbanAirship,_deviceToken,_deviceType,_lat,_lon,_type,_userToken,_ws_request;
			/**
			 * FUNCTIONS
			 **/
			function successCallback( event ){
				Ti.API.info( 'successCallback >>> event:' + JSON.stringify( event ) );
				_deviceToken = event.deviceToken; 
				Ti.App.Properties.setString( 'device_token' , _deviceToken );
				OS_IOS && UrbanAirship.registerDevice(_deviceToken,{
		            tags	: [ _type + '-' + Ti.Platform.name ],
		            alias	: _type + '-' + Ti.Platform.name
		        });
				_ws_request = {
					atoken 		: _userToken,
					flat 		: _lat,
					flon 		: _lon,
					devicetoken : _deviceToken,
					devicetype 	: _deviceType,
					tokentype 	: 'alertid-' + _type
				};
				/**** / Ti.API.info( 'save >>> _ws_request:' + JSON.stringify( _ws_request ) ); /****/
				APP.http.request({
					url 		: L( 'ws_putdevice' ),
					type 		: 'GET',
					format 		: 'JSON',
					data 		: _ws_request
				}, responseHandler );
				return true;
			}
		 	function errorCallback( event ){
		 		Ti.API.error( 'errorCallback >>> event:' + JSON.stringify( event ) );
		 		return true;
		 	}
		 	function messageCallback( event ){
		 		Ti.API.info( 'messageCallback >>> event:' + JSON.stringify( event ) );		 		
				event.data && APP.openDialog(event.data.alert, [L('ok'), L('cancel')], [
				function() {
					APP.handleNavigation('Notifications/Notifications');
					APP.menubar.highlightNotifications();
					return true;
				}]);
		 		APP.notifications.badge.text = String( parseInt( APP.notifications.badge.text ) + 1 );
		 		return true;
		 	}
			function registerDevice( event ){
				if ( event.success ){
					_lat 			= event.lat;
					_lon 			= event.lon;
					_type 			= ENV_PRODUCTION ? 'prod' : 'dev';
					UrbanAirship 	= require( 'ti.urbanairship' );
					if( OS_IOS ){
						Ti.API.info( 'APP.notifications.subscribe >>> OS_IOS' );
						_deviceType 				= "ios";
						Ti.UI.iPhone.appBadge		= 0;
						Ti.UI.iPhone.setAppBadge	( 0 );
						UrbanAirship.options = {
						    APP_STORE_OR_AD_HOC_BUILD	: true,
						    PRODUCTION_APP_KEY			: 'xFnzUR39TymJCn9L1KH-nQ',
						    PRODUCTION_APP_SECRET		: 'k8PN9CeLQ-u-aR-2C_Uv5g',
						    DEVELOPMENT_APP_KEY			: 'nts5oenFQZC1JTlHtESlxQ',
						    DEVELOPMENT_APP_SECRET		: 'o6q8AyH_Q2OF5LTvUk7HzQ',
						    LOGGING_ENABLED				: true
						};
						UrbanAirship.autoBadge 		= true;
						UrbanAirship.autoResetBadge	= true;
						Ti.Network.registerForPushNotifications({
					  		types : [
					  			Titanium.Network.NOTIFICATION_TYPE_BADGE,
					  			Titanium.Network.NOTIFICATION_TYPE_ALERT,
					  			Titanium.Network.NOTIFICATION_TYPE_SOUND
					  		],
					  		success		: successCallback,
					  		error		: errorCallback,
					  		callback	: messageCallback
					 	});	
					}
					else
					if( OS_ANDROID ){
						Ti.API.info( 'APP.notifications.subscribe >>> OS_ANDROID' );
						_deviceType 				= "android";
						UrbanAirship.showOnAppClick = true;
						UrbanAirship.tags 			= [ _type + '-Android' , 'gcm' ];
						UrbanAirship.alias 			= _type + '-Android';
						UrbanAirship.addEventListener(
							UrbanAirship.EVENT_URBAN_AIRSHIP_SUCCESS,
							successCallback
						);
						UrbanAirship.addEventListener(
							UrbanAirship.EVENT_URBAN_AIRSHIP_ERROR,
							errorCallback
						);
						UrbanAirship.addEventListener(
							UrbanAirship.EVENT_URBAN_AIRSHIP_CALLBACK,
							messageCallback
						);
						UrbanAirship.pushEnabled = true;
					}
				}
				return true;
			}
		 	function responseHandler( response ){
				/****/ Ti.API.info( 'responseHandler >>> _result:' + JSON.stringify( response ) ); /****/
				if(response._result == 0){
					//alert(L( 'something_wrong' ));
				}
				else{
					if( response._data.errorcode != 0 ){
						alert( response._data.message );
					}
					else {
						response._data.data[ 0 ].atoken;
						Ti.API.info( 'APP.notifications.subscribe >>> responseHandler >>> success' );
					}
				}
				APP.hideActivityindicator();
				return true;
			}
			/**
			 * EXECUTE
			 **/
			APP.getToken({
				openLogin 	: true,
				callback	: function( user_token ){
					_userToken = user_token;
					APP.getCurrentLocation( registerDevice );
					return true;
				}
			});
		 	return true;
		},
		unsubscribe : function(){
			Ti.Network.unregisterForPushNotifications();
			return true;
		}
	},
    
    /**
     * Global function to open left menu
     * @param {Function} 
     */
    openCloseOptions: function(_params){
        if(APP.optionbar.getView().isOpen == false){
        	APP.optionbar.addTxtFld();
        	APP.popOut();
        	//APP.ads && APP.ads();
            var tempAnimation = Titanium.UI.createAnimation({left: 50, duration: 0});
            if(_params && _params._callBack){
                tempAnimation.addEventListener("complete",function(){
                    _params._callBack();
                });
            }
            APP.optionbarContainer.animate(tempAnimation);
            if(APP.stackControllers.length == 0){
                APP.mainContainer.animate({left:APP.numberOperation(-APP.masterWindow.getView().size.width,"+",50,false), duration:350});
            }else{
                APP.stackControllers[APP.stackControllers.length-1].getView().animate({left:APP.numberOperation(-APP.masterWindow.getView().size.width,"+",50,false), duration:350});
            }
        }else{
            APP.optionbar.removeTxtFld();
            if(APP.stackControllers.length == 0){
                APP.mainContainer.animate({left:0, duration:350});
            }else{
                APP.stackControllers[APP.stackControllers.length-1].getView().animate({left:0, duration:350});
            }
            var tempAnimation = Titanium.UI.createAnimation({left:APP.masterWindow.getView().size.width, duration:0});
            if(_params && _params._callBack){
                tempAnimation.addEventListener("complete",function(){
                    _params._callBack();
                });
            }
            setTimeout(function(){
                APP.optionbarContainer.animate(tempAnimation);
            },350);
            //APP.ads && APP.ads( APP.mainContainer );
        }
        APP.optionbar.getView().isOpen = !APP.optionbar.getView().isOpen;
    },
	
	/**
     * Global function to open left menu
     * @param {Function} 
     */
	openCloseMenu: function(_params){
        if(APP.menubar.getView().isOpen == false){
			APP.popOut();
            //APP.ads && APP.ads();
            APP.mainContainer.animate({left:APP.numberOperation(APP.masterWindow.getView().size.width,"-",50,false), duration:350});
        }else{
            APP.mainContainer.animate({left:0, duration:400});
            //APP.ads && APP.ads( APP.mainContainer );
            if(_params && _params.onClose){
                setTimeout(function(){
                    _params.onClose();
                },400);
            }
            
        }
        APP.menubar.getView().isOpen = !APP.menubar.getView().isOpen;
       	if( Ti.App.Properties.getString( 'user_token' , false ) ){
       		APP.sessionButton.label.text = L( 'logout' );
       		APP.sessionButton.icon.image = '/images/ic_logout.png';
       	}
       	else{
       		APP.sessionButton.label.text = L( 'login' );
       		APP.sessionButton.icon.image = '/images/ic_login.png';
       	}
       	return true;
    },

	/**
	 * Global function to create and show a custom dialog
	 * @param	{string}		message
	 * @param	{string}[]		button_names
	 * @param	{function}[]	callbacks
	 **/ 
	openDialog : function( message , button_names , callbacks ){
		var self = Ti.UI.createAlertDialog({
			buttonNames	: button_names,
			message		: message,
			title		: 'Advice'
		});
		self.show();
		self.addEventListener('click',function(event){
			callbacks[ event.index ] && callbacks[ event.index ]();
		});
		return self;
	},
	
	/**
	 * Global function to do login
	 * @param {function} callback
	 */
	openLogin : function( args ){
		if( !APP.popUpController && !APP.walkthru.on ){
			APP.popUpController = Alloy.createController( "Login/Login" , args );
			APP.masterWindow.getView().add( APP.popUpController.getView() );
			if( !OS_ANDROID ){
				APP.animation.puffIn(APP.popUpController.getView(), {
					scale 			: 1.2,
					duration 		: 200,
					fade 			: 1.0,
					defaultScale 	: 1.0
				});
			}
		}
		return true;
	},

	/**
     * Global function to open animated view
     * @param {Function} 
     */
    openWindow: function(_params) {
    	//APP.ads && APP.ads();
        APP.popOut();
        var slideIn = Titanium.UI.createAnimation({left: 0, duration: 300});
        var tempWin = Alloy.createController("NextWindow/NextWindow",_params);

        APP.stackControllers.push(tempWin);

        APP.masterWindow.getView().add(tempWin.getView());
        tempWin.getView().animate(slideIn);
        if(APP.optionbar.getView().isOpen == false && APP.menubar.getView().isOpen == false){
			APP.mainContainer.animate({left:-100, duration:400});
        }
    },
    
    /**
     * Global function to rate the app
     * @param {Function} 
     */
    rateThisApp: function() {
        var now = new Date().getTime();
        var remindToRate = Ti.App.Properties.getString('RemindToRate',false);
        if (!remindToRate) {
        	Ti.API.info( 'APP.rateThisApp if >>> remindToRate,now:' + [remindToRate,now] );
            Ti.App.Properties.setString('RemindToRate', now);
        }
        else if( remindToRate < now ){
        	Ti.API.info( 'APP.rateThisApp else >>> remindToRate,now:' + [remindToRate,now] );
            var alertDialog = Titanium.UI.createAlertDialog({
                title: 'Please rate this app!',
                message: 'Would you take a moment to rate this app?',
                buttonNames: ['OK', 'Remind Me Later', 'Never'],
                cancel: 2
            });
            alertDialog.addEventListener('click', function(evt) {
                switch (evt.index) {
                    case 0:
                        Ti.App.Properties.setString('RemindToRate', Number.MAX_VALUE);
                        // NOTE: replace this with your own iTunes link; also, this won't WON'T WORK IN THE SIMULATOR!
                        if (Ti.Android) {
                            Ti.Platform.openURL( L( 'url_google_play' ) );
                        }
                        else {
                        	Ti.Platform.openURL( L( 'url_itunes' ) );
                        }
                        break;
                    case 1:
                        // "Remind Me Later"? Ok, we'll remind them tomorrow when they launch the app.
                        //TODO: if the time
                        Ti.App.Properties.setString('RemindToRate', now + (1000 * 60 * 60 * 216)); 
                        break;
                    case 2:
                        Ti.App.Properties.setString('RemindToRate', Number.MAX_VALUE);
                        break;
                }
            });
            alertDialog.show();
        }
    },

    showActivityindicator: function(){
    	if(APP.spinner ==  null){
	    	var actual_view = APP.masterWindow.getView();
	    	APP.spinner		= Alloy.createController("Widgets/Loading");
	    	actual_view.add(APP.spinner.getView());
	    	APP.spinner.showSpinner();
    	}
    },
    
    hideActivityindicator: function(){
    	if(APP.spinner !=  null){
    		var actual_view = APP.masterWindow.getView();
    		actual_view.remove(APP.spinner.getView());
    		APP.spinner = null;
    	}
    },

	/**
	 * Global function to do a PopUp
	 * @param {string} 		args.title					Head title.*
	 * @param {string} 		args.controller				Controller route.*
	 * @param {dictionary} 	args.controllerParams		Controller arguments.
	 * @param {dictionary} 	args.container				PopUp properties.
	 * @param {dictionary} 	args.content				Content wrapper properties.
	 * @param {function} 	args.onClose
	 */
	popUp : function(args) {
		APP.showActivityindicator();
		APP.popOut(function(args){
			APP.popUpController = Alloy.createController("Widgets/PopUp",args);
			APP.masterWindow.getView().add(
				APP.popUpController.getView()
			);
			!OS_ANDROID && APP.animation.puffIn(APP.popUpController.getView(),{
				scale 			: 1.2,
				duration 		: 100,
				fade 			: 1.0,
				defaultScale	: 1.0
			});
			APP.hideActivityindicator();
			return true;
		},args);
		return true;
	},
	
	/**
	 * Global function to do a PopOut
	 * @param {function}	callback
	 * @param {function}	callbackParams
	 */
	popOut : function(callback,callbackParams){
		APP.popUpController
		?	APP.animation.puffOut(APP.popUpController.getView(), {
				scale : 1,
				duration : 200,
				callback : function() {
					APP.popUpController
					&&	APP.masterWindow.getView().remove(APP.popUpController.getView())
					&	( APP.popUpController = null );
					callback && callback( callbackParams );
					return true;
				},
				fade : 0.0,
				defaultScale : 2.0
			})
		: 	callback && callback( callbackParams );
		return true;
	},
    
	/**
	 * Global function to remove screens
	 * @param {function} _callback
	 */
	removeCurrentScreen: function(_callback) {
		if(APP.currentController) {
			APP.container.remove(APP.currentController.getView());
			APP.currentController = null;
		}
		
		if(typeof(_callback) !== "undefined") {
			_callback();
		}
	},
	
	/**
     * Global function to start the walkthru
     */
	walkthru : {
		open : function() {
			if(Ti.App.Properties.getBool('first_run', true) ){
				APP.walkthru.on = false;// true;
				APP.popUp({
					title : 'Welcome to ' + L( "app_name" ),
					container : {
						width 			: 300,
						height 			: 200
					},
					content : {
						backgroundColor : "white"
					},
					view : Ti.UI.createLabel({
						text 			: L( "app_name" ) + "’s mission is to help people live safely by providing a secure way to receive trusted public safety alerts and share information with neighbors.",
						top 			: 10,
						left 			: 15,
						right 			: 15,
						bottom 			: 10
					}),
					onClose : function( event ){
						Ti.App.Properties.setBool( 'first_run' , false );
						// APP.walkthru.openNext();
						return true;
					}
				});
			}
			return true;
		},
		openNext : function(){
			!APP.walkthru.controllers && ( APP.walkthru.controllers = [
				Alloy.createController( "Walkthru/Alerts" ),
				Alloy.createController( "Walkthru/Dashboard" ),
				Alloy.createController( "Walkthru/MyNeighborhoods" ),
				Alloy.createController( "Walkthru/Report" )
			]);
			if( APP.walkthru.controllers.length ){
				Ti.API.info( 'APP.walkthru.openNext >>> controllers:' + APP.walkthru.controllers );
				var _controller	= APP.walkthru.controllers.shift();
				var _view 		= _controller.getView();
				APP.masterWindow.getView().add( _view );
				_controller.start();
			}
			else{
				APP.handleNavigation( "MyAlerts/MyAlerts" );
				APP.walkthru.on = false;
			}
			return true;
		}
	},


	/**
	 * OBSERVERS
	 */
	
	/**
	 * Exit event observer
	 */
	exit: function(){ return true; },

	/**
	 * Global network event handler
	 */
	networkObserverUpdate: function(){ return true; },
	
	/**
	 * Global orientation change event handler
	 */
	orientationchange: function(){
	    Ti.API.info('Orientation Change');
	    APP.optionbar.getView().isOpen && APP.openCloseOptions();
	    APP.menubar.getView().isOpen && APP.openCloseMenu();
		return true;
	},

	/**
	 * Pause event observer
	 */
	pause: function(){
		// APP.splash = Ti.UI.createWindow({
			// backgroundImage: "Default.png",
			// top:0,
			// barColor:'white',
			// navBarHidden:true,
			// extendEdges:[Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM]
		// });
		// APP.splash.open();
		return true;
	},	

	/**
	 * Resume event observer
	 */
	resume: function(){
		Ti.API.info('Resume');
		APP.rateThisApp();
		// setTimeout(function(){
			// APP.splash && APP.splash.close();
			// return true;
		// },3000);
		return true;
	}

};

module.exports = APP;