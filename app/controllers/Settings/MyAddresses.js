
/** INSTANTIATION **/

	var APP = require("/core");
	var args = arguments[0] || {};
	var _ws_request,_addButton;

/** FUNCTIONS **/

	function addAddress() {
		APP.openWindow({
			controller : 'Settings/EditAddress'
		});
		return true;
	}
	
	function getMyAddresses( event ){
		if( event.success ){
			_ws_request = {
				atoken 		: args.params.token,
				flat 		: event.lat,
				flon 		: event.lon,
				pkfamily 	: Ti.App.Properties.getInt('pkfamily')
			};
			/**** / Ti.API.info( 'getMyAddresses >>> _ws_request:' + JSON.stringify( _ws_request ) ); /****/
			APP.http.request({
				url 	: L( 'ws_getmyaddresses' ),
				type 	: 'GET',
				format 	: 'JSON',
				data 	: _ws_request
			}, loadMyAddresses );
		}
		else{
			alert(L( 'failed_to_get_current_location' ));
			APP.hideActivityindicator();
		}
		return true;
	}
	
	 function openEdit( event ){
		/**** / Ti.API.info( 'openEdit >>> this.data:' + JSON.stringify( this.data ) ); /****/
		if( this.data ){
			APP.openWindow({
				controller : 'Settings/EditAddress',
				controllerParams : {
					data : this.data,
					callback : function(){
						APP.showActivityindicator();
						APP.getCurrentLocation( getMyAddresses );
						return true;
					}
				}
			});
		}
		return true;
	}
	
	function loadMyAddresses( response ) {
		/**** / Ti.API.info( 'loadMyAddresses >>> response:' + JSON.stringify( response ) ); /****/
		if( response._result == 0 ){
			alert(L( 'something_wrong' ));
			APP.closeWindow();
			APP.hideActivityindicator();
		}
		else{
			if( response._data.errorcode != 0 ){
				alert( response._data.message );
				APP.closeWindow();
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
					_row = Alloy.createController('Settings/AddressRow',{
						title 	: _data[ i ].faname,
						data 	: _data[ i ]
					}).getView();
					_row.addEventListener("click",openEdit);
					$.list.add(_row);
				}
				APP.hideActivityindicator();
			}
		}
		return true;
	}

/** CODE **/

	function initialize(){
		_addButton = Ti.UI.createButton({
			title 			: "Add",
			right 			: 5,
			width			: 50,
			height			: 44,
			color 			: 'white',
			backgroundImage : 'transparent'
		});
		_addButton.addEventListener( 'click' , addAddress );
		args.toolBar.removeAllCustomViews();
		args.toolBar.setRightButton( 0 , false );
		args.toolBar.setTitle(L( 'my_addresses' ));
		args.toolBar.addCustomView( _addButton );
		APP.showActivityindicator();
		APP.getCurrentLocation( getMyAddresses );
		return true;
	}	initialize();

