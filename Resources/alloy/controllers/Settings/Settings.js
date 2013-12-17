function Controller() {
    function openAbout() {
        APP.openWindow({
            controller: "Widgets/Browser",
            controllerParams: {
                title: L("about"),
                url: L("url_about")
            }
        });
        return true;
    }
    function openMyAccountSettings() {
        APP.getToken({
            openLogin: true,
            callback: function(_token) {
                APP.openWindow({
                    controller: "Settings/MyAccountSettings",
                    controllerParams: {
                        token: _token
                    }
                });
                return true;
            }
        });
        return true;
    }
    function openMyAlertSettings() {
        APP.getToken({
            openLogin: true,
            callback: function(_token) {
                return APP.openWindow({
                    controller: "Settings/MyAlertSettings",
                    controllerParams: {
                        token: _token
                    }
                });
            }
        });
        return true;
    }
    function openMyAddresses() {
        APP.getToken({
            openLogin: true,
            callback: function(_token) {
                APP.openWindow({
                    controller: "Settings/MyAddresses",
                    controllerParams: {
                        token: _token
                    }
                });
                return true;
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
    function openShareApp() {
        var _emailDialog = Ti.UI.createEmailDialog();
        _emailDialog.subject = L("share_subject");
        _emailDialog.messageBody = L("share_body") + "\n";
        _emailDialog.open();
        return true;
    }
    function setState(event) {
        switch (event.source.id) {
          case "law_enforcement_switch":
            Ti.App.Properties.setBool("lawEnforcementS", event.value);
            break;

          case "send_anonymosly_switch":
            Ti.App.Properties.setBool("anonymousS", event.value);
            break;

          case "community_watch_switch":
            Ti.App.Properties.setBool("communityS", event.value);
            break;

          case "media_switch":
            Ti.App.Properties.setBool("mediaS", event.value);
        }
        return true;
    }
    function updateView() {
        APP.headerbar.setLeftButton(0, false);
        APP.headerbar.setRightButton(0, false);
        APP.headerbar.setLeftButton(APP.OPENMENU, true);
        APP.headerbar.setTitle("Settings");
        $.law_enforcement_switch.value = Boolean(Ti.App.Properties.getBool("lawEnforcementS"));
        $.send_anonymosly_switch.value = Boolean(Ti.App.Properties.getBool("anonymousS"));
        $.community_watch_switch.value = Boolean(Ti.App.Properties.getBool("communityS"));
        $.media_switch.value = Boolean(Ti.App.Properties.getBool("mediaS"));
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Settings/Settings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.Settings = Ti.UI.createScrollView({
        layout: "vertical",
        id: "Settings"
    });
    $.__views.Settings && $.addTopLevelView($.__views.Settings);
    $.__views.__alloyId1171 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_TOP,
        id: "__alloyId1171"
    });
    $.__views.Settings.add($.__views.__alloyId1171);
    $.__views.__alloyId1172 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        layout: "absolute",
        left: 0,
        right: 0,
        id: "__alloyId1172"
    });
    $.__views.Settings.add($.__views.__alloyId1172);
    openMyAddresses ? $.__views.__alloyId1172.addEventListener("click", openMyAddresses) : __defers["$.__views.__alloyId1172!click!openMyAddresses"] = true;
    $.__views.__alloyId1173 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        textid: "my_addresses",
        id: "__alloyId1173"
    });
    $.__views.__alloyId1172.add($.__views.__alloyId1173);
    $.__views.__alloyId1174 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1174"
    });
    $.__views.__alloyId1172.add($.__views.__alloyId1174);
    $.__views.__alloyId1175 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1175"
    });
    $.__views.Settings.add($.__views.__alloyId1175);
    $.__views.__alloyId1176 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        layout: "absolute",
        left: 0,
        right: 0,
        id: "__alloyId1176"
    });
    $.__views.Settings.add($.__views.__alloyId1176);
    openMyAlertSettings ? $.__views.__alloyId1176.addEventListener("click", openMyAlertSettings) : __defers["$.__views.__alloyId1176!click!openMyAlertSettings"] = true;
    $.__views.__alloyId1177 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        textid: "my_alert_settings",
        id: "__alloyId1177"
    });
    $.__views.__alloyId1176.add($.__views.__alloyId1177);
    $.__views.__alloyId1178 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1178"
    });
    $.__views.__alloyId1176.add($.__views.__alloyId1178);
    $.__views.__alloyId1179 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1179"
    });
    $.__views.Settings.add($.__views.__alloyId1179);
    $.__views.__alloyId1180 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        layout: "absolute",
        left: 0,
        right: 0,
        id: "__alloyId1180"
    });
    $.__views.Settings.add($.__views.__alloyId1180);
    openMyAccountSettings ? $.__views.__alloyId1180.addEventListener("click", openMyAccountSettings) : __defers["$.__views.__alloyId1180!click!openMyAccountSettings"] = true;
    $.__views.__alloyId1181 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        textid: "my_account_settings",
        id: "__alloyId1181"
    });
    $.__views.__alloyId1180.add($.__views.__alloyId1181);
    $.__views.__alloyId1182 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1182"
    });
    $.__views.__alloyId1180.add($.__views.__alloyId1182);
    $.__views.__alloyId1183 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1183"
    });
    $.__views.Settings.add($.__views.__alloyId1183);
    $.__views.__alloyId1184 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        layout: "absolute",
        left: 0,
        right: 0,
        id: "__alloyId1184"
    });
    $.__views.Settings.add($.__views.__alloyId1184);
    openShareApp ? $.__views.__alloyId1184.addEventListener("click", openShareApp) : __defers["$.__views.__alloyId1184!click!openShareApp"] = true;
    $.__views.__alloyId1185 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        textid: "share_app",
        id: "__alloyId1185"
    });
    $.__views.__alloyId1184.add($.__views.__alloyId1185);
    $.__views.__alloyId1186 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1186"
    });
    $.__views.__alloyId1184.add($.__views.__alloyId1186);
    $.__views.__alloyId1187 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1187"
    });
    $.__views.Settings.add($.__views.__alloyId1187);
    $.__views.__alloyId1188 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        layout: "absolute",
        left: 0,
        right: 0,
        id: "__alloyId1188"
    });
    $.__views.Settings.add($.__views.__alloyId1188);
    $.__views.__alloyId1189 = Ti.UI.createLabel({
        color: "black",
        font: {
            fontSize: 16
        },
        textAlign: "left",
        left: 15,
        textid: "sharing_preferences",
        id: "__alloyId1189"
    });
    $.__views.__alloyId1188.add($.__views.__alloyId1189);
    $.__views.__alloyId1190 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1190"
    });
    $.__views.Settings.add($.__views.__alloyId1190);
    $.__views.__alloyId1191 = Ti.UI.createView({
        height: 40,
        layout: "absolute",
        left: 0,
        right: 0,
        id: "__alloyId1191"
    });
    $.__views.Settings.add($.__views.__alloyId1191);
    $.__views.community_watch = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        textid: "community_watch",
        id: "community_watch"
    });
    $.__views.__alloyId1191.add($.__views.community_watch);
    $.__views.community_watch_switch = Ti.UI.createSwitch({
        right: 15,
        value: false,
        id: "community_watch_switch"
    });
    $.__views.__alloyId1191.add($.__views.community_watch_switch);
    setState ? $.__views.community_watch_switch.addEventListener("change", setState) : __defers["$.__views.community_watch_switch!change!setState"] = true;
    $.__views.__alloyId1192 = Ti.UI.createView({
        height: 40,
        layout: "absolute",
        left: 0,
        right: 0,
        id: "__alloyId1192"
    });
    $.__views.Settings.add($.__views.__alloyId1192);
    $.__views.__alloyId1193 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        textid: "law_enforcement",
        id: "__alloyId1193"
    });
    $.__views.__alloyId1192.add($.__views.__alloyId1193);
    $.__views.law_enforcement_switch = Ti.UI.createSwitch({
        right: 15,
        value: false,
        id: "law_enforcement_switch"
    });
    $.__views.__alloyId1192.add($.__views.law_enforcement_switch);
    setState ? $.__views.law_enforcement_switch.addEventListener("change", setState) : __defers["$.__views.law_enforcement_switch!change!setState"] = true;
    $.__views.__alloyId1194 = Ti.UI.createView({
        height: 40,
        layout: "absolute",
        left: 0,
        right: 0,
        id: "__alloyId1194"
    });
    $.__views.Settings.add($.__views.__alloyId1194);
    $.__views.__alloyId1195 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        textid: "media",
        id: "__alloyId1195"
    });
    $.__views.__alloyId1194.add($.__views.__alloyId1195);
    $.__views.media_switch = Ti.UI.createSwitch({
        right: 15,
        value: false,
        id: "media_switch"
    });
    $.__views.__alloyId1194.add($.__views.media_switch);
    setState ? $.__views.media_switch.addEventListener("change", setState) : __defers["$.__views.media_switch!change!setState"] = true;
    $.__views.__alloyId1196 = Ti.UI.createView({
        height: 40,
        layout: "absolute",
        left: 0,
        right: 0,
        id: "__alloyId1196"
    });
    $.__views.Settings.add($.__views.__alloyId1196);
    $.__views.__alloyId1197 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        textid: "send_anonymosly",
        id: "__alloyId1197"
    });
    $.__views.__alloyId1196.add($.__views.__alloyId1197);
    $.__views.send_anonymosly_switch = Ti.UI.createSwitch({
        right: 15,
        value: false,
        id: "send_anonymosly_switch"
    });
    $.__views.__alloyId1196.add($.__views.send_anonymosly_switch);
    setState ? $.__views.send_anonymosly_switch.addEventListener("change", setState) : __defers["$.__views.send_anonymosly_switch!change!setState"] = true;
    $.__views.__alloyId1198 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1198"
    });
    $.__views.Settings.add($.__views.__alloyId1198);
    $.__views.__alloyId1199 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        layout: "absolute",
        left: 0,
        right: 0,
        id: "__alloyId1199"
    });
    $.__views.Settings.add($.__views.__alloyId1199);
    openAbout ? $.__views.__alloyId1199.addEventListener("click", openAbout) : __defers["$.__views.__alloyId1199!click!openAbout"] = true;
    $.__views.__alloyId1200 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        textid: "about",
        id: "__alloyId1200"
    });
    $.__views.__alloyId1199.add($.__views.__alloyId1200);
    $.__views.__alloyId1201 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1201"
    });
    $.__views.__alloyId1199.add($.__views.__alloyId1201);
    $.__views.__alloyId1202 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1202"
    });
    $.__views.Settings.add($.__views.__alloyId1202);
    $.__views.__alloyId1203 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        layout: "absolute",
        left: 0,
        right: 0,
        id: "__alloyId1203"
    });
    $.__views.Settings.add($.__views.__alloyId1203);
    openPrivacy ? $.__views.__alloyId1203.addEventListener("click", openPrivacy) : __defers["$.__views.__alloyId1203!click!openPrivacy"] = true;
    $.__views.terms_and_cond = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        textid: "terms_and_cond",
        id: "terms_and_cond"
    });
    $.__views.__alloyId1203.add($.__views.terms_and_cond);
    $.__views.__alloyId1204 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1204"
    });
    $.__views.__alloyId1203.add($.__views.__alloyId1204);
    $.__views.__alloyId1205 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1205"
    });
    $.__views.Settings.add($.__views.__alloyId1205);
    $.__views.__alloyId1206 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        layout: "horizontal",
        left: 0,
        right: 0,
        id: "__alloyId1206"
    });
    $.__views.Settings.add($.__views.__alloyId1206);
    $.__views.version = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: Alloy.Globals.VERSION,
        height: 40,
        id: "version"
    });
    $.__views.__alloyId1206.add($.__views.version);
    $.__views.copyright = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        textid: "copyright",
        height: 40,
        id: "copyright"
    });
    $.__views.__alloyId1206.add($.__views.copyright);
    $.__views.__alloyId1207 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId1207"
    });
    $.__views.Settings.add($.__views.__alloyId1207);
    $.__views.__alloyId1208 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_BOTTOM,
        id: "__alloyId1208"
    });
    $.__views.Settings.add($.__views.__alloyId1208);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    arguments[0] || {};
    exports.updateView = updateView;
    __defers["$.__views.__alloyId1172!click!openMyAddresses"] && $.__views.__alloyId1172.addEventListener("click", openMyAddresses);
    __defers["$.__views.__alloyId1176!click!openMyAlertSettings"] && $.__views.__alloyId1176.addEventListener("click", openMyAlertSettings);
    __defers["$.__views.__alloyId1180!click!openMyAccountSettings"] && $.__views.__alloyId1180.addEventListener("click", openMyAccountSettings);
    __defers["$.__views.__alloyId1184!click!openShareApp"] && $.__views.__alloyId1184.addEventListener("click", openShareApp);
    __defers["$.__views.community_watch_switch!change!setState"] && $.__views.community_watch_switch.addEventListener("change", setState);
    __defers["$.__views.law_enforcement_switch!change!setState"] && $.__views.law_enforcement_switch.addEventListener("change", setState);
    __defers["$.__views.media_switch!change!setState"] && $.__views.media_switch.addEventListener("change", setState);
    __defers["$.__views.send_anonymosly_switch!change!setState"] && $.__views.send_anonymosly_switch.addEventListener("change", setState);
    __defers["$.__views.__alloyId1199!click!openAbout"] && $.__views.__alloyId1199.addEventListener("click", openAbout);
    __defers["$.__views.__alloyId1203!click!openPrivacy"] && $.__views.__alloyId1203.addEventListener("click", openPrivacy);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;