function Controller() {
    function loadData() {
        APP.currentController.searchAddress(args.address);
    }
    function addAddress() {
        APP.openWindow({
            controller: "Settings/EditAddress",
            controllerParams: {
                faaddress: tempArr[0],
                facity: tempArr[1] ? tempArr[1] : "",
                fastate: tempArr[2] ? tempArr[2] : ""
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "RightBarView/RecentlyAddressRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.RecentlyAddressRow = Ti.UI.createView({
        height: 30,
        top: 5,
        id: "RecentlyAddressRow"
    });
    $.__views.RecentlyAddressRow && $.addTopLevelView($.__views.RecentlyAddressRow);
    loadData ? $.__views.RecentlyAddressRow.addEventListener("click", loadData) : __defers["$.__views.RecentlyAddressRow!click!loadData"] = true;
    $.__views.streetLabel = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 14
        },
        left: 10,
        right: 115,
        top: 0,
        height: 15,
        id: "streetLabel"
    });
    $.__views.RecentlyAddressRow.add($.__views.streetLabel);
    $.__views.streetLabel2 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 12
        },
        left: 10,
        right: 115,
        top: 14,
        height: 15,
        id: "streetLabel2"
    });
    $.__views.RecentlyAddressRow.add($.__views.streetLabel2);
    $.__views.__alloyId203 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bgBlackOpacity39.png",
        backgroundImage: "/images/transparent.png",
        color: "white",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        right: 60,
        width: 50,
        height: 28,
        title: "Save",
        id: "__alloyId203"
    });
    $.__views.RecentlyAddressRow.add($.__views.__alloyId203);
    addAddress ? $.__views.__alloyId203.addEventListener("click", addAddress) : __defers["$.__views.__alloyId203!click!addAddress"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    var tempArr = args.address.split(",");
    $.streetLabel.text = tempArr[0];
    $.streetLabel2.text = (tempArr[1] ? tempArr[1] : "") + ", " + (tempArr[2] ? tempArr[2] : "");
    __defers["$.__views.RecentlyAddressRow!click!loadData"] && $.__views.RecentlyAddressRow.addEventListener("click", loadData);
    __defers["$.__views.__alloyId203!click!addAddress"] && $.__views.__alloyId203.addEventListener("click", addAddress);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;