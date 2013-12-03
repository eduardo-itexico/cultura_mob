function Controller() {
    function clickActionsBar(e) {
        switch (e.source.id) {
          case "cameraButton":
            var dialog = Titanium.UI.createOptionDialog({
                options: [ "Camera", "Gallery", "Cancel" ],
                cancel: 2
            });
            dialog.show();
            dialog.addEventListener("click", function(e) {
                switch (e.index) {
                  case 0:
                    Ti.Geolocation.getCurrentHeading(function(eHeading) {
                        if (eHeading.error) {
                            var badHeadingAlert = Titanium.UI.createAlertDialog({
                                title: "Photo Upload"
                            });
                            badHeadingAlert.setMessage("Unable to upload photo at this time, please try again later.");
                            badHeadingAlert.show();
                        } else {
                            actual_heading = eHeading.heading;
                            APP.getCurrentLocation(function(coords) {
                                showAndLoadImage(e.index, coords);
                            });
                        }
                    });
                    break;

                  case 1:
                    APP.getCurrentLocation(function(coords) {
                        showAndLoadImage(e.index, coords);
                    });
                }
            });
            break;

          case "configButton":
            APP.popUp({
                controller: "Report/Categories",
                controllerParams: {
                    controller: self,
                    actualCategory: actual_category
                },
                title: "Select a Category",
                container: {
                    width: 300,
                    height: 250
                }
            });
            break;

          case "filesButton":
            APP.popUp({
                controller: "Report/Options",
                controllerParams: {
                    controller: self,
                    rowsSelected: actual_options
                },
                title: "Select a Community",
                container: {
                    width: 300,
                    height: 250
                }
            });
            break;

          case "shareButton":
            APP.getToken({
                openLogin: true,
                callback: uploadContentToServer
            });
        }
    }
    function showAndLoadImage(option_case, coords) {
        actual_coords = coords;
        switch (option_case) {
          case 0:
            Titanium.Media.showCamera({
                success: function(event) {
                    treatPhotography(event, coords);
                },
                cancel: function() {},
                error: function(error) {
                    var a = Titanium.UI.createAlertDialog({
                        title: "Camera"
                    });
                    error.code == Titanium.Media.NO_CAMERA ? a.setMessage("Device does not have camera capabilities") : a.setMessage("Unexpected error: " + error.code);
                    a.show();
                },
                allowImageEditing: true,
                saveToPhotoGallery: true
            });
            break;

          case 1:
            Titanium.Media.openPhotoGallery({
                success: function(event) {
                    treatPhotography(event, coords, true);
                },
                cancel: function() {},
                error: function() {},
                allowEditing: false
            });
        }
    }
    function treatPhotography(event) {
        var imgType = "";
        imgType = event.media.getMimetype().split("/");
        if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO || "JPEG" == imgType[1] || "jpeg" == imgType[1] || "JPG" == imgType[1] || "jpg" == imgType[1] || "PNG" == imgType[1] || "png" == imgType[1]) {
            $.imageCaptured.image = event.media;
            event.cropRect;
            var image = event.media;
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
            var imageView = Titanium.UI.createImageView({
                image: image,
                width: wdt,
                height: hgt
            });
            {
                Ti.UI.createImageView({
                    image: imageView.toBlob(),
                    width: wdt,
                    height: hgt
                });
            }
            image = imageView.toImage();
            actual_image = image;
        } else actual_image = event.media;
    }
    function actualOption(option) {
        actual_options = option;
    }
    function actualCategory(category) {
        actual_category = category;
    }
    function uploadContentToServer(token) {
        var description = $.contentTextArea.value;
        var acategory = actual_category ? actual_category.value : "No Category";
        var authenicationToken = token;
        var shareServerUrl = L("ws_uploadbase") + "?atoken=" + authenicationToken;
        null != actual_coords && (shareServerUrl += "&flat=" + actual_coords.lat + "&flon=" + actual_coords.lon);
        shareServerUrl += "&le=" + (Ti.App.Properties.getBool("lawEnforcementS") ? "Y" : "N") + "&anon=" + (Ti.App.Properties.getBool("anonymousS") ? "Y" : "N") + "&fpCommunity=" + (Ti.App.Properties.getBool("communityS") ? "Y" : "N") + "&fpMedia=" + (Ti.App.Properties.getBool("mediaS") ? "Y" : "N") + "&desc=" + Ti.Network.encodeURIComponent(description) + "&acategory=" + Ti.Network.encodeURIComponent(acategory);
        null != actual_heading && (shareServerUrl += "&magneticHeading=" + actual_heading.magneticHeading + "&trueHeading=" + actual_heading.trueHeading);
        Ti.API.info("shareServerUrl = " + shareServerUrl);
        APP.showActivityindicator();
        var xhr = Titanium.Network.createHTTPClient();
        xhr.onload = function() {
            var temp = this.responseText;
            temp.indexOf("}]}") > -1 && (temp = temp.substring(0, temp.indexOf("}]}") + 3));
            var imageUploadResult = JSON.parse(temp);
            var message = "";
            message = 0 != imageUploadResult.errorcode ? "Upload failed!" : "Upload complete";
            var uploadStatusDialog = Ti.UI.createAlertDialog({
                title: "Photo Upload",
                ok: "OK",
                message: imageUploadResult.message
            });
            uploadStatusDialog.addEventListener("click", function() {
                if (0 == imageUploadResult.errorcode) {
                    APP.hideActivityindicator();
                    APP.handleNavigation("MyNeighborhoods/MyNeighborhoods", {
                        type: 0
                    });
                }
            });
            uploadStatusDialog.show();
        };
        xhr.onerror = function(e) {
            Ti.API.error(JSON.stringify(e));
            var uploadFailedDialog = Ti.UI.createAlertDialog({
                title: "Photo Upload",
                ok: "OK",
                message: "Unable to upload your photo at this time, please try again later."
            });
            uploadFailedDialog.addEventListener("click", function() {});
            uploadFailedDialog.show();
            APP.hideActivityindicator();
        };
        xhr.onsendstream = function() {};
        xhr.open("POST", shareServerUrl);
        xhr.setTimeout(12e4);
        xhr.send({
            File1: actual_image
        });
    }
    function updateView() {
        APP.reportIsOpen = true;
        APP.headerbar.removeAllCustomViews();
        APP.headerbar.setLeftButton(0, false);
        APP.headerbar.setRightButton(0, false);
        APP.headerbar.setLeftButton(APP.OPENMENU, true);
        APP.headerbar.setTitle("Report");
        $.contentTextArea.focus();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Report/Report";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.Report = Ti.UI.createScrollView({
        backgroundColor: "#E7EDF1",
        scrollType: "vertical",
        layout: "vertical",
        id: "Report"
    });
    $.__views.Report && $.addTopLevelView($.__views.Report);
    $.__views.__alloyId191 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_TOP,
        id: "__alloyId191"
    });
    $.__views.Report.add($.__views.__alloyId191);
    $.__views.borderedSquare = Ti.UI.createView({
        left: "5%",
        right: "5%",
        backgroundColor: "#F7F7F7",
        height: "50%",
        layout: "vertical",
        id: "borderedSquare"
    });
    $.__views.Report.add($.__views.borderedSquare);
    $.__views.containerData = Ti.UI.createView({
        layout: "horizontal",
        height: "75%",
        width: "90%",
        top: "5%",
        left: "5%",
        right: "5%",
        backgroundColor: "white",
        id: "containerData"
    });
    $.__views.borderedSquare.add($.__views.containerData);
    $.__views.contentTextArea = Ti.UI.createTextArea({
        textAlign: "left",
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "60%",
        height: "100%",
        id: "contentTextArea"
    });
    $.__views.containerData.add($.__views.contentTextArea);
    $.__views.imageCaptured = Ti.UI.createImageView({
        left: "5%",
        top: "20%",
        width: "30%",
        id: "imageCaptured"
    });
    $.__views.containerData.add($.__views.imageCaptured);
    $.__views.actionsContainer = Ti.UI.createView({
        height: 48,
        top: 5,
        width: "100%",
        id: "actionsContainer"
    });
    $.__views.borderedSquare.add($.__views.actionsContainer);
    clickActionsBar ? $.__views.actionsContainer.addEventListener("click", clickActionsBar) : __defers["$.__views.actionsContainer!click!clickActionsBar"] = true;
    $.__views.cameraButton = Ti.UI.createButton({
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
        width: 36,
        height: 36,
        left: "5%",
        id: "cameraButton"
    });
    $.__views.actionsContainer.add($.__views.cameraButton);
    $.__views.configButton = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bt_setting_report_pressed.png",
        backgroundImage: "/images/bt_setting_report.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        width: 36,
        height: 36,
        left: "25%",
        id: "configButton"
    });
    $.__views.actionsContainer.add($.__views.configButton);
    $.__views.filesButton = Ti.UI.createButton({
        backgroundSelectedImage: "/images/ic_selectcategory_report_pressed.png",
        backgroundImage: "/images/ic_selectcategory_report.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        width: 36,
        height: 36,
        left: "45%",
        id: "filesButton"
    });
    $.__views.actionsContainer.add($.__views.filesButton);
    $.__views.shareButton = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bgBlackOpacity39.png",
        backgroundImage: "/images/transparent.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fotnSize: 16
        },
        width: Ti.UI.SIZE,
        height: 36,
        right: "5%",
        title: "Share",
        id: "shareButton"
    });
    $.__views.actionsContainer.add($.__views.shareButton);
    $.__views.__alloyId192 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        top: 10,
        id: "__alloyId192"
    });
    $.__views.Report.add($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createLabel({
        color: "#F50008",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        shadowColor: "#BFCEEC",
        shadowOffset: {
            x: 1,
            y: 1
        },
        text: "If this is an emergency, DIAL 911",
        id: "__alloyId193"
    });
    $.__views.__alloyId192.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        shadowColor: "#BFCEEC",
        shadowOffset: {
            x: 1,
            y: 1
        },
        text: "Share Suspicious Activity With",
        id: "__alloyId194"
    });
    $.__views.__alloyId192.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 14
        },
        shadowColor: "#BFCEEC",
        shadowOffset: {
            x: 1,
            y: 1
        },
        text: "Your Neighbors",
        id: "__alloyId195"
    });
    $.__views.__alloyId192.add($.__views.__alloyId195);
    $.__views.__alloyId196 = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 14
        },
        shadowColor: "#BFCEEC",
        shadowOffset: {
            x: 1,
            y: 1
        },
        text: "Law Enforcement",
        id: "__alloyId196"
    });
    $.__views.__alloyId192.add($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 14
        },
        shadowColor: "#BFCEEC",
        shadowOffset: {
            x: 1,
            y: 1
        },
        text: "Local Media And",
        id: "__alloyId197"
    });
    $.__views.__alloyId192.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 14
        },
        shadowColor: "#BFCEEC",
        shadowOffset: {
            x: 1,
            y: 1
        },
        text: "Homeland Security",
        id: "__alloyId198"
    });
    $.__views.__alloyId192.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        top: 10,
        id: "__alloyId199"
    });
    $.__views.__alloyId192.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 12
        },
        shadowColor: "#BFCEEC",
        shadowOffset: {
            x: 1,
            y: 1
        },
        text: "Protect your family, neighborhood and our Country",
        id: "__alloyId200"
    });
    $.__views.__alloyId199.add($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 12
        },
        shadowColor: "#BFCEEC",
        shadowOffset: {
            x: 1,
            y: 1
        },
        text: "instantly and anonymously",
        id: "__alloyId201"
    });
    $.__views.__alloyId199.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_BOTTOM,
        id: "__alloyId202"
    });
    $.__views.Report.add($.__views.__alloyId202);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var actual_options = [];
    var actual_category = null;
    var self = this;
    var actual_image = null;
    var actual_coords = null;
    var actual_heading = null;
    APP.reportTxtFld = $.contentTextArea;
    exports.updateView = updateView;
    exports.actualOption = actualOption;
    exports.actualCategory = actualCategory;
    __defers["$.__views.actionsContainer!click!clickActionsBar"] && $.__views.actionsContainer.addEventListener("click", clickActionsBar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;