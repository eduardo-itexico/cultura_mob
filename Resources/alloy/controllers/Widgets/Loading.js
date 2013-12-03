function Controller() {
    function showSpinner() {
        $.activityIndicator.show();
    }
    function hideSpinner() {
        $.activityIndicator.hide();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Widgets/Loading";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createView({
        zIndex: 99999,
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.background = Ti.UI.createView({
        backgroundColor: "#333",
        opacity: .5,
        id: "background"
    });
    $.__views.container.add($.__views.background);
    $.__views.square = Ti.UI.createView({
        width: 100,
        height: 100,
        backgroundColor: "black",
        borderRadius: 10,
        opacity: .7,
        id: "square"
    });
    $.__views.container.add($.__views.square);
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        messageid: "loading",
        height: 20,
        width: 90,
        color: "white",
        textAlign: "center",
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        id: "activityIndicator"
    });
    $.__views.container.add($.__views.activityIndicator);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.showSpinner = showSpinner;
    exports.hideSpinner = hideSpinner;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;