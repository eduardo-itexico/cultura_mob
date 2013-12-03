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
    $.__views.__alloyId1142 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "House",
        id: "__alloyId1142"
    });
    $.__views.PlacePicker.add($.__views.__alloyId1142);
    setValue ? $.__views.__alloyId1142.addEventListener("click", setValue) : __defers["$.__views.__alloyId1142!click!setValue"] = true;
    $.__views.__alloyId1143 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "House",
        id: "__alloyId1143"
    });
    $.__views.__alloyId1142.add($.__views.__alloyId1143);
    $.__views.__alloyId1144 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1144"
    });
    $.__views.__alloyId1142.add($.__views.__alloyId1144);
    $.__views.__alloyId1145 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1145"
    });
    $.__views.__alloyId1142.add($.__views.__alloyId1145);
    $.__views.__alloyId1146 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Church",
        id: "__alloyId1146"
    });
    $.__views.PlacePicker.add($.__views.__alloyId1146);
    setValue ? $.__views.__alloyId1146.addEventListener("click", setValue) : __defers["$.__views.__alloyId1146!click!setValue"] = true;
    $.__views.__alloyId1147 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Church",
        id: "__alloyId1147"
    });
    $.__views.__alloyId1146.add($.__views.__alloyId1147);
    $.__views.__alloyId1148 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1148"
    });
    $.__views.__alloyId1146.add($.__views.__alloyId1148);
    $.__views.__alloyId1149 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1149"
    });
    $.__views.__alloyId1146.add($.__views.__alloyId1149);
    $.__views.__alloyId1150 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "School",
        id: "__alloyId1150"
    });
    $.__views.PlacePicker.add($.__views.__alloyId1150);
    setValue ? $.__views.__alloyId1150.addEventListener("click", setValue) : __defers["$.__views.__alloyId1150!click!setValue"] = true;
    $.__views.__alloyId1151 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "School",
        id: "__alloyId1151"
    });
    $.__views.__alloyId1150.add($.__views.__alloyId1151);
    $.__views.__alloyId1152 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1152"
    });
    $.__views.__alloyId1150.add($.__views.__alloyId1152);
    $.__views.__alloyId1153 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1153"
    });
    $.__views.__alloyId1150.add($.__views.__alloyId1153);
    $.__views.__alloyId1154 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Work",
        id: "__alloyId1154"
    });
    $.__views.PlacePicker.add($.__views.__alloyId1154);
    setValue ? $.__views.__alloyId1154.addEventListener("click", setValue) : __defers["$.__views.__alloyId1154!click!setValue"] = true;
    $.__views.__alloyId1155 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Work",
        id: "__alloyId1155"
    });
    $.__views.__alloyId1154.add($.__views.__alloyId1155);
    $.__views.__alloyId1156 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1156"
    });
    $.__views.__alloyId1154.add($.__views.__alloyId1156);
    $.__views.__alloyId1157 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1157"
    });
    $.__views.__alloyId1154.add($.__views.__alloyId1157);
    $.__views.__alloyId1158 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "College",
        id: "__alloyId1158"
    });
    $.__views.PlacePicker.add($.__views.__alloyId1158);
    setValue ? $.__views.__alloyId1158.addEventListener("click", setValue) : __defers["$.__views.__alloyId1158!click!setValue"] = true;
    $.__views.__alloyId1159 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "College",
        id: "__alloyId1159"
    });
    $.__views.__alloyId1158.add($.__views.__alloyId1159);
    $.__views.__alloyId1160 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1160"
    });
    $.__views.__alloyId1158.add($.__views.__alloyId1160);
    $.__views.__alloyId1161 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1161"
    });
    $.__views.__alloyId1158.add($.__views.__alloyId1161);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    __defers["$.__views.__alloyId1142!click!setValue"] && $.__views.__alloyId1142.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1146!click!setValue"] && $.__views.__alloyId1146.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1150!click!setValue"] && $.__views.__alloyId1150.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1154!click!setValue"] && $.__views.__alloyId1154.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1158!click!setValue"] && $.__views.__alloyId1158.addEventListener("click", setValue);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;