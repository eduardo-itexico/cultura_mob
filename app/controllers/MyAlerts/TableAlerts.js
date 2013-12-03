
/** INSTANTIATION **/

	var APP = require( "/core" );
	var args = arguments[ 0 ] || {};
	var _map,_openListView;

/** FUNCTIONS **/

	function headerView( title ){
		var _headerView = Ti.UI.createView({
			backgroundImage	: '/images/bg_white_alpha90.png',
			height			: 40,
			layout			: 'vertical'
		});
		_title = Ti.UI.createLabel({
			text			: title,
			height			: 38,
			left			: 15,
			color			: "#17B8E4",
			font : {
				fontSize	: 16
			}
		});
		_headerView.add( separator() 	);
		_headerView.add( _title			);
		_headerView.add( separator() 	);
		return _headerView;
	}
	
	function openBrowser( event ){
		/**** / Ti.API.info( 'openBrowser >>> this:' + JSON.stringify( this ) ); /****/
		APP.openWindow({
			controller : 'Widgets/Browser',
			controllerParams : {
				title	: this.data.agency,
				url 	: L( 'ws_getalertsmessage' ) + '?pkorgmessage=' + this.data.pkorgmessage
			}
		});
		return true;
	}
	
	function openInMap( event ){
		/**** / Ti.API.info( 'openInMap >>> this:' + JSON.stringify( this ) ); /****/
		if( OS_ANDROID ){
			var latitudeDelta  = 0.01;
			var longitudeDelta = 0.01;
		}
		else{
			var latitudeDelta  = 0.02;
			var longitudeDelta = 0.02;
		}
		_map.selectAnnotation( this.annotation );
		_map.setRegion({
			latitude		: this.data.cdlat,
			longitude		: this.data.cdlon,
			animate 		: true,
			latitudeDelta 	: latitudeDelta,
			longitudeDelta 	: longitudeDelta
		});
		_openListView();
		return true;
	}
	
	function separator(){
		var _separator = Ti.UI.createView({
			backgroundColor	: "#ccc",
			width			: Ti.UI.FILL,
			height			: 1,
			top				: 0
		});
		return _separator;
	}

/** CODE **/

	function initialize(){
		_map 			= args.map;
		_openListView 	= args.openListView; 
		args.alerts_data;
		args.advisors_data;
		args.advisors_annotations;
		if( OS_ANDROID ){
			$.alerts	.headerTitle = L( 'alerts'		);
			$.advisors	.headerTitle = L( 'advisors'	);
		}
		else{
			$.alerts	.headerView = headerView( L( 'alerts' 	) );
			$.advisors	.headerView = headerView( L( 'advisors' ) );
		}
		if( args.alerts_data ){
			for (var i = 0; i < args.alerts_data.length; i++) {
				var _row;
				_row = Alloy.createController('MyAlerts/AlertRow',{
					data 	: args.alerts_data[ i ]
				}).getView();
				_row.addEventListener( "click" , openBrowser );
				$.alerts.add( _row );
			}
		}
		if( args.advisors_data ){
			for (var i = 0; i < args.advisors_data.length; i++) {
				var _row;
				_row = Alloy.createController('MyAlerts/AlertRow',{
					data 		: args.advisors_data[ i ],
					annotation	: args.advisors_annotations && args.advisors_annotations[ i ].anno
				}).getView();
				_row.addEventListener( "click" , openInMap );
				$.advisors.add( _row );
			}
		}
		return true;
	}	initialize();
	

