function Controller() {
    function fncGetCoords() {
        Ti.App.fireEvent("setMap", {
            lat: args.params.lat,
            lon: args.params.lon
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "MyAlerts/TrafficView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createView({
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("/core");
    var args = arguments[0] || {};
    var webView = Ti.UI.createWebView({
        url: "/map.html",
        title: "AlertID"
    });
    args.toolBar.removeAllCustomViews();
    args.toolBar.setRightButton(0, false);
    args.toolBar.setLeftButton(0, false);
    args.toolBar.setTitle(String(args.params && args.params.title));
    $.container.add(webView);
    Ti.App.addEventListener("getCoords", fncGetCoords);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;