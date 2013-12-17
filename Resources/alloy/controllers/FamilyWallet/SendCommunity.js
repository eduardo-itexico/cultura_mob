function Controller() {
    function cancelWindow() {
        APP.closeWindow();
    }
    function sendInfo() {
        APP.closeWindow();
        var notificationDialog = Ti.UI.createAlertDialog({
            title: "AlertID",
            message: "For an emergency always call 911.  Posting this family member’s profile to the community will send his/her picture, description details and contact information to your neighborhood.  This post may be removed at any time and should be removed when the person is found.   Have you reviewed the profile information?",
            buttonNames: [ "Cancel", "Confirm" ]
        });
        notificationDialog.addEventListener("click", function(e) {
            if (1 == e.index) {
                true == $.currentSwt.value && sendCurrentLocation();
                true == $.homeSwt.value && APP.getCurrentLocation(sendUploadBase);
            }
        });
        notificationDialog.show();
    }
    function sendCurrentLocation() {
        APP.showActivityindicator();
        Ti.Geolocation.purpose = "AlertID Threat Level";
        Titanium.Geolocation.preferredProvider = Titanium.Geolocation.PROVIDER_GPS;
        Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_KILOMETER;
        Titanium.Geolocation.distanceFilter = 50;
        if (false === Titanium.Geolocation.locationServicesEnabled && false) {
            APP.hideActivityindicator();
            var notificationDialog = Ti.UI.createAlertDialog({
                title: "AlertID",
                message: "Please check your Wi-Fi and GPS connection in order to use AlertID app.",
                buttonNames: [ "Open Settings" ]
            });
            notificationDialog.addEventListener("click", function(e) {
                if (0 === e.index) {
                    var settingsIntent = Titanium.Android.createIntent({
                        action: "android.settings.LOCATION_SOURCE_SETTINGS"
                    });
                    Ti.Android.currentActivity.startActivity(settingsIntent);
                }
            });
            notificationDialog.show();
        } else {
            var authorization = Titanium.Geolocation.locationServicesAuthorization;
            if (authorization == Titanium.Geolocation.AUTHORIZATION_DENIED && true) {
                APP.hideActivityindicator();
                Ti.UI.createAlertDialog({
                    title: "AlertID",
                    message: "AlertID is turned it off from running geolocation services.\n Please turn it on from the location services."
                }).show();
            } else if (authorization == Titanium.Geolocation.AUTHORIZATION_RESTRICTED && true) {
                APP.hideActivityindicator();
                Ti.UI.createAlertDialog({
                    title: "AlertID",
                    message: "Your system has disallowed AlertID from running geolocation services."
                }).show();
            } else APP.getCurrentLocation(sendUploadBase);
        }
    }
    function sendUploadBase(_coords) {
        var e_body = "The following family member is missing.  Please help us locate them.  If you have any information, please reply to this post. \n \n ";
        e_body += "First Name: " + member.f_name + " \n ";
        e_body += "Last Name: " + member.l_name + " \n ";
        e_body += "Middle Name: " + member.m_name + " \n ";
        e_body += "Nick Name: " + member.n_name + " \n ";
        e_body += "Birthdate: " + member.birthdate + " \n ";
        e_body += "Gender: " + member.gender + " \n ";
        e_body += "Height: " + member.height + " \n ";
        e_body += "Weight: " + member.weight + " \n ";
        e_body += "Hair Color: " + member.hair + " \n ";
        e_body += "Eye Color: " + member.eye + " \n ";
        e_body += "Birth City: " + member.birthcity + " \n ";
        e_body += "Glasses: " + member.glasses + " \n ";
        e_body += "Identifying Marks: " + member.marks + " \n ";
        e_body += "\n Contact Information \n ";
        e_body += "Address 1: " + member.address1 + " \n ";
        e_body += "Address 2: " + member.address2 + " \n ";
        e_body += "City: " + member.city + " \n ";
        e_body += "State: " + member.state + " \n ";
        e_body += "Zip: " + member.zip + " \n ";
        e_body += "Home Phone: " + member.h_phone + " \n ";
        e_body += "Cell Phone: " + member.cell_phone + " \n ";
        e_body += "\n Guardian Information \n ";
        e_body += "Name 1: " + member.name1 + " \n ";
        e_body += "Phone: " + member.phone1 + " \n ";
        e_body += "Name 2: " + member.name2 + " \n ";
        e_body += "Phone: " + member.phone2 + " \n ";
        if (member.m_photo.length > 5) {
            APP.showActivityindicator();
            var shareServerUrl = "https://alertid.com/apps/upload-baseV7.asp?atoken=" + Ti.App.Properties.getString("user_token");
            shareServerUrl += "&flat=" + _coords.lat + "&flon=" + _coords.lon;
            shareServerUrl += "&le=N&anon=N&fpCommunity=Y&fpMedia=N&desc=" + e_body + "&acategory=";
            shareServerUrl += "&groupid=0&pknCommtype=389&prioritymessage=N&sendnotification=N";
            Ti.API.info("shareServerUrl = " + shareServerUrl);
            var xhr = Titanium.Network.createHTTPClient();
            xhr.onload = function() {
                APP.hideActivityindicator();
                var temp = this.responseText;
                Ti.API.info("temp = " + temp);
                temp.indexOf("}]}") > -1 && (temp = temp.substring(0, temp.indexOf("}]}") + 3));
                var imageUploadResult = JSON.parse(temp);
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
            };
            xhr.open("POST", shareServerUrl);
            xhr.setTimeout(12e4);
            xhr.send({
                File1: member.blobimage
            });
        } else {
            var dataTemp = {
                atoken: Ti.App.Properties.getString("user_token"),
                groupid: "",
                flat: _coords.lat,
                flon: _coords.lon,
                usehome: 0,
                nmessage: e_body,
                nmparentid: 0,
                fpcommunity: "Y",
                nmcrimedataid: 0,
                prioritymessage: "N",
                sendnotification: "N",
                pknCommtype: 389
            };
            APP.http.request({
                url: L("ws_sendcoumminty"),
                type: "GET",
                format: "JSON",
                data: dataTemp
            }, function(_result) {
                0 == _result._result ? alert(L("something_wrong")) : 0 != _result._data.errorcode ? alert(L("something_wrong")) : 0 != _result._data.errorcode ? alert(_result._data.message) : alert("Message sent successful.");
                return true;
            });
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "FamilyWallet/SendCommunity";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.SendCommunity = Ti.UI.createView({
        id: "SendCommunity"
    });
    $.__views.SendCommunity && $.addTopLevelView($.__views.SendCommunity);
    $.__views.__alloyId28 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_TOP,
        id: "__alloyId28"
    });
    $.__views.SendCommunity.add($.__views.__alloyId28);
    $.__views.dialogBox = Ti.UI.createView({
        width: 288,
        height: 154,
        layout: "vertical",
        backgroundImage: "/images/Messagedialog.png",
        id: "dialogBox"
    });
    $.__views.SendCommunity.add($.__views.dialogBox);
    $.__views.titleDialog = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontWeight: "bold",
            fontSize: 19
        },
        text: "Please choose a location(s).",
        id: "titleDialog"
    });
    $.__views.dialogBox.add($.__views.titleDialog);
    $.__views.__alloyId29 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 50,
        id: "__alloyId29"
    });
    $.__views.dialogBox.add($.__views.__alloyId29);
    $.__views.currentLocation = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 14
        },
        left: 20,
        top: 10,
        width: 170,
        text: "my current location",
        id: "currentLocation"
    });
    $.__views.__alloyId29.add($.__views.currentLocation);
    $.__views.currentSwt = Ti.UI.createSwitch({
        id: "currentSwt",
        value: "false"
    });
    $.__views.__alloyId29.add($.__views.currentSwt);
    $.__views.__alloyId30 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 50,
        id: "__alloyId30"
    });
    $.__views.dialogBox.add($.__views.__alloyId30);
    $.__views.homeLocation = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 14
        },
        left: 20,
        top: 10,
        width: 170,
        text: "my home location",
        id: "homeLocation"
    });
    $.__views.__alloyId30.add($.__views.homeLocation);
    $.__views.homeSwt = Ti.UI.createSwitch({
        id: "homeSwt",
        value: "false"
    });
    $.__views.__alloyId30.add($.__views.homeSwt);
    $.__views.__alloyId31 = Ti.UI.createView({
        id: "__alloyId31"
    });
    $.__views.dialogBox.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontWeight: "bold",
            fontSize: 21
        },
        left: 36,
        text: "Cancel",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    cancelWindow ? $.__views.__alloyId32.addEventListener("click", cancelWindow) : __defers["$.__views.__alloyId32!click!cancelWindow"] = true;
    $.__views.__alloyId33 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontWeight: "bold",
            fontSize: 21
        },
        left: 198,
        text: "Ok",
        id: "__alloyId33"
    });
    $.__views.__alloyId31.add($.__views.__alloyId33);
    sendInfo ? $.__views.__alloyId33.addEventListener("click", sendInfo) : __defers["$.__views.__alloyId33!click!sendInfo"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    var member = args.params.member;
    __defers["$.__views.__alloyId32!click!cancelWindow"] && $.__views.__alloyId32.addEventListener("click", cancelWindow);
    __defers["$.__views.__alloyId33!click!sendInfo"] && $.__views.__alloyId33.addEventListener("click", sendInfo);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;