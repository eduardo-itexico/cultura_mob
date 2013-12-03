function Controller() {
    function poslayoutFnc() {
        APP.DEVICE_WIDTH = $.win.size.width;
        APP.DEVICE_HEIGHT = $.win.size.height;
        APP.handleNavigation("MyAlerts/MyAlerts");
        $.win.removeEventListener("postlayout", poslayoutFnc);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "MainWindow/MainWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        top: 0,
        barColor: "white",
        navBarHidden: true,
        extendEdges: [ Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM ],
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.leftBar = Ti.UI.createView({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "#464646",
        id: "leftBar"
    });
    $.__views.win.add($.__views.leftBar);
    $.__views.mainContainer = Ti.UI.createView({
        top: 0,
        left: 0,
        width: "100%",
        bottom: 0,
        backgroundColor: "white",
        layout: "absolute",
        zIndex: 100,
        id: "mainContainer",
        isOpen: "false"
    });
    $.__views.win.add($.__views.mainContainer);
    $.__views.viewContainer = Ti.UI.createView({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#ecf1f4",
        id: "viewContainer"
    });
    $.__views.mainContainer.add($.__views.viewContainer);
    $.__views.backgroundIosBar = Ti.UI.createView({
        backgroundImage: "/images/bg_statusbar_flex.png",
        top: 0,
        height: 0,
        id: "backgroundIosBar"
    });
    $.__views.mainContainer.add($.__views.backgroundIosBar);
    $.__views.topToolBarContainer = Ti.UI.createView({
        top: 0,
        left: 0,
        right: 0,
        height: 44,
        backgroundColor: "transparent",
        id: "topToolBarContainer"
    });
    $.__views.mainContainer.add($.__views.topToolBarContainer);
    $.__views.rightBar = Ti.UI.createView({
        top: 0,
        left: "100%",
        bottom: 0,
        width: "100%",
        backgroundColor: "#464646",
        zIndex: 99,
        id: "rightBar"
    });
    $.__views.win.add($.__views.rightBar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    arguments[0] || {};
    APP.headerbar = Alloy.createController("TopToolBar/TopToolBar", {});
    APP.menubar = Alloy.createController("LeftBarView/LeftBarView", {});
    APP.optionbar = Alloy.createController("RightBarView/RightBarView", {});
    APP.mainContainer = $.mainContainer;
    APP.container = $.viewContainer;
    $.topToolBarContainer.add(APP.headerbar.getView());
    $.leftBar.add(APP.menubar.getView());
    $.rightBar.add(APP.optionbar.getView());
    APP.optionbarContainer = $.rightBar;
    APP.menubar.getView().isOpen = false;
    APP.optionbar.getView().isOpen = false;
    $.backgroundIosBar.height = APP.fixSizeIos7();
    $.topToolBarContainer.top = APP.fixSizeIos7();
    $.win.addEventListener("androidback", function() {
        APP.closeWindow();
    });
    $.win.addEventListener("postlayout", poslayoutFnc);
    $.win.addEventListener("resume", function() {
        Ti.API.info("Resume");
        APP.rateThisApp();
    });
    $.win.addEventListener("focus", function() {
        Ti.API.info("Focus");
        APP.reportTxtFld && !APP.reportIsOpen && APP.reportTxtFld.blur();
    });
    $.backgroundIosBar.addEventListener("click", function() {
        APP.startWalkThru();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;