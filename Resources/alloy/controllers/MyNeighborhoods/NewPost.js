function Controller() {
    function clearHint() {
        $.textFldHide.hintText = $.textFld.value.length > 0 ? "" : "Write your comment";
    }
    function addPhoto() {
        media.getPicture({
            callback: function(_params) {
                image = _params.media;
                isPhoto = 1;
                var hgt = image.height;
                var wdt = image.width;
                if (image.height > image.width) {
                    if (image.height >= 480) {
                        hgt = 480;
                        wdt = 48e3 / image.height * image.width / 100;
                    }
                } else if (image.width >= 480) {
                    wdt = 480;
                    hgt = 48e3 / image.width * image.height / 100;
                }
                image = Ti.UI.createImageView({
                    image: image,
                    width: wdt,
                    height: hgt
                });
                image = Ti.UI.createImageView({
                    image: image.toBlob(),
                    width: wdt,
                    height: hgt
                });
                image = image.toImage();
                $.postImage.image = image;
                return true;
            }
        });
    }
    function normalize() {
        $.textFld.borderWidth = 0;
        return true;
    }
    function selectMessageType() {
        if (1 != args.params.isGroup && 0 == args.params.pknmessage) {
            var dialog = Titanium.UI.createOptionDialog({
                options: tempArr,
                cancel: tempArr.length - 1
            });
            dialog.show();
            dialog.addEventListener("click", function(_event) {
                if (0 == _event.index) {
                    $.messageTypeLabel.text = _event.source.options[_event.index];
                    $.messageTypeLabel.NCTType = tempIndexes[_event.index].NCTType;
                } else if (1 == _event.index) {
                    $.messageTypeLabel.text = _event.source.options[_event.index];
                    $.messageTypeLabel.NCTType = tempIndexes[_event.index].NCTType;
                } else if (2 == _event.index) {
                    $.messageTypeLabel.text = _event.source.options[_event.index];
                    $.messageTypeLabel.NCTType = tempIndexes[_event.index].NCTType;
                } else if (3 == _event.index) {
                    $.messageTypeLabel.text = _event.source.options[_event.index];
                    $.messageTypeLabel.NCTType = tempIndexes[_event.index].NCTType;
                } else if (4 == _event.index) {
                    $.messageTypeLabel.text = _event.source.options[_event.index];
                    $.messageTypeLabel.NCTType = tempIndexes[_event.index].NCTType;
                } else if (5 == _event.index) {
                    $.messageTypeLabel.text = _event.source.options[_event.index];
                    $.messageTypeLabel.NCTType = tempIndexes[_event.index].NCTType;
                } else $.messageTypeLabel.NCTType = 0;
            });
        }
        return true;
    }
    function sendPost() {
        if ("" == $.textFld.value) {
            $.textFld.borderWidth = 1;
            $.textFld.borderColor = "red";
            alert(L("invalid_comment"));
        } else {
            APP.showActivityindicator();
            1 == args.params.isGroup ? APP.getCurrentLocation(function(_event) {
                _event.success ? isPhoto ? postMessagePhoto(_event) : postMessage(_event) : APP.hideActivityindicator();
            }) : isPhoto ? postMessagePhoto({
                lat: args.params.lat,
                lon: args.params.lon
            }) : postMessage({
                lat: args.params.lat,
                lon: args.params.lon
            });
        }
        return true;
    }
    function postMessagePhoto(_event) {
        var shareServerUrl = L("ws_uploadbase") + "?atoken=" + APP.getToken();
        shareServerUrl += "&flat=" + _event.lat + "&flon=" + _event.lon;
        shareServerUrl += "&le=N&anon=N&fpCommunity=Y&fpMedia=N&desc=" + $.textFld.value + "&acategory=&nmparentid=" + (0 != args.params.pknmessage ? args.params.pknmessage : 0);
        shareServerUrl += "&groupid=" + args.params.groupID + "&pknCommtype=" + $.messageTypeLabel.NCTType + "&prioritymessage=" + ($.highPriorSwitch.value ? "Y" : "N") + "&sendnotification=" + ($.notifSwitch.value ? "Y" : "N");
        Ti.API.info("shareServerUrl = " + shareServerUrl);
        var xhr = Titanium.Network.createHTTPClient();
        xhr.onload = function() {
            var temp = this.responseText;
            temp.indexOf("}]}") > -1 && (temp = temp.substring(0, temp.indexOf("}]}") + 3));
            var imageUploadResult = JSON.parse(temp);
            if (0 == imageUploadResult.errorcode) {
                if (0 != args.params.pknmessage) {
                    if (0 != args.params.refButton) {
                        var tempText = args.params.refButton.text.split(" ");
                        args.params.refButton.text = parseInt(tempText[0]) + 1 + " comments";
                    }
                    args.params.controller.getMessages({
                        lat: 0,
                        lon: 0,
                        faname: "",
                        pkorgGroups: 0,
                        pknmessage: args.params.pknmessage
                    });
                } else APP.currentController.reloadMessages();
                APP.popOut();
            } else APP.hideActivityindicator();
            var uploadStatusDialog = Ti.UI.createAlertDialog({
                title: "Photo Upload",
                ok: "OK",
                message: imageUploadResult.message
            });
            uploadStatusDialog.show();
        };
        xhr.onerror = function() {
            APP.hideActivityindicator();
            var uploadFailedDialog = Ti.UI.createAlertDialog({
                title: "Photo Upload",
                ok: "OK",
                message: "Unable to upload your photo at this time, please try again later."
            });
            uploadFailedDialog.show();
        };
        xhr.onsendstream = function(e) {
            Ti.API.info("ONSENDSTREAM - PROGRESS: " + e.progress);
            $.streaming.width = 100 * parseFloat(e.progress) + "%";
        };
        xhr.open("POST", shareServerUrl);
        xhr.setTimeout(12e4);
        xhr.send({
            File1: image
        });
    }
    function postMessage(_event) {
        var dataTemp = {
            url: L("ws_putcommunity"),
            type: "GET",
            format: "JSON",
            data: {
                atoken: APP.getToken({
                    openLogin: false
                }) ? APP.getToken({
                    openLogin: false
                }) : "",
                groupid: args.params.groupID,
                flat: _event.lat,
                flon: _event.lon,
                usehome: 0,
                nmessage: $.textFld.value,
                nmparentid: 0 != args.params.pknmessage ? args.params.pknmessage : 0,
                fpcommunity: "Y",
                nmcrimedataid: 0,
                prioritymessage: $.highPriorSwitch.value ? "Y" : "N",
                sendnotification: $.notifSwitch.value ? "Y" : "N",
                pknCommtype: $.messageTypeLabel.NCTType
            }
        };
        APP.http.request(dataTemp, function(_result) {
            Ti.API.info("-->" + JSON.stringify(_result));
            if (1 == _result._result) if (0 == _result._data.errorcode) {
                if (0 != args.params.pknmessage) {
                    if (0 != args.params.refButton) {
                        var tempText = args.params.refButton.text.split(" ");
                        args.params.refButton.text = parseInt(tempText[0]) + 1 + " comments";
                    }
                    args.params.controller.getMessages({
                        lat: 0,
                        lon: 0,
                        faname: "",
                        pkorgGroups: 0,
                        pknmessage: args.params.pknmessage
                    });
                } else APP.currentController.reloadMessages();
                APP.popOut();
            } else {
                APP.hideActivityindicator();
                alert(_result._data.message);
            } else {
                APP.hideActivityindicator();
                alert("Message could not be sent, please try again.");
            }
        });
    }
    function closePopup() {
        APP.popOut();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "MyNeighborhoods/NewPost";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.NewPost = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "NewPost"
    });
    $.__views.NewPost && $.addTopLevelView($.__views.NewPost);
    $.__views.__alloyId157 = Ti.UI.createView({
        backgroundColor: "white",
        height: 195,
        top: 0,
        left: 5,
        right: 5,
        id: "__alloyId157"
    });
    $.__views.NewPost.add($.__views.__alloyId157);
    $.__views.streaming = Ti.UI.createView({
        top: 0,
        left: 0,
        backgroundColor: "cyan",
        height: 4,
        width: "0%",
        borderRadius: 3,
        id: "streaming"
    });
    $.__views.__alloyId157.add($.__views.streaming);
    $.__views.textFldHide = Ti.UI.createTextField({
        backgroundImage: "/images/transparent.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 35,
        paddingLeft: 5,
        color: "#333",
        font: {
            fontSize: 14
        },
        left: 5,
        right: 105,
        top: 5,
        hintText: "Write your comment",
        backgroundColor: "transparent",
        id: "textFldHide"
    });
    $.__views.__alloyId157.add($.__views.textFldHide);
    $.__views.__alloyId158 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/ic_picture_report_pressed.png",
        backgroundImage: "/images/ic_picture_report.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        height: 36,
        width: 36,
        top: 5,
        right: 5,
        id: "__alloyId158"
    });
    $.__views.__alloyId157.add($.__views.__alloyId158);
    addPhoto ? $.__views.__alloyId158.addEventListener("click", addPhoto) : __defers["$.__views.__alloyId158!click!addPhoto"] = true;
    $.__views.postImage = Ti.UI.createImageView({
        top: 45,
        right: 5,
        bottom: 45,
        width: 90,
        borderRadius: 5,
        id: "postImage"
    });
    $.__views.__alloyId157.add($.__views.postImage);
    $.__views.high_prior = Ti.UI.createView({
        backgroundColor: "transparent",
        borderRadius: 5,
        height: Ti.UI.SIZE,
        bottom: 5,
        id: "high_prior"
    });
    $.__views.__alloyId157.add($.__views.high_prior);
    $.__views.highPrior = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 13
        },
        textid: "high_priority",
        left: 5,
        bottom: 0,
        id: "highPrior"
    });
    $.__views.high_prior.add($.__views.highPrior);
    $.__views.highPriorSwitch = Ti.UI.createSwitch({
        value: false,
        right: 5,
        id: "highPriorSwitch"
    });
    $.__views.high_prior.add($.__views.highPriorSwitch);
    $.__views.textFld = Ti.UI.createTextArea({
        textAlign: "left",
        color: "#333",
        font: {
            fontSize: 14
        },
        left: 5,
        right: 95,
        top: 5,
        bottom: 25,
        backgroundColor: "transparent",
        id: "textFld"
    });
    $.__views.__alloyId157.add($.__views.textFld);
    normalize ? $.__views.textFld.addEventListener("focus", normalize) : __defers["$.__views.textFld!focus!normalize"] = true;
    clearHint ? $.__views.textFld.addEventListener("change", clearHint) : __defers["$.__views.textFld!change!clearHint"] = true;
    $.__views.messageTypeContainer = Ti.UI.createView({
        right: 5,
        left: 5,
        height: 40,
        backgroundColor: "white",
        id: "messageTypeContainer"
    });
    $.__views.NewPost.add($.__views.messageTypeContainer);
    selectMessageType ? $.__views.messageTypeContainer.addEventListener("click", selectMessageType) : __defers["$.__views.messageTypeContainer!click!selectMessageType"] = true;
    $.__views.messageTypeLabel = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        text: "Message Type",
        left: 5,
        id: "messageTypeLabel",
        NCTType: "0"
    });
    $.__views.messageTypeContainer.add($.__views.messageTypeLabel);
    $.__views.messageTypeArrow = Ti.UI.createImageView({
        image: "/images/ic_down_arrow.png",
        right: 15,
        width: 12,
        height: 8,
        id: "messageTypeArrow"
    });
    $.__views.messageTypeContainer.add($.__views.messageTypeArrow);
    $.__views.notifLbl = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 13
        },
        text: "Send Mobile Notification",
        left: 5,
        id: "notifLbl"
    });
    $.__views.messageTypeContainer.add($.__views.notifLbl);
    $.__views.notifSwitch = Ti.UI.createSwitch({
        right: 5,
        value: false,
        id: "notifSwitch"
    });
    $.__views.messageTypeContainer.add($.__views.notifSwitch);
    $.__views.__alloyId159 = Ti.UI.createView({
        height: 50,
        id: "__alloyId159"
    });
    $.__views.NewPost.add($.__views.__alloyId159);
    $.__views.__alloyId160 = Ti.UI.createButton({
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
        titleid: "cancel",
        left: 5,
        right: "51%",
        id: "__alloyId160"
    });
    $.__views.__alloyId159.add($.__views.__alloyId160);
    closePopup ? $.__views.__alloyId160.addEventListener("click", closePopup) : __defers["$.__views.__alloyId160!click!closePopup"] = true;
    $.__views.__alloyId161 = Ti.UI.createButton({
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
        titleid: "send",
        right: 5,
        left: "51%",
        id: "__alloyId161"
    });
    $.__views.__alloyId159.add($.__views.__alloyId161);
    sendPost ? $.__views.__alloyId161.addEventListener("click", sendPost) : __defers["$.__views.__alloyId161!click!sendPost"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var media = require("/media");
    var args = arguments[0] || {};
    var tempArr = [];
    var tempIndexes = [];
    var isPhoto = 0;
    var image = "";
    setTimeout(function() {
        $.textFld.focus();
    }, 500);
    if (1 == args.params.isGroup) {
        if ("N" == args.params.isAdmin) {
            $.notifLbl.visible = false;
            $.notifSwitch.visible = false;
            $.messageTypeContainer.visible = false;
        }
        $.messageTypeLabel.visible = false;
        $.messageTypeArrow.visible = false;
    } else {
        $.notifLbl.visible = false;
        $.notifSwitch.visible = false;
    }
    if (0 != args.params.pknmessage) {
        $.notifLbl.visible = false;
        $.notifSwitch.visible = false;
        $.messageTypeContainer.visible = false;
        $.messageTypeLabel.visible = false;
        $.messageTypeArrow.visible = false;
        $.high_prior.visible = false;
    }
    var dataTemp = {
        url: L("ws_getmessagetype"),
        type: "GET",
        format: "JSON",
        data: {
            atoken: APP.getToken({
                openLogin: false
            }) ? APP.getToken({
                openLogin: false
            }) : ""
        }
    };
    APP.http.request(dataTemp, function(_result) {
        if (1 == _result._result && 0 == _result._data.errorcode) {
            tempArr = [];
            tempIndexes = [];
            for (var i = 0; _result._data.data.length > i; i++) {
                tempIndexes.push({
                    NCTType: _result._data.data[i].pknCommtype
                });
                tempArr.push(_result._data.data[i].NCTType);
            }
            tempArr.push("Cancel");
        }
    });
    __defers["$.__views.__alloyId158!click!addPhoto"] && $.__views.__alloyId158.addEventListener("click", addPhoto);
    __defers["$.__views.textFld!focus!normalize"] && $.__views.textFld.addEventListener("focus", normalize);
    __defers["$.__views.textFld!change!clearHint"] && $.__views.textFld.addEventListener("change", clearHint);
    __defers["$.__views.messageTypeContainer!click!selectMessageType"] && $.__views.messageTypeContainer.addEventListener("click", selectMessageType);
    __defers["$.__views.__alloyId160!click!closePopup"] && $.__views.__alloyId160.addEventListener("click", closePopup);
    __defers["$.__views.__alloyId161!click!sendPost"] && $.__views.__alloyId161.addEventListener("click", sendPost);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;