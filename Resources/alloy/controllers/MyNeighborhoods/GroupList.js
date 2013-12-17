function Controller() {
    function joinGroup(_pkOrgGroups) {
        var dataTemp = {
            url: L("ws_groupjoin"),
            type: "GET",
            format: "JSON",
            data: {
                atoken: APP.getToken({
                    openLogin: false
                }),
                pkOrgGroups: _pkOrgGroups
            }
        };
        APP.http.request(dataTemp, function(_result) {
            if (1 == _result._result) if (0 == _result._data.errorcode) {
                APP.optionbar.changeView(5);
                alert("You have joined a new group.");
            } else alert(_result._data.message); else alert("Internet connection error, please try again.");
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "MyNeighborhoods/GroupList";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.GroupList = Ti.UI.createView({
        id: "GroupList"
    });
    $.__views.GroupList && $.addTopLevelView($.__views.GroupList);
    $.__views.tempRow = Ti.UI.createTableViewRow({
        height: 45,
        id: "tempRow"
    });
    var __alloyId164 = [];
    __alloyId164.push($.__views.tempRow);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId164,
        id: "table"
    });
    $.__views.GroupList.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    args.toolBar.setTitle("Search List");
    $.tempRow.height = $.tempRow.height + APP.fixSizeIos7();
    for (var i = 0; args.params.data.length > i; i++) if (true == args.params.data[i].iscategory) $.table.appendRow({
        title: args.params.data[i].name,
        color: "#136C8B",
        hasChild: true,
        leftImage: "/images/folder.png",
        data: args.params.data[i].data,
        iscategory: args.params.data[i].iscategory
    }); else {
        var row = Ti.UI.createTableViewRow({
            hasChild: false,
            pkOrgGroups: args.params.data[i].pkOrgGroups,
            height: 35
        });
        row.add(Ti.UI.createLabel({
            text: args.params.data[i].name,
            color: "#136C8B",
            left: 35,
            height: 35,
            width: Ti.UI.SIZE
        }));
        if (args.params.data[i].oglogo.length > 6 && 14 != i) {
            var img = Ti.UI.createImageView({
                width: 25,
                hight: 25,
                image: args.params.data[i].oglogo.replace(/ /g, "%20"),
                left: 5
            });
            row.add(img);
        }
        $.table.appendRow(row);
    }
    $.table.addEventListener("click", function(_evt) {
        var selfRow;
        var selfRow = _evt.row;
        if (true == selfRow.iscategory) APP.openWindow({
            controller: "MyNeighborhoods/GroupList",
            controllerParams: {
                data: selfRow.data,
                callback: function() {}
            }
        }); else {
            var notificationDialog = Ti.UI.createAlertDialog({
                title: "Join Group",
                message: "Are you sure you want to join this Group?",
                buttonNames: [ "YES", "NO" ]
            });
            notificationDialog.addEventListener("click", function(e) {
                0 === e.index && joinGroup(selfRow.pkOrgGroups);
            });
            notificationDialog.show();
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;