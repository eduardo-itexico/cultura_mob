function Controller() {
    function getInformation() {
        _ws_request = {
            atoken: args.params.token,
            date: new Date().getTime()
        };
        APP.showActivityindicator();
        APP.http.request({
            url: L("ws_getmyalertsettings"),
            type: "GET",
            format: "JSON",
            data: _ws_request
        }, function(_result) {
            if (0 == _result._result) {
                alert(L("something_wrong"));
                APP.closeWindow();
            } else if (0 != _result._data.errorcode) {
                alert(_result._data.message);
                APP.closeWindow();
            } else setInformation(_result._data.data[0]);
            APP.hideActivityindicator();
            return true;
        });
        return true;
    }
    function saveInformation() {
        APP.showActivityindicator();
        APP.getCurrentLocation(function(event) {
            if (event.success) {
                _ws_request = {
                    atoken: args.params.token,
                    flat: event.lat,
                    flon: event.lon,
                    falertEAemail: _falertEAemail,
                    falertEAcell: $.falertEAcell.value ? "Y" : "N",
                    falertcell: $.falertcell.value ? "Y" : "N",
                    falertemail: $.falertemail.value ? "Y" : "N",
                    fnalertemail: $.fnalertemail.value ? "Y" : "N",
                    falertMediaEmail: $.falertMediaEmail.value ? "Y" : "N",
                    fealertemail: $.fealertemail.value ? "Y" : "N",
                    falertIDEmail: $.falertIDEmail.value ? "Y" : "N",
                    fsodemail: $.fsodemail.value ? "Y" : "N",
                    falertWeatherEmail: $.falertWeatherEmail.value ? "Y" : "N",
                    fweatherlevel: _fweatherlevel,
                    falertlevel: _falertlevel,
                    fatidistance: _fatidistance,
                    fati: $.ati_switch.value ? "Y" : "N",
                    fdistance: _fdistance
                };
                APP.http.request({
                    url: L("ws_putmyalertsettings"),
                    type: "GET",
                    format: "JSON",
                    data: _ws_request
                }, function(_result) {
                    if (0 == _result._result) alert(L("something_wrong")); else if (0 != _result._data.errorcode) alert(_result._data.message); else {
                        alert(L("save_successful"));
                        _result._data.data[0].atoken;
                        APP.closeWindow();
                    }
                    APP.hideActivityindicator();
                    return true;
                });
            } else {
                APP.hideActivityindicator();
                alert(L("failed_to_get_current_location"));
            }
        });
        return true;
    }
    function setAlertLevel(event) {
        _falertlevel = String(event.value || this.value);
        $.cb_1.setImage("/images/bt_radio_unselect.png");
        $.cb_2.setImage("/images/bt_radio_unselect.png");
        $.cb_3.setImage("/images/bt_radio_unselect.png");
        $.cb_4.setImage("/images/bt_radio_unselect.png");
        $.cb_5.setImage("/images/bt_radio_unselect.png");
        $["cb_" + _falertlevel].setImage("/images/bt_radio_select.png");
        return true;
    }
    function setCellValue(cell_checker, value) {
        cell_checker.setImage(value ? "/images/ic_phone_active.png" : "/images/ic_phone_inactive.png");
        cell_checker.value = Boolean(value);
        return true;
    }
    function setEmailValue(email_checker, value) {
        email_checker.setImage(value ? "/images/ic_mail_active.png" : "/images/ic_mail_inactive.png");
        email_checker.value = Boolean(value);
        return true;
    }
    function setInformation(data) {
        data.atoken;
        _fatidistance = String(data.fatidistance);
        _fdistance = String(data.fdistance);
        $.ati_switch.setValue("Y" == data.fati);
        setState({
            value: $.ati_switch.value
        });
        _falertEAemail = data.falertEAemail;
        setCellValue($.falertEAcell, "Y" == data.falertEAcell);
        setCellValue($.falertcell, "Y" == data.falertcell);
        setEmailValue($.falertemail, "Y" == data.falertemail);
        setEmailValue($.fnalertemail, "Y" == data.fnalertemail);
        setEmailValue($.falertMediaEmail, "Y" == data.falertMediaEmail);
        setEmailValue($.fealertemail, "Y" == data.fealertemail);
        setEmailValue($.falertIDEmail, "Y" == data.falertIDEmail);
        setEmailValue($.fsodemail, "Y" == data.fsodemail);
        setEmailValue($.falertWeatherEmail, "Y" == data.falertWeatherEmail);
        "Y" == data.falertWeatherEmail && ($.weather_select.height = 40);
        setWeather({
            value: parseInt(data.fweatherlevel),
            show: "Y" == data.falertWeatherEmail
        });
        setAlertLevel({
            value: String(data.falertlevel)
        });
        return true;
    }
    function setState(event) {
        if (event.value) {
            $.distance_picker.setHeight(0);
            $.threat_distance.setText(_fdistance + (1 == _fdistance ? "Mile." : " Miles."));
        } else {
            $.distance_picker.setHeight(Ti.UI.SIZE);
            switch (String(_fatidistance)) {
              case "0.25":
                $.threat_distance.setText(L("td_0_25"));
                break;

              case "0.5":
                $.threat_distance.setText(L("td_0_5"));
                break;

              case "1":
                $.threat_distance.setText(L("td_1"));
                break;

              case "2":
                $.threat_distance.setText(L("td_2"));
                break;

              case "3":
                $.threat_distance.setText(L("td_3"));
            }
        }
        return true;
    }
    function setThreatDistance() {
        _fatidistance = String(this.value);
        $.threat_distance.setText(this.text);
        $.distance_picker.setHeight(0);
        return true;
    }
    function setWeather(event) {
        _fweatherlevel = String(event.value || this.value);
        switch (parseInt(_fweatherlevel)) {
          case 1:
            $.fweatherlevel.setText(L("wl_extreme"));
            break;

          case 2:
            $.fweatherlevel.setText(L("wl_severe"));
            break;

          case 3:
            $.fweatherlevel.setText(L("wl_moderate"));
            break;

          case 4:
            $.fweatherlevel.setText(L("wl_minor"));
        }
        $.weather_picker.setHeight(0);
        return true;
    }
    function toggleCellValue() {
        setCellValue(this, !Boolean(this.value));
        return true;
    }
    function toggleEmailValue() {
        setEmailValue(this, !Boolean(this.value));
        return true;
    }
    function toggleEmailWeatherAlerts() {
        setEmailValue(this, !Boolean(this.value));
        if (Boolean(this.value)) {
            $.weather_select.setHeight(40);
            $.spin_arr.setImage("/images/ic_down_arrow.png");
        } else {
            $.weather_select.setHeight(0);
            $.weather_picker.setHeight(0);
            $.spin_arr.setImage("/images/ic_up_arrow.png");
        }
        return true;
    }
    function toggleThreatDistancePicker() {
        $.ati_switch.value || (0 == $.distance_picker.height ? $.distance_picker.setHeight(Ti.UI.SIZE) : $.distance_picker.setHeight(0));
        return true;
    }
    function toggleWeatherPicker() {
        if (Boolean($.falertWeatherEmail.value)) if (0 == $.weather_picker.height) {
            $.weather_picker.setHeight(Ti.UI.SIZE);
            $.spin_arr.setImage("/images/ic_up_arrow.png");
        } else {
            $.weather_picker.setHeight(0);
            $.spin_arr.setImage("/images/ic_down_arrow.png");
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
        _saveButton.addEventListener("click", saveInformation);
        args.toolBar.removeAllCustomViews();
        args.toolBar.setRightButton(0, false);
        args.toolBar.setTitle(L("my_alert_settings"));
        args.toolBar.addCustomView(_saveButton);
        getInformation();
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Settings/MyAlertSettings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.MyAlertSettings = Ti.UI.createScrollView({
        backgroundColor: "#ecf1f4",
        layout: "vertical",
        scrollType: "vertical",
        showVerticalScrollIndicator: true,
        contentHeight: 1e3,
        id: "MyAlertSettings"
    });
    $.__views.MyAlertSettings && $.addTopLevelView($.__views.MyAlertSettings);
    $.__views.__alloyId1099 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_TOP,
        id: "__alloyId1099"
    });
    $.__views.MyAlertSettings.add($.__views.__alloyId1099);
    $.__views.__alloyId1100 = Ti.UI.createView({
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "__alloyId1100"
    });
    $.__views.MyAlertSettings.add($.__views.__alloyId1100);
    $.__views.__alloyId1101 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        textid: "ati",
        id: "__alloyId1101"
    });
    $.__views.__alloyId1100.add($.__views.__alloyId1101);
    $.__views.ati_switch = Ti.UI.createSwitch({
        right: 15,
        value: false,
        id: "ati_switch"
    });
    $.__views.__alloyId1100.add($.__views.ati_switch);
    setState ? $.__views.ati_switch.addEventListener("change", setState) : __defers["$.__views.ati_switch!change!setState"] = true;
    $.__views.__alloyId1102 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1102"
    });
    $.__views.MyAlertSettings.add($.__views.__alloyId1102);
    $.__views.__alloyId1103 = Ti.UI.createView({
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "__alloyId1103"
    });
    $.__views.MyAlertSettings.add($.__views.__alloyId1103);
    toggleThreatDistancePicker ? $.__views.__alloyId1103.addEventListener("click", toggleThreatDistancePicker) : __defers["$.__views.__alloyId1103!click!toggleThreatDistancePicker"] = true;
    $.__views.threat_distance_tag = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        textid: "threat_distance",
        right: 100,
        id: "threat_distance_tag"
    });
    $.__views.__alloyId1103.add($.__views.threat_distance_tag);
    $.__views.threat_distance = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: null,
        textid: "td_0_25",
        right: 15,
        id: "threat_distance"
    });
    $.__views.__alloyId1103.add($.__views.threat_distance);
    $.__views.distance_picker = Ti.UI.createView({
        height: 0,
        left: 0,
        right: 0,
        layout: "vertical",
        id: "distance_picker"
    });
    $.__views.MyAlertSettings.add($.__views.distance_picker);
    $.__views.__alloyId1104 = Ti.UI.createView({
        backgroundColor: "white",
        backgroundImage: "/images/bg_post_flex.png",
        backgroundLeftCap: 10,
        backgroundTopCap: 10,
        height: Ti.UI.SIZE,
        left: 15,
        right: 15,
        layout: "vertical",
        id: "__alloyId1104"
    });
    $.__views.distance_picker.add($.__views.__alloyId1104);
    $.__views.__alloyId1105 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        height: 35,
        right: 15,
        text: "0.25 Miles.",
        value: "0.25",
        id: "__alloyId1105"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1105);
    setThreatDistance ? $.__views.__alloyId1105.addEventListener("click", setThreatDistance) : __defers["$.__views.__alloyId1105!click!setThreatDistance"] = true;
    $.__views.__alloyId1106 = Ti.UI.createView({
        backgroundColor: "#1FB9E5",
        height: 1,
        top: 0,
        left: 5,
        right: 5,
        id: "__alloyId1106"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1106);
    $.__views.__alloyId1107 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        height: 35,
        right: 15,
        text: "0.5 Miles.",
        value: "0.5",
        id: "__alloyId1107"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1107);
    setThreatDistance ? $.__views.__alloyId1107.addEventListener("click", setThreatDistance) : __defers["$.__views.__alloyId1107!click!setThreatDistance"] = true;
    $.__views.__alloyId1108 = Ti.UI.createView({
        backgroundColor: "#1FB9E5",
        height: 1,
        top: 0,
        left: 5,
        right: 5,
        id: "__alloyId1108"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1108);
    $.__views.__alloyId1109 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        height: 35,
        right: 15,
        text: "1 Mile.",
        value: "1",
        id: "__alloyId1109"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1109);
    setThreatDistance ? $.__views.__alloyId1109.addEventListener("click", setThreatDistance) : __defers["$.__views.__alloyId1109!click!setThreatDistance"] = true;
    $.__views.__alloyId1110 = Ti.UI.createView({
        backgroundColor: "#1FB9E5",
        height: 1,
        top: 0,
        left: 5,
        right: 5,
        id: "__alloyId1110"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1110);
    $.__views.__alloyId1111 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        height: 35,
        right: 15,
        text: "2 Miles.",
        value: "2",
        id: "__alloyId1111"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1111);
    setThreatDistance ? $.__views.__alloyId1111.addEventListener("click", setThreatDistance) : __defers["$.__views.__alloyId1111!click!setThreatDistance"] = true;
    $.__views.__alloyId1112 = Ti.UI.createView({
        backgroundColor: "#1FB9E5",
        height: 1,
        top: 0,
        left: 5,
        right: 5,
        id: "__alloyId1112"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1112);
    $.__views.__alloyId1113 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        height: 35,
        right: 15,
        text: "3 Miles.",
        value: "3",
        id: "__alloyId1113"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1113);
    setThreatDistance ? $.__views.__alloyId1113.addEventListener("click", setThreatDistance) : __defers["$.__views.__alloyId1113!click!setThreatDistance"] = true;
    $.__views.__alloyId1114 = Ti.UI.createView({
        height: 10,
        id: "__alloyId1114"
    });
    $.__views.distance_picker.add($.__views.__alloyId1114);
    $.__views.separator = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "separator"
    });
    $.__views.MyAlertSettings.add($.__views.separator);
    $.__views.__alloyId1115 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 0,
        right: 0,
        layout: "vertical",
        id: "__alloyId1115"
    });
    $.__views.MyAlertSettings.add($.__views.__alloyId1115);
    $.__views.__alloyId1116 = Ti.UI.createLabel({
        color: "black",
        font: {
            fontSize: 16
        },
        textAlign: "left",
        left: 15,
        height: 40,
        textid: "alert_types",
        id: "__alloyId1116"
    });
    $.__views.__alloyId1115.add($.__views.__alloyId1116);
    $.__views.__alloyId1117 = Ti.UI.createView({
        backgroundColor: "white",
        backgroundImage: "/images/bg_post_flex.png",
        backgroundLeftCap: 10,
        backgroundTopCap: 10,
        height: Ti.UI.SIZE,
        left: 15,
        right: 15,
        layout: "vertical",
        id: "__alloyId1117"
    });
    $.__views.__alloyId1115.add($.__views.__alloyId1117);
    $.__views.__alloyId1118 = Ti.UI.createView({
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "__alloyId1118"
    });
    $.__views.__alloyId1117.add($.__views.__alloyId1118);
    $.__views.__alloyId1119 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        right: 100,
        textid: "at_cf_emergency_alert",
        id: "__alloyId1119"
    });
    $.__views.__alloyId1118.add($.__views.__alloyId1119);
    $.__views.falertEAcell = Ti.UI.createImageView({
        image: "/images/ic_phone_inactive.png",
        width: 30,
        height: 30,
        right: 55,
        value: false,
        id: "falertEAcell"
    });
    $.__views.__alloyId1118.add($.__views.falertEAcell);
    toggleCellValue ? $.__views.falertEAcell.addEventListener("click", toggleCellValue) : __defers["$.__views.falertEAcell!click!toggleCellValue"] = true;
    $.__views.falert_ea_email = Ti.UI.createImageView({
        image: "/images/ic_mail_nonselection.png",
        width: 30,
        height: 30,
        right: 15,
        value: false,
        id: "falert_ea_email"
    });
    $.__views.__alloyId1118.add($.__views.falert_ea_email);
    $.__views.__alloyId1120 = Ti.UI.createView({
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "__alloyId1120"
    });
    $.__views.__alloyId1117.add($.__views.__alloyId1120);
    $.__views.__alloyId1121 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        right: 100,
        textid: "at_cf_advisory",
        id: "__alloyId1121"
    });
    $.__views.__alloyId1120.add($.__views.__alloyId1121);
    $.__views.falertcell = Ti.UI.createImageView({
        image: "/images/ic_phone_inactive.png",
        width: 30,
        height: 30,
        right: 55,
        value: false,
        id: "falertcell"
    });
    $.__views.__alloyId1120.add($.__views.falertcell);
    toggleCellValue ? $.__views.falertcell.addEventListener("click", toggleCellValue) : __defers["$.__views.falertcell!click!toggleCellValue"] = true;
    $.__views.falertemail = Ti.UI.createImageView({
        image: "/images/ic_mail_inactive.png",
        width: 30,
        height: 30,
        right: 15,
        value: false,
        id: "falertemail"
    });
    $.__views.__alloyId1120.add($.__views.falertemail);
    toggleEmailValue ? $.__views.falertemail.addEventListener("click", toggleEmailValue) : __defers["$.__views.falertemail!click!toggleEmailValue"] = true;
    $.__views.__alloyId1122 = Ti.UI.createView({
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "__alloyId1122"
    });
    $.__views.__alloyId1117.add($.__views.__alloyId1122);
    $.__views.__alloyId1123 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        right: 100,
        textid: "at_nw_discussions",
        id: "__alloyId1123"
    });
    $.__views.__alloyId1122.add($.__views.__alloyId1123);
    $.__views.fnalertemail = Ti.UI.createImageView({
        image: "/images/ic_mail_inactive.png",
        width: 30,
        height: 30,
        right: 15,
        value: false,
        id: "fnalertemail"
    });
    $.__views.__alloyId1122.add($.__views.fnalertemail);
    toggleEmailValue ? $.__views.fnalertemail.addEventListener("click", toggleEmailValue) : __defers["$.__views.fnalertemail!click!toggleEmailValue"] = true;
    $.__views.__alloyId1124 = Ti.UI.createView({
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "__alloyId1124"
    });
    $.__views.__alloyId1117.add($.__views.__alloyId1124);
    $.__views.__alloyId1125 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        right: 100,
        textid: "at_new_stories",
        id: "__alloyId1125"
    });
    $.__views.__alloyId1124.add($.__views.__alloyId1125);
    $.__views.falertMediaEmail = Ti.UI.createImageView({
        image: "/images/ic_mail_inactive.png",
        width: 30,
        height: 30,
        right: 15,
        value: false,
        id: "falertMediaEmail"
    });
    $.__views.__alloyId1124.add($.__views.falertMediaEmail);
    toggleEmailValue ? $.__views.falertMediaEmail.addEventListener("click", toggleEmailValue) : __defers["$.__views.falertMediaEmail!click!toggleEmailValue"] = true;
    $.__views.__alloyId1126 = Ti.UI.createView({
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "__alloyId1126"
    });
    $.__views.__alloyId1117.add($.__views.__alloyId1126);
    $.__views.__alloyId1127 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        right: 100,
        textid: "at_earthquake_advisory",
        id: "__alloyId1127"
    });
    $.__views.__alloyId1126.add($.__views.__alloyId1127);
    $.__views.fealertemail = Ti.UI.createImageView({
        image: "/images/ic_mail_inactive.png",
        width: 30,
        height: 30,
        right: 15,
        value: false,
        id: "fealertemail"
    });
    $.__views.__alloyId1126.add($.__views.fealertemail);
    toggleEmailValue ? $.__views.fealertemail.addEventListener("click", toggleEmailValue) : __defers["$.__views.fealertemail!click!toggleEmailValue"] = true;
    $.__views.__alloyId1128 = Ti.UI.createView({
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "__alloyId1128"
    });
    $.__views.__alloyId1117.add($.__views.__alloyId1128);
    $.__views.__alloyId1129 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        right: 100,
        textid: "at_alertid_ut",
        id: "__alloyId1129"
    });
    $.__views.__alloyId1128.add($.__views.__alloyId1129);
    $.__views.falertIDEmail = Ti.UI.createImageView({
        image: "/images/ic_mail_inactive.png",
        width: 30,
        height: 30,
        right: 15,
        value: false,
        id: "falertIDEmail"
    });
    $.__views.__alloyId1128.add($.__views.falertIDEmail);
    toggleEmailValue ? $.__views.falertIDEmail.addEventListener("click", toggleEmailValue) : __defers["$.__views.falertIDEmail!click!toggleEmailValue"] = true;
    $.__views.__alloyId1130 = Ti.UI.createView({
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "__alloyId1130"
    });
    $.__views.__alloyId1117.add($.__views.__alloyId1130);
    $.__views.__alloyId1131 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        right: 100,
        textid: "at_sex_offender_alerts",
        id: "__alloyId1131"
    });
    $.__views.__alloyId1130.add($.__views.__alloyId1131);
    $.__views.fsodemail = Ti.UI.createImageView({
        image: "/images/ic_mail_inactive.png",
        width: 30,
        height: 30,
        right: 15,
        value: false,
        id: "fsodemail"
    });
    $.__views.__alloyId1130.add($.__views.fsodemail);
    toggleEmailValue ? $.__views.fsodemail.addEventListener("click", toggleEmailValue) : __defers["$.__views.fsodemail!click!toggleEmailValue"] = true;
    $.__views.__alloyId1132 = Ti.UI.createView({
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "__alloyId1132"
    });
    $.__views.__alloyId1117.add($.__views.__alloyId1132);
    $.__views.__alloyId1133 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        right: 100,
        textid: "at_severe_weather_alerts",
        id: "__alloyId1133"
    });
    $.__views.__alloyId1132.add($.__views.__alloyId1133);
    $.__views.falertWeatherEmail = Ti.UI.createImageView({
        image: "/images/ic_mail_inactive.png",
        width: 30,
        height: 30,
        right: 15,
        value: false,
        id: "falertWeatherEmail"
    });
    $.__views.__alloyId1132.add($.__views.falertWeatherEmail);
    toggleEmailWeatherAlerts ? $.__views.falertWeatherEmail.addEventListener("click", toggleEmailWeatherAlerts) : __defers["$.__views.falertWeatherEmail!click!toggleEmailWeatherAlerts"] = true;
    $.__views.weather_select = Ti.UI.createView({
        height: 0,
        left: 0,
        right: 0,
        layout: "absolute",
        id: "weather_select"
    });
    $.__views.__alloyId1117.add($.__views.weather_select);
    toggleWeatherPicker ? $.__views.weather_select.addEventListener("click", toggleWeatherPicker) : __defers["$.__views.weather_select!click!toggleWeatherPicker"] = true;
    $.__views.fweatherlevel = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "right",
        left: 110,
        right: 35,
        textid: "wl_extreme",
        id: "fweatherlevel"
    });
    $.__views.weather_select.add($.__views.fweatherlevel);
    $.__views.spin_arr = Ti.UI.createImageView({
        image: "/images/ic_down_arrow.png",
        right: 15,
        width: 12,
        height: 8,
        id: "spin_arr"
    });
    $.__views.weather_select.add($.__views.spin_arr);
    $.__views.weather_picker = Ti.UI.createView({
        height: 0,
        left: 0,
        right: 0,
        layout: "vertical",
        id: "weather_picker"
    });
    $.__views.__alloyId1117.add($.__views.weather_picker);
    $.__views.__alloyId1134 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        height: 35,
        right: 15,
        textid: "wl_extreme",
        value: "1",
        id: "__alloyId1134"
    });
    $.__views.weather_picker.add($.__views.__alloyId1134);
    setWeather ? $.__views.__alloyId1134.addEventListener("click", setWeather) : __defers["$.__views.__alloyId1134!click!setWeather"] = true;
    $.__views.__alloyId1135 = Ti.UI.createView({
        backgroundColor: "#1FB9E5",
        height: 1,
        top: 0,
        left: 5,
        right: 5,
        id: "__alloyId1135"
    });
    $.__views.weather_picker.add($.__views.__alloyId1135);
    $.__views.__alloyId1136 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        height: 35,
        right: 15,
        textid: "wl_severe",
        value: "2",
        id: "__alloyId1136"
    });
    $.__views.weather_picker.add($.__views.__alloyId1136);
    setWeather ? $.__views.__alloyId1136.addEventListener("click", setWeather) : __defers["$.__views.__alloyId1136!click!setWeather"] = true;
    $.__views.__alloyId1137 = Ti.UI.createView({
        backgroundColor: "#1FB9E5",
        height: 1,
        top: 0,
        left: 5,
        right: 5,
        id: "__alloyId1137"
    });
    $.__views.weather_picker.add($.__views.__alloyId1137);
    $.__views.__alloyId1138 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        height: 35,
        right: 15,
        textid: "wl_moderate",
        value: "3",
        id: "__alloyId1138"
    });
    $.__views.weather_picker.add($.__views.__alloyId1138);
    setWeather ? $.__views.__alloyId1138.addEventListener("click", setWeather) : __defers["$.__views.__alloyId1138!click!setWeather"] = true;
    $.__views.__alloyId1139 = Ti.UI.createView({
        backgroundColor: "#1FB9E5",
        height: 1,
        top: 0,
        left: 5,
        right: 5,
        id: "__alloyId1139"
    });
    $.__views.weather_picker.add($.__views.__alloyId1139);
    $.__views.__alloyId1140 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        height: 35,
        right: 15,
        textid: "wl_minor",
        value: "4",
        id: "__alloyId1140"
    });
    $.__views.weather_picker.add($.__views.__alloyId1140);
    setWeather ? $.__views.__alloyId1140.addEventListener("click", setWeather) : __defers["$.__views.__alloyId1140!click!setWeather"] = true;
    $.__views.__alloyId1141 = Ti.UI.createView({
        height: 10,
        id: "__alloyId1141"
    });
    $.__views.__alloyId1115.add($.__views.__alloyId1141);
    $.__views.__alloyId1142 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1142"
    });
    $.__views.MyAlertSettings.add($.__views.__alloyId1142);
    $.__views.__alloyId1143 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 0,
        right: 0,
        layout: "vertical",
        id: "__alloyId1143"
    });
    $.__views.MyAlertSettings.add($.__views.__alloyId1143);
    $.__views.__alloyId1144 = Ti.UI.createLabel({
        color: "black",
        font: {
            fontSize: 16
        },
        textAlign: "left",
        left: 15,
        height: 40,
        textid: "cfw_advisory_level",
        id: "__alloyId1144"
    });
    $.__views.__alloyId1143.add($.__views.__alloyId1144);
    $.__views.severe = Ti.UI.createView({
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        backgroundColor: "#1FB9E5",
        id: "severe",
        value: "1"
    });
    $.__views.__alloyId1143.add($.__views.severe);
    setAlertLevel ? $.__views.severe.addEventListener("click", setAlertLevel) : __defers["$.__views.severe!click!setAlertLevel"] = true;
    $.__views.__alloyId1145 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        textid: "cfw_severe",
        id: "__alloyId1145"
    });
    $.__views.severe.add($.__views.__alloyId1145);
    $.__views.cb_1 = Ti.UI.createImageView({
        image: "/images/bt_radio_unselect.png",
        width: 23,
        height: 23,
        right: 15,
        id: "cb_1"
    });
    $.__views.severe.add($.__views.cb_1);
    $.__views.red = Ti.UI.createView({
        right: 0,
        width: 7,
        backgroundColor: "#ED3A44",
        id: "red"
    });
    $.__views.severe.add($.__views.red);
    $.__views.high = Ti.UI.createView({
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        backgroundColor: "#1CACD5",
        id: "high",
        value: "2"
    });
    $.__views.__alloyId1143.add($.__views.high);
    setAlertLevel ? $.__views.high.addEventListener("click", setAlertLevel) : __defers["$.__views.high!click!setAlertLevel"] = true;
    $.__views.__alloyId1146 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        textid: "cfw_high",
        id: "__alloyId1146"
    });
    $.__views.high.add($.__views.__alloyId1146);
    $.__views.cb_2 = Ti.UI.createImageView({
        image: "/images/bt_radio_unselect.png",
        width: 23,
        height: 23,
        right: 15,
        id: "cb_2"
    });
    $.__views.high.add($.__views.cb_2);
    $.__views.orange = Ti.UI.createView({
        right: 0,
        width: 7,
        backgroundColor: "#F99C29",
        id: "orange"
    });
    $.__views.high.add($.__views.orange);
    $.__views.elevated = Ti.UI.createView({
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        backgroundColor: "#19A0C6",
        id: "elevated",
        value: "3"
    });
    $.__views.__alloyId1143.add($.__views.elevated);
    setAlertLevel ? $.__views.elevated.addEventListener("click", setAlertLevel) : __defers["$.__views.elevated!click!setAlertLevel"] = true;
    $.__views.__alloyId1147 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        textid: "cfw_elevated",
        id: "__alloyId1147"
    });
    $.__views.elevated.add($.__views.__alloyId1147);
    $.__views.cb_3 = Ti.UI.createImageView({
        image: "/images/bt_radio_unselect.png",
        width: 23,
        height: 23,
        right: 15,
        id: "cb_3"
    });
    $.__views.elevated.add($.__views.cb_3);
    $.__views.yellow = Ti.UI.createView({
        right: 0,
        width: 7,
        backgroundColor: "#EAD530",
        id: "yellow"
    });
    $.__views.elevated.add($.__views.yellow);
    $.__views.guarded = Ti.UI.createView({
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        backgroundColor: "#1794B7",
        id: "guarded",
        value: "4"
    });
    $.__views.__alloyId1143.add($.__views.guarded);
    setAlertLevel ? $.__views.guarded.addEventListener("click", setAlertLevel) : __defers["$.__views.guarded!click!setAlertLevel"] = true;
    $.__views.__alloyId1148 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        textid: "cfw_guarded",
        id: "__alloyId1148"
    });
    $.__views.guarded.add($.__views.__alloyId1148);
    $.__views.cb_4 = Ti.UI.createImageView({
        image: "/images/bt_radio_unselect.png",
        width: 23,
        height: 23,
        right: 15,
        id: "cb_4"
    });
    $.__views.guarded.add($.__views.cb_4);
    $.__views.blue = Ti.UI.createView({
        right: 0,
        width: 7,
        backgroundColor: "#317BCA",
        id: "blue"
    });
    $.__views.guarded.add($.__views.blue);
    $.__views.low = Ti.UI.createView({
        height: 40,
        left: 0,
        right: 0,
        layout: "absolute",
        backgroundColor: "#1488A8",
        id: "low",
        value: "5"
    });
    $.__views.__alloyId1143.add($.__views.low);
    setAlertLevel ? $.__views.low.addEventListener("click", setAlertLevel) : __defers["$.__views.low!click!setAlertLevel"] = true;
    $.__views.__alloyId1149 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        textid: "cfw_low",
        id: "__alloyId1149"
    });
    $.__views.low.add($.__views.__alloyId1149);
    $.__views.cb_5 = Ti.UI.createImageView({
        image: "/images/bt_radio_unselect.png",
        width: 23,
        height: 23,
        right: 15,
        id: "cb_5"
    });
    $.__views.low.add($.__views.cb_5);
    $.__views.green = Ti.UI.createView({
        right: 0,
        width: 7,
        backgroundColor: "#18A56B",
        id: "green"
    });
    $.__views.low.add($.__views.green);
    $.__views.__alloyId1150 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "arr",
        id: "__alloyId1150"
    });
    $.__views.green.add($.__views.__alloyId1150);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    var _ws_request, _falertEAemail = "", _fatidistance = 1, _fdistance = 2, _fweatherlevel = 1, _falertlevel = 1;
    initialize();
    __defers["$.__views.ati_switch!change!setState"] && $.__views.ati_switch.addEventListener("change", setState);
    __defers["$.__views.__alloyId1103!click!toggleThreatDistancePicker"] && $.__views.__alloyId1103.addEventListener("click", toggleThreatDistancePicker);
    __defers["$.__views.__alloyId1105!click!setThreatDistance"] && $.__views.__alloyId1105.addEventListener("click", setThreatDistance);
    __defers["$.__views.__alloyId1107!click!setThreatDistance"] && $.__views.__alloyId1107.addEventListener("click", setThreatDistance);
    __defers["$.__views.__alloyId1109!click!setThreatDistance"] && $.__views.__alloyId1109.addEventListener("click", setThreatDistance);
    __defers["$.__views.__alloyId1111!click!setThreatDistance"] && $.__views.__alloyId1111.addEventListener("click", setThreatDistance);
    __defers["$.__views.__alloyId1113!click!setThreatDistance"] && $.__views.__alloyId1113.addEventListener("click", setThreatDistance);
    __defers["$.__views.falertEAcell!click!toggleCellValue"] && $.__views.falertEAcell.addEventListener("click", toggleCellValue);
    __defers["$.__views.falertcell!click!toggleCellValue"] && $.__views.falertcell.addEventListener("click", toggleCellValue);
    __defers["$.__views.falertemail!click!toggleEmailValue"] && $.__views.falertemail.addEventListener("click", toggleEmailValue);
    __defers["$.__views.fnalertemail!click!toggleEmailValue"] && $.__views.fnalertemail.addEventListener("click", toggleEmailValue);
    __defers["$.__views.falertMediaEmail!click!toggleEmailValue"] && $.__views.falertMediaEmail.addEventListener("click", toggleEmailValue);
    __defers["$.__views.fealertemail!click!toggleEmailValue"] && $.__views.fealertemail.addEventListener("click", toggleEmailValue);
    __defers["$.__views.falertIDEmail!click!toggleEmailValue"] && $.__views.falertIDEmail.addEventListener("click", toggleEmailValue);
    __defers["$.__views.fsodemail!click!toggleEmailValue"] && $.__views.fsodemail.addEventListener("click", toggleEmailValue);
    __defers["$.__views.falertWeatherEmail!click!toggleEmailWeatherAlerts"] && $.__views.falertWeatherEmail.addEventListener("click", toggleEmailWeatherAlerts);
    __defers["$.__views.weather_select!click!toggleWeatherPicker"] && $.__views.weather_select.addEventListener("click", toggleWeatherPicker);
    __defers["$.__views.__alloyId1134!click!setWeather"] && $.__views.__alloyId1134.addEventListener("click", setWeather);
    __defers["$.__views.__alloyId1136!click!setWeather"] && $.__views.__alloyId1136.addEventListener("click", setWeather);
    __defers["$.__views.__alloyId1138!click!setWeather"] && $.__views.__alloyId1138.addEventListener("click", setWeather);
    __defers["$.__views.__alloyId1140!click!setWeather"] && $.__views.__alloyId1140.addEventListener("click", setWeather);
    __defers["$.__views.severe!click!setAlertLevel"] && $.__views.severe.addEventListener("click", setAlertLevel);
    __defers["$.__views.high!click!setAlertLevel"] && $.__views.high.addEventListener("click", setAlertLevel);
    __defers["$.__views.elevated!click!setAlertLevel"] && $.__views.elevated.addEventListener("click", setAlertLevel);
    __defers["$.__views.guarded!click!setAlertLevel"] && $.__views.guarded.addEventListener("click", setAlertLevel);
    __defers["$.__views.low!click!setAlertLevel"] && $.__views.low.addEventListener("click", setAlertLevel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;