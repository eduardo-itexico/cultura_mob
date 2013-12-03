function Controller() {
    function blur() {
        for (var i = 0; _textfields.length > i; i++) _textfields[i].blur();
        $.fastate_field.blur();
        return true;
    }
    function confirmDelete() {
        APP.createDialog(L("question_delete_address"), [ L("delete"), L("cancel") ], [ deleteAddress, false ]);
        return true;
    }
    function deleteAddress() {
        blur();
        APP.getToken({
            openLogin: true,
            callback: function() {
                APP.showActivityindicator();
                APP.getCurrentLocation(function(event) {
                    if (event.success) {
                        _ws_request = {
                            pkfamilyaddress: parseInt(_data.pkfamilyaddress),
                            fdelete: "Y"
                        };
                        APP.http.request({
                            url: L("ws_putmyaddresses"),
                            type: "GET",
                            format: "JSON",
                            data: _ws_request
                        }, function(_result) {
                            if (0 == _result._result) alert(L("something_wrong")); else if (0 != _result._data.errorcode) alert(_result._data.message); else {
                                alert(L("deleted_successful"));
                                _result._data.data[0].atoken;
                                args.params && args.params.callback && args.params.callback();
                                APP.closeWindow();
                            }
                            APP.hideActivityindicator();
                            return true;
                        });
                    } else {
                        alert(L("failed_to_get_current_location"));
                        APP.hideActivityindicator();
                    }
                    return true;
                });
                return true;
            }
        });
        return true;
    }
    function setInformation() {
        _pkfamilyaddress = parseInt(_data.pkfamilyaddress);
        $.faenable.value = "Y" == _data.faenable;
        $.faname.value = String(_data.faname);
        $.faplace.text = String(_data.faplace);
        $.faaddress.value = String(_data.faaddress);
        $.facity.value = String(_data.facity);
        $.fapostal.value = String(_data.fapostal);
        $.facountry.text = String(_data.facountry);
        $.fastate.text = String(_data.fastate);
        $.fastate_field.value = String(_data.fastate);
        setStateRow();
    }
    function saveAddress() {
        blur();
        if (APP.addresses) for (var i = 0; APP.addresses.length > i; i++) if (APP.addresses[i].faname == $.faname.getValue() && _pkfamilyaddress != APP.addresses[i].pkfamilyaddress) {
            alert("Please enter a different alias name, this is already in use!");
            return false;
        }
        if (!/^(\#*\-*\s*\d+[\,*\-*\s*\d*a-zA-Z]+\w*)/.test($.faaddress.getValue())) {
            alert("Please enter a valid address!\n(number, street)");
            return false;
        }
        APP.getToken({
            openLogin: true,
            callback: function(token) {
                APP.showActivityindicator();
                APP.getCurrentLocation(function(event) {
                    if (event.success) {
                        _ws_request = {
                            atoken: token,
                            pkfamily: Ti.App.Properties.getString("pkfamily"),
                            flat: event.lat,
                            flon: event.lon,
                            faddress: $.faaddress.getValue(),
                            faname: $.faname.getValue(),
                            fcity: $.facity.getValue(),
                            fstate: "United States" == $.facountry.getText() ? $.fastate.getText() : $.fastate_field.getValue() || " ",
                            fpostal: $.fapostal.getValue(),
                            fcountry: $.facountry.getText(),
                            faplace: $.faplace.getText(),
                            faenable: $.faenable.getValue() ? "Y" : "N"
                        };
                        _pkfamilyaddress && (_ws_request.pkfamilyaddress = _pkfamilyaddress);
                        APP.http.request({
                            url: L("ws_putmyaddresses"),
                            type: "GET",
                            format: "JSON",
                            data: _ws_request
                        }, function(_result) {
                            if (0 == _result._result) alert(L("something_wrong")); else if (0 != _result._data.errorcode) alert(_result._data.message); else {
                                alert(L("successful"));
                                _result._data.data[0].atoken;
                                args.params && args.params.callback && args.params.callback();
                                APP.closeWindow();
                            }
                            APP.hideActivityindicator();
                            return true;
                        });
                    } else {
                        alert(L("failed_to_get_current_location"));
                        APP.hideActivityindicator();
                    }
                    return true;
                });
                return true;
            }
        });
        return true;
    }
    function pickCountry() {
        blur();
        APP.popUp({
            title: "Select a Country",
            container: {
                width: 300,
                height: 300
            },
            controller: "Settings/CountryPicker",
            controllerParams: {
                callback: function(event) {
                    $.facountry.setText(event.value);
                    setStateRow();
                    return true;
                }
            }
        });
        return true;
    }
    function pickPlace() {
        blur();
        APP.popUp({
            title: "Select a Place",
            container: {
                width: 300,
                height: 245
            },
            controller: "Settings/PlacePicker",
            controllerParams: {
                callback: function(event) {
                    $.faplace.setText(event.value);
                    return true;
                }
            }
        });
        return true;
    }
    function pickState() {
        blur();
        APP.popUp({
            title: "Select a State",
            container: {
                width: 300,
                height: 300
            },
            controller: "Settings/StatePicker",
            controllerParams: {
                callback: function(event) {
                    $.fastate.setText(event.value);
                    return true;
                }
            }
        });
        return true;
    }
    function setStateRow() {
        if ("United States" == $.facountry.getText()) {
            $.state_row_field.height = 0;
            $.state_row_picker.height = 40;
        } else {
            $.state_row_field.height = Ti.UI.SIZE;
            $.state_row_picker.height = 0;
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
        _saveButton.addEventListener("click", saveAddress);
        args.toolBar.removeAllCustomViews();
        args.toolBar.setRightButton(0, false);
        args.toolBar.addCustomView(_saveButton);
        args.toolBar.setCloseAction(function() {
            blur();
            return true;
        });
        _textfields = [ $.faname, $.faaddress, $.facity, $.fapostal ];
        $.faname.hintText = L("name_address");
        $.faaddress.hintText = L("address");
        $.facity.hintText = L("city");
        $.fapostal.hintText = L("postal_code");
        $.fastate_field.hintText = L("state");
        if (args.params && args.params.data) {
            _data = args.params.data;
            args.toolBar.setTitle(L("edit_address"));
            setInformation();
        } else {
            args.toolBar.setTitle(L("new_address"));
            if (args.params) {
                $.faaddress.value = String(args.params.faaddress || "");
                $.facity.value = String(args.params.facity || "");
                $.fastate.text = String(args.params.fastate || "");
            }
            setStateRow();
            $.delete_btn.height = 0;
        }
        for (var i = 0; _textfields.length - 1 > i; i++) {
            _textfields[i].next = _textfields[i + 1];
            _textfields[i].addEventListener("return", function() {
                this.next.focus();
                return true;
            });
        }
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Settings/EditAddress";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createScrollView({
        backgroundColor: "#ecf1f4",
        layout: "vertical",
        scrollType: "vertical",
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.__alloyId1052 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_TOP,
        id: "__alloyId1052"
    });
    $.__views.container.add($.__views.__alloyId1052);
    $.__views.__alloyId1053 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "__alloyId1053"
    });
    $.__views.container.add($.__views.__alloyId1053);
    $.__views.__alloyId1054 = Ti.UI.createLabel({
        color: "black",
        font: {
            fontSize: 16
        },
        textAlign: "left",
        left: 15,
        top: 5,
        height: 35,
        textid: "alias",
        id: "__alloyId1054"
    });
    $.__views.__alloyId1053.add($.__views.__alloyId1054);
    $.__views.__alloyId1055 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1055"
    });
    $.__views.container.add($.__views.__alloyId1055);
    $.__views.faname = Ti.UI.createTextField({
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
        id: "faname"
    });
    $.__views.container.add($.__views.faname);
    $.__views.__alloyId1056 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1056"
    });
    $.__views.container.add($.__views.__alloyId1056);
    $.__views.__alloyId1057 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "__alloyId1057"
    });
    $.__views.container.add($.__views.__alloyId1057);
    pickPlace ? $.__views.__alloyId1057.addEventListener("click", pickPlace) : __defers["$.__views.__alloyId1057!click!pickPlace"] = true;
    $.__views.__alloyId1058 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        right: 100,
        textid: "place",
        id: "__alloyId1058"
    });
    $.__views.__alloyId1057.add($.__views.__alloyId1058);
    $.__views.faplace = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "right",
        left: 110,
        right: 35,
        id: "faplace"
    });
    $.__views.__alloyId1057.add($.__views.faplace);
    $.__views.__alloyId1059 = Ti.UI.createImageView({
        image: "/images/ic_down_arrow.png",
        right: 15,
        width: 12,
        height: 8,
        id: "__alloyId1059"
    });
    $.__views.__alloyId1057.add($.__views.__alloyId1059);
    $.__views.__alloyId1060 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1060"
    });
    $.__views.container.add($.__views.__alloyId1060);
    $.__views.__alloyId1061 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "__alloyId1061"
    });
    $.__views.container.add($.__views.__alloyId1061);
    $.__views.__alloyId1062 = Ti.UI.createLabel({
        color: "black",
        font: {
            fontSize: 16
        },
        textAlign: "left",
        left: 15,
        top: 5,
        height: 35,
        textid: "address",
        id: "__alloyId1062"
    });
    $.__views.__alloyId1061.add($.__views.__alloyId1062);
    $.__views.__alloyId1063 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1063"
    });
    $.__views.container.add($.__views.__alloyId1063);
    $.__views.faaddress = Ti.UI.createTextField({
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
        id: "faaddress"
    });
    $.__views.container.add($.__views.faaddress);
    $.__views.facity = Ti.UI.createTextField({
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
        id: "facity"
    });
    $.__views.container.add($.__views.facity);
    $.__views.fapostal = Ti.UI.createTextField({
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
        id: "fapostal"
    });
    $.__views.container.add($.__views.fapostal);
    $.__views.__alloyId1064 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1064"
    });
    $.__views.container.add($.__views.__alloyId1064);
    $.__views.__alloyId1065 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "__alloyId1065"
    });
    $.__views.container.add($.__views.__alloyId1065);
    pickCountry ? $.__views.__alloyId1065.addEventListener("click", pickCountry) : __defers["$.__views.__alloyId1065!click!pickCountry"] = true;
    $.__views.__alloyId1066 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        right: 100,
        textid: "country",
        id: "__alloyId1066"
    });
    $.__views.__alloyId1065.add($.__views.__alloyId1066);
    $.__views.facountry = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "right",
        left: 110,
        right: 35,
        id: "facountry"
    });
    $.__views.__alloyId1065.add($.__views.facountry);
    $.__views.__alloyId1067 = Ti.UI.createImageView({
        image: "/images/ic_down_arrow.png",
        right: 15,
        width: 12,
        height: 8,
        id: "__alloyId1067"
    });
    $.__views.__alloyId1065.add($.__views.__alloyId1067);
    $.__views.__alloyId1068 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1068"
    });
    $.__views.container.add($.__views.__alloyId1068);
    $.__views.state_row_picker = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 0,
        right: 0,
        layout: "vertical",
        id: "state_row_picker"
    });
    $.__views.container.add($.__views.state_row_picker);
    pickState ? $.__views.state_row_picker.addEventListener("click", pickState) : __defers["$.__views.state_row_picker!click!pickState"] = true;
    $.__views.__alloyId1069 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "__alloyId1069"
    });
    $.__views.state_row_picker.add($.__views.__alloyId1069);
    $.__views.__alloyId1070 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        right: 100,
        textid: "state",
        id: "__alloyId1070"
    });
    $.__views.__alloyId1069.add($.__views.__alloyId1070);
    $.__views.fastate = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "right",
        left: 110,
        right: 35,
        id: "fastate"
    });
    $.__views.__alloyId1069.add($.__views.fastate);
    $.__views.__alloyId1071 = Ti.UI.createImageView({
        image: "/images/ic_down_arrow.png",
        right: 15,
        width: 12,
        height: 8,
        id: "__alloyId1071"
    });
    $.__views.__alloyId1069.add($.__views.__alloyId1071);
    $.__views.state_row_field = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 0,
        right: 0,
        layout: "vertical",
        id: "state_row_field"
    });
    $.__views.container.add($.__views.state_row_field);
    $.__views.fastate_field = Ti.UI.createTextField({
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
        id: "fastate_field"
    });
    $.__views.state_row_field.add($.__views.fastate_field);
    $.__views.__alloyId1072 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1072"
    });
    $.__views.container.add($.__views.__alloyId1072);
    $.__views.__alloyId1073 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "__alloyId1073"
    });
    $.__views.container.add($.__views.__alloyId1073);
    $.__views.__alloyId1074 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        textid: "send_alerts",
        id: "__alloyId1074"
    });
    $.__views.__alloyId1073.add($.__views.__alloyId1074);
    $.__views.faenable = Ti.UI.createSwitch({
        right: 15,
        value: true,
        id: "faenable"
    });
    $.__views.__alloyId1073.add($.__views.faenable);
    $.__views.__alloyId1075 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1075"
    });
    $.__views.container.add($.__views.__alloyId1075);
    $.__views.delete_btn = Ti.UI.createButton({
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
        left: 15,
        right: 15,
        titleid: "delete",
        top: 15,
        id: "delete_btn"
    });
    $.__views.container.add($.__views.delete_btn);
    confirmDelete ? $.__views.delete_btn.addEventListener("click", confirmDelete) : __defers["$.__views.delete_btn!click!confirmDelete"] = true;
    $.__views.__alloyId1076 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_TOP,
        id: "__alloyId1076"
    });
    $.__views.container.add($.__views.__alloyId1076);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    var _data, _saveButton, _pkfamilyaddress, _textfields;
    initialize();
    __defers["$.__views.__alloyId1057!click!pickPlace"] && $.__views.__alloyId1057.addEventListener("click", pickPlace);
    __defers["$.__views.__alloyId1065!click!pickCountry"] && $.__views.__alloyId1065.addEventListener("click", pickCountry);
    __defers["$.__views.state_row_picker!click!pickState"] && $.__views.state_row_picker.addEventListener("click", pickState);
    __defers["$.__views.delete_btn!click!confirmDelete"] && $.__views.delete_btn.addEventListener("click", confirmDelete);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;