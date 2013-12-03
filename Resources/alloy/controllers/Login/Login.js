function Controller() {
    function closeDialog() {
        APP.popOut();
        args.cancel && args.cancel();
        return true;
    }
    function normalize() {
        $.username.borderWidth = 0;
        $.password.borderWidth = 0;
        return true;
    }
    function goNext() {
        $.password.focus();
        return true;
    }
    function openNewAccount() {
        APP.openWindow({
            controller: "Login/NewAccount",
            controllerParams: {}
        });
        return true;
    }
    function openRetrievePassword() {
        APP.popUp({
            title: "Retrieve Password",
            container: {
                width: 300,
                height: 160
            },
            controller: "Login/RetrievePassword",
            onClose: function() {
                APP.openLogin();
                return true;
            }
        });
        return true;
    }
    function doLogin() {
        var invalid = false;
        if ("" === $.username.value) {
            $.username.borderColor = "red";
            $.username.borderWidth = 1;
            invalid = true;
        }
        if ("" === $.password.value) {
            $.password.borderColor = "red";
            $.password.borderWidth = 1;
            invalid = true;
        }
        if (invalid) {
            Ti.UI.createAlertDialog({
                title: "Login",
                message: L("invalid_input")
            }).show();
            return false;
        }
        _ws_request = {
            cusername: $.username.value,
            cpassword: $.password.value,
            action: 1
        };
        APP.http.request({
            url: L("ws_login"),
            type: "POST",
            format: "JSON",
            data: _ws_request
        }, setResponseLogin);
        return true;
    }
    function setResponseLogin(response) {
        if (1 == response._result) if (0 == response._data.errorcode) {
            Ti.API.info("LOGIN:" + JSON.stringify(response._data.data));
            Ti.App.Properties.setInt("pkfamily", response._data.data[0].pkfamily);
            Ti.App.Properties.setString("user_token", response._data.data[0].fglobalid);
            Ti.App.Properties.setString("user_name", $.username.value);
            args.callback && args.callback(response._data.data[0].fglobalid);
            APP.popOut();
            APP.currentController.initializeView && APP.currentController.initializeView();
            APP.notifications.subscribe();
        } else alert(response._data.message); else alert(L("fail_on_webservice"));
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Login/Login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createView({
        backgroundImage: "/images/bg_popup_flex.png",
        backgroundTopCap: 20,
        backgroundLeftCap: 20,
        width: 300,
        height: 360,
        zIndex: 9999,
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.close = Ti.UI.createButton({
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
        top: 0,
        right: 5,
        width: 36,
        height: 36,
        id: "close"
    });
    $.__views.container.add($.__views.close);
    closeDialog ? $.__views.close.addEventListener("click", closeDialog) : __defers["$.__views.close!click!closeDialog"] = true;
    $.__views.logo = Ti.UI.createImageView({
        backgroundImage: "/images/im_logo.png",
        width: 249,
        height: 61,
        top: 60,
        id: "logo"
    });
    $.__views.container.add($.__views.logo);
    $.__views.__alloyId39 = Ti.UI.createScrollView({
        scrollType: "vertical",
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: 160,
        bottom: 10,
        id: "__alloyId39"
    });
    $.__views.container.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
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
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        left: 15,
        right: 15,
        id: "username"
    });
    $.__views.__alloyId40.add($.__views.username);
    normalize ? $.__views.username.addEventListener("focus", normalize) : __defers["$.__views.username!focus!normalize"] = true;
    goNext ? $.__views.username.addEventListener("return", goNext) : __defers["$.__views.username!return!goNext"] = true;
    $.__views.password = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        textAlign: "left",
        height: 36,
        paddingLeft: 5,
        color: "#333",
        font: {
            fontSize: 14
        },
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        passwordMask: true,
        top: 10,
        left: 15,
        right: 15,
        id: "password"
    });
    $.__views.__alloyId40.add($.__views.password);
    normalize ? $.__views.password.addEventListener("focus", normalize) : __defers["$.__views.password!focus!normalize"] = true;
    $.__views.forgot_password = Ti.UI.createLabel({
        color: "#6B6B6B",
        font: {
            fontStyle: "italic",
            fontSize: 14
        },
        textid: "forgot_password",
        backgroundImage: "/images/subline.png",
        top: 20,
        id: "forgot_password"
    });
    $.__views.__alloyId39.add($.__views.forgot_password);
    openRetrievePassword ? $.__views.forgot_password.addEventListener("click", openRetrievePassword) : __defers["$.__views.forgot_password!click!openRetrievePassword"] = true;
    $.__views.__alloyId41 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: 15,
        id: "__alloyId41"
    });
    $.__views.__alloyId39.add($.__views.__alloyId41);
    $.__views.create_new = Ti.UI.createButton({
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
        titleid: "create_new",
        left: 15,
        right: "52%",
        height: 36,
        id: "create_new"
    });
    $.__views.__alloyId41.add($.__views.create_new);
    openNewAccount ? $.__views.create_new.addEventListener("click", openNewAccount) : __defers["$.__views.create_new!click!openNewAccount"] = true;
    $.__views.login = Ti.UI.createButton({
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
        titleid: "login",
        left: "52%",
        right: 15,
        height: 36,
        id: "login"
    });
    $.__views.__alloyId41.add($.__views.login);
    doLogin ? $.__views.login.addEventListener("click", doLogin) : __defers["$.__views.login!click!doLogin"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    var _ws_request;
    $.username.hintText = L("username");
    $.password.hintText = L("password");
    __defers["$.__views.close!click!closeDialog"] && $.__views.close.addEventListener("click", closeDialog);
    __defers["$.__views.username!focus!normalize"] && $.__views.username.addEventListener("focus", normalize);
    __defers["$.__views.username!return!goNext"] && $.__views.username.addEventListener("return", goNext);
    __defers["$.__views.password!focus!normalize"] && $.__views.password.addEventListener("focus", normalize);
    __defers["$.__views.forgot_password!click!openRetrievePassword"] && $.__views.forgot_password.addEventListener("click", openRetrievePassword);
    __defers["$.__views.create_new!click!openNewAccount"] && $.__views.create_new.addEventListener("click", openNewAccount);
    __defers["$.__views.login!click!doLogin"] && $.__views.login.addEventListener("click", doLogin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;