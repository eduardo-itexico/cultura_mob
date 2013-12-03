function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "FamilyWallet/EmptyMembers";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.EmptyMembers = Ti.UI.createView({
        id: "EmptyMembers"
    });
    $.__views.EmptyMembers && $.addTopLevelView($.__views.EmptyMembers);
    $.__views.containerLabel = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "30%",
        id: "containerLabel"
    });
    $.__views.EmptyMembers.add($.__views.containerLabel);
    $.__views.blueText = Ti.UI.createImageView({
        width: 210,
        height: 159,
        image: "/images/txt_family_wallet.png",
        id: "blueText"
    });
    $.__views.containerLabel.add($.__views.blueText);
    $.__views.bottomTitle = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        bottom: 80,
        left: 70,
        id: "bottomTitle"
    });
    $.__views.EmptyMembers.add($.__views.bottomTitle);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        color: "#505050",
        font: {
            fontSize: 14
        },
        left: 0,
        text: "Start adding",
        id: "__alloyId14"
    });
    $.__views.bottomTitle.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        color: "#505050",
        font: {
            fontSize: 14
        },
        left: 0,
        text: "a family member",
        id: "__alloyId15"
    });
    $.__views.bottomTitle.add($.__views.__alloyId15);
    $.__views.arrowImage = Ti.UI.createImageView({
        image: "/images/ic_arrow_family_wallet.png",
        left: 20,
        bottom: 60,
        width: 46,
        height: 40,
        id: "arrowImage"
    });
    $.__views.EmptyMembers.add($.__views.arrowImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    $.bottomTitle.bottom = APP.fixSizeAds($.bottomTitle.bottom);
    $.arrowImage.bottom = APP.fixSizeAds($.arrowImage.bottom);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;