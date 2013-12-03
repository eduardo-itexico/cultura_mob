function Controller() {
    function blur() {
        for (var _textfield, i = 0; _textfields.length > i; i++) {
            _textfield = _textfields[i];
            _textfield.blur();
        }
        $.state_field.blur();
        return true;
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
        $.state_field.borderWidth = 0;
        $.country_row_picker.borderWidth = 0;
        $.state_row_picker.borderWidth = 0;
        $.agree_row.borderWidth = 0;
        return true;
    }
    function pickCountry() {
        blur();
        normalize();
        APP.popUp({
            title: "Select a Country",
            container: {
                width: 300,
                height: 300
            },
            controller: "Settings/CountryPicker",
            controllerParams: {
                callback: function(event) {
                    $.country.setText(event.value);
                    setStateRow();
                    return true;
                }
            }
        });
        return true;
    }
    function pickState() {
        blur();
        normalize();
        APP.popUp({
            title: "Select a State",
            container: {
                width: 300,
                height: 300
            },
            controller: "Settings/StatePicker",
            controllerParams: {
                callback: function(event) {
                    $.state.setText(event.value);
                    return true;
                }
            }
        });
        return true;
    }
    function openPrivacy() {
        APP.openWindow({
            controller: "Widgets/Browser",
            controllerParams: {
                title: L("terms_and_cond"),
                url: L("url_privacy")
            }
        });
        return true;
    }
    function save() {
        if (validate()) {
            APP.showActivityindicator();
            APP.getCurrentLocation(function(event) {
                if (event.success) {
                    _ws_request = {
                        cfirstname: $.firstname.value,
                        clastname: $.lastname.value,
                        cusername: $.username.value,
                        faddress1: $.address.value,
                        fcity: $.city.value,
                        fcountry: $.country.text,
                        fstate: "United States" == $.country.text ? $.state.text : $.state_field.value,
                        fpostal: $.postal_code.value,
                        fcphone: $.cellphone.value,
                        cpassword: $.password.value,
                        cfpassword: $.confirm_password.value,
                        agree: $.agree.value ? "Y" : "N",
                        action: 1
                    };
                    APP.http.request({
                        url: L("ws_enrollnow"),
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
    function setSaveResponse(response) {
        if (1 == response._result) if (0 == response._data.errorcode) {
            Ti.App.Properties.setInt("pkfamily", response._data.data[0].pkfamily);
            Ti.App.Properties.setString("user_token", response._data.data[0].atoken);
            Ti.App.Properties.setString("user_name", $.username.value);
            blur();
            APP.closeWindow();
            APP.openCloseMenu();
            APP.hideActivityindicator();
        } else {
            alert(response._data.message);
            APP.hideActivityindicator();
        } else {
            alert(L("fail_on_webservice"));
            APP.hideActivityindicator();
        }
        return true;
    }
    function setStateRow() {
        if ("United States" == $.country.text) {
            $.state_row_field.height = 0;
            $.state_row_picker.height = 40;
        } else {
            $.state_row_field.height = Ti.UI.SIZE;
            $.state_row_picker.height = 0;
        }
        return true;
    }
    function toggleCheckbox() {
        $.agree.value = $.agree.value ? ($.agree.image = "/images/bt_radio_unselect.png") && false : ($.agree.image = "/images/bt_radio_select.png") && true;
        return true;
    }
    function validate() {
        blur();
        var _cellphone, _invalid = false;
        for (var _textfield, i = 0; _textfields.length > i; i++) {
            _textfield = _textfields[i];
            if (!_textfield.value.length) {
                _textfield.borderColor = "red";
                _textfield.borderWidth = 1;
                _invalid = true;
            }
        }
        if (_invalid) {
            Ti.UI.createAlertDialog({
                title: "New Account",
                message: L("invalid_input")
            }).show();
            return false;
        }
        if (invalidEmail($.username.value)) {
            alert(L("invalid_username"));
            $.username.borderColor = "red";
            $.username.borderWidth = 1;
            return false;
        }
        _cellphone = String(parseInt($.cellphone.value));
        if (!parseInt(_cellphone) || 10 > _cellphone.length) {
            alert(L("invalid_cell"));
            $.cellphone.borderColor = "red";
            $.cellphone.borderWidth = 1;
            return false;
        }
        if (!/^(\#*\d+\,*\s*[a-zA-Z]+\w*)/.test($.address.value)) {
            alert(L("invalid_address"));
            $.address.borderColor = "red";
            $.address.borderWidth = 1;
            return false;
        }
        if (!$.country.text.length) {
            alert(L("invalid_country"));
            $.country_row_picker.borderColor = "red";
            $.country_row_picker.borderWidth = 1;
            return false;
        }
        if ("United States" == $.country.text) {
            if (!$.state.text.length) {
                alert(L("invalid_state"));
                $.state_row_picker.borderColor = "red";
                $.state_row_picker.borderWidth = 1;
                return false;
            }
        } else if (!$.state_field.value.length) {
            $.state_field.borderColor = "red";
            $.state_field.borderWidth = 1;
            alert(L("invalid_state"));
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
        if (!$.agree.value) {
            alert(L("must_accept"));
            $.agree_row.borderColor = "red";
            $.agree_row.borderWidth = 1;
            return false;
        }
        return true;
    }
    function invalidEmail(_email) {
        var regExp = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)+$/;
        return !regExp.test(_email);
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
        args.toolBar.setTitle(L("new_account"));
        args.toolBar.addCustomView(_saveButton);
        args.toolBar.setCloseAction(function() {
            blur();
            setTimeout(APP.openLogin, 300);
            return true;
        });
        _textfields = [ $.firstname, $.lastname, $.username, $.cellphone, $.address, $.city, $.postal_code, $.password, $.confirm_password ];
        $.firstname.hintText = L("firstname");
        $.lastname.hintText = L("lastname");
        $.username.hintText = L("username");
        $.cellphone.hintText = L("cell_phone");
        $.address.hintText = L("address");
        $.city.hintText = L("city");
        $.postal_code.hintText = L("postal_code");
        $.state_field.hintText = L("state");
        $.password.hintText = L("password");
        $.confirm_password.hintText = L("confirm_password");
        for (var i = 0; _textfields.length - 1 > i; i++) _textfields[i].next = _textfields[i + 1];
        setStateRow();
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Login/NewAccount";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createScrollView({
        backgroundColor: "#ecf1f4",
        scrollType: "vertical",
        layout: "vertical",
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.__alloyId42 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_TOP,
        id: "__alloyId42"
    });
    $.__views.container.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId43"
    });
    $.__views.container.add($.__views.__alloyId43);
    $.__views.firstname = Ti.UI.createTextField({
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
        id: "firstname"
    });
    $.__views.__alloyId43.add($.__views.firstname);
    normalize ? $.__views.firstname.addEventListener("focus", normalize) : __defers["$.__views.firstname!focus!normalize"] = true;
    next ? $.__views.firstname.addEventListener("return", next) : __defers["$.__views.firstname!return!next"] = true;
    $.__views.lastname = Ti.UI.createTextField({
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
        id: "lastname"
    });
    $.__views.__alloyId43.add($.__views.lastname);
    normalize ? $.__views.lastname.addEventListener("focus", normalize) : __defers["$.__views.lastname!focus!normalize"] = true;
    next ? $.__views.lastname.addEventListener("return", next) : __defers["$.__views.lastname!return!next"] = true;
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
        top: 5,
        left: 15,
        right: 15,
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        keyboardType: Ti.UI.KEYBOARD_EMAIL,
        id: "username"
    });
    $.__views.__alloyId43.add($.__views.username);
    normalize ? $.__views.username.addEventListener("focus", normalize) : __defers["$.__views.username!focus!normalize"] = true;
    next ? $.__views.username.addEventListener("return", next) : __defers["$.__views.username!return!next"] = true;
    $.__views.cellphone = Ti.UI.createTextField({
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
        keyboardType: Ti.UI.KEYBOARD_PHONE_PAD,
        id: "cellphone"
    });
    $.__views.__alloyId43.add($.__views.cellphone);
    normalize ? $.__views.cellphone.addEventListener("focus", normalize) : __defers["$.__views.cellphone!focus!normalize"] = true;
    next ? $.__views.cellphone.addEventListener("return", next) : __defers["$.__views.cellphone!return!next"] = true;
    $.__views.__alloyId44 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        layout: "vertical",
        id: "__alloyId44"
    });
    $.__views.container.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        id: "__alloyId45"
    });
    $.__views.container.add($.__views.__alloyId45);
    $.__views.tag_address = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 16
        },
        textAlign: "left",
        left: 15,
        textid: "address",
        id: "tag_address"
    });
    $.__views.__alloyId45.add($.__views.tag_address);
    $.__views.__alloyId46 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        layout: "vertical",
        id: "__alloyId46"
    });
    $.__views.container.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId47"
    });
    $.__views.container.add($.__views.__alloyId47);
    $.__views.address = Ti.UI.createTextField({
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
        id: "address"
    });
    $.__views.__alloyId47.add($.__views.address);
    normalize ? $.__views.address.addEventListener("focus", normalize) : __defers["$.__views.address!focus!normalize"] = true;
    next ? $.__views.address.addEventListener("return", next) : __defers["$.__views.address!return!next"] = true;
    $.__views.city = Ti.UI.createTextField({
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
        id: "city"
    });
    $.__views.__alloyId47.add($.__views.city);
    normalize ? $.__views.city.addEventListener("focus", normalize) : __defers["$.__views.city!focus!normalize"] = true;
    next ? $.__views.city.addEventListener("return", next) : __defers["$.__views.city!return!next"] = true;
    $.__views.postal_code = Ti.UI.createTextField({
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
        id: "postal_code"
    });
    $.__views.__alloyId47.add($.__views.postal_code);
    normalize ? $.__views.postal_code.addEventListener("focus", normalize) : __defers["$.__views.postal_code!focus!normalize"] = true;
    next ? $.__views.postal_code.addEventListener("return", next) : __defers["$.__views.postal_code!return!next"] = true;
    $.__views.__alloyId48 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        layout: "vertical",
        id: "__alloyId48"
    });
    $.__views.container.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId49"
    });
    $.__views.container.add($.__views.__alloyId49);
    $.__views.country_row_picker = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        id: "country_row_picker"
    });
    $.__views.__alloyId49.add($.__views.country_row_picker);
    pickCountry ? $.__views.country_row_picker.addEventListener("click", pickCountry) : __defers["$.__views.country_row_picker!click!pickCountry"] = true;
    $.__views.__alloyId50 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        right: 100,
        textid: "country",
        id: "__alloyId50"
    });
    $.__views.country_row_picker.add($.__views.__alloyId50);
    $.__views.country = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "right",
        left: 110,
        right: 35,
        text: "",
        id: "country"
    });
    $.__views.country_row_picker.add($.__views.country);
    $.__views.__alloyId51 = Ti.UI.createImageView({
        image: "/images/ic_down_arrow.png",
        right: 15,
        width: 12,
        height: 8,
        id: "__alloyId51"
    });
    $.__views.country_row_picker.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        layout: "vertical",
        id: "__alloyId52"
    });
    $.__views.container.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId53"
    });
    $.__views.container.add($.__views.__alloyId53);
    $.__views.state_row_picker = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        id: "state_row_picker"
    });
    $.__views.__alloyId53.add($.__views.state_row_picker);
    pickState ? $.__views.state_row_picker.addEventListener("click", pickState) : __defers["$.__views.state_row_picker!click!pickState"] = true;
    $.__views.__alloyId54 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        right: 100,
        textid: "state",
        id: "__alloyId54"
    });
    $.__views.state_row_picker.add($.__views.__alloyId54);
    $.__views.state = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "right",
        left: 110,
        right: 35,
        text: "",
        id: "state"
    });
    $.__views.state_row_picker.add($.__views.state);
    $.__views.__alloyId55 = Ti.UI.createImageView({
        image: "/images/ic_down_arrow.png",
        right: 15,
        width: 12,
        height: 8,
        id: "__alloyId55"
    });
    $.__views.state_row_picker.add($.__views.__alloyId55);
    $.__views.state_row_field = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "state_row_field"
    });
    $.__views.__alloyId53.add($.__views.state_row_field);
    $.__views.state_field = Ti.UI.createTextField({
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
        id: "state_field"
    });
    $.__views.state_row_field.add($.__views.state_field);
    $.__views.__alloyId56 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        layout: "vertical",
        id: "__alloyId56"
    });
    $.__views.container.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        id: "__alloyId57"
    });
    $.__views.container.add($.__views.__alloyId57);
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
    $.__views.__alloyId57.add($.__views.tag_password);
    $.__views.__alloyId58 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        layout: "vertical",
        id: "__alloyId58"
    });
    $.__views.container.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId59"
    });
    $.__views.container.add($.__views.__alloyId59);
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
    $.__views.__alloyId59.add($.__views.password);
    normalize ? $.__views.password.addEventListener("focus", normalize) : __defers["$.__views.password!focus!normalize"] = true;
    next ? $.__views.password.addEventListener("return", next) : __defers["$.__views.password!return!next"] = true;
    $.__views.confirm_password = Ti.UI.createTextField({
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
        bottom: 5,
        passwordMask: true,
        id: "confirm_password"
    });
    $.__views.__alloyId59.add($.__views.confirm_password);
    normalize ? $.__views.confirm_password.addEventListener("focus", normalize) : __defers["$.__views.confirm_password!focus!normalize"] = true;
    $.__views.__alloyId60 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        layout: "vertical",
        id: "__alloyId60"
    });
    $.__views.container.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId61"
    });
    $.__views.container.add($.__views.__alloyId61);
    $.__views.agree_row = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        id: "agree_row"
    });
    $.__views.__alloyId61.add($.__views.agree_row);
    normalize ? $.__views.agree_row.addEventListener("click", normalize) : __defers["$.__views.agree_row!click!normalize"] = true;
    $.__views.__alloyId62 = Ti.UI.createView({
        left: 0,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId62"
    });
    $.__views.agree_row.add($.__views.__alloyId62);
    $.__views.i_accept = Ti.UI.createLabel({
        color: "#07beeb",
        font: {
            fontSize: 16
        },
        textAlign: "left",
        left: 15,
        textid: "i_accept",
        id: "i_accept"
    });
    $.__views.__alloyId62.add($.__views.i_accept);
    $.__views.terms_and_cond = Ti.UI.createLabel({
        color: "#07beeb",
        font: {
            fontStyle: "italic"
        },
        textAlign: "left",
        left: 15,
        textid: "terms_and_cond",
        backgroundImage: "/images/subline_blue.png",
        height: Ti.UI.SIZE,
        id: "terms_and_cond"
    });
    $.__views.__alloyId62.add($.__views.terms_and_cond);
    openPrivacy ? $.__views.terms_and_cond.addEventListener("click", openPrivacy) : __defers["$.__views.terms_and_cond!click!openPrivacy"] = true;
    $.__views.__alloyId63 = Ti.UI.createView({
        width: 40,
        height: 40,
        right: 5,
        id: "__alloyId63"
    });
    $.__views.agree_row.add($.__views.__alloyId63);
    toggleCheckbox ? $.__views.__alloyId63.addEventListener("click", toggleCheckbox) : __defers["$.__views.__alloyId63!click!toggleCheckbox"] = true;
    $.__views.agree = Ti.UI.createImageView({
        image: "/images/bt_radio_unselect.png",
        width: 23,
        height: 23,
        value: false,
        id: "agree"
    });
    $.__views.__alloyId63.add($.__views.agree);
    $.__views.__alloyId64 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        layout: "vertical",
        id: "__alloyId64"
    });
    $.__views.container.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_TOP,
        id: "__alloyId65"
    });
    $.__views.container.add($.__views.__alloyId65);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    var _textfields, _ws_request, _saveButton;
    initialize();
    __defers["$.__views.firstname!focus!normalize"] && $.__views.firstname.addEventListener("focus", normalize);
    __defers["$.__views.firstname!return!next"] && $.__views.firstname.addEventListener("return", next);
    __defers["$.__views.lastname!focus!normalize"] && $.__views.lastname.addEventListener("focus", normalize);
    __defers["$.__views.lastname!return!next"] && $.__views.lastname.addEventListener("return", next);
    __defers["$.__views.username!focus!normalize"] && $.__views.username.addEventListener("focus", normalize);
    __defers["$.__views.username!return!next"] && $.__views.username.addEventListener("return", next);
    __defers["$.__views.cellphone!focus!normalize"] && $.__views.cellphone.addEventListener("focus", normalize);
    __defers["$.__views.cellphone!return!next"] && $.__views.cellphone.addEventListener("return", next);
    __defers["$.__views.address!focus!normalize"] && $.__views.address.addEventListener("focus", normalize);
    __defers["$.__views.address!return!next"] && $.__views.address.addEventListener("return", next);
    __defers["$.__views.city!focus!normalize"] && $.__views.city.addEventListener("focus", normalize);
    __defers["$.__views.city!return!next"] && $.__views.city.addEventListener("return", next);
    __defers["$.__views.postal_code!focus!normalize"] && $.__views.postal_code.addEventListener("focus", normalize);
    __defers["$.__views.postal_code!return!next"] && $.__views.postal_code.addEventListener("return", next);
    __defers["$.__views.country_row_picker!click!pickCountry"] && $.__views.country_row_picker.addEventListener("click", pickCountry);
    __defers["$.__views.state_row_picker!click!pickState"] && $.__views.state_row_picker.addEventListener("click", pickState);
    __defers["$.__views.password!focus!normalize"] && $.__views.password.addEventListener("focus", normalize);
    __defers["$.__views.password!return!next"] && $.__views.password.addEventListener("return", next);
    __defers["$.__views.confirm_password!focus!normalize"] && $.__views.confirm_password.addEventListener("focus", normalize);
    __defers["$.__views.agree_row!click!normalize"] && $.__views.agree_row.addEventListener("click", normalize);
    __defers["$.__views.terms_and_cond!click!openPrivacy"] && $.__views.terms_and_cond.addEventListener("click", openPrivacy);
    __defers["$.__views.__alloyId63!click!toggleCheckbox"] && $.__views.__alloyId63.addEventListener("click", toggleCheckbox);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;