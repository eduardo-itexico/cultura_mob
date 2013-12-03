function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "FamilyWallet/Caption";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Caption = Ti.UI.createView({
        layout: "vertical",
        id: "Caption"
    });
    $.__views.Caption && $.addTopLevelView($.__views.Caption);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 15
        },
        top: 10,
        left: 10,
        text: "• Protect your family and pets.",
        id: "__alloyId1"
    });
    $.__views.Caption.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 15
        },
        top: 10,
        left: 10,
        text: "• If they become lost, send their profiles to authorities or neighbors to help in the search.",
        id: "__alloyId2"
    });
    $.__views.Caption.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 15
        },
        top: 10,
        left: 10,
        text: "• Information is stored only on your device.",
        id: "__alloyId3"
    });
    $.__views.Caption.add($.__views.__alloyId3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;