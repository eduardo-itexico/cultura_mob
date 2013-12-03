function Controller() {
    function start() {
        APP.handleNavigation("Report/Report");
        APP.animation.slideIn($.add_photos, {
            side: "top",
            duration: 250,
            sideValue: 0 + fixSizeIpad,
            offset: 10
        });
        APP.animation.slideIn($.share_options, {
            side: "top",
            duration: 250,
            sideValue: 35 + fixSizeIpad,
            offset: 10
        });
        APP.animation.slideIn($.category, {
            side: "top",
            duration: 250,
            sideValue: 28 + fixSizeIpad,
            offset: 10
        });
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Walkthru/Report";
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
    $.__views.icons = Ti.UI.createView({
        top: "45%",
        left: "5%",
        right: "5%",
        height: Ti.UI.SIZE,
        id: "icons"
    });
    $.__views.container.add($.__views.icons);
    $.__views.add_photos = Ti.UI.createImageView({
        image: "/images/Walkthru/ic_add_photos.png",
        top: 555,
        left: "5%",
        id: "add_photos"
    });
    $.__views.icons.add($.__views.add_photos);
    $.__views.share_options = Ti.UI.createImageView({
        image: "/images/Walkthru/ic_options.png",
        top: 555,
        left: "25%",
        id: "share_options"
    });
    $.__views.icons.add($.__views.share_options);
    $.__views.category = Ti.UI.createImageView({
        image: "/images/Walkthru/ic_category.png",
        top: 555,
        left: "45%",
        id: "category"
    });
    $.__views.icons.add($.__views.category);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    arguments[0] || {};
    var fixSizeIpad = "ipad" == Ti.Platform.osname ? -12 : 0;
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