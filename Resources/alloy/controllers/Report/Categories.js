function Controller() {
    function onClickOptions(e) {
        var state = e.rowData.hasCheck;
        cleanAllRows();
        e.source.hasCheck = state ? false : true;
        var object = {
            value: e.rowData.title,
            index: e.index
        };
        params.controller.actualCategory(object);
    }
    function cleanAllRows() {
        var rows = $.optionTV.data[0].rows;
        for (var i = 0; rows.length > i; i++) $.optionTV.data[0].rows[i].hasCheck = false;
    }
    function markSelected(row) {
        var actual_rows = $.optionTV.data[0].rows;
        if (row) for (var i = 0; actual_rows.length > i; i++) if (row.value == actual_rows[i].title) {
            $.optionTV.data[0].rows[i].hasCheck = true;
            i = actual_rows.length;
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Report/Categories";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.Categories = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "Categories"
    });
    $.__views.Categories && $.addTopLevelView($.__views.Categories);
    $.__views.__alloyId174 = Ti.UI.createTableViewRow({
        title: "Activity in-progress",
        id: "__alloyId174"
    });
    var __alloyId175 = [];
    __alloyId175.push($.__views.__alloyId174);
    $.__views.__alloyId176 = Ti.UI.createTableViewRow({
        title: "Community information",
        id: "__alloyId176"
    });
    __alloyId175.push($.__views.__alloyId176);
    $.__views.__alloyId177 = Ti.UI.createTableViewRow({
        title: "Drug activity",
        id: "__alloyId177"
    });
    __alloyId175.push($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createTableViewRow({
        title: "Fire",
        id: "__alloyId178"
    });
    __alloyId175.push($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createTableViewRow({
        title: "Graffiti",
        id: "__alloyId179"
    });
    __alloyId175.push($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createTableViewRow({
        title: "No category",
        id: "__alloyId180"
    });
    __alloyId175.push($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createTableViewRow({
        title: "Stray animal",
        id: "__alloyId181"
    });
    __alloyId175.push($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createTableViewRow({
        title: "Suspicious activity",
        id: "__alloyId182"
    });
    __alloyId175.push($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createTableViewRow({
        title: "Suspicious vehicle",
        id: "__alloyId183"
    });
    __alloyId175.push($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createTableViewRow({
        title: "Other",
        id: "__alloyId184"
    });
    __alloyId175.push($.__views.__alloyId184);
    $.__views.optionTV = Ti.UI.createTableView({
        data: __alloyId175,
        id: "optionTV"
    });
    $.__views.Categories.add($.__views.optionTV);
    onClickOptions ? $.__views.optionTV.addEventListener("click", onClickOptions) : __defers["$.__views.optionTV!click!onClickOptions"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var params = args.params;
    var actual = params.actualCategory ? params.actualCategory : "";
    Ti.API.info("ACTUAL-------------->" + JSON.stringify(actual));
    markSelected(actual);
    __defers["$.__views.optionTV!click!onClickOptions"] && $.__views.optionTV.addEventListener("click", onClickOptions);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;