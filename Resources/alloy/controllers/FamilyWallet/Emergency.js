function Controller() {
    function clickButtons(e) {
        Ti.API.info(e.source.id);
        switch (e.source.id) {
          case "callEmergency":
            var notificationDialog = Ti.UI.createAlertDialog({
                title: "Confirmation",
                message: "Are you sure you want to dial this number?",
                buttonNames: [ "YES", "NO" ]
            });
            notificationDialog.addEventListener("click", function(e) {
                0 === e.index && Titanium.Platform.openURL("tel:911");
            });
            notificationDialog.show();
            break;

          case "callNCMEC":
            var notificationDialog = Ti.UI.createAlertDialog({
                title: "Confirmation",
                message: "Are you sure you want to dial this number?",
                buttonNames: [ "YES", "NO" ]
            });
            notificationDialog.addEventListener("click", function(e) {
                0 === e.index && Titanium.Platform.openURL("tel:18008435678");
            });
            notificationDialog.show();
            break;

          case "tips":
            APP.popUp({
                controller: "FamilyWallet/Tips",
                controllerParams: {}
            });
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "FamilyWallet/Emergency";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.mainContainer = Ti.UI.createScrollView({
        backgroundColor: "#ECF1F4",
        left: 5,
        right: 5,
        contentWidth: Ti.UI.FILL,
        contentHeight: Ti.UI.SIZE,
        layout: "vertical",
        id: "mainContainer"
    });
    $.__views.mainContainer && $.addTopLevelView($.__views.mainContainer);
    $.__views.__alloyId4 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_TOP,
        id: "__alloyId4"
    });
    $.__views.mainContainer.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId5"
    });
    $.__views.mainContainer.add($.__views.__alloyId5);
    clickButtons ? $.__views.__alloyId5.addEventListener("click", clickButtons) : __defers["$.__views.__alloyId5!click!clickButtons"] = true;
    $.__views.__alloyId6 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        top: 10,
        text: "If this is an emergency call",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.callEmergency = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bgBlackOpacity39.png",
        backgroundImage: "/images/transparent.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 1,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        backgroundColor: "white",
        height: 36,
        top: 10,
        title: "Call 911",
        width: 150,
        id: "callEmergency"
    });
    $.__views.__alloyId5.add($.__views.callEmergency);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        top: 10,
        text: "Call the National Center for Missing Children",
        id: "__alloyId7"
    });
    $.__views.__alloyId5.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 12
        },
        text: "(do not use for pets)",
        id: "__alloyId8"
    });
    $.__views.__alloyId5.add($.__views.__alloyId8);
    $.__views.callNCMEC = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bgBlackOpacity39.png",
        backgroundImage: "/images/transparent.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 1,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        backgroundColor: "white",
        height: 36,
        top: 10,
        title: "Call NCMEC",
        width: 150,
        id: "callNCMEC"
    });
    $.__views.__alloyId5.add($.__views.callNCMEC);
    $.__views.__alloyId9 = Ti.UI.createView({
        height: 10,
        id: "__alloyId9"
    });
    $.__views.__alloyId5.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId10"
    });
    $.__views.__alloyId5.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createView({
        height: 10,
        id: "__alloyId11"
    });
    $.__views.__alloyId5.add($.__views.__alloyId11);
    $.__views.containerTips = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        width: "90%",
        id: "containerTips"
    });
    $.__views.__alloyId5.add($.__views.containerTips);
    $.__views.containerText = Ti.UI.createView({
        layout: "vertical",
        left: 10,
        right: 10,
        id: "containerText"
    });
    $.__views.containerTips.add($.__views.containerText);
    $.__views.tips = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bgBlackOpacity39.png",
        backgroundImage: "/images/transparent.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 1,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        backgroundColor: "white",
        height: 36,
        top: 10,
        title: "Safety Tips",
        width: 150,
        id: "tips"
    });
    $.__views.containerText.add($.__views.tips);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 12
        },
        text: "(instructions)",
        id: "__alloyId12"
    });
    $.__views.containerText.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        top: 10,
        text: "Please take a current picture and update the content for your family member regularly.  If you are traveling, we recommend taking a current picture. \n \n My Family Wallet content is stored on your device only.  Your information is not transmitted unless you use the Send Profile button to email it. \n \n If you have an emergency, always dial 911 first.  Then you can use the Send Profile button to email the content to the authorities.",
        id: "__alloyId13"
    });
    $.__views.containerText.add($.__views.__alloyId13);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    __defers["$.__views.__alloyId5!click!clickButtons"] && $.__views.__alloyId5.addEventListener("click", clickButtons);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;