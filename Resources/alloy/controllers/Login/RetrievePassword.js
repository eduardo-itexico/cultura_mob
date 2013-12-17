function Controller() {
    function blur() {
        $.username.blur();
        return true;
    }
    function invalidEmail(_email) {
        var regExp = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)+$/;
        return !regExp.test(_email);
    }
    function normalize() {
        $.username.borderWidth = 0;
        return true;
    }
    function send() {
        if (validate()) {
            _ws_request = {
                cusername: $.username.value,
                action: 1
            };
            APP.http.request({
                url: L("ws_forgotpassword"),
                type: "GET",
                format: "JSON",
                data: _ws_request
            }, setSendResponse);
        }
        return true;
    }
    function setSendResponse(response) {
        if (0 == response._result) {
            alert(L("something_wrong"));
            APP.hideActivityindicator();
        } else if (0 != response._data.errorcode) {
            alert(response._data.message);
            APP.hideActivityindicator();
        } else {
            alert(response._data.message);
            response._data.data[0].atoken;
            blur();
            APP.popOut(function() {
                APP.openLogin();
                return true;
            });
        }
        APP.hideActivityindicator();
        return true;
    }
    function validate() {
        if (invalidEmail($.username.value)) {
            alert(L("invalid_username"));
            $.username.borderColor = "red";
            $.username.borderWidth = 1;
            return false;
        }
        return true;
    }
    function initialize() {
        $.username.hintText = L("username");
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Login/RetrievePassword";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.RetrievePassword = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 0,
        right: 0,
        layout: "vertical",
        id: "RetrievePassword"
    });
    $.__views.RetrievePassword && $.addTopLevelView($.__views.RetrievePassword);
    $.__views.username = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 5,
        color: "#333",
        font: {
            fontSize: 14
        },
        top: 15,
        left: 15,
        right: 15,
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        keyboardType: Ti.UI.KEYBOARD_EMAIL,
        id: "username"
    });
    $.__views.RetrievePassword.add($.__views.username);
    normalize ? $.__views.username.addEventListener("focus", normalize) : __defers["$.__views.username!focus!normalize"] = true;
    $.__views.__alloyId75 = Ti.UI.createButton({
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
        height: 35,
        top: 15,
        left: 15,
        right: 15,
        titleid: "send",
        id: "__alloyId75"
    });
    $.__views.RetrievePassword.add($.__views.__alloyId75);
    send ? $.__views.__alloyId75.addEventListener("click", send) : __defers["$.__views.__alloyId75!click!send"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    arguments[0] || {};
    var _ws_request;
    initialize();
    __defers["$.__views.username!focus!normalize"] && $.__views.username.addEventListener("focus", normalize);
    __defers["$.__views.__alloyId75!click!send"] && $.__views.__alloyId75.addEventListener("click", send);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;