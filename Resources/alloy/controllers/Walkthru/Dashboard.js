function Controller() {
    function start() {
        APP.openCloseMenu();
        APP.animation.slideIn($.category, {
            side: "left",
            duration: 250,
            sideValue: 0,
            offset: 10
        });
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Walkthru/Dashboard";
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
    $.__views.category = Ti.UI.createImageView({
        image: "/images/Walkthru/ic_dropdown_2.png",
        top: 45,
        left: 555,
        id: "category"
    });
    $.__views.container.add($.__views.category);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    arguments[0] || {};
    $.category.top = APP.fixSizeIos7($.category.top);
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