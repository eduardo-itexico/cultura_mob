function Controller() {
    function onClickMenu() {
        highligthSelection(this);
        switch (this.id) {
          case "myAlerts":
            APP.handleNavigation("MyAlerts/MyAlerts");
            APP.openCloseMenu();
            break;

          case "familyWallet":
            APP.handleNavigation("FamilyWallet/FamilyWallet");
            APP.openCloseMenu();
            break;

          case "myNeighborhoods":
            APP.handleNavigation("MyNeighborhoods/MyNeighborhoods", {
                type: 0
            });
            APP.openCloseMenu();
            break;

          case "notifications":
            APP.handleNavigation("Notifications/Notifications");
            APP.openCloseMenu();
            break;

          case "settings":
            APP.handleNavigation("Settings/Settings");
            APP.openCloseMenu();
            break;

          case "session":
            APP.openCloseMenu();
            Ti.App.Properties.getString("user_token", false) ? APP.logout() && highligthSelection() : APP.openLogin();
            break;

          case "myGroups":
            APP.handleNavigation("MyNeighborhoods/MyNeighborhoods", {
                type: 1
            });
            APP.openCloseMenu({
                onClose: APP.openCloseOptions
            });
            break;

          case "myFF":
            APP.handleNavigation("MyNeighborhoods/MyNeighborhoods", {
                type: 2
            });
            APP.openCloseMenu();
            break;

          case "report":
            APP.handleNavigation("Report/Report");
            APP.openCloseMenu();
        }
        return true;
    }
    function highligthSelection(self) {
        if (self) {
            if ("session" != self.id) {
                tempOption.backgroundImage = "/images/transparent.png";
                tempOption = self;
                tempOption.backgroundImage = "/images/bg_dashboard_selector.png";
            }
        } else {
            tempOption.backgroundImage = "/images/transparent.png";
            tempOption = $.myAlerts;
            tempOption.backgroundImage = "/images/bg_dashboard_selector.png";
        }
        return true;
    }
    function highlightNotifications() {
        tempOption.backgroundImage = "/images/transparent.png";
        tempOption = $.notifications;
        tempOption.backgroundImage = "/images/bg_dashboard_selector.png";
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "LeftBarView/LeftBarView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.LeftBarView = Ti.UI.createView({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        isOpen: "false",
        id: "LeftBarView"
    });
    $.__views.LeftBarView && $.addTopLevelView($.__views.LeftBarView);
    $.__views.backgroundIosBar = Ti.UI.createView({
        backgroundImage: "/images/bg_statusbar_flex.png",
        top: 0,
        height: 0,
        id: "backgroundIosBar"
    });
    $.__views.LeftBarView.add($.__views.backgroundIosBar);
    $.__views.menuContainer = Ti.UI.createScrollView({
        left: 0,
        right: 0,
        top: 30,
        bottom: 0,
        contentHeight: Ti.UI.SIZE,
        layout: "vertical",
        id: "menuContainer"
    });
    $.__views.LeftBarView.add($.__views.menuContainer);
    $.__views.myAlerts = Ti.UI.createView({
        left: 0,
        right: 0,
        height: 50,
        id: "myAlerts"
    });
    $.__views.menuContainer.add($.__views.myAlerts);
    onClickMenu ? $.__views.myAlerts.addEventListener("click", onClickMenu) : __defers["$.__views.myAlerts!click!onClickMenu"] = true;
    $.__views.__alloyId34 = Ti.UI.createView({
        backgroundImage: "/images/ic_alerts.png",
        left: 10,
        height: 27,
        width: 27,
        id: "__alloyId34"
    });
    $.__views.myAlerts.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 16
        },
        left: 55,
        text: "My Alerts",
        id: "__alloyId35"
    });
    $.__views.myAlerts.add($.__views.__alloyId35);
    $.__views.myNeighborhoods = Ti.UI.createView({
        left: 0,
        right: 0,
        height: 50,
        id: "myNeighborhoods"
    });
    $.__views.menuContainer.add($.__views.myNeighborhoods);
    onClickMenu ? $.__views.myNeighborhoods.addEventListener("click", onClickMenu) : __defers["$.__views.myNeighborhoods!click!onClickMenu"] = true;
    $.__views.__alloyId36 = Ti.UI.createView({
        backgroundImage: "/images/ic_my_neighborhoods_dashboard.png",
        left: 10,
        width: 36,
        height: 26,
        id: "__alloyId36"
    });
    $.__views.myNeighborhoods.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 16
        },
        left: 55,
        text: "My Neighborhoods",
        id: "__alloyId37"
    });
    $.__views.myNeighborhoods.add($.__views.__alloyId37);
    $.__views.myGroups = Ti.UI.createView({
        left: 0,
        right: 0,
        height: 50,
        id: "myGroups"
    });
    $.__views.menuContainer.add($.__views.myGroups);
    onClickMenu ? $.__views.myGroups.addEventListener("click", onClickMenu) : __defers["$.__views.myGroups!click!onClickMenu"] = true;
    $.__views.__alloyId38 = Ti.UI.createView({
        backgroundImage: "/images/ic_mygroup.png",
        left: 10,
        height: 25,
        width: 36,
        id: "__alloyId38"
    });
    $.__views.myGroups.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 16
        },
        left: 55,
        text: "My Groups",
        id: "__alloyId39"
    });
    $.__views.myGroups.add($.__views.__alloyId39);
    $.__views.familyWallet = Ti.UI.createView({
        left: 0,
        right: 0,
        height: 50,
        id: "familyWallet"
    });
    $.__views.menuContainer.add($.__views.familyWallet);
    onClickMenu ? $.__views.familyWallet.addEventListener("click", onClickMenu) : __defers["$.__views.familyWallet!click!onClickMenu"] = true;
    $.__views.__alloyId40 = Ti.UI.createView({
        backgroundImage: "/images/ic_familywallet.png",
        left: 10,
        height: 22,
        width: 36,
        id: "__alloyId40"
    });
    $.__views.familyWallet.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 16
        },
        left: 55,
        text: "My Family Wallet",
        id: "__alloyId41"
    });
    $.__views.familyWallet.add($.__views.__alloyId41);
    $.__views.notifications = Ti.UI.createView({
        left: 0,
        right: 0,
        height: 50,
        id: "notifications"
    });
    $.__views.menuContainer.add($.__views.notifications);
    onClickMenu ? $.__views.notifications.addEventListener("click", onClickMenu) : __defers["$.__views.notifications!click!onClickMenu"] = true;
    $.__views.__alloyId42 = Ti.UI.createView({
        backgroundImage: "/images/ic_notifications.png",
        left: 10,
        height: 28,
        width: 29,
        id: "__alloyId42"
    });
    $.__views.notifications.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 16
        },
        left: 55,
        text: "Notifications",
        id: "__alloyId43"
    });
    $.__views.notifications.add($.__views.__alloyId43);
    $.__views.notification_number = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontWeight: "bold",
            fontSize: 14
        },
        backgroundImage: "/images/ic_notification_number.png",
        text: "0",
        width: 28,
        height: 21,
        right: 70,
        textAlign: "center",
        id: "notification_number"
    });
    $.__views.notifications.add($.__views.notification_number);
    $.__views.report = Ti.UI.createView({
        left: 0,
        right: 0,
        height: 50,
        id: "report"
    });
    $.__views.menuContainer.add($.__views.report);
    onClickMenu ? $.__views.report.addEventListener("click", onClickMenu) : __defers["$.__views.report!click!onClickMenu"] = true;
    $.__views.__alloyId44 = Ti.UI.createView({
        backgroundImage: "/images/ic_report.png",
        left: 10,
        height: 28,
        width: 29,
        id: "__alloyId44"
    });
    $.__views.report.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 16
        },
        left: 55,
        text: "Report",
        id: "__alloyId45"
    });
    $.__views.report.add($.__views.__alloyId45);
    $.__views.settings = Ti.UI.createView({
        left: 0,
        right: 0,
        height: 50,
        id: "settings"
    });
    $.__views.menuContainer.add($.__views.settings);
    onClickMenu ? $.__views.settings.addEventListener("click", onClickMenu) : __defers["$.__views.settings!click!onClickMenu"] = true;
    $.__views.__alloyId46 = Ti.UI.createView({
        backgroundImage: "/images/ic_settings.png",
        left: 10,
        height: 32,
        width: 30,
        id: "__alloyId46"
    });
    $.__views.settings.add($.__views.__alloyId46);
    $.__views.settings_label = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 16
        },
        left: 55,
        textid: "settings",
        id: "settings_label"
    });
    $.__views.settings.add($.__views.settings_label);
    $.__views.session = Ti.UI.createView({
        left: 0,
        right: 0,
        height: 50,
        id: "session"
    });
    $.__views.menuContainer.add($.__views.session);
    onClickMenu ? $.__views.session.addEventListener("click", onClickMenu) : __defers["$.__views.session!click!onClickMenu"] = true;
    $.__views.session_icon = Ti.UI.createImageView({
        image: "/images/ic_login.png",
        left: 10,
        height: 32,
        width: 30,
        id: "session_icon"
    });
    $.__views.session.add($.__views.session_icon);
    $.__views.session_label = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 16
        },
        left: 55,
        textid: "login",
        id: "session_label"
    });
    $.__views.session.add($.__views.session_label);
    $.__views.__alloyId47 = Ti.UI.createView({
        opacity: .5,
        right: 50,
        width: 22,
        backgroundRepeat: true,
        backgroundImage: "/images/im_shadow_slide_left.png",
        id: "__alloyId47"
    });
    $.__views.LeftBarView.add($.__views.__alloyId47);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    arguments[0] || {};
    var tempOption = "";
    $.backgroundIosBar.height = APP.fixSizeIos7();
    $.menuContainer.top = APP.fixSizeIos7();
    APP.sessionButton = {
        label: $.session_label,
        icon: $.session_icon
    };
    APP.notifications.badge = $.notification_number;
    tempOption = $.myAlerts;
    tempOption.backgroundImage = "/images/bg_dashboard_selector.png";
    exports.highlightNotifications = highlightNotifications;
    __defers["$.__views.myAlerts!click!onClickMenu"] && $.__views.myAlerts.addEventListener("click", onClickMenu);
    __defers["$.__views.myNeighborhoods!click!onClickMenu"] && $.__views.myNeighborhoods.addEventListener("click", onClickMenu);
    __defers["$.__views.myGroups!click!onClickMenu"] && $.__views.myGroups.addEventListener("click", onClickMenu);
    __defers["$.__views.familyWallet!click!onClickMenu"] && $.__views.familyWallet.addEventListener("click", onClickMenu);
    __defers["$.__views.notifications!click!onClickMenu"] && $.__views.notifications.addEventListener("click", onClickMenu);
    __defers["$.__views.report!click!onClickMenu"] && $.__views.report.addEventListener("click", onClickMenu);
    __defers["$.__views.settings!click!onClickMenu"] && $.__views.settings.addEventListener("click", onClickMenu);
    __defers["$.__views.session!click!onClickMenu"] && $.__views.session.addEventListener("click", onClickMenu);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;