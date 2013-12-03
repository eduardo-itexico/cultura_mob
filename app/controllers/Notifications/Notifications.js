 
/** INSTANTIATION **/

	var APP = require( "/core" );
	var args = arguments[ 0 ] || {};

/** FUNCTIONS **/

	function doAction( event ){
	    
	    if(this.incidenttype == "weather" || this.incidenttype === 'SOD'){
            var baseurl = this.url;
            APP.openWindow({
                controller : 'Widgets/Browser',
                controllerParams : {
                    url : baseurl,
                    title : this.message
                }
            });
        }else if (this.incidenttype == "group") {
            var baseurl = this.pknmessage;
            APP.openWindow({
                controller : "MyNeighborhoods/MyNeighborhoods",
                controllerParams : {
                    pknmessage : baseurl
                }
            });
        }else{
            var baseurl = 'http://alertid.com/commmore.asp?cdid=' + this.pknmessage;
            APP.openWindow({
                controller : 'Widgets/Browser',
                controllerParams : {
                    url : baseurl,
                    title : this.message
                }
            });
        }
	  
		return true;
	}

	function loadNotifications( response ){
		/**** / Ti.API.info( 'loadNotifications >>> response:' + JSON.stringify( response ) ); /****/
		if( response._result == 0 ){
			alert(L( 'something_wrong' ));
			APP.hideActivityindicator();
		}
		else{
			if( response._data.errorcode != 0 ){
				alert( response._data.message );
				$.no_data.height = Ti.UI.SIZE;
				APP.hideActivityindicator();
			}
			else{
				var _data = response._data.data;
				$.content.remove( $.list );
				$.list = Ti.UI.createView({
					height	: Ti.UI.SIZE,
					left 	: 0,
					right 	: 0,
					layout 	: 'vertical'
				});
				$.content.add($.list);
				for (var i = 0; i < _data.length; i++) {
					var _row;
					_row = Alloy.createController('Notifications/NotificationRow',{
						pknmessage	: _data[ i ].pknmessage,
						oggroup 	: _data[ i ].oggroup,
						nmtimestamp	: _data[ i ].nmtimestamp,
						message 	: _data[ i ].message,
						data 		: _data[ i ]
					}).getView();
					_row.pknmessage    = _data[ i ].pknmessage;
					_row.message       = _data[ i ].message;
					_row.incidenttype  = _data[ i ].incidenttype;
					_row.url           = _data[ i ].url;
					_row.addEventListener("click",doAction);
					$.list.add(_row);
				}
				APP.hideActivityindicator();
			}
		}
		return true;
	}

	function getNotifications(){
		_ws_request = {
			atoken 	: args.token,
			last7	: 'Y'
		};
		/**** / Ti.API.info( 'getNotifications >>> _ws_request:' + JSON.stringify( _ws_request ) ); /****/
		APP.http.request({
			url 	: L( 'ws_getnotifications' ),
			type 	: 'GET',
			format 	: 'JSON',
			data 	: _ws_request
		}, loadNotifications );
		return true;
	}

/** CODE **/
	
	function initialize(){
	    APP.headerbar.setLeftButton		( 0 			, false );
	    APP.headerbar.setRightButton	( 0 			, false );
	    APP.headerbar.setLeftButton		( APP.OPENMENU 	, true 	);
		APP.headerbar.setTitle			( 'Notifications' 		);
		APP.getToken({
			openLogin 	: true,
			callback	: function( _token ){
				args.token = _token;
				APP.showActivityindicator();
				getNotifications();
				APP.notifications.badge.text = '0';
				return true;
			}
		});
		return true;
	}

/** EXPORTS **/

	exports.updateView = initialize;


