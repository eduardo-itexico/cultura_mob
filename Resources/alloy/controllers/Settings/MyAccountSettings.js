function Controller() {
    function blur() {
        for (var i = 0; _textfields.length > i; i++) _textfields[i].blur();
        return true;
    }
    function getInformation() {
        _ws_request = {
            atoken: args.params.token
        };
        APP.showActivityindicator();
        APP.http.request({
            url: L("ws_getmyaccount"),
            type: "GET",
            format: "JSON",
            data: _ws_request
        }, setGetInformationResponse);
        return true;
    }
    function invalidPhone(phone) {
        var _regExp, _phone;
        _regExp = /\D/g;
        _phone = String(phone);
        return _regExp.test(_phone) || 10 > _phone.length;
    }
    function next() {
        this.next && this.next.focus();
        return true;
    }
    function normalize() {
        for (var _textfield, i = 0; _textfields.length > i; i++) {
            _textfield = _textfields[i];
            _textfield.borderWidth = 0;
        }
        return true;
    }
    function save() {
        if (validate()) {
            APP.showActivityindicator();
            APP.getCurrentLocation(function(event) {
                if (event.success) {
                    _ws_request = {
                        atoken: args.params.token,
                        flat: event.lat,
                        flon: event.lon,
                        falias: $.account_alias.getValue(),
                        fpromocode: $.promocode.getValue(),
                        fpassword: $.password.getValue(),
                        fcphone: $.cell_phone.getValue(),
                        fhphone: $.home_phone.getValue(),
                        fwphone: $.work_phone.getValue()
                    };
                    APP.http.request({
                        url: L("ws_putmyaccount"),
                        type: "GET",
                        format: "JSON",
                        data: _ws_request
                    }, setSaveResponse);
                } else {
                    alert(L("failed_to_get_current_location"));
                    APP.hideActivityindicator();
                }
            });
        }
        return true;
    }
    function setGetInformationResponse(response) {
        if (0 == response._result) {
            alert(L("something_wrong"));
            APP.closeWindow();
        } else if (0 != response._data.errorcode) {
            alert(response._data.message);
            APP.closeWindow();
        } else {
            var _data = response._data.data[0];
            _data.atoken;
            $.account_alias.setValue(String(_data.falias));
            $.username.setText(String(_data.fusername));
            $.password.setValue(String(_data.fpassword));
            $.confirm_password.setValue(String(_data.fpassword));
            $.promocode.setValue(String(_data.fpromocode));
            $.cell_phone.setValue(String(_data.fcphone));
            $.home_phone.setValue(String(_data.fhphone));
            $.work_phone.setValue(String(_data.fwphone));
        }
        APP.hideActivityindicator();
        return true;
    }
    function setSaveResponse(response) {
        if (0 == response._result) alert(L("something_wrong")); else if (0 != response._data.errorcode) alert(response._data.message); else {
            response._data.data[0].atoken;
            blur();
            APP.closeWindow();
            alert(L("save_successful"));
        }
        APP.hideActivityindicator();
        return true;
    }
    function validate() {
        blur();
        if (!$.account_alias.value.length) {
            alert(L("enter_account"));
            $.account_alias.borderColor = "red";
            $.account_alias.borderWidth = 1;
            return false;
        }
        if (invalidPhone($.cell_phone.value)) {
            alert(L("invalid_cell"));
            $.cell_phone.borderColor = "red";
            $.cell_phone.borderWidth = 1;
            return false;
        }
        if (7 > $.password.value.length) {
            alert(L("invalid_password"));
            $.password.borderColor = "red";
            $.password.borderWidth = 1;
            return false;
        }
        if ($.password.value != $.confirm_password.value) {
            alert(L("diff_pass_conf"));
            $.confirm_password.borderColor = "red";
            $.confirm_password.borderWidth = 1;
            return false;
        }
        return true;
    }
    function initialize() {
        _saveButton = Ti.UI.createButton({
            title: "Save",
            right: 5,
            width: 50,
            height: 44,
            color: "white",
            backgroundImage: "transparent"
        });
        _saveButton.addEventListener("click", save);
        args.toolBar.removeAllCustomViews();
        args.toolBar.setRightButton(0, false);
        args.toolBar.setTitle(L("my_account_settings"));
        args.toolBar.addCustomView(_saveButton);
        args.toolBar.setCloseAction(function() {
            blur();
            return true;
        });
        $.account_alias.hintText = L("account_alias");
        $.cell_phone.hintText = L("cell_phone");
        $.home_phone.hintText = L("home_phone");
        $.work_phone.hintText = L("work_phone");
        $.password.hintText = L("password");
        $.confirm_password.hintText = L("confirm_password");
        $.promocode.hintText = L("promocode");
        _textfields = [ $.account_alias, $.cell_phone, $.home_phone, $.work_phone, $.password, $.confirm_password, $.promocode ];
        for (var i = 0; _textfields.length - 1 > i; i++) _textfields[i].next = _textfields[i + 1];
        getInformation();
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Settings/MyAccountSettings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createScrollView({
        scrollType: "vertical",
        layout: "vertical",
        backgroundColor: "#ecf1f4",
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.__alloyId1077 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_TOP,
        id: "__alloyId1077"
    });
    $.__views.container.add($.__views.__alloyId1077);
    $.__views.__alloyId1078 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "__alloyId1078"
    });
    $.__views.container.add($.__views.__alloyId1078);
    $.__views.username = Ti.UI.createLabel({
        color: "black",
        font: {
            fontSize: 16
        },
        textAlign: "left",
        left: 15,
        textid: "username",
        id: "username"
    });
    $.__views.__alloyId1078.add($.__views.username);
    $.__views.__alloyId1079 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1079"
    });
    $.__views.container.add($.__views.__alloyId1079);
    $.__views.account_alias = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 5,
        color: "#333",
        font: {
            fontSize: 14
        },
        top: 5,
        left: 15,
        right: 15,
        id: "account_alias"
    });
    $.__views.container.add($.__views.account_alias);
    normalize ? $.__views.account_alias.addEventListener("focus", normalize) : __defers["$.__views.account_alias!focus!normalize"] = true;
    next ? $.__views.account_alias.addEventListener("return", next) : __defers["$.__views.account_alias!return!next"] = true;
    $.__views.cell_phone = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 5,
        color: "#333",
        font: {
            fontSize: 14
        },
        top: 5,
        left: 15,
        right: 15,
        keyboardType: Ti.UI.KEYBOARD_NAMEPHONE_PAD,
        id: "cell_phone"
    });
    $.__views.container.add($.__views.cell_phone);
    normalize ? $.__views.cell_phone.addEventListener("focus", normalize) : __defers["$.__views.cell_phone!focus!normalize"] = true;
    next ? $.__views.cell_phone.addEventListener("return", next) : __defers["$.__views.cell_phone!return!next"] = true;
    $.__views.home_phone = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 5,
        color: "#333",
        font: {
            fontSize: 14
        },
        top: 5,
        left: 15,
        right: 15,
        keyboardType: Ti.UI.KEYBOARD_NAMEPHONE_PAD,
        id: "home_phone"
    });
    $.__views.container.add($.__views.home_phone);
    normalize ? $.__views.home_phone.addEventListener("focus", normalize) : __defers["$.__views.home_phone!focus!normalize"] = true;
    next ? $.__views.home_phone.addEventListener("return", next) : __defers["$.__views.home_phone!return!next"] = true;
    $.__views.work_phone = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 5,
        color: "#333",
        font: {
            fontSize: 14
        },
        top: 5,
        left: 15,
        right: 15,
        bottom: 5,
        keyboardType: Ti.UI.KEYBOARD_NAMEPHONE_PAD,
        id: "work_phone"
    });
    $.__views.container.add($.__views.work_phone);
    normalize ? $.__views.work_phone.addEventListener("focus", normalize) : __defers["$.__views.work_phone!focus!normalize"] = true;
    next ? $.__views.work_phone.addEventListener("return", next) : __defers["$.__views.work_phone!return!next"] = true;
    $.__views.__alloyId1080 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1080"
    });
    $.__views.container.add($.__views.__alloyId1080);
    $.__views.__alloyId1081 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "__alloyId1081"
    });
    $.__views.container.add($.__views.__alloyId1081);
    $.__views.tag_password = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 16
        },
        textAlign: "left",
        left: 15,
        textid: "password",
        id: "tag_password"
    });
    $.__views.__alloyId1081.add($.__views.tag_password);
    $.__views.__alloyId1082 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1082"
    });
    $.__views.container.add($.__views.__alloyId1082);
    $.__views.password = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 5,
        color: "#333",
        font: {
            fontSize: 14
        },
        top: 5,
        left: 15,
        right: 15,
        passwordMask: true,
        id: "password"
    });
    $.__views.container.add($.__views.password);
    normalize ? $.__views.password.addEventListener("focus", normalize) : __defers["$.__views.password!focus!normalize"] = true;
    next ? $.__views.password.addEventListener("return", next) : __defers["$.__views.password!return!next"] = true;
    $.__views.confirm_password = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 5,
        color: "#333",
        font: {
            fontSize: 14
        },
        top: 5,
        left: 15,
        right: 15,
        bottom: 5,
        passwordMask: true,
        id: "confirm_password"
    });
    $.__views.container.add($.__views.confirm_password);
    normalize ? $.__views.confirm_password.addEventListener("focus", normalize) : __defers["$.__views.confirm_password!focus!normalize"] = true;
    next ? $.__views.confirm_password.addEventListener("return", next) : __defers["$.__views.confirm_password!return!next"] = true;
    $.__views.__alloyId1083 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1083"
    });
    $.__views.container.add($.__views.__alloyId1083);
    $.__views.__alloyId1084 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "__alloyId1084"
    });
    $.__views.container.add($.__views.__alloyId1084);
    $.__views.tag_promocode = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 16
        },
        textAlign: "left",
        left: 15,
        textid: "promocode",
        id: "tag_promocode"
    });
    $.__views.__alloyId1084.add($.__views.tag_promocode);
    $.__views.__alloyId1085 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1085"
    });
    $.__views.container.add($.__views.__alloyId1085);
    $.__views.__alloyId1086 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        left: 0,
        right: 0,
        id: "__alloyId1086"
    });
    $.__views.container.add($.__views.__alloyId1086);
    $.__views.promocode = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        textAlign: "left",
        height: 36,
        paddingLeft: 5,
        color: "#333",
        font: {
            fontSize: 14
        },
        top: 5,
        left: 15,
        right: 15,
        id: "promocode"
    });
    $.__views.__alloyId1086.add($.__views.promocode);
    normalize ? $.__views.promocode.addEventListener("focus", normalize) : __defers["$.__views.promocode!focus!normalize"] = true;
    $.__views.__alloyId1087 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_TOP,
        id: "__alloyId1087"
    });
    $.__views.container.add($.__views.__alloyId1087);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    var _textfields, _ws_request, _saveButton;
    initialize();
    __defers["$.__views.account_alias!focus!normalize"] && $.__views.account_alias.addEventListener("focus", normalize);
    __defers["$.__views.account_alias!return!next"] && $.__views.account_alias.addEventListener("return", next);
    __defers["$.__views.cell_phone!focus!normalize"] && $.__views.cell_phone.addEventListener("focus", normalize);
    __defers["$.__views.cell_phone!return!next"] && $.__views.cell_phone.addEventListener("return", next);
    __defers["$.__views.home_phone!focus!normalize"] && $.__views.home_phone.addEventListener("focus", normalize);
    __defers["$.__views.home_phone!return!next"] && $.__views.home_phone.addEventListener("return", next);
    __defers["$.__views.work_phone!focus!normalize"] && $.__views.work_phone.addEventListener("focus", normalize);
    __defers["$.__views.work_phone!return!next"] && $.__views.work_phone.addEventListener("return", next);
    __defers["$.__views.password!focus!normalize"] && $.__views.password.addEventListener("focus", normalize);
    __defers["$.__views.password!return!next"] && $.__views.password.addEventListener("return", next);
    __defers["$.__views.confirm_password!focus!normalize"] && $.__views.confirm_password.addEventListener("focus", normalize);
    __defers["$.__views.confirm_password!return!next"] && $.__views.confirm_password.addEventListener("return", next);
    __defers["$.__views.promocode!focus!normalize"] && $.__views.promocode.addEventListener("focus", normalize);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;