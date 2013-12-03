function Controller() {
    function headerView(title) {
        var _headerView = Ti.UI.createView({
            backgroundImage: "/images/bg_white_alpha90.png",
            height: 40,
            layout: "vertical"
        });
        _title = Ti.UI.createLabel({
            text: title,
            height: 38,
            left: 15,
            color: "#17B8E4",
            font: {
                fontSize: 16
            }
        });
        _headerView.add(separator());
        _headerView.add(_title);
        _headerView.add(separator());
        return _headerView;
    }
    function openBrowser() {
        APP.openWindow({
            controller: "Widgets/Browser",
            controllerParams: {
                title: this.data.agency,
                url: L("ws_getalertsmessage") + "?pkorgmessage=" + this.data.pkorgmessage
            }
        });
        return true;
    }
    function openInMap() {
        var latitudeDelta;
        var longitudeDelta;
        var latitudeDelta = .02;
        var longitudeDelta = .02;
        _map.selectAnnotation(this.annotation);
        _map.setRegion({
            latitude: this.data.cdlat,
            longitude: this.data.cdlon,
            animate: true,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta
        });
        _openListView();
        return true;
    }
    function separator() {
        var _separator = Ti.UI.createView({
            backgroundColor: "#ccc",
            width: Ti.UI.FILL,
            height: 1,
            top: 0
        });
        return _separator;
    }
    function initialize() {
        _map = args.map;
        _openListView = args.openListView;
        args.alerts_data;
        args.advisors_data;
        args.advisors_annotations;
        $.alerts.headerView = headerView(L("alerts"));
        $.advisors.headerView = headerView(L("advisors"));
        if (args.alerts_data) for (var i = 0; args.alerts_data.length > i; i++) {
            var _row;
            _row = Alloy.createController("MyAlerts/AlertRow", {
                data: args.alerts_data[i]
            }).getView();
            _row.addEventListener("click", openBrowser);
            $.alerts.add(_row);
        }
        if (args.advisors_data) for (var i = 0; args.advisors_data.length > i; i++) {
            var _row;
            _row = Alloy.createController("MyAlerts/AlertRow", {
                data: args.advisors_data[i],
                annotation: args.advisors_annotations && args.advisors_annotations[i].anno
            }).getView();
            _row.addEventListener("click", openInMap);
            $.advisors.add(_row);
        }
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "MyAlerts/TableAlerts";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.alerts = Ti.UI.createTableViewSection({
        id: "alerts"
    });
    var __alloyId148 = [];
    __alloyId148.push($.__views.alerts);
    $.__views.advisors = Ti.UI.createTableViewSection({
        id: "advisors"
    });
    __alloyId148.push($.__views.advisors);
    $.__views.tableAlerts = Ti.UI.createTableView({
        top: 50,
        left: 3,
        right: 6,
        bottom: 10,
        borderRadius: 5,
        backgroundColor: "white",
        separatorColor: "#ccc",
        data: __alloyId148,
        id: "tableAlerts"
    });
    $.__views.tableAlerts && $.addTopLevelView($.__views.tableAlerts);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    var _map, _openListView;
    initialize();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;