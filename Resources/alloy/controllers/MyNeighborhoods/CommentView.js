function Controller() {
    function openNextWindow() {
        0 == args.pknmessage && APP.openWindow({
            controller: "MyNeighborhoods/MyNeighborhoods",
            controllerParams: {
                pknmessage: args._data.pknmessage,
                refButton: $.repliesLbl
            }
        });
    }
    function openURL() {
        APP.openWindow({
            controller: "Widgets/Browser",
            controllerParams: {
                url: args._data.nmURL,
                title: args._data.nmHeadline
            }
        });
    }
    function goTo() {
        args._data.nmHeadline.length > 1 ? openURL() : openNextWindow();
    }
    function openOptions() {
        APP.getToken({
            openLogin: true
        }) && null == APP.popUpController && APP.popUp({
            title: "Options",
            container: {
                width: 300,
                height: 300
            },
            controller: "MyNeighborhoods/Options",
            controllerParams: {
                data: args._data,
                isGroup: 0,
                groupID: 0,
                view: $.commentView,
                refButton: $.repliesLbl,
                callback: function() {
                    return true;
                }
            }
        });
    }
    function likeComment() {
        var isFollowing = "Y";
        var dataTemp = {
            url: L("ws_follow"),
            type: "GET",
            format: "JSON",
            data: {
                atoken: APP.getToken({
                    openLogin: false
                }) ? APP.getToken({
                    openLogin: false
                }) : "",
                groupID: 0,
                follow: isFollowing,
                pknmessage: args._data.pknmessage
            }
        };
        APP.http.request(dataTemp, function(_result) {
            if (1 == _result._result) if (0 == _result._data.errorcode) {
                "Y" == isFollowing && (args._data.UserFollowing = "Y");
                alert("You are now following this thread");
            } else alert(_result._data.message); else alert("Message could not be sent, please try again.");
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "MyNeighborhoods/CommentView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.commentView = Ti.UI.createView({
        backgroundColor: "white",
        left: 10,
        right: 10,
        top: 10,
        borderColor: "#cccccc",
        borderWidth: 1,
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "commentView"
    });
    $.__views.commentView && $.addTopLevelView($.__views.commentView);
    $.__views.__alloyId158 = Ti.UI.createView({
        top: 5,
        left: 5,
        right: 5,
        height: 60,
        id: "__alloyId158"
    });
    $.__views.commentView.add($.__views.__alloyId158);
    $.__views.imageUser = Ti.UI.createImageView({
        left: 0,
        width: 60,
        id: "imageUser"
    });
    $.__views.__alloyId158.add($.__views.imageUser);
    $.__views.titleLbl = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: 16
        },
        left: 70,
        top: 10,
        id: "titleLbl"
    });
    $.__views.__alloyId158.add($.__views.titleLbl);
    $.__views.subTitleLbl = Ti.UI.createLabel({
        color: "#8b8b8b",
        font: {
            fontSize: 14
        },
        top: 27,
        left: 70,
        id: "subTitleLbl"
    });
    $.__views.__alloyId158.add($.__views.subTitleLbl);
    $.__views.commentOptions = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bt_down_arrow_pressed.png",
        backgroundImage: "/images/bt_down_arrow.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        top: 3,
        right: 3,
        width: 36,
        height: 36,
        id: "commentOptions"
    });
    $.__views.__alloyId158.add($.__views.commentOptions);
    openOptions ? $.__views.commentOptions.addEventListener("click", openOptions) : __defers["$.__views.commentOptions!click!openOptions"] = true;
    $.__views.__alloyId159 = Ti.UI.createView({
        left: 5,
        top: 10,
        right: 5,
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId159"
    });
    $.__views.commentView.add($.__views.__alloyId159);
    $.__views.hrefLbl = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        left: 0,
        visible: false,
        text: "Go to Full Story",
        id: "hrefLbl"
    });
    $.__views.__alloyId159.add($.__views.hrefLbl);
    openURL ? $.__views.hrefLbl.addEventListener("click", openURL) : __defers["$.__views.hrefLbl!click!openURL"] = true;
    $.__views.textLbl = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        top: 5,
        left: 0,
        id: "textLbl"
    });
    $.__views.__alloyId159.add($.__views.textLbl);
    goTo ? $.__views.textLbl.addEventListener("click", goTo) : __defers["$.__views.textLbl!click!goTo"] = true;
    $.__views.commentImage = Ti.UI.createImageView({
        top: 5,
        left: 0,
        right: 0,
        visible: false,
        id: "commentImage"
    });
    $.__views.__alloyId159.add($.__views.commentImage);
    goTo ? $.__views.commentImage.addEventListener("click", goTo) : __defers["$.__views.commentImage!click!goTo"] = true;
    $.__views.commentFooter = Ti.UI.createView({
        top: 10,
        left: 5,
        right: 5,
        backgroundColor: "transparent",
        height: 42,
        id: "commentFooter"
    });
    $.__views.commentView.add($.__views.commentFooter);
    $.__views.__alloyId160 = Ti.UI.createView({
        left: 0,
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        id: "__alloyId160"
    });
    $.__views.commentFooter.add($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/ic_like_pressed.png",
        backgroundImage: "/images/ic_like.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        left: 0,
        bottom: 10,
        width: 36,
        height: 36,
        id: "__alloyId161"
    });
    $.__views.__alloyId160.add($.__views.__alloyId161);
    likeComment ? $.__views.__alloyId161.addEventListener("click", likeComment) : __defers["$.__views.__alloyId161!click!likeComment"] = true;
    $.__views.likeLbl = Ti.UI.createLabel({
        color: "#8b8b8b",
        font: {
            fontSize: 10
        },
        left: 23,
        visible: false,
        text: "13 likes",
        id: "likeLbl"
    });
    $.__views.__alloyId160.add($.__views.likeLbl);
    $.__views.__alloyId162 = Ti.UI.createView({
        right: 0,
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        id: "__alloyId162"
    });
    $.__views.commentFooter.add($.__views.__alloyId162);
    openNextWindow ? $.__views.__alloyId162.addEventListener("click", openNextWindow) : __defers["$.__views.__alloyId162!click!openNextWindow"] = true;
    $.__views.repliesLbl = Ti.UI.createLabel({
        color: "#8b8b8b",
        font: {
            fontSize: 10
        },
        right: 36,
        id: "repliesLbl"
    });
    $.__views.__alloyId162.add($.__views.repliesLbl);
    $.__views.__alloyId163 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/ic_comment_pressed.png",
        backgroundImage: "/images/ic_comment.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        right: 0,
        bottom: 10,
        height: 36,
        width: 36,
        id: "__alloyId163"
    });
    $.__views.__alloyId162.add($.__views.__alloyId163);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    if (0 != args.pknmessage && args.isFirst) {
        $.commentOptions.visible = false;
        $.commentFooter.height = 0;
        $.imageUser.image = args._data.fpicture.length > 7 ? args._data.fpicture : "";
        $.titleLbl.text = args._data.falias;
        $.subTitleLbl.text = args._data.nmtimestamp;
        $.hrefLbl.visible = false;
        $.hrefLbl.text = "";
        $.textLbl.text = args._data.nmessage;
        if (args._data.nmFamilyPicture.length > 7) {
            $.commentImage.visible = true;
            $.commentImage.image = args._data.nmFamilyPicture.length > 7 ? args._data.nmFamilyPicture : "";
        }
    } else if (0 != args.pknmessage) {
        $.commentOptions.visible = false;
        $.commentFooter.height = 0;
        $.imageUser.image = args._data.fpicture1.length > 7 ? args._data.fpicture1 : "";
        $.titleLbl.text = args._data.falias1;
        $.subTitleLbl.text = args._data.nmtimestamp1;
        $.hrefLbl.visible = false;
        $.hrefLbl.text = "";
        $.textLbl.text = args._data.nmessage1;
        if (args._data.nmFamilyPicture1.length > 7) {
            $.commentImage.visible = true;
            $.commentImage.image = args._data.nmFamilyPicture1.length > 7 ? args._data.nmFamilyPicture1 : "";
        }
    } else {
        $.imageUser.image = args._data.fpicture.length > 7 ? args._data.fpicture : "";
        $.titleLbl.text = args._data.falias;
        $.subTitleLbl.text = args._data.nmlatestdate;
        args._data.nmHeadline.length > 1 && ($.hrefLbl.visible = true);
        $.textLbl.color = "Y" == args._data.AlertMessage ? "red" : "#333";
        $.textLbl.text = args._data.nmessage;
        if (args._data.nmFamilyPicture.length > 7) {
            $.commentImage.visible = true;
            $.commentImage.image = args._data.nmFamilyPicture.length > 7 ? args._data.nmFamilyPicture : "";
        }
        $.repliesLbl.text = args._data.total + " comments";
    }
    __defers["$.__views.commentOptions!click!openOptions"] && $.__views.commentOptions.addEventListener("click", openOptions);
    __defers["$.__views.hrefLbl!click!openURL"] && $.__views.hrefLbl.addEventListener("click", openURL);
    __defers["$.__views.textLbl!click!goTo"] && $.__views.textLbl.addEventListener("click", goTo);
    __defers["$.__views.commentImage!click!goTo"] && $.__views.commentImage.addEventListener("click", goTo);
    __defers["$.__views.__alloyId161!click!likeComment"] && $.__views.__alloyId161.addEventListener("click", likeComment);
    __defers["$.__views.__alloyId162!click!openNextWindow"] && $.__views.__alloyId162.addEventListener("click", openNextWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;