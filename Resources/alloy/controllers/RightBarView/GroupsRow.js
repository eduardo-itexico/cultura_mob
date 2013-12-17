function Controller() {
    function loadData() {
        if (3 == args._type) {
            APP.openCloseOptions();
            APP.currentController.getMessages({
                lat: 0,
                lon: 0,
                faname: args._data.ogGroup,
                pkorgGroups: args._data.pkorgGroups,
                ogfAdmin: args._data.ogfAdmin
            });
        } else if (4 == args._type) {
            APP.openCloseOptions();
            APP.currentController.getMessages({
                lat: 0,
                lon: 0,
                faname: args._data.ogGroup,
                pkorgGroups: args._data.pkorgGroups,
                ogfAdmin: args._data.ogfAdmin
            });
        }
    }
    function editAddress() {
        var notificationDialog = Ti.UI.createAlertDialog({
            title: "Remove Group",
            message: "Do you want to remove this group?",
            buttonNames: [ "Yes", "No" ]
        });
        notificationDialog.addEventListener("click", function(e) {
            if (0 === e.index) {
                var dataTemp = {
                    url: L("ws_groupremove"),
                    type: "GET",
                    format: "JSON",
                    data: {
                        atoken: APP.getToken({
                            openLogin: false
                        }),
                        pkorggroups: args._data.pkorgGroups
                    }
                };
                APP.http.request(dataTemp, function(_result) {
                    if (1 == _result._result) if (0 == _result._data.errorcode) {
                        APP.optionbar.changeView(5);
                        alert("You have removed a group.");
                    } else alert(_result._data.message); else alert("Internet connection error, please try again.");
                });
            }
        });
        notificationDialog.show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "RightBarView/GroupsRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.GroupsRow = Ti.UI.createView({
        height: 30,
        top: 5,
        id: "GroupsRow"
    });
    $.__views.GroupsRow && $.addTopLevelView($.__views.GroupsRow);
    $.__views.groupTitle = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 14
        },
        left: 10,
        right: 115,
        height: Ti.UI.FILL,
        text: "Home of Lucy",
        id: "groupTitle"
    });
    $.__views.GroupsRow.add($.__views.groupTitle);
    loadData ? $.__views.groupTitle.addEventListener("click", loadData) : __defers["$.__views.groupTitle!click!loadData"] = true;
    $.__views.groupButton = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bgBlackOpacity39.png",
        backgroundImage: "/images/transparent.png",
        color: "white",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        right: 60,
        width: 50,
        height: 28,
        title: "Delete",
        id: "groupButton"
    });
    $.__views.GroupsRow.add($.__views.groupButton);
    editAddress ? $.__views.groupButton.addEventListener("click", editAddress) : __defers["$.__views.groupButton!click!editAddress"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    $.groupTitle.text = args._data.ogGroup;
    __defers["$.__views.groupTitle!click!loadData"] && $.__views.groupTitle.addEventListener("click", loadData);
    __defers["$.__views.groupButton!click!editAddress"] && $.__views.groupButton.addEventListener("click", editAddress);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;