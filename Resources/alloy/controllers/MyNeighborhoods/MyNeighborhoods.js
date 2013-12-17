function Controller() {
    function decrease() {
        _interval && clearInterval(_interval);
        _interval = setInterval(function() {
            _counter = parseInt(_counter) - 5;
            if (0 >= _counter) {
                _counter = 0;
                if (_cinterval++ > 25) {
                    _interval && clearInterval(_interval);
                    _cinterval = 0;
                }
            }
            _headerbar.refresh_advice.setHeight(_counter + "%");
            _headerbar.refresh_counter.setWidth(_counter + "%");
            return true;
        }, 20);
        return true;
    }
    function getMessages(_event) {
        decrease();
        if (APP.walkthru.on) loadFake(); else if (APP.getToken({
            openLogin: true
        })) {
            APP.showActivityindicator();
            for (var i = $.commentsContainer.children.length - 1; i >= 0; i--) $.commentsContainer.remove($.commentsContainer.children[i]);
            _latitude = _event.lat;
            _longitude = _event.lon;
            _title = _event.faname;
            _pkorgGroups = _event.pkorgGroups;
            _ogfAdmin = _event.ogfAdmin;
            if (0 != _pkorgGroups) var groupID = _pkorgGroups; else var groupID = 0;
            var dataTemp = {
                url: L("ws_getcomments"),
                type: "POST",
                format: "JSON",
                data: {
                    atoken: APP.getToken({
                        openLogin: false
                    }),
                    groupID: groupID,
                    flat: _event.lat,
                    flon: _event.lon,
                    corder: "recent",
                    pknmessage: _event.pknmessage ? _event.pknmessage : 0
                }
            };
            Ti.API.info("-->" + JSON.stringify(dataTemp));
            APP.http.request(dataTemp, function(_result) {
                if (1 == _result._result) if (0 == _result._data.errorcode) {
                    $.neighborTitle.text = _event.faname;
                    _event.pknmessage ? $.commentsContainer.add(Ti.UI.createView({
                        height: APP.fixSizeIos7(40)
                    })) : $.commentsContainer.add(Ti.UI.createView({
                        height: APP.fixSizeIos7(60)
                    }));
                    if (_event.pknmessage) {
                        $.commentsContainer.add(Alloy.createController("MyNeighborhoods/CommentView", {
                            _data: _result._data.data[0],
                            pknmessage: _event.pknmessage ? _event.pknmessage : 0,
                            isFirst: true
                        }).getView());
                        if (_result._data.data[0].total > 0) for (var i = 0; _result._data.data.length > i; i++) _result._data.data[i].nmessage1.length > 0 && $.commentsContainer.add(Alloy.createController("MyNeighborhoods/CommentView", {
                            _data: _result._data.data[i],
                            pknmessage: _event.pknmessage ? _event.pknmessage : 0
                        }).getView());
                    } else for (var i = 0; _result._data.data.length > i; i++) $.commentsContainer.add(Alloy.createController("MyNeighborhoods/CommentView", {
                        _data: _result._data.data[i],
                        pknmessage: _event.pknmessage ? _event.pknmessage : 0
                    }).getView());
                    $.commentsContainer.add(Ti.UI.createView({
                        height: Alloy.Globals.CONTENT_BOTTOM
                    }));
                    APP.hideActivityindicator();
                } else {
                    APP.hideActivityindicator();
                    alert("No messages were found.");
                } else {
                    APP.hideActivityindicator();
                    alert("Internet connection error, please try again.");
                }
            });
        } else APP.hideActivityindicator();
    }
    function updateView(_params) {
        $.neighborTitle.text = "";
        _type = _params.type;
        _latitude = 0;
        _longitude = 0;
        _title = "";
        _pkorgGroups = 0;
        _ogfAdmin = "N";
        APP.headerbar.removeAllCustomViews();
        APP.headerbar.setLeftButton(0, false);
        APP.headerbar.setRightButton(0, false);
        APP.headerbar.setLeftButton(APP.OPENMENU, true);
        APP.headerbar.setRightButton(APP.OPENOPTIONS, true, {}, 1);
        if (!APP.getToken({
            openLogin: false
        })) for (var i = $.commentsContainer.children.length - 1; i >= 0; i--) $.commentsContainer.remove($.commentsContainer.children[i]);
        if (0 == _params.type) {
            APP.headerbar.setTitle("My Neighborhoods");
            APP.optionbar.changeView(2, function() {
                APP.openWindow({
                    controller: "Settings/EditAddress",
                    controllerParams: {
                        callback: function() {
                            APP.optionbar.updateMyAddresses();
                        }
                    }
                });
            });
            currentPosition();
        } else if (1 == _params.type) {
            for (var i = $.commentsContainer.children.length - 1; i >= 0; i--) $.commentsContainer.remove($.commentsContainer.children[i]);
            APP.showActivityindicator();
            APP.headerbar.setTitle("My Groups");
            APP.optionbar.changeView(3, function() {
                APP.openWindow({
                    controller: "MyNeighborhoods/SearchGroups",
                    controllerParams: {
                        callback: function() {}
                    }
                });
            });
        } else if (2 == _params.type) {
            for (var i = $.commentsContainer.children.length - 1; i >= 0; i--) $.commentsContainer.remove($.commentsContainer.children[i]);
            APP.showActivityindicator();
            APP.headerbar.setTitle("My Friends and Family");
            APP.optionbar.changeView(4, function() {
                APP.openWindow({
                    controller: "MyNeighborhoods/SearchGroups",
                    controllerParams: {
                        callback: function() {}
                    }
                });
            });
        }
    }
    function currentPosition() {
        APP.getCurrentLocation(function(_event) {
            if (_event.success) {
                _event.faname = "Current Location";
                _event.pkorgGroups = _pkorgGroups;
                _event.ogfAdmin = _ogfAdmin;
                getMessages(_event);
            }
        });
    }
    function addComment() {
        APP.getToken({
            openLogin: true
        }) && null == APP.popUpController && APP.popUp({
            title: "New Post",
            container: {
                width: 300,
                height: 340
            },
            controller: "MyNeighborhoods/NewPost",
            controllerParams: {
                isAdmin: _ogfAdmin,
                isGroup: 0 != _pkorgGroups ? 1 : 0,
                groupID: 0 != _pkorgGroups ? _pkorgGroups : "",
                lat: _latitude,
                lon: _longitude,
                pknmessage: args.params && args.params.pknmessage ? args.params.pknmessage : 0,
                refButton: args.params && args.params.refButton ? args.params.refButton : 0,
                controller: _controller,
                callback: function() {
                    return true;
                }
            }
        });
    }
    function loadFake() {
        for (var i = $.commentsContainer.children.length - 1; i >= 0; i--) $.commentsContainer.remove($.commentsContainer.children[i]);
        $.commentsContainer.add(Ti.UI.createView({
            height: APP.fixSizeIos7(60)
        }));
        for (var i = 0; args.fake.length > i; i++) $.commentsContainer.add(Alloy.createController("MyNeighborhoods/CommentView", {
            _data: args.fake[i],
            pknmessage: 0
        }).getView());
        return true;
    }
    function refresh() {
        reloadMessages();
        return true;
    }
    function reloadMessages() {
        args.params && args.params.pknmessage ? getMessages({
            lat: 0,
            lon: 0,
            faname: "",
            pkorgGroups: _pkorgGroups,
            pknmessage: args.params.pknmessage
        }) : getMessages({
            lat: _latitude,
            lon: _longitude,
            faname: _title,
            pkorgGroups: _pkorgGroups
        });
    }
    function removeComment(_view) {
        $.commentsContainer.remove(_view);
    }
    function initializeView() {
        (1 == _type || 2 == _type) && APP.openCloseOptions();
        updateView({
            type: _type
        });
    }
    function clearView() {
        for (var i = $.commentsContainer.children.length - 1; i >= 0; i--) $.commentsContainer.remove($.commentsContainer.children[i]);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "MyNeighborhoods/MyNeighborhoods";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.MyNeighborhoods = Ti.UI.createView({
        backgroundColor: "#ecf1f4",
        id: "MyNeighborhoods"
    });
    $.__views.MyNeighborhoods && $.addTopLevelView($.__views.MyNeighborhoods);
    $.__views.commentsContainer = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        contentHeight: Ti.UI.SIZE,
        layout: "vertical",
        id: "commentsContainer"
    });
    $.__views.MyNeighborhoods.add($.__views.commentsContainer);
    $.__views.neighborTitleContainer = Ti.UI.createView({
        top: 40,
        backgroundImage: "/images/bg_whiteimage_flex.png",
        left: 0,
        right: 0,
        height: 30,
        id: "neighborTitleContainer"
    });
    $.__views.MyNeighborhoods.add($.__views.neighborTitleContainer);
    $.__views.neighborTitle = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 14
        },
        left: 10,
        text: "Current Location",
        id: "neighborTitle"
    });
    $.__views.neighborTitleContainer.add($.__views.neighborTitle);
    $.__views.__alloyId165 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/ic_add_pressed.png",
        backgroundImage: "/images/bt_add.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        left: 10,
        bottom: Alloy.Globals.CONTENT_BOTTOM,
        height: 38,
        width: 38,
        id: "__alloyId165"
    });
    $.__views.MyNeighborhoods.add($.__views.__alloyId165);
    addComment ? $.__views.__alloyId165.addEventListener("click", addComment) : __defers["$.__views.__alloyId165!click!addComment"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    var _type = 0;
    var _latitude = 0;
    var _longitude = 0;
    var _title = "";
    var _pkorgGroups = 0;
    var _ogfAdmin = "N";
    var _controller = this;
    var _headerbar, _interval, _counter = 0, _maximum = 0, _cinterval = 0, _touch = false;
    $.neighborTitleContainer.top = 40 + APP.fixSizeIos7();
    if (args.params && args.params.pknmessage) {
        _headerbar = args.toolBar;
        args.toolBar.setTitle("Thread Detail");
        $.neighborTitleContainer.visible = false;
        getMessages({
            lat: 0,
            lon: 0,
            faname: "",
            pkorgGroups: _pkorgGroups,
            pknmessage: args.params.pknmessage
        });
    } else _headerbar = APP.headerbar;
    $.commentsContainer.addEventListener("scroll", function(event) {
        if (_touch && _maximum >= parseInt(event.y)) if (105 > _counter) {
            _counter += 5;
            _headerbar.refresh_advice.setHeight(_counter + "%");
            _headerbar.refresh_counter.setWidth(_counter + "%");
        } else {
            decrease();
            refresh();
        }
        _maximum = parseInt(event.y);
        _maximum > 0 && (_maximum = 0);
        return true;
    });
    $.commentsContainer.addEventListener("dragstart", function() {
        Ti.API.warn("dragstart");
        _touch = true;
        return true;
    });
    $.commentsContainer.addEventListener("dragend", function() {
        Ti.API.warn("dragend");
        _touch = false;
        decrease();
        return true;
    });
    exports.updateView = updateView;
    exports.getMessages = getMessages;
    exports.reloadMessages = reloadMessages;
    exports.currentPosition = currentPosition;
    exports.removeComment = removeComment;
    exports.initializeView = initializeView;
    exports.clearView = clearView;
    __defers["$.__views.__alloyId165!click!addComment"] && $.__views.__alloyId165.addEventListener("click", addComment);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;