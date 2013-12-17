function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Notifications/NotificationRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createView({
        backgroundColor: "white",
        height: Ti.UI.SIZE,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId176 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 0,
        right: 32,
        layout: "vertical",
        id: "__alloyId176"
    });
    $.__views.row.add($.__views.__alloyId176);
    $.__views.oggroup = Ti.UI.createLabel({
        color: "#262626",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        top: 4,
        id: "oggroup"
    });
    $.__views.__alloyId176.add($.__views.oggroup);
    $.__views.nmtimestamp = Ti.UI.createLabel({
        color: "#888",
        font: {
            fontSize: 10,
            fontWeight: "bold"
        },
        textAlign: "left",
        left: 15,
        top: 1,
        id: "nmtimestamp"
    });
    $.__views.__alloyId176.add($.__views.nmtimestamp);
    $.__views.message = Ti.UI.createLabel({
        color: "#191849",
        font: {
            fontSize: 15
        },
        textAlign: "left",
        left: 15,
        top: 7,
        id: "message"
    });
    $.__views.__alloyId176.add($.__views.message);
    $.__views.__alloyId177 = Ti.UI.createView({
        height: 10,
        id: "__alloyId177"
    });
    $.__views.__alloyId176.add($.__views.__alloyId177);
    $.__views.arr = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "arr"
    });
    $.__views.row.add($.__views.arr);
    $.__views.__alloyId178 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId178"
    });
    $.__views.row.add($.__views.__alloyId178);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("/core");
    var args = arguments[0] || {};
    $.oggroup.text = args.oggroup;
    $.nmtimestamp.text = args.nmtimestamp;
    $.message.text = args.message;
    $.row.data = args.data;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;