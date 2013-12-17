
/** INSTANTIATION **/

var APP = require("/core");
var args = arguments[0] || {};

/** CODE **/

args.toolBar.removeAllCustomViews();
args.toolBar.setRightButton(0, false);
args.toolBar.setTitle( String( args.params && args.params.title ) );
$.webview.url = String( args.params && args.params.url );
