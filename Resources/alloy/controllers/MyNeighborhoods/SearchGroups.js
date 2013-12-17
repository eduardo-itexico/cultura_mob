function Controller() {
    function androidSearch() {
        if (APP.getToken({
            openLogin: true
        })) {
            var dataTemp = {
                url: L("ws_groupsearch"),
                type: "GET",
                format: "JSON",
                data: {
                    atoken: APP.getToken({
                        openLogin: false
                    }),
                    searchcopy: $.searchTxt.value
                }
            };
            APP.http.request(dataTemp, function(_result) {
                if (1 == _result._result) if (0 == _result._data.errorcode) {
                    var tempSearchResult = [];
                    for (var i = 0; _result._data.data.length > i; i++) tempSearchResult.push({
                        iscategory: false,
                        name: _result._data.data[i].ogGroup,
                        pkOrgGroups: _result._data.data[i].pkorgGroups,
                        oglogo: _result._data.data[i].ogLogo
                    });
                    APP.openWindow({
                        controller: "MyNeighborhoods/GroupList",
                        controllerParams: {
                            data: tempSearchResult,
                            callback: function() {}
                        }
                    });
                } else alert(_result._data.message); else alert("Internet connection error, please try again.");
            });
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "MyNeighborhoods/SearchGroups";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.SearchGroups = Ti.UI.createView({
        backgroundColor: "#ecf1f4",
        id: "SearchGroups"
    });
    $.__views.SearchGroups && $.addTopLevelView($.__views.SearchGroups);
    $.__views.searchRow = Ti.UI.createTableViewRow({
        backgroundColor: "#ecf1f4",
        height: 90,
        id: "searchRow"
    });
    var __alloyId171 = [];
    __alloyId171.push($.__views.searchRow);
    $.__views.searchTxt = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 5,
        color: "#333",
        font: {
            fontSize: 14
        },
        bottom: 5,
        left: 10,
        right: 80,
        hintText: "search group",
        id: "searchTxt"
    });
    $.__views.searchRow.add($.__views.searchTxt);
    $.__views.searchBtn = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bgBlackOpacity39.png",
        backgroundImage: "/images/transparent.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 1,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        bottom: 6,
        right: 10,
        height: 35,
        width: 60,
        title: "search",
        id: "searchBtn"
    });
    $.__views.searchRow.add($.__views.searchBtn);
    androidSearch ? $.__views.searchBtn.addEventListener("click", androidSearch) : __defers["$.__views.searchBtn!click!androidSearch"] = true;
    $.__views.__alloyId172 = Ti.UI.createTableViewRow({
        color: "#136C8B",
        hasChild: "false",
        id: "__alloyId172"
    });
    __alloyId171.push($.__views.__alloyId172);
    $.__views.__alloyId173 = Ti.UI.createLabel({
        color: "#136C8B",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        right: 15,
        height: 45,
        textid: "join_to_group",
        id: "__alloyId173"
    });
    $.__views.__alloyId172.add($.__views.__alloyId173);
    $.__views.__alloyId174 = Ti.UI.createTableViewRow({
        color: "#136C8B",
        hasChild: true,
        id: "__alloyId174"
    });
    __alloyId171.push($.__views.__alloyId174);
    $.__views.__alloyId175 = Ti.UI.createLabel({
        color: "#136C8B",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        right: 15,
        height: 35,
        textid: "create_your_own",
        id: "__alloyId175"
    });
    $.__views.__alloyId174.add($.__views.__alloyId175);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId171,
        id: "table"
    });
    $.__views.SearchGroups.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    args.toolBar.setTitle("Search Group");
    $.searchRow.height = $.searchRow.height + APP.fixSizeIos7();
    var dataTemp = {
        url: L("ws_grouppublic"),
        type: "GET",
        format: "JSON",
        data: {}
    };
    APP.http.request(dataTemp, function(_result) {
        if (1 == _result._result) if (0 == _result._data.errorcode) for (var i = 0; _result._data.data.length > i; i++) $.table.appendRow({
            title: _result._data.data[i].name,
            color: "#136C8B",
            hasChild: true,
            leftImage: "/images/folder.png",
            data: _result._data.data[i].data
        }); else alert(_result._data.message); else alert("Internet connection error, please try again.");
    });
    $.table.addEventListener("click", function(_evt) {
        Ti.API.info("$.table.click >>> _evt.index:" + _evt.index);
        if (0 == _evt.index) $.searchTxt.focus(); else if (2 == _evt.index) {
            $.searchTxt.blur();
            APP.openWindow({
                controller: "Widgets/Browser",
                controllerParams: {
                    title: L("app_name"),
                    url: L("url_alertid")
                }
            });
        } else if (_evt.index > 2) {
            $.searchTxt.blur();
            var tempData;
            var tempData = _evt.row.data;
            APP.openWindow({
                controller: "MyNeighborhoods/GroupList",
                controllerParams: {
                    data: tempData,
                    callback: function() {}
                }
            });
        }
    });
    __defers["$.__views.searchBtn!click!androidSearch"] && $.__views.searchBtn.addEventListener("click", androidSearch);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;