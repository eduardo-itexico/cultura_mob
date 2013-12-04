function Controller() {
    function onClickMenu() {
        highligthSelection(this);
        switch (this.id) {
          case "avanzada":
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
                tempOption = self;
                tempOption.backgroundImage = "/images/transparent.png";
                tempOption.backgroundImage = "/images/bg_dashboard_selector.png";
            }
        } else {
            tempOption = $.myAlerts;
            tempOption.backgroundImage = "/images/transparent.png";
            tempOption.backgroundImage = "/images/bg_dashboard_selector.png";
        }
        return true;
    }
    function highlightNotifications() {
        tempOption = $.notifications;
        tempOption.backgroundImage = "/images/transparent.png";
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
    $.__views.lsitado = Ti.UI.createView({
        left: 0,
        right: 0,
        height: 50,
        id: "lsitado"
    });
    $.__views.menuContainer.add($.__views.lsitado);
    onClickMenu ? $.__views.lsitado.addEventListener("click", onClickMenu) : __defers["$.__views.lsitado!click!onClickMenu"] = true;
    $.__views.__alloyId34 = Ti.UI.createView({
        backgroundImage: "/images/ic_alerts.png",
        left: 10,
        height: 27,
        width: 27,
        id: "__alloyId34"
    });
    $.__views.lsitado.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 16
        },
        left: 55,
        text: "Listado",
        id: "__alloyId35"
    });
    $.__views.lsitado.add($.__views.__alloyId35);
    $.__views.avanzada = Ti.UI.createView({
        left: 0,
        right: 0,
        height: 50,
        id: "avanzada"
    });
    $.__views.menuContainer.add($.__views.avanzada);
    onClickMenu ? $.__views.avanzada.addEventListener("click", onClickMenu) : __defers["$.__views.avanzada!click!onClickMenu"] = true;
    $.__views.__alloyId36 = Ti.UI.createView({
        backgroundImage: "/images/ic_my_neighborhoods_dashboard.png",
        left: 10,
        width: 36,
        height: 26,
        id: "__alloyId36"
    });
    $.__views.avanzada.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 16
        },
        left: 55,
        text: "Avanzada",
        id: "__alloyId37"
    });
    $.__views.avanzada.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createView({
        opacity: .5,
        right: 50,
        width: 22,
        backgroundRepeat: true,
        backgroundImage: "/images/im_shadow_slide_left.png",
        id: "__alloyId38"
    });
    $.__views.LeftBarView.add($.__views.__alloyId38);
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
    exports.highlightNotifications = highlightNotifications;
    __defers["$.__views.lsitado!click!onClickMenu"] && $.__views.lsitado.addEventListener("click", onClickMenu);
    __defers["$.__views.avanzada!click!onClickMenu"] && $.__views.avanzada.addEventListener("click", onClickMenu);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;