function Controller() {
    function getMyAddresses(_type) {
        if (APP.getToken({
            openLogin: false
        })) {
            if (1 == _type || 2 == _type) {
                var dataTemp = {
                    url: L("ws_getmyaddresses"),
                    type: "POST",
                    format: "JSON",
                    data: {
                        atoken: APP.getToken({
                            openLogin: false
                        }),
                        pkfamily: Ti.App.Properties.getInt("pkfamily")
                    }
                };
                APP.http.request(dataTemp, function(_result) {
                    if (1 == _result._result && 0 == _result._data.errorcode) {
                        $.addressContainer.add(Alloy.createController("RightBarView/AddressRow", {
                            _data: {
                                faname: "Current Location"
                            },
                            _type: _type
                        }).getView());
                        for (var i = 0; _result._data.data.length > i; i++) $.addressContainer.add(Alloy.createController("RightBarView/AddressRow", {
                            _data: _result._data.data[i],
                            _type: _type
                        }).getView());
                    }
                });
            } else if (3 == _type || 4 == _type) {
                var dataTemp = {
                    url: L("ws_mygroups"),
                    type: "GET",
                    format: "JSON",
                    data: {
                        atoken: APP.getToken({
                            openLogin: false
                        })
                    }
                };
                APP.http.request(dataTemp, function(_result) {
                    if (1 == _result._result) if (0 == _result._data.errorcode) for (var i = 0; _result._data.data.length > i; i++) $.addressContainer.add(Alloy.createController("RightBarView/GroupsRow", {
                        _data: _result._data.data[i],
                        _type: _type
                    }).getView()); else if (4 == _result._data.errorcode) {
                        var dialog = Ti.UI.createAlertDialog({
                            buttonNames: [ "OK" ],
                            message: "You do not have any groups yet. Please select a group on the next screen",
                            title: "My Groups"
                        });
                        dialog.addEventListener("click", function() {
                            APP.openWindow({
                                controller: "MyNeighborhoods/SearchGroups",
                                controllerParams: {
                                    callback: function() {}
                                }
                            });
                        });
                        dialog.show();
                    }
                    APP.hideActivityindicator();
                });
            }
        } else (3 == _type || 4 == _type) && APP.hideActivityindicator();
    }
    function searchAddress() {
        if ("" !== $.searchTxtFld.value) {
            $.rencentlyContainer.add(Alloy.createController("RightBarView/RecentlyAddressRow", {
                address: $.searchTxtFld.value
            }).getView());
            $.searchTxtFld.blur();
            APP.currentController.searchAddress($.searchTxtFld.value);
        } else {
            alert("Please enter an address");
            $.searchTxtFld.focus();
        }
    }
    function addAddress() {
        tempFunction();
    }
    function changeView(_type, _addFunction) {
        switch (_type) {
          case 1:
            for (var i = $.addressContainer.children.length - 1; i >= 0; i--) $.addressContainer.remove($.addressContainer.children[i]);
            $.searchContainer.height = 40;
            $.groupListContainer.height = Ti.UI.SIZE;
            $.groupListTitle.text = "My Neighborhoods";
            $.recentlyFoundContainer.height = Ti.UI.SIZE;
            type = _type;
            tempFunction = _addFunction;
            getMyAddresses(type);
            $.titleLbl.text = "Neighborhoods";
            break;

          case 2:
            for (var i = $.addressContainer.children.length - 1; i >= 0; i--) $.addressContainer.remove($.addressContainer.children[i]);
            $.searchContainer.height = 0;
            $.groupListContainer.height = Ti.UI.SIZE;
            $.groupListTitle.text = "My Neighborhoods";
            $.recentlyFoundContainer.height = 0;
            type = _type;
            tempFunction = _addFunction;
            getMyAddresses(type);
            $.titleLbl.text = "Neighborhoods";
            break;

          case 3:
            for (var i = $.addressContainer.children.length - 1; i >= 0; i--) $.addressContainer.remove($.addressContainer.children[i]);
            $.searchContainer.height = 0;
            $.groupListContainer.height = Ti.UI.SIZE;
            $.groupListTitle.text = "My Groups";
            $.recentlyFoundContainer.height = 0;
            type = _type;
            tempFunction = _addFunction;
            getMyAddresses(type);
            $.titleLbl.text = "Groups";
            break;

          case 4:
            for (var i = $.addressContainer.children.length - 1; i >= 0; i--) $.addressContainer.remove($.addressContainer.children[i]);
            $.searchContainer.height = 0;
            $.groupListContainer.height = Ti.UI.SIZE;
            $.groupListTitle.text = "My Friens and Family";
            $.recentlyFoundContainer.height = 0;
            type = _type;
            tempFunction = _addFunction;
            getMyAddresses(type);
            $.titleLbl.text = "Friens and Family";
            break;

          case 5:
            for (var i = $.addressContainer.children.length - 1; i >= 0; i--) $.addressContainer.remove($.addressContainer.children[i]);
            getMyAddresses(type);
        }
    }
    function updateMyAddresses() {
        for (var i = $.addressContainer.children.length - 1; i >= 0; i--) $.addressContainer.remove($.addressContainer.children[i]);
        getMyAddresses(type);
    }
    function addTxtFld() {
        Ti.API.info("addTxtFld");
        if (!$.searchTxtFld) {
            $.searchTxtFld = Ti.UI.createTextField({
                backgroundImage: "/images/transparent.png",
                returnKeyType: Ti.UI.RETURNKEY_DONE,
                textAlign: "left",
                left: 0,
                right: 20,
                height: 36,
                paddingLeft: 5,
                color: "#333",
                font: {
                    fontSize: 14
                },
                hintText: "Ex: street, city, state"
            });
            $.search_tf_view.add($.searchTxtFld);
        }
        return true;
    }
    function removeTxtFld() {
        Ti.API.info("removeTxtFld");
        if ($.searchTxtFld) {
            $.search_tf_view.remove($.searchTxtFld);
            $.searchTxtFld = null;
        }
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "RightBarView/RightBarView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.RightBarView = Ti.UI.createView({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        isOpen: "false",
        id: "RightBarView"
    });
    $.__views.RightBarView && $.addTopLevelView($.__views.RightBarView);
    $.__views.backgroundIosBar = Ti.UI.createView({
        backgroundImage: "/images/bg_statusbar_flex.png",
        top: 0,
        height: 0,
        id: "backgroundIosBar"
    });
    $.__views.RightBarView.add($.__views.backgroundIosBar);
    $.__views.groupContainer = Ti.UI.createView({
        layout: "vertical",
        top: 20,
        id: "groupContainer"
    });
    $.__views.RightBarView.add($.__views.groupContainer);
    $.__views.__alloyId213 = Ti.UI.createView({
        top: 0,
        height: 36,
        id: "__alloyId213"
    });
    $.__views.groupContainer.add($.__views.__alloyId213);
    $.__views.titleLbl = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 18
        },
        left: 10,
        width: Ti.UI.SIZE,
        text: "Neighborhoods",
        id: "titleLbl"
    });
    $.__views.__alloyId213.add($.__views.titleLbl);
    $.__views.__alloyId214 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bgBlackOpacity39.png",
        backgroundImage: "/images/transparent.png",
        color: "white",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 30
        },
        title: "+",
        width: 36,
        height: 36,
        right: 58,
        id: "__alloyId214"
    });
    $.__views.__alloyId213.add($.__views.__alloyId214);
    addAddress ? $.__views.__alloyId214.addEventListener("click", addAddress) : __defers["$.__views.__alloyId214!click!addAddress"] = true;
    $.__views.blueLine = Ti.UI.createView({
        height: 3,
        backgroundColor: "#4099b7",
        id: "blueLine"
    });
    $.__views.groupContainer.add($.__views.blueLine);
    $.__views.searchContainer = Ti.UI.createView({
        top: 5,
        height: 40,
        id: "searchContainer"
    });
    $.__views.groupContainer.add($.__views.searchContainer);
    $.__views.search_tf_view = Ti.UI.createView({
        top: 5,
        left: 7,
        right: 122,
        backgroundImage: "/images/textbox_flex.png",
        backgroundLeftCap: 15,
        backgroundRightCap: 15,
        height: 32,
        id: "search_tf_view"
    });
    $.__views.searchContainer.add($.__views.search_tf_view);
    $.__views.__alloyId215 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/ic_close_pressed.png",
        backgroundImage: "/images/ic_close.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        top: 3,
        right: 121,
        height: 36,
        width: 36,
        id: "__alloyId215"
    });
    $.__views.searchContainer.add($.__views.__alloyId215);
    $.__views.searchAddress = Ti.UI.createButton({
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
        width: 60,
        height: 30,
        title: "Search",
        id: "searchAddress"
    });
    $.__views.searchContainer.add($.__views.searchAddress);
    searchAddress ? $.__views.searchAddress.addEventListener("click", searchAddress) : __defers["$.__views.searchAddress!click!searchAddress"] = true;
    $.__views.groupsList = Ti.UI.createScrollView({
        top: 5,
        contentHeight: Ti.UI.SIZE,
        layout: "vertical",
        id: "groupsList"
    });
    $.__views.groupContainer.add($.__views.groupsList);
    $.__views.groupListContainer = Ti.UI.createView({
        top: 5,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "groupListContainer"
    });
    $.__views.groupsList.add($.__views.groupListContainer);
    $.__views.__alloyId216 = Ti.UI.createView({
        height: 30,
        backgroundColor: "#4099b7",
        id: "__alloyId216"
    });
    $.__views.groupListContainer.add($.__views.__alloyId216);
    $.__views.groupListTitle = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 16
        },
        left: 10,
        text: "My Neighborhoods",
        id: "groupListTitle"
    });
    $.__views.__alloyId216.add($.__views.groupListTitle);
    $.__views.addressContainer = Ti.UI.createView({
        id: "addressContainer",
        layout: "vertical",
        height: Ti.UI.SIZE
    });
    $.__views.groupListContainer.add($.__views.addressContainer);
    $.__views.recentlyFoundContainer = Ti.UI.createView({
        top: 5,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "recentlyFoundContainer"
    });
    $.__views.groupsList.add($.__views.recentlyFoundContainer);
    $.__views.__alloyId217 = Ti.UI.createView({
        height: 30,
        backgroundColor: "#4099b7",
        id: "__alloyId217"
    });
    $.__views.recentlyFoundContainer.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 16
        },
        left: 10,
        text: "Recently Found",
        id: "__alloyId218"
    });
    $.__views.__alloyId217.add($.__views.__alloyId218);
    $.__views.rencentlyContainer = Ti.UI.createView({
        id: "rencentlyContainer",
        layout: "vertical",
        height: Ti.UI.SIZE
    });
    $.__views.recentlyFoundContainer.add($.__views.rencentlyContainer);
    $.__views.__alloyId219 = Ti.UI.createView({
        opacity: .5,
        left: 0,
        width: 14,
        backgroundRepeat: true,
        backgroundImage: "/images/im_shadow_slide.png",
        id: "__alloyId219"
    });
    $.__views.RightBarView.add($.__views.__alloyId219);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    arguments[0] || {};
    var type;
    var tempFunction;
    $.backgroundIosBar.height = APP.fixSizeIos7();
    exports.changeView = changeView;
    exports.updateMyAddresses = updateMyAddresses;
    exports.addTxtFld = addTxtFld;
    exports.removeTxtFld = removeTxtFld;
    __defers["$.__views.__alloyId214!click!addAddress"] && $.__views.__alloyId214.addEventListener("click", addAddress);
    __defers["$.__views.searchAddress!click!searchAddress"] && $.__views.searchAddress.addEventListener("click", searchAddress);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;