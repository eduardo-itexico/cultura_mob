function Controller() {
    function start() {
        APP.openCloseMenu();
        APP.handleNavigation("MyNeighborhoods/MyNeighborhoods", {
            type: 0,
            fake: [ {
                total: "0",
                cdagency: "",
                nmlatestdate: "11/8/2013 8:20:15 AM",
                miles: "4.3684",
                pknmessage: "250675341",
                pknmessage1: "0",
                pkFamily: "250266019",
                pkFamily1: "0",
                nmessage: "202 Visits From Police",
                nmtimestamp: "11/8/2013 8:20:15 AM",
                fpicture: "https://alertid.com/files/uploads/alertidmedia/alertidmediaMedium.png",
                falias: "AlertIDMedia",
                nmessage1: "",
                nmtimestamp1: "1/1/1900",
                falias1: "",
                fpicture1: "",
                cdcadid: "0",
                ncttype: "",
                nmFamilyPicture: "",
                nmFamilyPicture1: "",
                AlertMessage: "N",
                UserFollowing: "N",
                ftoken: "1E3F4517A76A9",
                ftoken1: "",
                nmHeadline: "Please help to find my iphone",
                nmURL: "http://sfappeal.com/2013/11/sf-files-suit-against-internet-cafe-known-for-illegal-gambling-202-visits-from-police/"
            }, {
                total: "0",
                cdagency: "",
                nmlatestdate: "11/8/2013 8:20:15 AM",
                miles: "4.3684",
                pknmessage: "250675341",
                pknmessage1: "0",
                pkFamily: "250266019",
                pkFamily1: "0",
                nmessage: "SF Files Suit Against Internet Cafe Known For Illegal Gambling  202 Visits From Police",
                nmtimestamp: "11/8/2013 8:20:15 AM",
                fpicture: "https://alertid.com/files/uploads/alertidmedia/alertidmediaMedium.png",
                falias: "AlertIDMedia",
                nmessage1: "",
                nmtimestamp1: "1/1/1900",
                falias1: "",
                fpicture1: "",
                cdcadid: "0",
                ncttype: "",
                nmFamilyPicture: "https://alertid.com/files/uploads/alertidmedia/pcar.jpg",
                nmFamilyPicture1: "",
                AlertMessage: "N",
                UserFollowing: "N",
                ftoken: "1E3F4517A76A9",
                ftoken1: "",
                nmHeadline: "SF Files Suit Against Internet Cafe Known For Illegal Gambling, 202 Visits From Police",
                nmURL: "http://sfappeal.com/2013/11/sf-files-suit-against-internet-cafe-known-for-illegal-gambling-202-visits-from-police/"
            } ]
        });
        APP.animation.slideIn($.options, {
            side: "right",
            duration: 250,
            sideValue: 5,
            offset: 10
        });
        APP.animation.slideIn($.like, {
            side: "left",
            duration: 250,
            sideValue: 5,
            offset: 10
        });
        APP.animation.slideIn($.reply, {
            side: "right",
            duration: 250,
            sideValue: 5,
            offset: 10
        });
        APP.animation.slideIn($.add, {
            side: "left",
            duration: 250,
            sideValue: 7,
            offset: 10
        });
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Walkthru/MyNeighborhoods";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        zIndex: 9999999,
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.background = Ti.UI.createView({
        backgroundColor: "black",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        opacity: .7,
        id: "background"
    });
    $.__views.container.add($.__views.background);
    $.__views.options = Ti.UI.createImageView({
        image: "/images/Walkthru/ic_message_options.png",
        top: 64,
        right: "100%",
        id: "options"
    });
    $.__views.container.add($.__views.options);
    $.__views.like = Ti.UI.createImageView({
        image: "/images/Walkthru/ic_like.png",
        top: 200,
        left: "100%",
        id: "like"
    });
    $.__views.container.add($.__views.like);
    $.__views.reply = Ti.UI.createImageView({
        image: "/images/Walkthru/ic_reply.png",
        top: 185,
        right: "100%",
        id: "reply"
    });
    $.__views.container.add($.__views.reply);
    $.__views.add = Ti.UI.createImageView({
        image: "/images/Walkthru/ic_add_.png",
        left: "100%",
        bottom: 5,
        id: "add"
    });
    $.__views.container.add($.__views.add);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    arguments[0] || {};
    $.options.top = APP.fixSizeIos7($.options.top);
    $.like.top = APP.fixSizeIos7($.like.top);
    $.reply.top = APP.fixSizeIos7($.reply.top);
    $.container.addEventListener("click", function() {
        APP.walkthru.openNext();
        APP.masterWindow.getView().remove($.container);
        return true;
    });
    exports.start = start;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;