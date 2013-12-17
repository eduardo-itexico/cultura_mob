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
    $.__views.__alloyId183 = Ti.UI.createTableViewRow({
        title: "Activity in-progress",
        id: "__alloyId183"
    });
    var __alloyId184 = [];
    __alloyId184.push($.__views.__alloyId183);
    $.__views.__alloyId185 = Ti.UI.createTableViewRow({
        title: "Community information",
        id: "__alloyId185"
    });
    __alloyId184.push($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createTableViewRow({
        title: "Drug activity",
        id: "__alloyId186"
    });
    __alloyId184.push($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createTableViewRow({
        title: "Fire",
        id: "__alloyId187"
    });
    __alloyId184.push($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createTableViewRow({
        title: "Graffiti",
        id: "__alloyId188"
    });
    __alloyId184.push($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createTableViewRow({
        title: "No category",
        id: "__alloyId189"
    });
    __alloyId184.push($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createTableViewRow({
        title: "Stray animal",
        id: "__alloyId190"
    });
    __alloyId184.push($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createTableViewRow({
        title: "Suspicious activity",
        id: "__alloyId191"
    });
    __alloyId184.push($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createTableViewRow({
        title: "Suspicious vehicle",
        id: "__alloyId192"
    });
    __alloyId184.push($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createTableViewRow({
        title: "Other",
        id: "__alloyId193"
    });
    __alloyId184.push($.__views.__alloyId193);
    $.__views.optionTV = Ti.UI.createTableView({
        data: __alloyId184,
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