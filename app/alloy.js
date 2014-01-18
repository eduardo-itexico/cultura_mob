// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};


Alloy.Globals.Map = require('ti.map');


Alloy.Globals.DEVICE_WIDTH_num		= Ti.Platform.displayCaps.platformWidth;
Alloy.Globals.DEVICE_WIDTH			= Ti.Platform.displayCaps.platformWidth+((OS_ANDROID)?"px":"dp");
Alloy.Globals.DEVICE_HEIGHT_num		= Ti.Platform.displayCaps.platformHeight;
Alloy.Globals.DEVICE_HEIGHT			= Ti.Platform.displayCaps.platformHeight+((OS_ANDROID)?"px":"dp");

Alloy.Globals.CONTENT_TOP			= 44;
Alloy.Globals.CONTENT_BOTTOM		= 10;
Alloy.Globals.VERSION				= 'Version ' + Ti.App.version;

