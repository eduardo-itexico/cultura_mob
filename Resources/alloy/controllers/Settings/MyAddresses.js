function Controller() {
    function addAddress() {
        APP.openWindow({
            controller: "Settings/EditAddress"
        });
        return true;
    }
    function getMyAddresses(event) {
        if (event.success) {
            _ws_request = {
                atoken: args.params.token,
                flat: event.lat,
                flon: event.lon,
                pkfamily: Ti.App.Properties.getInt("pkfamily")
            };
            APP.http.request({
                url: L("ws_getmyaddresses"),
                type: "GET",
                format: "JSON",
                data: _ws_request
            }, loadMyAddresses);
        } else {
            alert(L("failed_to_get_current_location"));
            APP.hideActivityindicator();
        }
        return true;
    }
    function openEdit() {
        this.data && APP.openWindow({
            controller: "Settings/EditAddress",
            controllerParams: {
                data: this.data,
                callback: function() {
                    APP.showActivityindicator();
                    APP.getCurrentLocation(getMyAddresses);
                    return true;
                }
            }
        });
        return true;
    }
    function loadMyAddresses(response) {
        if (0 == response._result) {
            alert(L("something_wrong"));
            APP.closeWindow();
            APP.hideActivityindicator();
        } else if (0 != response._data.errorcode) {
            alert(response._data.message);
            APP.closeWindow();
            APP.hideActivityindicator();
        } else {
            var _data = response._data.data;
            $.content.remove($.list);
            $.list = Ti.UI.createView({
                height: Ti.UI.SIZE,
                left: 0,
                right: 0,
                layout: "vertical"
            });
            $.content.add($.list);
            for (var i = 0; _data.length > i; i++) {
                var _row;
                _row = Alloy.createController("Settings/AddressRow", {
                    title: _data[i].faname,
                    data: _data[i]
                }).getView();
                _row.addEventListener("click", openEdit);
                $.list.add(_row);
            }
            APP.hideActivityindicator();
        }
        return true;
    }
    function initialize() {
        _addButton = Ti.UI.createButton({
            title: "Add",
            right: 5,
            width: 50,
            height: 44,
            color: "white",
            backgroundImage: "transparent"
        });
        _addButton.addEventListener("click", addAddress);
        args.toolBar.removeAllCustomViews();
        args.toolBar.setRightButton(0, false);
        args.toolBar.setTitle(L("my_addresses"));
        args.toolBar.addCustomView(_addButton);
        APP.showActivityindicator();
        APP.getCurrentLocation(getMyAddresses);
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Settings/MyAddresses";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createScrollView({
        backgroundColor: "#ecf1f4",
        layout: "vertical",
        scrollType: "vertical",
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.__alloyId1097 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_TOP,
        id: "__alloyId1097"
    });
    $.__views.container.add($.__views.__alloyId1097);
    $.__views.content = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 0,
        right: 0,
        layout: "vertical",
        id: "content"
    });
    $.__views.container.add($.__views.content);
    $.__views.list = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 0,
        right: 0,
        layout: "vertical",
        id: "list"
    });
    $.__views.content.add($.__views.list);
    $.__views.__alloyId1098 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_TOP,
        id: "__alloyId1098"
    });
    $.__views.container.add($.__views.__alloyId1098);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    var _ws_request, _addButton;
    initialize();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;