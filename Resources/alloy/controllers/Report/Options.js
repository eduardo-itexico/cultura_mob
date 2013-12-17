function Controller() {
    function markSelected(rows) {
        var actual_rows = $.optionTV.data[0].rows;
        Ti.API.info("ACTUAL------------->" + JSON.stringify(actual_rows));
        if (rows && rows.length > 0) for (var i = 0; rows.length > i; i++) {
            var row = rows[i];
            var index = Utils.inArray(row, actual_rows, "title");
            index >= 0 && ($.optionTV.data[0].rows[index].hasCheck = true);
        }
    }
    function onClickOptions(e) {
        var state = e.rowData.hasCheck;
        e.source.hasCheck = state ? false : true;
        controller.actualOption(getOptionsSelected());
    }
    function getOptionsSelected() {
        var rows = $.optionTV.data[0].rows;
        var selected = [];
        if (rows.length > 0) for (var i = 0; rows.length > i; i++) {
            var row = rows[i];
            row.hasCheck && selected.push(row.title);
            setOptionsShare(row.title, row.hasCheck);
        }
        return selected;
    }
    function setOptionsShare(title, value) {
        alert(value);
        value || (value = false);
        switch (title) {
          case "DHS":
            Ti.App.Properties.setBool("lawEnforcementS", value);
            break;

          case "Community":
            Ti.App.Properties.setBool("communityS", value);
            break;

          case "Media":
            Ti.App.Properties.setBool("mediaS", value);
            break;

          case "Anonymous":
            Ti.App.Properties.setBool("anonymousS", value);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Report/Options";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.Options = Ti.UI.createView({
        backgroundColor: "white",
        id: "Options"
    });
    $.__views.Options && $.addTopLevelView($.__views.Options);
    $.__views.__alloyId194 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        text: "Please select your options:",
        id: "__alloyId194"
    });
    $.__views.Options.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createTableViewRow({
        title: "Homeland Security",
        color: "black",
        id: "__alloyId195"
    });
    var __alloyId196 = [];
    __alloyId196.push($.__views.__alloyId195);
    $.__views.__alloyId197 = Ti.UI.createTableViewRow({
        title: "Community",
        color: "black",
        id: "__alloyId197"
    });
    __alloyId196.push($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createTableViewRow({
        title: "Media",
        color: "black",
        id: "__alloyId198"
    });
    __alloyId196.push($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createTableViewRow({
        title: "Anonymous",
        color: "black",
        id: "__alloyId199"
    });
    __alloyId196.push($.__views.__alloyId199);
    $.__views.optionTV = Ti.UI.createTableView({
        data: __alloyId196,
        id: "optionTV"
    });
    $.__views.Options.add($.__views.optionTV);
    onClickOptions ? $.__views.optionTV.addEventListener("click", onClickOptions) : __defers["$.__views.optionTV!click!onClickOptions"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Utils = require("/utils");
    var args = arguments[0] || {};
    var params = args.params;
    var controller = params.controller;
    var rows_selected = params.rowsSelected ? params.rowsSelected : [];
    markSelected(rows_selected);
    __defers["$.__views.optionTV!click!onClickOptions"] && $.__views.optionTV.addEventListener("click", onClickOptions);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;