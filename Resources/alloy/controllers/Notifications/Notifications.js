function Controller() {
    function doAction() {
        if ("weather" == this.incidenttype || "SOD" === this.incidenttype) {
            var baseurl = this.url;
            APP.openWindow({
                controller: "Widgets/Browser",
                controllerParams: {
                    url: baseurl,
                    title: this.message
                }
            });
        } else if ("group" == this.incidenttype) {
            var baseurl = this.pknmessage;
            APP.openWindow({
                controller: "MyNeighborhoods/MyNeighborhoods",
                controllerParams: {
                    pknmessage: baseurl
                }
            });
        } else {
            var baseurl = "http://alertid.com/commmore.asp?cdid=" + this.pknmessage;
            APP.openWindow({
                controller: "Widgets/Browser",
                controllerParams: {
                    url: baseurl,
                    title: this.message
                }
            });
        }
        return true;
    }
    function loadNotifications(response) {
        if (0 == response._result) {
            alert(L("something_wrong"));
            APP.hideActivityindicator();
        } else if (0 != response._data.errorcode) {
            alert(response._data.message);
            $.no_data.height = Ti.UI.SIZE;
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
                _row = Alloy.createController("Notifications/NotificationRow", {
                    pknmessage: _data[i].pknmessage,
                    oggroup: _data[i].oggroup,
                    nmtimestamp: _data[i].nmtimestamp,
                    message: _data[i].message,
                    data: _data[i]
                }).getView();
                _row.pknmessage = _data[i].pknmessage;
                _row.message = _data[i].message;
                _row.incidenttype = _data[i].incidenttype;
                _row.url = _data[i].url;
                _row.addEventListener("click", doAction);
                $.list.add(_row);
            }
            APP.hideActivityindicator();
        }
        return true;
    }
    function getNotifications() {
        _ws_request = {
            atoken: args.token,
            last7: "Y"
        };
        APP.http.request({
            url: L("ws_getnotifications"),
            type: "GET",
            format: "JSON",
            data: _ws_request
        }, loadNotifications);
        return true;
    }
    function initialize() {
        APP.headerbar.setLeftButton(0, false);
        APP.headerbar.setRightButton(0, false);
        APP.headerbar.setLeftButton(APP.OPENMENU, true);
        APP.headerbar.setTitle("Notifications");
        APP.getToken({
            openLogin: true,
            callback: function(_token) {
                args.token = _token;
                APP.showActivityindicator();
                getNotifications();
                APP.notifications.badge.text = "0";
                return true;
            }
        });
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Notifications/Notifications";
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
    $.__views.__alloyId179 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_TOP,
        id: "__alloyId179"
    });
    $.__views.container.add($.__views.__alloyId179);
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
    $.__views.__alloyId180 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_BOTTOM,
        id: "__alloyId180"
    });
    $.__views.container.add($.__views.__alloyId180);
    $.__views.no_data = Ti.UI.createView({
        height: 0,
        id: "no_data"
    });
    $.__views.no_data && $.addTopLevelView($.__views.no_data);
    $.__views.__alloyId181 = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 30
        },
        text: "No data",
        id: "__alloyId181"
    });
    $.__views.no_data.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 30
        },
        text: "was found",
        id: "__alloyId182"
    });
    $.__views.no_data.add($.__views.__alloyId182);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    exports.updateView = initialize;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;