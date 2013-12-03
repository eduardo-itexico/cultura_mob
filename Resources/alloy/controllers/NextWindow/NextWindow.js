function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "NextWindow/NextWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.profileView = Ti.UI.createView({
        top: 0,
        left: "100%",
        right: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "white",
        zIndex: 1e3,
        id: "profileView"
    });
    $.__views.profileView && $.addTopLevelView($.__views.profileView);
    $.__views.container = Ti.UI.createView({
        top: 0,
        id: "container"
    });
    $.__views.profileView.add($.__views.container);
    $.__views.backgroundIosBar = Ti.UI.createView({
        backgroundImage: "/images/bg_statusbar_flex.png",
        top: 0,
        height: 0,
        id: "backgroundIosBar"
    });
    $.__views.profileView.add($.__views.backgroundIosBar);
    $.__views.topToolBarContainer = Ti.UI.createView({
        top: 20,
        left: 0,
        right: 0,
        height: 44,
        id: "topToolBarContainer"
    });
    $.__views.profileView.add($.__views.topToolBarContainer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    var tempToolbar = Alloy.createController("TopToolBar/TopToolBar", {});
    tempToolbar.removeAllCustomViews();
    tempToolbar.setLeftButton(0, false);
    tempToolbar.setRightButton(0, false);
    var tempController = Alloy.createController(args.controller, {
        toolBar: tempToolbar,
        params: args.controllerParams
    });
    $.topToolBarContainer.add(tempToolbar.getView());
    $.container.add(tempController.getView());
    tempToolbar.setLeftButton(APP.CLOSEWINDOW, true);
    $.backgroundIosBar.height = APP.fixSizeIos7();
    $.topToolBarContainer.top = APP.fixSizeIos7();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;