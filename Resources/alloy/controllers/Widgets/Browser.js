function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Widgets/Browser";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createView({
        layout: "vertical",
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.__alloyId1421 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_TOP,
        id: "__alloyId1421"
    });
    $.__views.container.add($.__views.__alloyId1421);
    $.__views.webview = Ti.UI.createWebView({
        backgroundColor: "#ecf1f4",
        scalesPageToFit: true,
        id: "webview"
    });
    $.__views.container.add($.__views.webview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("/core");
    var args = arguments[0] || {};
    args.toolBar.removeAllCustomViews();
    args.toolBar.setRightButton(0, false);
    args.toolBar.setTitle(String(args.params && args.params.title));
    $.webview.url = String(args.params && args.params.url);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;