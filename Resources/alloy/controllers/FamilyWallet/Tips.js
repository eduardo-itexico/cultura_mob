function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "FamilyWallet/Tips";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Tips = Ti.UI.createView({
        backgroundColor: "white",
        id: "Tips"
    });
    $.__views.Tips && $.addTopLevelView($.__views.Tips);
    $.__views.tipsWebV = Ti.UI.createWebView({
        url: "https://alertid.com/tips/sex-offenders.asp",
        width: "100%",
        height: "100%",
        id: "tipsWebV"
    });
    $.__views.Tips.add($.__views.tipsWebV);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;