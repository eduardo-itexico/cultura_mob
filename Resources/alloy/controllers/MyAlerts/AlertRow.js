function Controller() {
    function initialize() {
        $.row.data = args.data;
        $.row.annotation = args.annotation;
        if ($.row.data.agency) {
            $.title.text = $.row.data.agency;
            $.subtitle.text = $.row.data.incidentdate;
            $.description.text = $.row.data.message;
            $.icon.image = "/images/Crimes/multiple.png";
        } else {
            $.title.text = $.row.data.cdagency;
            $.subtitle.text = $.row.data.cddatetime;
            $.description.text = $.row.data.cdtype;
            $.icon.image = $.row.data.image;
        }
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "MyAlerts/AlertRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId67 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "__alloyId67"
    });
    $.__views.row.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        left: 0,
        right: 100,
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
    $.__views.title = Ti.UI.createLabel({
        color: "black",
        font: {
            fontSize: 14
        },
        left: 15,
        id: "title"
    });
    $.__views.__alloyId68.add($.__views.title);
    $.__views.subtitle = Ti.UI.createLabel({
        color: "#aaa",
        font: {
            fontSize: 10
        },
        left: 15,
        id: "subtitle"
    });
    $.__views.__alloyId68.add($.__views.subtitle);
    $.__views.description = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 12
        },
        left: 15,
        bottom: 5,
        id: "description"
    });
    $.__views.__alloyId68.add($.__views.description);
    $.__views.icon = Ti.UI.createImageView({
        width: 35,
        heigh: 35,
        right: 15,
        id: "icon"
    });
    $.__views.__alloyId67.add($.__views.icon);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("/core");
    var args = arguments[0] || {};
    initialize();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;