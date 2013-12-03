/** INSTANTIATION **/
var APP = require("/core");
var args = arguments[0] || {};

var webView             = Ti.UI.createWebView({url:"/map.html",title:"AlertID"});


// FUNCTIONS
function fncGetCoords(){
    Ti.App.fireEvent("setMap",{lat:args.params.lat,lon:args.params.lon}); 
}


/** CODE **/
args.toolBar.removeAllCustomViews();
args.toolBar.setRightButton(0, false);
args.toolBar.setLeftButton(0, false);
args.toolBar.setTitle( String( args.params && args.params.title ) );


$.container.add(webView);


// LISTENERS
Ti.App.addEventListener("getCoords",fncGetCoords);