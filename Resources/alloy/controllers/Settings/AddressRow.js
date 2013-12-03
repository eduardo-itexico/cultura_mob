function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Settings/AddressRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.label = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        id: "label"
    });
    $.__views.row.add($.__views.label);
    $.__views.arr = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "arr"
    });
    $.__views.row.add($.__views.arr);
    $.__views.__alloyId211 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId211"
    });
    $.__views.row.add($.__views.__alloyId211);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("/core");
    var args = arguments[0] || {};
    $.label.text = args.title;
    $.row.data = args.data;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;