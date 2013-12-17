function Controller() {
    function start() {
        APP.animation.slideIn($.address_list, {
            side: "right",
            duration: 250,
            sideValue: 3,
            offset: 10
        });
        APP.animation.slideIn($.dashboard, {
            side: "left",
            duration: 250,
            sideValue: 3,
            offset: 10
        });
        APP.animation.slideIn($.refresh, {
            side: "right",
            duration: 250,
            sideValue: 5,
            offset: 10
        });
        APP.animation.slideIn($.settings, {
            side: "left",
            duration: 250,
            sideValue: 5,
            offset: 10
        });
        APP.animation.slideIn($.listview, {
            side: "right",
            duration: 250,
            sideValue: 5,
            offset: 10
        });
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Walkthru/Alerts";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        zIndex: 9999999,
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.background = Ti.UI.createView({
        backgroundColor: "black",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        opacity: .7,
        id: "background"
    });
    $.__views.container.add($.__views.background);
    $.__views.address_list = Ti.UI.createImageView({
        image: "/images/Walkthru/ic_address_list.png",
        top: 0,
        right: 555,
        id: "address_list"
    });
    $.__views.container.add($.__views.address_list);
    $.__views.dashboard = Ti.UI.createImageView({
        image: "/images/Walkthru/ic_dashboard.png",
        top: 5,
        left: 555,
        id: "dashboard"
    });
    $.__views.container.add($.__views.dashboard);
    $.__views.refresh = Ti.UI.createImageView({
        image: "/images/Walkthru/ic_refresh.png",
        top: 75,
        right: 555,
        id: "refresh"
    });
    $.__views.container.add($.__views.refresh);
    $.__views.settings = Ti.UI.createImageView({
        image: "/images/Walkthru/ic_setting.png",
        left: 555,
        bottom: 10,
        id: "settings"
    });
    $.__views.container.add($.__views.settings);
    $.__views.listview = Ti.UI.createImageView({
        image: "/images/Walkthru/ic_list_view.png",
        right: 555,
        bottom: 5,
        id: "listview"
    });
    $.__views.container.add($.__views.listview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    arguments[0] || {};
    $.address_list.top = APP.fixSizeIos7($.address_list.top);
    $.dashboard.top = APP.fixSizeIos7($.dashboard.top);
    $.refresh.top = APP.fixSizeIos7($.refresh.top);
    $.container.addEventListener("click", function() {
        APP.walkthru.openNext();
        APP.masterWindow.getView().remove($.container);
        return true;
    });
    exports.start = start;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;