function Controller() {
    function closePopup() {
        APP.popOut(function() {
            args.onClose && args.onClose();
        });
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Widgets/PopUp";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createView({
        backgroundImage: "/images/bg_popup_flex.png",
        backgroundTopCap: 20,
        backgroundLeftCap: 20,
        layout: "vertical",
        zIndex: 9999,
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.head = Ti.UI.createView({
        height: 40,
        id: "head"
    });
    $.__views.container.add($.__views.head);
    $.__views.title = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 16
        },
        height: 40,
        textAlign: "left",
        left: 15,
        id: "title"
    });
    $.__views.head.add($.__views.title);
    $.__views.close = Ti.UI.createButton({
        backgroundSelectedImage: "/images/ic_close_pressed.png",
        backgroundImage: "/images/ic_close.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        width: 36,
        height: 36,
        top: 0,
        right: 5,
        id: "close"
    });
    $.__views.head.add($.__views.close);
    closePopup ? $.__views.close.addEventListener("click", closePopup) : __defers["$.__views.close!click!closePopup"] = true;
    $.__views.content = Ti.UI.createScrollView({
        borderRadius: 5,
        top: 0,
        left: 3,
        right: 6,
        bottom: 10,
        layout: "vertical",
        scrollType: "vertical",
        id: "content"
    });
    $.__views.container.add($.__views.content);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    $.title.text = args.title;
    if (args.container) for (var param in args.container) $.container[param] = args.container[param];
    if (args.content) for (var param in args.content) $.content[param] = args.content[param];
    if (args.controller) {
        var contentController = Alloy.createController(args.controller, {
            params: args.controllerParams
        });
        $.content.add(contentController.getView());
    } else args.view && $.content.add(args.view);
    __defers["$.__views.close!click!closePopup"] && $.__views.close.addEventListener("click", closePopup);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;