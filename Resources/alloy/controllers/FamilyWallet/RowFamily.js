function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "FamilyWallet/RowFamily";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.viewProfile = Ti.UI.createView({
        backgroundColor: "white",
        height: 84,
        width: "100%",
        id_profile: "",
        id: "viewProfile"
    });
    $.__views.viewProfile && $.addTopLevelView($.__views.viewProfile);
    $.__views.imageProfile = Ti.UI.createImageView({
        width: 70,
        height: 70,
        image: "/images/im_mask_medium.png",
        backgroundColor: "gray",
        left: 10,
        top: 9,
        id: "imageProfile",
        touchEnabled: "false"
    });
    $.__views.viewProfile.add($.__views.imageProfile);
    $.__views.nameProfile = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: 18
        },
        left: 95,
        height: 40,
        top: 20,
        right: 40,
        id: "nameProfile",
        touchEnabled: "false"
    });
    $.__views.viewProfile.add($.__views.nameProfile);
    $.__views.kinshipProfile = Ti.UI.createLabel({
        color: "#CCCCCC",
        font: {
            fontSize: 15
        },
        left: 95,
        top: 50,
        height: 20,
        right: 40,
        id: "kinshipProfile",
        touchEnabled: "false"
    });
    $.__views.viewProfile.add($.__views.kinshipProfile);
    $.__views.__alloyId26 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        top: 30,
        right: 4,
        width: 36,
        height: 36,
        touchEnabled: "false",
        id: "__alloyId26"
    });
    $.__views.viewProfile.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        touchEnabled: "false",
        id: "__alloyId27"
    });
    $.__views.viewProfile.add($.__views.__alloyId27);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var member = args.member;
    $.viewProfile.id_profile = member.id;
    if (member.blobimage) {
        var file = Ti.Filesystem.createTempFile(Ti.Filesystem.resourcesDirectory);
        file.write(member.blobimage);
        $.imageProfile.backgroundImage = file.nativePath;
    }
    $.nameProfile.text = member.f_name + " " + member.m_name + " " + member.l_name;
    $.kinshipProfile.text = member.n_name;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;