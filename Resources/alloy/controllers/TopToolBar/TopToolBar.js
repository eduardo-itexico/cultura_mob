function Controller() {
    function openMenu() {
        APP.openCloseMenu();
    }
    function openOptions() {
        APP.openCloseOptions();
    }
    function openNextWindow() {
        APP.openWindow(params);
    }
    function closeWindow() {
        APP.onClose && APP.onClose() && (APP.onClose = null);
        APP.closeWindow();
    }
    function setCloseAction(callback) {
        APP.onClose = callback;
        return true;
    }
    function setLeftButton(_type, _boolean) {
        if (_type == APP.OPENMENU) $.openMenu.height = _boolean ? 36 : 0; else if (_type == APP.CLOSEWINDOW) $.closeWindow.height = _boolean ? 36 : 0; else {
            $.openMenu.height = _boolean ? 36 : 0;
            $.closeWindow.height = _boolean ? 36 : 0;
        }
    }
    function setRightButton(_type, _boolean, _params, _image) {
        if (_type == APP.OPENOPTIONS) {
            switch (_image) {
              case 1:
                $.openOptions.backgroundImage = "/images/ic_my_neighborhoods.png";
                $.openOptions.backgroundSelectedImage = "/images/ic_my_neighborhoods_pressed.png";
            }
            $.openOptions.height = _boolean ? 36 : 0;
            params = null;
        } else if (_type == APP.OPENWINDOW) {
            $.openNextWindow.height = _boolean ? 36 : 0;
            params = _params;
        } else {
            $.openOptions.height = _boolean ? 36 : 0;
            $.openNextWindow.height = _boolean ? 36 : 0;
            params = null;
        }
    }
    function addCustomView(_view) {
        $.container.add(_view);
        stackViews.push(_view);
    }
    function removeCustomView(_view) {
        $.container.remove(_view);
        _.each(stackViews, function(_value, _key) {
            if (_value == _view) {
                stackViews.splice(_key, 1);
                return;
            }
        });
    }
    function removeAllCustomViews() {
        for (var i = stackViews.length; i > 0; i--) $.container.remove(stackViews.pop());
    }
    function setTitle(_string) {
        $.title.text = _string;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "TopToolBar/TopToolBar";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createView({
        backgroundColor: "transparent",
        backgroundImage: "/images/bg_header_flex.png",
        left: 0,
        right: 0,
        height: 44,
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.title = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 18
        },
        left: 50,
        id: "title"
    });
    $.__views.container.add($.__views.title);
    $.__views.closeWindow = Ti.UI.createButton({
        backgroundSelectedImage: "/images/ic_back_pressed.png",
        backgroundImage: "/images/ic_back.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        height: "0",
        width: 36,
        left: 10,
        id: "closeWindow"
    });
    $.__views.container.add($.__views.closeWindow);
    closeWindow ? $.__views.closeWindow.addEventListener("click", closeWindow) : __defers["$.__views.closeWindow!click!closeWindow"] = true;
    $.__views.openMenu = Ti.UI.createButton({
        backgroundSelectedImage: "/images/ic_dashboard_pressed.png",
        backgroundImage: "/images/ic_dashboard.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        height: 36,
        width: 36,
        left: 4,
        id: "openMenu"
    });
    $.__views.container.add($.__views.openMenu);
    openMenu ? $.__views.openMenu.addEventListener("click", openMenu) : __defers["$.__views.openMenu!click!openMenu"] = true;
    $.__views.openOptions = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bgBlackOpacity39.png",
        backgroundImage: "/images/transparent.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        height: 36,
        width: 36,
        right: 4,
        id: "openOptions"
    });
    $.__views.container.add($.__views.openOptions);
    openOptions ? $.__views.openOptions.addEventListener("click", openOptions) : __defers["$.__views.openOptions!click!openOptions"] = true;
    $.__views.openNextWindow = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bgBlackOpacity39.png",
        backgroundImage: "/images/transparent.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        height: "0",
        width: 36,
        right: 4,
        backgroundColor: "yellow",
        id: "openNextWindow"
    });
    $.__views.container.add($.__views.openNextWindow);
    openNextWindow ? $.__views.openNextWindow.addEventListener("click", openNextWindow) : __defers["$.__views.openNextWindow!click!openNextWindow"] = true;
    $.__views.refresh_advice = Ti.UI.createLabel({
        color: "#0066ff",
        font: {
            fontSize: 16
        },
        text: "Pulldown to update content",
        textAlign: "center",
        backgroundImage: "/images/bg_white_alpha90.png",
        top: 0,
        width: "100%",
        height: 0,
        id: "refresh_advice"
    });
    $.__views.container.add($.__views.refresh_advice);
    $.__views.refresh_counter = Ti.UI.createView({
        backgroundColor: "#0066ff",
        bottom: 2,
        height: 4,
        width: 0,
        borderRadius: 2,
        opacity: .8,
        id: "refresh_counter"
    });
    $.__views.container.add($.__views.refresh_counter);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    arguments[0] || {};
    var params = null;
    var stackViews = [];
    exports.setCloseAction = setCloseAction;
    exports.setLeftButton = setLeftButton;
    exports.setRightButton = setRightButton;
    exports.addCustomView = addCustomView;
    exports.removeCustomView = removeCustomView;
    exports.removeAllCustomViews = removeAllCustomViews;
    exports.setTitle = setTitle;
    exports.refresh_advice = $.refresh_advice;
    exports.refresh_counter = $.refresh_counter;
    __defers["$.__views.closeWindow!click!closeWindow"] && $.__views.closeWindow.addEventListener("click", closeWindow);
    __defers["$.__views.openMenu!click!openMenu"] && $.__views.openMenu.addEventListener("click", openMenu);
    __defers["$.__views.openOptions!click!openOptions"] && $.__views.openOptions.addEventListener("click", openOptions);
    __defers["$.__views.openNextWindow!click!openNextWindow"] && $.__views.openNextWindow.addEventListener("click", openNextWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;