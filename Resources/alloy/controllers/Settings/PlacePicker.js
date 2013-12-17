function Controller() {
    function setValue() {
        args.params.callback && args.params.callback({
            value: this.value
        });
        APP.popOut();
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Settings/PlacePicker";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.PlacePicker = Ti.UI.createScrollView({
        backgroundColor: "#ecf1f4",
        layout: "vertical",
        scrollType: "vertical",
        id: "PlacePicker"
    });
    $.__views.PlacePicker && $.addTopLevelView($.__views.PlacePicker);
    $.__views.__alloyId1151 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "House",
        id: "__alloyId1151"
    });
    $.__views.PlacePicker.add($.__views.__alloyId1151);
    setValue ? $.__views.__alloyId1151.addEventListener("click", setValue) : __defers["$.__views.__alloyId1151!click!setValue"] = true;
    $.__views.__alloyId1152 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "House",
        id: "__alloyId1152"
    });
    $.__views.__alloyId1151.add($.__views.__alloyId1152);
    $.__views.__alloyId1153 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1153"
    });
    $.__views.__alloyId1151.add($.__views.__alloyId1153);
    $.__views.__alloyId1154 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1154"
    });
    $.__views.__alloyId1151.add($.__views.__alloyId1154);
    $.__views.__alloyId1155 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Church",
        id: "__alloyId1155"
    });
    $.__views.PlacePicker.add($.__views.__alloyId1155);
    setValue ? $.__views.__alloyId1155.addEventListener("click", setValue) : __defers["$.__views.__alloyId1155!click!setValue"] = true;
    $.__views.__alloyId1156 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Church",
        id: "__alloyId1156"
    });
    $.__views.__alloyId1155.add($.__views.__alloyId1156);
    $.__views.__alloyId1157 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1157"
    });
    $.__views.__alloyId1155.add($.__views.__alloyId1157);
    $.__views.__alloyId1158 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1158"
    });
    $.__views.__alloyId1155.add($.__views.__alloyId1158);
    $.__views.__alloyId1159 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "School",
        id: "__alloyId1159"
    });
    $.__views.PlacePicker.add($.__views.__alloyId1159);
    setValue ? $.__views.__alloyId1159.addEventListener("click", setValue) : __defers["$.__views.__alloyId1159!click!setValue"] = true;
    $.__views.__alloyId1160 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "School",
        id: "__alloyId1160"
    });
    $.__views.__alloyId1159.add($.__views.__alloyId1160);
    $.__views.__alloyId1161 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1161"
    });
    $.__views.__alloyId1159.add($.__views.__alloyId1161);
    $.__views.__alloyId1162 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1162"
    });
    $.__views.__alloyId1159.add($.__views.__alloyId1162);
    $.__views.__alloyId1163 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Work",
        id: "__alloyId1163"
    });
    $.__views.PlacePicker.add($.__views.__alloyId1163);
    setValue ? $.__views.__alloyId1163.addEventListener("click", setValue) : __defers["$.__views.__alloyId1163!click!setValue"] = true;
    $.__views.__alloyId1164 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Work",
        id: "__alloyId1164"
    });
    $.__views.__alloyId1163.add($.__views.__alloyId1164);
    $.__views.__alloyId1165 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1165"
    });
    $.__views.__alloyId1163.add($.__views.__alloyId1165);
    $.__views.__alloyId1166 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1166"
    });
    $.__views.__alloyId1163.add($.__views.__alloyId1166);
    $.__views.__alloyId1167 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "College",
        id: "__alloyId1167"
    });
    $.__views.PlacePicker.add($.__views.__alloyId1167);
    setValue ? $.__views.__alloyId1167.addEventListener("click", setValue) : __defers["$.__views.__alloyId1167!click!setValue"] = true;
    $.__views.__alloyId1168 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "College",
        id: "__alloyId1168"
    });
    $.__views.__alloyId1167.add($.__views.__alloyId1168);
    $.__views.__alloyId1169 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1169"
    });
    $.__views.__alloyId1167.add($.__views.__alloyId1169);
    $.__views.__alloyId1170 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1170"
    });
    $.__views.__alloyId1167.add($.__views.__alloyId1170);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    __defers["$.__views.__alloyId1151!click!setValue"] && $.__views.__alloyId1151.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1155!click!setValue"] && $.__views.__alloyId1155.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1159!click!setValue"] && $.__views.__alloyId1159.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1163!click!setValue"] && $.__views.__alloyId1163.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1167!click!setValue"] && $.__views.__alloyId1167.addEventListener("click", setValue);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;