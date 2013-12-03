var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.DEVICE_WIDTH_num = Ti.Platform.displayCaps.platformWidth;

Alloy.Globals.DEVICE_WIDTH = Ti.Platform.displayCaps.platformWidth + "dp";

Alloy.Globals.DEVICE_HEIGHT_num = Ti.Platform.displayCaps.platformHeight;

Alloy.Globals.DEVICE_HEIGHT = Ti.Platform.displayCaps.platformHeight + "dp";

Alloy.Globals.CONTENT_TOP = 44;

Alloy.Globals.CONTENT_BOTTOM = 10;

Alloy.Globals.VERSION = "Version " + Ti.App.version;

Alloy.createController("index");