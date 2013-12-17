function Controller() {
    function loadData() {
        if (2 == args._type) {
            APP.openCloseOptions();
            "Current Location" == $.groupTitle.text ? APP.currentController.currentPosition() : APP.currentController.getMessages({
                lat: args._data.flat,
                lon: args._data.flon,
                faname: args._data.faname,
                pkorgGroups: 0,
                ogfAdmin: 0
            });
        } else if (1 == args._type) {
            APP.openCloseOptions();
            "Current Location" == $.groupTitle.text ? APP.currentController.currentPosition() : APP.currentController.getCrimes({
                lat: args._data.flat,
                lon: args._data.flon,
                faname: args._data.faname
            });
        }
    }
    function editAddress() {
        APP.openWindow({
            controller: "Settings/EditAddress",
            controllerParams: {
                data: args._data,
                callback: function() {
                    APP.optionbar.updateMyAddresses();
                }
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "RightBarView/AddressRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.AddressRow = Ti.UI.createView({
        height: 40,
        top: 5,
        id: "AddressRow"
    });
    $.__views.AddressRow && $.addTopLevelView($.__views.AddressRow);
    $.__views.groupTitle = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 14
        },
        left: 10,
        right: 115,
        height: Ti.UI.FILL,
        text: "Home of Lucy",
        id: "groupTitle"
    });
    $.__views.AddressRow.add($.__views.groupTitle);
    loadData ? $.__views.groupTitle.addEventListener("click", loadData) : __defers["$.__views.groupTitle!click!loadData"] = true;
    $.__views.groupButton = Ti.UI.createButton({
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
        width: 60,
        height: 30,
        title: "Edit",
        id: "groupButton"
    });
    $.__views.AddressRow.add($.__views.groupButton);
    editAddress ? $.__views.groupButton.addEventListener("click", editAddress) : __defers["$.__views.groupButton!click!editAddress"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    $.groupTitle.text = args._data.faname;
    "Current Location" == $.groupTitle.text && ($.groupButton.visible = false);
    __defers["$.__views.groupTitle!click!loadData"] && $.__views.groupTitle.addEventListener("click", loadData);
    __defers["$.__views.groupButton!click!editAddress"] && $.__views.groupButton.addEventListener("click", editAddress);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;