var APP = {
    CLOSEWINDOW: 2,
    DEVICE_WIDTH: 0,
    DEVICE_HEIGHT: 0,
    OPENMENU: 1,
    OPENWINDOW: 2,
    OPENOPTIONS: 1,
    PET_MEMBER: 2,
    USER_MEMBER: 1,
    ads: false,
    container: null,
    currentController: null,
    debug: 0,
    hashControllers: [],
    headerbar: null,
    popUpController: null,
    masterWindow: null,
    mainContainer: null,
    menubar: null,
    optionbarContainer: null,
    optionbar: null,
    stackControllers: [],
    spinner: null,
    animation: require("animation"),
    http: require("http"),
    init: function() {
        Alloy.Globals.CONTENT_TOP = APP.fixSizeIos7(Alloy.Globals.CONTENT_TOP);
        Alloy.Globals.CONTENT_BOTTOM = APP.fixSizeAds(Alloy.Globals.CONTENT_BOTTOM);
        Ti.Geolocation.purpose = L("app_name") + " Threat Level";
        Ti.Geolocation.preferredProvider = Titanium.Geolocation.PROVIDER_GPS;
        Ti.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_KILOMETER;
        Ti.Geolocation.distanceFilter = 50;
        APP.masterWindow = Alloy.createController("MainWindow/MainWindow");
        setTimeout(function() {
            APP.masterWindow.getView().open();
            APP.walkthru.open();
            Ti.App.addEventListener("pause", APP.pause);
            Ti.App.addEventListener("resume", APP.resume);
            Ti.Gesture.addEventListener("orientationchange", APP.orientationchange);
            APP.getToken({
                openLogin: false,
                callback: function() {
                    APP.notifications.subscribe();
                    return true;
                }
            });
        }, 3e3);
    },
    closeWindow: function(_params) {
        if (APP.stackControllers.length > 0) {
            var _view = APP.stackControllers.pop().getView();
            var slideOut = Titanium.UI.createAnimation({
                left: APP.masterWindow.getView().size.width,
                duration: 300
            });
            _view.animate(slideOut);
            false == APP.optionbar.getView().isOpen && false == APP.menubar.getView().isOpen && APP.mainContainer.animate({
                left: 0,
                duration: 220
            });
            slideOut.addEventListener("complete", function() {
                APP.masterWindow.getView().remove(_view);
                _params && _params._callBack && _params._callBack();
            });
            APP.popOut();
        }
    },
    createDialog: function(message, button_names, callbacks) {
        var self = Ti.UI.createAlertDialog({
            buttonNames: button_names,
            message: message,
            title: "Advice"
        });
        self.show();
        self.addEventListener("click", function(event) {
            callbacks[event.index] && callbacks[event.index]();
        });
        return self;
    },
    fixSizeAds: function(number) {
        number = number ? parseInt(number) : 0;
        if (APP.ads) {
            APP.ads = require("AdMob");
            return number + 50;
        }
        return number;
    },
    fixSizeIos7: function(number) {
        number = number ? parseInt(number) : 0;
        return ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && parseInt(Ti.Platform.version) >= 7 ? number + 20 : number;
    },
    getCurrentLocation: function(_callBack) {
        if (false === Titanium.Geolocation.locationServicesEnabled) {
            var notificationDialog = Ti.UI.createAlertDialog({
                title: L("app_name"),
                message: L("app_name") + " is turned it off from running geolocation services. \nPlease check your Wi-Fi and GPS connection in order to use " + L("app_name") + " app.",
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
            _callBack({
                success: false
            });
        } else {
            var authorization = Titanium.Geolocation.locationServicesAuthorization;
            if (authorization == Titanium.Geolocation.AUTHORIZATION_DENIED && true) {
                Ti.UI.createAlertDialog({
                    title: L("app_name"),
                    message: L("app_name") + " is turned it off from running geolocation services.\nPlease check your Wi-Fi and GPS connection in order to use " + L("app_name") + " app."
                }).show();
                _callBack({
                    success: false
                });
            } else if (authorization == Titanium.Geolocation.AUTHORIZATION_RESTRICTED && true) {
                Ti.UI.createAlertDialog({
                    title: L("app_name"),
                    message: "Your system has disallowed " + L("app_name") + " from running geolocation services.\nPlease check your Wi-Fi and GPS connection in order to use " + L("app_name") + " app."
                }).show();
                _callBack({
                    success: false
                });
            } else Titanium.Geolocation.getCurrentPosition(function(e) {
                if (!e.success || e.error) {
                    alert("We are unable to get your location.  Please verify that your internet connection and your geolocation services are on.");
                    _callBack({
                        success: false
                    });
                } else _callBack({
                    success: true,
                    lat: e.coords.latitude,
                    lon: e.coords.longitude
                });
            });
        }
    },
    getLastInsertByAlloyId: function(rcvCollection, rcvId, rcvIdName) {
        var projectInfo = Alloy.Collections.instance(rcvCollection);
        projectInfo.fetch();
        var lastProject = projectInfo.where({
            alloy_id: rcvId
        });
        return null != lastProject && lastProject.length > 0 ? lastProject[0].get(rcvIdName) : -1;
    },
    getToken: function(args) {
        var _token = Ti.App.Properties.getString("user_token", false);
        args && (_token ? args.callback && args.callback(_token) : args.openLogin && APP.openLogin(args));
        return _token;
    },
    handleNavigation: function(path, _params) {
        APP.reportIsOpen = false;
        null !== path && (APP.currentController && APP.currentController == APP.hashControllers[path] ? APP.currentController.updateView && APP.currentController.updateView(_params) : APP.removeCurrentScreen(function() {
            if (APP.hashControllers[path]) APP.currentController = APP.hashControllers[path]; else {
                APP.currentController = Alloy.createController(path, _params);
                APP.hashControllers[path] = APP.currentController;
            }
            APP.container.add(APP.currentController.getView());
            APP.currentController.updateView && APP.currentController.updateView(_params);
            APP.ads && APP.ads(APP.mainContainer);
        }));
    },
    logout: function() {
        alert(L("logout_message"));
        Ti.App.Properties.removeProperty("pkfamily");
        Ti.App.Properties.removeProperty("user_token");
        Ti.App.Properties.removeProperty("user_name");
        APP.handleNavigation("MyAlerts/MyAlerts");
        return true;
    },
    numberOperation: function(_value1, _op, _value2, _num) {
        var tempOp;
        switch (_op) {
          case "-":
            tempOp = parseInt(_value1) - parseInt(_value2);
            break;

          case "+":
            tempOp = parseInt(_value1) + parseInt(_value2);
            break;

          case "/":
            tempOp = parseInt(_value1) / parseInt(_value2);
            break;

          case "*":
            tempOp = parseInt(_value1) * parseInt(_value2);
        }
        return true == _num ? tempOp + "dp" : tempOp;
    },
    notifications: {
        badge: null,
        subscribe: function() {
            function successCallback(event) {
                Ti.API.info("successCallback >>> event:" + JSON.stringify(event));
                _deviceToken = event.deviceToken;
                Ti.App.Properties.setString("device_token", _deviceToken);
                true && UrbanAirship.registerDevice(_deviceToken, {
                    tags: [ _type + "-" + "iPhone OS" ],
                    alias: _type + "-" + "iPhone OS"
                });
                _ws_request = {
                    atoken: _userToken,
                    flat: _lat,
                    flon: _lon,
                    devicetoken: _deviceToken,
                    devicetype: _deviceType,
                    tokentype: "alertid-" + _type
                };
                APP.http.request({
                    url: L("ws_putdevice"),
                    type: "GET",
                    format: "JSON",
                    data: _ws_request
                }, responseHandler);
                return true;
            }
            function errorCallback(event) {
                Ti.API.error("errorCallback >>> event:" + JSON.stringify(event));
                return true;
            }
            function messageCallback(event) {
                Ti.API.info("messageCallback >>> event:" + JSON.stringify(event));
                event.data && APP.openDialog(event.data.alert, [ L("ok"), L("cancel") ], [ function() {
                    APP.handleNavigation("Notifications/Notifications");
                    APP.menubar.highlightNotifications();
                    return true;
                } ]);
                APP.notifications.badge.text = String(parseInt(APP.notifications.badge.text) + 1);
                return true;
            }
            function registerDevice(event) {
                if (event.success) {
                    _lat = event.lat;
                    _lon = event.lon;
                    _type = "dev";
                    UrbanAirship = require("ti.urbanairship");
                    Ti.API.info("APP.notifications.subscribe >>> OS_IOS");
                    _deviceType = "ios";
                    Ti.UI.iPhone.appBadge = 0;
                    Ti.UI.iPhone.setAppBadge(0);
                    UrbanAirship.options = {
                        APP_STORE_OR_AD_HOC_BUILD: true,
                        PRODUCTION_APP_KEY: "xFnzUR39TymJCn9L1KH-nQ",
                        PRODUCTION_APP_SECRET: "k8PN9CeLQ-u-aR-2C_Uv5g",
                        DEVELOPMENT_APP_KEY: "nts5oenFQZC1JTlHtESlxQ",
                        DEVELOPMENT_APP_SECRET: "o6q8AyH_Q2OF5LTvUk7HzQ",
                        LOGGING_ENABLED: true
                    };
                    UrbanAirship.autoBadge = true;
                    UrbanAirship.autoResetBadge = true;
                    Ti.Network.registerForPushNotifications({
                        types: [ Titanium.Network.NOTIFICATION_TYPE_BADGE, Titanium.Network.NOTIFICATION_TYPE_ALERT, Titanium.Network.NOTIFICATION_TYPE_SOUND ],
                        success: successCallback,
                        error: errorCallback,
                        callback: messageCallback
                    });
                }
                return true;
            }
            function responseHandler(response) {
                Ti.API.info("responseHandler >>> _result:" + JSON.stringify(response));
                if (0 == response._result) ; else if (0 != response._data.errorcode) alert(response._data.message); else {
                    response._data.data[0].atoken;
                    Ti.API.info("APP.notifications.subscribe >>> responseHandler >>> success");
                }
                APP.hideActivityindicator();
                return true;
            }
            var UrbanAirship, _deviceToken, _deviceType, _lat, _lon, _type, _userToken, _ws_request;
            APP.getToken({
                openLogin: true,
                callback: function(user_token) {
                    _userToken = user_token;
                    APP.getCurrentLocation(registerDevice);
                    return true;
                }
            });
            return true;
        },
        unsubscribe: function() {
            Ti.Network.unregisterForPushNotifications();
            return true;
        }
    },
    openCloseOptions: function(_params) {
        if (false == APP.optionbar.getView().isOpen) {
            APP.optionbar.addTxtFld();
            APP.popOut();
            var tempAnimation = Titanium.UI.createAnimation({
                left: 50,
                duration: 0
            });
            _params && _params._callBack && tempAnimation.addEventListener("complete", function() {
                _params._callBack();
            });
            APP.optionbarContainer.animate(tempAnimation);
            0 == APP.stackControllers.length ? APP.mainContainer.animate({
                left: APP.numberOperation(-APP.masterWindow.getView().size.width, "+", 50, false),
                duration: 350
            }) : APP.stackControllers[APP.stackControllers.length - 1].getView().animate({
                left: APP.numberOperation(-APP.masterWindow.getView().size.width, "+", 50, false),
                duration: 350
            });
        } else {
            APP.optionbar.removeTxtFld();
            0 == APP.stackControllers.length ? APP.mainContainer.animate({
                left: 0,
                duration: 350
            }) : APP.stackControllers[APP.stackControllers.length - 1].getView().animate({
                left: 0,
                duration: 350
            });
            var tempAnimation = Titanium.UI.createAnimation({
                left: APP.masterWindow.getView().size.width,
                duration: 0
            });
            _params && _params._callBack && tempAnimation.addEventListener("complete", function() {
                _params._callBack();
            });
            setTimeout(function() {
                APP.optionbarContainer.animate(tempAnimation);
            }, 350);
        }
        APP.optionbar.getView().isOpen = !APP.optionbar.getView().isOpen;
    },
    openCloseMenu: function(_params) {
        if (false == APP.menubar.getView().isOpen) {
            APP.popOut();
            APP.mainContainer.animate({
                left: APP.numberOperation(APP.masterWindow.getView().size.width, "-", 50, false),
                duration: 350
            });
        } else {
            APP.mainContainer.animate({
                left: 0,
                duration: 400
            });
            _params && _params.onClose && setTimeout(function() {
                _params.onClose();
            }, 400);
        }
        APP.menubar.getView().isOpen = !APP.menubar.getView().isOpen;
        if (Ti.App.Properties.getString("user_token", false)) {
            APP.sessionButton.label.text = L("logout");
            APP.sessionButton.icon.image = "/images/ic_logout.png";
        } else {
            APP.sessionButton.label.text = L("login");
            APP.sessionButton.icon.image = "/images/ic_login.png";
        }
        return true;
    },
    openDialog: function(message, button_names, callbacks) {
        var self = Ti.UI.createAlertDialog({
            buttonNames: button_names,
            message: message,
            title: "Advice"
        });
        self.show();
        self.addEventListener("click", function(event) {
            callbacks[event.index] && callbacks[event.index]();
        });
        return self;
    },
    openLogin: function(args) {
        if (!APP.popUpController && !APP.walkthru.on) {
            APP.popUpController = Alloy.createController("Login/Login", args);
            APP.masterWindow.getView().add(APP.popUpController.getView());
            APP.animation.puffIn(APP.popUpController.getView(), {
                scale: 1.2,
                duration: 200,
                fade: 1,
                defaultScale: 1
            });
        }
        return true;
    },
    openWindow: function(_params) {
        APP.popOut();
        var slideIn = Titanium.UI.createAnimation({
            left: 0,
            duration: 300
        });
        var tempWin = Alloy.createController("NextWindow/NextWindow", _params);
        APP.stackControllers.push(tempWin);
        APP.masterWindow.getView().add(tempWin.getView());
        tempWin.getView().animate(slideIn);
        false == APP.optionbar.getView().isOpen && false == APP.menubar.getView().isOpen && APP.mainContainer.animate({
            left: -100,
            duration: 400
        });
    },
    rateThisApp: function() {
        var now = new Date().getTime();
        var remindToRate = Ti.App.Properties.getString("RemindToRate", false);
        if (remindToRate) {
            if (now > remindToRate) {
                Ti.API.info("APP.rateThisApp else >>> remindToRate,now:" + [ remindToRate, now ]);
                var alertDialog = Titanium.UI.createAlertDialog({
                    title: "Please rate this app!",
                    message: "Would you take a moment to rate this app?",
                    buttonNames: [ "OK", "Remind Me Later", "Never" ],
                    cancel: 2
                });
                alertDialog.addEventListener("click", function(evt) {
                    switch (evt.index) {
                      case 0:
                        Ti.App.Properties.setString("RemindToRate", Number.MAX_VALUE);
                        Ti.Android ? Ti.Platform.openURL(L("url_google_play")) : Ti.Platform.openURL(L("url_itunes"));
                        break;

                      case 1:
                        Ti.App.Properties.setString("RemindToRate", now + 7776e5);
                        break;

                      case 2:
                        Ti.App.Properties.setString("RemindToRate", Number.MAX_VALUE);
                    }
                });
                alertDialog.show();
            }
        } else {
            Ti.API.info("APP.rateThisApp if >>> remindToRate,now:" + [ remindToRate, now ]);
            Ti.App.Properties.setString("RemindToRate", now);
        }
    },
    showActivityindicator: function() {
        if (null == APP.spinner) {
            var actual_view = APP.masterWindow.getView();
            APP.spinner = Alloy.createController("Widgets/Loading");
            actual_view.add(APP.spinner.getView());
            APP.spinner.showSpinner();
        }
    },
    hideActivityindicator: function() {
        if (null != APP.spinner) {
            var actual_view = APP.masterWindow.getView();
            actual_view.remove(APP.spinner.getView());
            APP.spinner = null;
        }
    },
    popUp: function(args) {
        APP.showActivityindicator();
        APP.popOut(function(args) {
            APP.popUpController = Alloy.createController("Widgets/PopUp", args);
            APP.masterWindow.getView().add(APP.popUpController.getView());
            true && APP.animation.puffIn(APP.popUpController.getView(), {
                scale: 1.2,
                duration: 100,
                fade: 1,
                defaultScale: 1
            });
            APP.hideActivityindicator();
            return true;
        }, args);
        return true;
    },
    popOut: function(callback, callbackParams) {
        APP.popUpController ? APP.animation.puffOut(APP.popUpController.getView(), {
            scale: 1,
            duration: 200,
            callback: function() {
                APP.popUpController && APP.masterWindow.getView().remove(APP.popUpController.getView()) & (APP.popUpController = null);
                callback && callback(callbackParams);
                return true;
            },
            fade: 0,
            defaultScale: 2
        }) : callback && callback(callbackParams);
        return true;
    },
    removeCurrentScreen: function(_callback) {
        if (APP.currentController) {
            APP.container.remove(APP.currentController.getView());
            APP.currentController = null;
        }
        "undefined" != typeof _callback && _callback();
    },
    walkthru: {
        open: function() {
            if (Ti.App.Properties.getBool("first_run", true)) {
                APP.walkthru.on = false;
                APP.popUp({
                    title: "Welcome to " + L("app_name"),
                    container: {
                        width: 300,
                        height: 200
                    },
                    content: {
                        backgroundColor: "white"
                    },
                    view: Ti.UI.createLabel({
                        text: L("app_name") + "’s mission is to help people live safely by providing a secure way to receive trusted public safety alerts and share information with neighbors.",
                        top: 10,
                        left: 15,
                        right: 15,
                        bottom: 10
                    }),
                    onClose: function() {
                        Ti.App.Properties.setBool("first_run", false);
                        return true;
                    }
                });
            }
            return true;
        },
        openNext: function() {
            !APP.walkthru.controllers && (APP.walkthru.controllers = [ Alloy.createController("Walkthru/Alerts"), Alloy.createController("Walkthru/Dashboard"), Alloy.createController("Walkthru/MyNeighborhoods"), Alloy.createController("Walkthru/Report") ]);
            if (APP.walkthru.controllers.length) {
                Ti.API.info("APP.walkthru.openNext >>> controllers:" + APP.walkthru.controllers);
                var _controller = APP.walkthru.controllers.shift();
                var _view = _controller.getView();
                APP.masterWindow.getView().add(_view);
                _controller.start();
            } else {
                APP.handleNavigation("MyAlerts/MyAlerts");
                APP.walkthru.on = false;
            }
            return true;
        }
    },
    exit: function() {
        return true;
    },
    networkObserverUpdate: function() {
        return true;
    },
    orientationchange: function() {
        Ti.API.info("Orientation Change");
        APP.optionbar.getView().isOpen && APP.openCloseOptions();
        APP.menubar.getView().isOpen && APP.openCloseMenu();
        return true;
    },
    pause: function() {
        return true;
    },
    resume: function() {
        Ti.API.info("Resume");
        APP.rateThisApp();
        return true;
    }
};

module.exports = APP;