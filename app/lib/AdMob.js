/*** [Martín Silva][2013][msilva@itexico.com] ***/
var currentAd;
function AdMob( parent , backgroundColor ){
	
	/** VARIABLES **/
	
		var self,_module,_settings,_isGreater;
		_module 	= require( 'ti.admob' );
		_isGreater	= Ti.Platform.displayCaps.platformWidth > 468;
		_settings	= {
			bottom				: 0,
			width				: _isGreater ? 468 : 320,
			height				: _isGreater ? 60 	: 50,
			zIndex				: 9999,
			publisherId			: 'ca-app-pub-1961850437262657/5957399128', // You can get your own at http: //www.admob.com/
			adBackgroundColor	: backgroundColor || 'transparent',
			testing				: true,
			dateOfBirth			: new Date( 1990 , 1 , 1 , 0 , 0 , 0 ),
			gender				: 'male',
			keywords			: ''
		};

	/** FUNCTIONS **/
	
		function addListeners(){
			self.addEventListener('didReceiveAd', function() {
			    alert('Did receive ad!');
			    return true;
			});
			self.addEventListener('didFailToReceiveAd', function() {
			    alert('Failed to receive ad!');
			    return true;
			});
			self.addEventListener('willPresentScreen', function() {
			    alert('Presenting screen!');
			    return true;
			});
			self.addEventListener('willDismissScreen', function() {
			    alert('Dismissing screen!');
			    return true;
			});
			self.addEventListener('didDismissScreen', function() {
			    alert('Dismissed screen!');
			    return true;
			});
			self.addEventListener('willLeaveApplication', function() {
			    alert('Leaving the app!');
			    return true;
			});
			return true;
		}
		function createAd( event ){
		    if( !event.success || event.error ){
		        Ti.API.error( 'createAd >>> event.error: ' + event.error );
		        return false;
		    }
		    else{
		    	_settings.location = event.coords;
				self = _module.createView( _settings );
				parent.add( self );
				currentAd = self;
			    return true;
		    }
		}
	
	/** TO DO ACTIONS **/
	
		if( parent ){
	    	if( currentAd ){
	    		currentAd.zIndex = 9999;
				// parent.remove( currentAd );
	    	}
	    	else{
				Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
				Ti.Geolocation.distanceFilter = 0;
				Ti.Geolocation.purpose = 'To show you local ads, of course!';
				Ti.Geolocation.getCurrentPosition( createAd );
			}
		}
		else{
			currentAd && ( currentAd.zIndex = -1 );
			// currentAd && currentAd.parent.remove( currentAd );
			// currentAd = null;
		}
	
	return true;
	
}
module.exports = AdMob;

