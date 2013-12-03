function Controller() {
    function changeSettings() {
        var a = Titanium.UI.createAnimation({
            left: APP.numberOperation(-$.mapView.size.width, "/", 2, false),
            duration: 300
        });
        var a2 = Titanium.UI.createAnimation({
            left: 20,
            duration: 300
        });
        var b = Titanium.UI.createAnimation({
            left: APP.numberOperation($.mapView.size.width, "/", 2, false),
            duration: 300
        });
        var o = Titanium.UI.createAnimation({
            opacity: .8,
            duration: 300
        });
        var o2 = Titanium.UI.createAnimation({
            opacity: 1,
            duration: 300
        });
        if ($.typesView.isOpen) {
            a.addEventListener("complete", function() {
                $.typesView.zIndex = 98;
                $.typesView.animate(a2);
            });
            $.typesView.animate(o);
            $.typesView.animate(a);
            b.addEventListener("complete", function() {
                $.settingsView.zIndex = 99;
                $.settingsView.animate(o2);
                $.settingsView.animate(a2);
            });
            $.settingsView.animate(b);
        } else {
            a.addEventListener("complete", function() {
                $.settingsView.zIndex = 98;
                $.settingsView.animate(a2);
            });
            $.settingsView.animate(o);
            $.settingsView.animate(a);
            b.addEventListener("complete", function() {
                $.typesView.zIndex = 99;
                $.typesView.animate(o2);
                $.typesView.animate(a2);
            });
            $.typesView.animate(b);
        }
        $.typesView.isOpen = !$.typesView.isOpen;
    }
    function changeSwitch(_event) {
        if (true == _event.source.value) if (0 == _event.source.filterID) {
            shouldLoadMap = true;
            $.fsw2.value = true;
            $.fsw3.value = true;
            $.fsw4.value = true;
            $.fsw5.value = true;
            $.fsw6.value = true;
            $.fsw7.value = true;
            $.fsw8.value = true;
            $.fsw9.value = true;
            $.fsw10.value = true;
            $.fsw11.value = true;
            $.fsw12.value = true;
            $.fsw13.value = true;
            $.fsw14.value = true;
            $.fsw15.value = true;
            $.fsw17.value = true;
            $.fsw16.value = true;
            setTimeout(function() {
                shouldLoadMap = false;
                Ti.API.info("load map");
                getCrimes({
                    lat: latitude,
                    lon: longitude
                });
            }, 1500);
        } else {
            var tempString = Ti.App.Properties.getString("MapFilter.Categories.EnabledCategories");
            Ti.App.Properties.setString("MapFilter.Categories.EnabledCategories", tempString + "," + _event.source.filterID);
        } else if (0 == _event.source.filterID) {
            shouldLoadMap = true;
            $.fsw2.value = false;
            $.fsw3.value = false;
            $.fsw4.value = false;
            $.fsw5.value = false;
            $.fsw6.value = false;
            $.fsw7.value = false;
            $.fsw8.value = false;
            $.fsw9.value = false;
            $.fsw10.value = false;
            $.fsw11.value = false;
            $.fsw12.value = false;
            $.fsw13.value = false;
            $.fsw14.value = false;
            $.fsw15.value = false;
            $.fsw17.value = false;
            $.fsw16.value = false;
            setTimeout(function() {
                shouldLoadMap = false;
                getCrimes({
                    lat: latitude,
                    lon: longitude
                });
            }, 1500);
        } else {
            var tempString = Ti.App.Properties.getString("MapFilter.Categories.EnabledCategories", "4,1,2,3,5,6,7,9,10,11,12,13,14,15,16,18,19");
            var regString = new RegExp("," + _event.source.filterID + "\\b", "g");
            Ti.App.Properties.setString("MapFilter.Categories.EnabledCategories", tempString.replace(regString, ""));
        }
        false == shouldLoadMap && getCrimes({
            lat: latitude,
            lon: longitude
        });
    }
    function currentPosition() {
        APP.getCurrentLocation(function(_event) {
            if (_event.success) {
                _event.faname = "Current Location";
                getCrimes(_event);
            } else APP.hideActivityindicator();
        });
    }
    function getAlerts(event, callback) {
        APP.getToken({
            openLogin: true,
            callback: function(token) {
                var _ws_request = {
                    atoken: token,
                    flat: event.lat,
                    flon: event.lon,
                    usehome: 0
                };
                APP.http.request({
                    url: L("ws_getalerts"),
                    type: "GET",
                    format: "JSON",
                    data: _ws_request
                }, function(response) {
                    if (0 == response._result) APP.closeWindow(); else if (0 != response._data.errorcode) {
                        Ti.API.warn(response._data.message);
                        callback && callback();
                    } else callback && callback(response._data.data);
                    return true;
                });
                return true;
            }
        });
        return true;
    }
    function getCountCrimes(_event) {
        var dataTemp = {
            url: L("ws_getcrimelevel"),
            type: "POST",
            format: "JSON",
            data: {
                atoken: APP.getToken({
                    openLogin: false
                }),
                flat: _event.lat,
                flon: _event.lon,
                usehome: 0
            }
        };
        APP.http.request(dataTemp, function(_result) {
            if (1 == _result._result && 0 == _result._data.errorcode) {
                $.crimeTitle.text = _result._data.data[0].crimecnt;
                $.sexTitle.text = _result._data.data[0].oscount;
            }
        });
    }
    function getCrimes(_event) {
        APP.showActivityindicator();
        latitude = _event.lat;
        longitude = _event.lon;
        $.mapView.setRegion({
            latitude: _event.lat,
            longitude: _event.lon,
            animate: true,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta
        });
        $.alertsTitle.text = _event.faname;
        getCountCrimes(_event);
        var dataTemp = {
            url: L("ws_getcrimes"),
            type: "POST",
            format: "JSON",
            data: {
                atoken: APP.getToken({
                    openLogin: false
                }),
                flat: _event.lat,
                flon: _event.lon,
                usehome: 0,
                weathercheck: 1,
                sodcheck: 1,
                neighborcheck: 1,
                location: "",
                rdate: Ti.App.Properties.getString("MapFilter.Days.NumberOfDays", "ALL"),
                ctype: Ti.App.Properties.getString("MapFilter.Categories.EnabledCategories", "4,1,2,3,5,6,7,9,10,11,12,13,14,15,16,18,19")
            }
        };
        APP.http.request(dataTemp, function(_result) {
            if (1 == _result._result) if (0 == _result._data.errorcode) {
                var tempCrimeList = _result._data.data;
                var tempCrimeAnno = [];
                for (var i = 0; tempCrimeList.length > i; i++) {
                    var tempImage = tempCrimeList[i].ncticon.slice(19, -4) + ".png";
                    tempImage = tempImage.split("/");
                    var alertImage = "/images/Crimes/" + tempImage[tempImage.length - 1];
                    tempCrimeList[i].image = alertImage;
                    if ("Weather" == tempCrimeList[i].cdtype || "Sex Offender" === tempCrimeList[i].cdtype) var baseurl = tempCrimeList[i].url; else if ("Neighbor" == tempCrimeList[i].cdtype) {
                        var baseurl = "http://alertid.com/commmore.asp?athread=" + tempCrimeList[i].pkcrimedata;
                        baseurl = "Neighbor";
                    } else var baseurl = "http://alertid.com/commmore.asp?cdid=" + tempCrimeList[i].pkcrimedata;
                    tempCrimeAnno.push({
                        anno: map.createAnnotation({
                            latitude: _result._data.data[i].cdlat,
                            longitude: _result._data.data[i].cdlon,
                            title: _result._data.data[i].ncttype,
                            subtitle: _result._data.data[i].cddatetime + " - " + tempCrimeList[i].miles + " miles away " + tempCrimeList[i].cdagency,
                            pincolor: Titanium.Map.ANNOTATION_RED,
                            animate: true,
                            rightButton: alertImage,
                            image: alertImage,
                            crimeid: _result._data.data[i].pkcrimedata,
                            url: baseurl
                        })
                    });
                    $.mapView.addAnnotation(tempCrimeAnno[i].anno);
                }
                getAlerts(_event, function(alertsData) {
                    setListView(alertsData, tempCrimeList, tempCrimeAnno);
                    return true;
                });
                APP.hideActivityindicator();
            } else APP.hideActivityindicator(); else APP.hideActivityindicator();
        });
    }
    function openListView(_forceClose) {
        true == _forceClose ? $.listView.isOpen = true : openSettings(true);
        if ($.listView.isOpen) {
            $.listView.animate({
                right: APP.numberOperation(-$.mapView.size.width, "-", 0, false),
                duration: 150
            });
            $.listView.animate({
                top: APP.numberOperation($.mapView.size.height, "+", 20, false),
                duration: 150
            });
        } else {
            $.listView.animate({
                right: 20,
                duration: 150
            });
            $.listView.animate({
                top: 64,
                duration: 150
            });
        }
        $.listView.isOpen = !$.listView.isOpen;
    }
    function openSettings(_forceClose) {
        APP.popOut();
        true == _forceClose ? $.settingsView.isOpen = true : openListView(true);
        if ($.settingsView.isOpen) {
            $.settingsView.animate({
                left: APP.numberOperation(-$.mapView.size.width, "-", 0, false),
                duration: 150
            });
            $.typesView.animate({
                left: APP.numberOperation(-$.mapView.size.width, "-", 0, false),
                duration: 150
            });
            $.settingsView.animate({
                top: APP.numberOperation($.mapView.size.height, "+", 20, false),
                duration: 150
            });
            $.typesView.animate({
                top: APP.numberOperation($.mapView.size.height, "+", 20, false),
                duration: 150
            });
        } else {
            $.settingsView.animate({
                left: 20,
                duration: 150
            });
            $.typesView.animate({
                left: 20,
                duration: 150
            });
            $.settingsView.animate({
                top: 64,
                duration: 150
            });
            $.typesView.animate({
                top: 64,
                duration: 150
            });
        }
        $.settingsView.isOpen = !$.settingsView.isOpen;
    }
    function searchAddress(_address) {
        if (APP.getToken({
            openLogin: false
        })) {
            APP.showActivityindicator();
            var dataTemp = {
                url: "http://maps.google.com/maps/api/geocode/json?address=" + _address + "&sensor=true",
                type: "GET",
                format: "JSON"
            };
            APP.http.request(dataTemp, function(_result) {
                if (1 == _result._result) if (_result._data.results.length > 0) {
                    getCrimes({
                        lat: _result._data.results[0].geometry.location.lat,
                        lon: _result._data.results[0].geometry.location.lng,
                        faname: _address
                    });
                    APP.openCloseOptions();
                } else APP.hideActivityindicator(); else APP.hideActivityindicator();
            });
        }
    }
    function selectDays() {
        var daysSelectDialog = Titanium.UI.createOptionDialog({
            title: "Select Days Filter",
            options: [ "Last 24 hours", "Last 3 days", "Last 7 days", "Last 30 days", "Last 90 days", "All days" ],
            cancel: -1
        });
        daysSelectDialog.addEventListener("click", function(e) {
            if (e.index >= 0) {
                $.daysLabel.text = "Show: " + days[e.index].title;
                getCrimes({
                    lat: latitude,
                    lon: longitude
                });
            }
        });
        daysSelectDialog.show();
    }
    function selectRegion() {
        var zoomSelectDialog = Titanium.UI.createOptionDialog({
            title: "Select Region",
            options: [ "Neighborhood", "Community", "City" ],
            cancel: -1
        });
        zoomSelectDialog.addEventListener("click", function(e) {
            if (e.index >= 0) {
                if (0 === e.index) {
                    latitudeDelta = .02;
                    longitudeDelta = .02;
                    $.regionLabel.text = "Region: Neighborhood";
                } else if (1 === e.index) {
                    latitudeDelta = .04;
                    longitudeDelta = .04;
                    $.regionLabel.text = "Region: Community";
                } else if (2 === e.index) {
                    latitudeDelta = .17;
                    longitudeDelta = .18;
                    $.regionLabel.text = "Region: City";
                }
                $.mapView.setRegion({
                    latitude: latitude,
                    longitude: longitude,
                    animate: true,
                    latitudeDelta: latitudeDelta,
                    longitudeDelta: longitudeDelta
                });
            }
        });
        zoomSelectDialog.show();
    }
    function setHybView() {
        $.mapView.setMapType(Titanium.Map.HYBRID_TYPE);
    }
    function setListView(alerts_data, advisors_data, advisors_annotations) {
        $.listView.remove($.tableAlerts);
        $.tableAlerts = Alloy.createController("MyAlerts/TableAlerts", {
            map: $.mapView,
            alerts_data: alerts_data,
            advisors_data: advisors_data,
            advisors_annotations: advisors_annotations,
            openListView: function() {
                openListView();
                return true;
            }
        }).getView();
        $.listView.add($.tableAlerts);
    }
    function setSatView() {
        $.mapView.setMapType(Titanium.Map.SATELLITE_TYPE);
    }
    function setStandView() {
        $.mapView.setMapType(Titanium.Map.STANDARD_TYPE);
    }
    function setTrafficView() {
        APP.openWindow({
            controller: "MyAlerts/TrafficView",
            controllerParams: {
                title: "Traffic View",
                lat: latitude,
                lon: longitude
            }
        });
    }
    function updateView() {
        APP.headerbar.removeAllCustomViews();
        APP.headerbar.setLeftButton(0, false);
        APP.headerbar.setRightButton(0, false);
        APP.headerbar.setLeftButton(APP.OPENMENU, true);
        APP.headerbar.setRightButton(APP.OPENOPTIONS, true, {}, 1);
        APP.headerbar.setTitle("My Alerts");
        APP.optionbar.changeView(1, function() {
            APP.openWindow({
                controller: "Settings/EditAddress",
                controllerParams: {
                    callback: function() {
                        APP.optionbar.updateMyAddresses();
                    }
                }
            });
        });
        if (APP.getToken({
            openLogin: false
        })) {
            false == _isLogged && currentPosition();
            _isLogged = true;
        } else {
            $.alertsTitle.text = "";
            _isLogged = false;
        }
        return true;
    }
    function refreshMap() {
        APP.getToken({
            openLogin: true
        }) && getCrimes({
            lat: _updateLatitude,
            lon: _updateLongitude
        });
    }
    function initializeView() {
        APP.optionbar.changeView(1, function() {
            APP.openWindow({
                controller: "Settings/EditAddress",
                controllerParams: {
                    callback: function() {
                        APP.optionbar.updateMyAddresses();
                    }
                }
            });
        });
        currentPosition();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "MyAlerts/MyAlerts";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createView({
        backgroundColor: "#ecf1f4",
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    var __alloyId69 = [];
    $.__views.mapView = Ti.Map.createView({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        annotations: __alloyId69,
        id: "mapView",
        ns: Ti.Map,
        animate: "true",
        regionFit: "true",
        userLocation: "true",
        mapType: Ti.Map.STANDARD_TYPE,
        enableZoomControls: "false"
    });
    $.__views.container.add($.__views.mapView);
    $.__views.alertsTitleContainer = Ti.UI.createView({
        top: 40,
        backgroundImage: "/images/bg_whiteimage_flex.png",
        left: 0,
        right: 0,
        height: 30,
        id: "alertsTitleContainer"
    });
    $.__views.container.add($.__views.alertsTitleContainer);
    $.__views.alertsTitle = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 14
        },
        left: 10,
        right: 150,
        text: "Current Location",
        id: "alertsTitle"
    });
    $.__views.alertsTitleContainer.add($.__views.alertsTitle);
    $.__views.__alloyId70 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/ic_crimes_pressed.png",
        backgroundImage: "/images/ic_crimes.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        right: 125,
        width: 18,
        height: 17,
        id: "__alloyId70"
    });
    $.__views.alertsTitleContainer.add($.__views.__alloyId70);
    $.__views.crimeTitle = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 14
        },
        right: 80,
        text: "0",
        id: "crimeTitle"
    });
    $.__views.alertsTitleContainer.add($.__views.crimeTitle);
    $.__views.__alloyId71 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/ic_sexoffender_pressed.png",
        backgroundImage: "/images/ic_sexoffender.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        right: 55,
        width: 18,
        height: 17,
        id: "__alloyId71"
    });
    $.__views.alertsTitleContainer.add($.__views.__alloyId71);
    $.__views.sexTitle = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 14
        },
        right: 10,
        text: "0",
        id: "sexTitle"
    });
    $.__views.alertsTitleContainer.add($.__views.sexTitle);
    $.__views.refreshMap = Ti.UI.createButton({
        backgroundSelectedImage: "/images/ic_map_refresh_pressed.png",
        backgroundImage: "/images/ic_map_refresh.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        backgroundColor: "transparent",
        top: 78,
        right: 10,
        width: 38,
        height: 38,
        id: "refreshMap"
    });
    $.__views.container.add($.__views.refreshMap);
    refreshMap ? $.__views.refreshMap.addEventListener("click", refreshMap) : __defers["$.__views.refreshMap!click!refreshMap"] = true;
    $.__views.settingsView = Ti.UI.createView({
        left: 0,
        top: "100%",
        height: "100%",
        width: "100%",
        id: "settingsView",
        isOpen: "false"
    });
    $.__views.container.add($.__views.settingsView);
    $.__views.__alloyId72 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bgBlackOpacity39.png",
        backgroundImage: "/images/bg_popup_flex.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        touchEnabled: false,
        backgroundLeftCap: 10,
        backgroundTopCap: 10,
        id: "__alloyId72"
    });
    $.__views.settingsView.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 18
        },
        left: 10,
        top: 10,
        text: "Alerts",
        id: "__alloyId73"
    });
    $.__views.settingsView.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createButton({
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
        right: 49,
        top: 10,
        height: 25,
        width: 80,
        title: "Map Types",
        id: "__alloyId74"
    });
    $.__views.settingsView.add($.__views.__alloyId74);
    changeSettings ? $.__views.__alloyId74.addEventListener("click", changeSettings) : __defers["$.__views.__alloyId74!click!changeSettings"] = true;
    $.__views.close = Ti.UI.createButton({
        backgroundSelectedImage: "/images/ic_close_pressed.png",
        backgroundImage: "/images/ic_close.png",
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
        top: 0,
        right: 5,
        id: "close"
    });
    $.__views.settingsView.add($.__views.close);
    openSettings ? $.__views.close.addEventListener("click", openSettings) : __defers["$.__views.close!click!openSettings"] = true;
    $.__views.__alloyId75 = Ti.UI.createScrollView({
        top: 50,
        left: 3,
        right: 6,
        bottom: 6,
        contentHeight: Ti.UI.SIZE,
        borderRadius: 5,
        backgroundColor: "white",
        layout: "vertical",
        id: "__alloyId75"
    });
    $.__views.settingsView.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.regionLabel = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "Region: Neighborhood",
        id: "regionLabel"
    });
    $.__views.__alloyId76.add($.__views.regionLabel);
    $.__views.__alloyId77 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bgBlackOpacity39.png",
        backgroundImage: "/images/transparent.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 1,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 12
        },
        right: 10,
        width: 56,
        height: 23,
        top: 8,
        title: "Select",
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
    selectRegion ? $.__views.__alloyId77.addEventListener("click", selectRegion) : __defers["$.__views.__alloyId77!click!selectRegion"] = true;
    $.__views.__alloyId78 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId78"
    });
    $.__views.__alloyId75.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId79"
    });
    $.__views.__alloyId75.add($.__views.__alloyId79);
    $.__views.daysLabel = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "Show: All days",
        id: "daysLabel"
    });
    $.__views.__alloyId79.add($.__views.daysLabel);
    $.__views.__alloyId80 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bgBlackOpacity39.png",
        backgroundImage: "/images/transparent.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 1,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 12
        },
        right: 10,
        width: 56,
        height: 23,
        top: 8,
        title: "Select",
        id: "__alloyId80"
    });
    $.__views.__alloyId79.add($.__views.__alloyId80);
    selectDays ? $.__views.__alloyId80.addEventListener("click", selectDays) : __defers["$.__views.__alloyId80!click!selectDays"] = true;
    $.__views.__alloyId81 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId81"
    });
    $.__views.__alloyId75.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId82"
    });
    $.__views.__alloyId75.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "All categories",
        id: "__alloyId83"
    });
    $.__views.__alloyId82.add($.__views.__alloyId83);
    $.__views.fsw0 = Ti.UI.createSwitch({
        right: 6,
        id: "fsw0",
        value: "true",
        filterID: "0"
    });
    $.__views.__alloyId82.add($.__views.fsw0);
    changeSwitch ? $.__views.fsw0.addEventListener("change", changeSwitch) : __defers["$.__views.fsw0!change!changeSwitch"] = true;
    $.__views.__alloyId84 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId84"
    });
    $.__views.__alloyId75.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId85"
    });
    $.__views.__alloyId75.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "Sex Offenders (always on)",
        id: "__alloyId86"
    });
    $.__views.__alloyId85.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId87"
    });
    $.__views.__alloyId75.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId88"
    });
    $.__views.__alloyId75.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "Crimes against children",
        id: "__alloyId89"
    });
    $.__views.__alloyId88.add($.__views.__alloyId89);
    $.__views.fsw2 = Ti.UI.createSwitch({
        right: 6,
        id: "fsw2",
        value: "true",
        filterID: "1"
    });
    $.__views.__alloyId88.add($.__views.fsw2);
    changeSwitch ? $.__views.fsw2.addEventListener("change", changeSwitch) : __defers["$.__views.fsw2!change!changeSwitch"] = true;
    $.__views.__alloyId90 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId90"
    });
    $.__views.__alloyId75.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId91"
    });
    $.__views.__alloyId75.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "Crimes against the elderly",
        id: "__alloyId92"
    });
    $.__views.__alloyId91.add($.__views.__alloyId92);
    $.__views.fsw3 = Ti.UI.createSwitch({
        right: 6,
        id: "fsw3",
        value: "true",
        filterID: "15"
    });
    $.__views.__alloyId91.add($.__views.fsw3);
    changeSwitch ? $.__views.fsw3.addEventListener("change", changeSwitch) : __defers["$.__views.fsw3!change!changeSwitch"] = true;
    $.__views.__alloyId93 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId93"
    });
    $.__views.__alloyId75.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId94"
    });
    $.__views.__alloyId75.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "Homocide",
        id: "__alloyId95"
    });
    $.__views.__alloyId94.add($.__views.__alloyId95);
    $.__views.fsw4 = Ti.UI.createSwitch({
        right: 6,
        id: "fsw4",
        value: "true",
        filterID: "10"
    });
    $.__views.__alloyId94.add($.__views.fsw4);
    changeSwitch ? $.__views.fsw4.addEventListener("change", changeSwitch) : __defers["$.__views.fsw4!change!changeSwitch"] = true;
    $.__views.__alloyId96 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId96"
    });
    $.__views.__alloyId75.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId97"
    });
    $.__views.__alloyId75.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "Kidnapping/Missing person",
        id: "__alloyId98"
    });
    $.__views.__alloyId97.add($.__views.__alloyId98);
    $.__views.fsw5 = Ti.UI.createSwitch({
        right: 6,
        id: "fsw5",
        value: "true",
        filterID: "3"
    });
    $.__views.__alloyId97.add($.__views.fsw5);
    changeSwitch ? $.__views.fsw5.addEventListener("change", changeSwitch) : __defers["$.__views.fsw5!change!changeSwitch"] = true;
    $.__views.__alloyId99 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId99"
    });
    $.__views.__alloyId75.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId100"
    });
    $.__views.__alloyId75.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "Sex crimes",
        id: "__alloyId101"
    });
    $.__views.__alloyId100.add($.__views.__alloyId101);
    $.__views.fsw6 = Ti.UI.createSwitch({
        right: 6,
        id: "fsw6",
        value: "true",
        filterID: "2"
    });
    $.__views.__alloyId100.add($.__views.fsw6);
    changeSwitch ? $.__views.fsw6.addEventListener("change", changeSwitch) : __defers["$.__views.fsw6!change!changeSwitch"] = true;
    $.__views.__alloyId102 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId102"
    });
    $.__views.__alloyId75.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId103"
    });
    $.__views.__alloyId75.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "Weapons offense",
        id: "__alloyId104"
    });
    $.__views.__alloyId103.add($.__views.__alloyId104);
    $.__views.fsw7 = Ti.UI.createSwitch({
        right: 6,
        id: "fsw7",
        value: "true",
        filterID: "14"
    });
    $.__views.__alloyId103.add($.__views.fsw7);
    changeSwitch ? $.__views.fsw7.addEventListener("change", changeSwitch) : __defers["$.__views.fsw7!change!changeSwitch"] = true;
    $.__views.__alloyId105 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId105"
    });
    $.__views.__alloyId75.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId106"
    });
    $.__views.__alloyId75.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "Assault & Battery",
        id: "__alloyId107"
    });
    $.__views.__alloyId106.add($.__views.__alloyId107);
    $.__views.fsw17 = Ti.UI.createSwitch({
        right: 6,
        id: "fsw17",
        value: "true",
        filterID: "6"
    });
    $.__views.__alloyId106.add($.__views.fsw17);
    changeSwitch ? $.__views.fsw17.addEventListener("change", changeSwitch) : __defers["$.__views.fsw17!change!changeSwitch"] = true;
    $.__views.__alloyId108 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId108"
    });
    $.__views.__alloyId75.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId109"
    });
    $.__views.__alloyId75.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "Burglary",
        id: "__alloyId110"
    });
    $.__views.__alloyId109.add($.__views.__alloyId110);
    $.__views.fsw8 = Ti.UI.createSwitch({
        right: 6,
        id: "fsw8",
        value: "true",
        filterID: "7"
    });
    $.__views.__alloyId109.add($.__views.fsw8);
    changeSwitch ? $.__views.fsw8.addEventListener("change", changeSwitch) : __defers["$.__views.fsw8!change!changeSwitch"] = true;
    $.__views.__alloyId111 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId111"
    });
    $.__views.__alloyId75.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId112"
    });
    $.__views.__alloyId75.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "Drug/Alcohol violations",
        id: "__alloyId113"
    });
    $.__views.__alloyId112.add($.__views.__alloyId113);
    $.__views.fsw9 = Ti.UI.createSwitch({
        right: 6,
        id: "fsw9",
        value: "true",
        filterID: "9"
    });
    $.__views.__alloyId112.add($.__views.fsw9);
    changeSwitch ? $.__views.fsw9.addEventListener("change", changeSwitch) : __defers["$.__views.fsw9!change!changeSwitch"] = true;
    $.__views.__alloyId114 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId114"
    });
    $.__views.__alloyId75.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId115"
    });
    $.__views.__alloyId75.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "Hazardous materials/Gass",
        id: "__alloyId116"
    });
    $.__views.__alloyId115.add($.__views.__alloyId116);
    $.__views.fsw10 = Ti.UI.createSwitch({
        right: 6,
        id: "fsw10",
        value: "true",
        filterID: "19"
    });
    $.__views.__alloyId115.add($.__views.fsw10);
    changeSwitch ? $.__views.fsw10.addEventListener("change", changeSwitch) : __defers["$.__views.fsw10!change!changeSwitch"] = true;
    $.__views.__alloyId117 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId117"
    });
    $.__views.__alloyId75.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId118"
    });
    $.__views.__alloyId75.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "Fire/Arson",
        id: "__alloyId119"
    });
    $.__views.__alloyId118.add($.__views.__alloyId119);
    $.__views.fsw11 = Ti.UI.createSwitch({
        right: 6,
        id: "fsw11",
        value: "true",
        filterID: "16"
    });
    $.__views.__alloyId118.add($.__views.fsw11);
    changeSwitch ? $.__views.fsw11.addEventListener("change", changeSwitch) : __defers["$.__views.fsw11!change!changeSwitch"] = true;
    $.__views.__alloyId120 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId120"
    });
    $.__views.__alloyId75.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId121"
    });
    $.__views.__alloyId75.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "Property crime",
        id: "__alloyId122"
    });
    $.__views.__alloyId121.add($.__views.__alloyId122);
    $.__views.fsw12 = Ti.UI.createSwitch({
        right: 6,
        id: "fsw12",
        value: "true",
        filterID: "12"
    });
    $.__views.__alloyId121.add($.__views.fsw12);
    changeSwitch ? $.__views.fsw12.addEventListener("change", changeSwitch) : __defers["$.__views.fsw12!change!changeSwitch"] = true;
    $.__views.__alloyId123 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId123"
    });
    $.__views.__alloyId75.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId124"
    });
    $.__views.__alloyId75.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "Theft/Lacerny",
        id: "__alloyId125"
    });
    $.__views.__alloyId124.add($.__views.__alloyId125);
    $.__views.fsw13 = Ti.UI.createSwitch({
        right: 6,
        id: "fsw13",
        value: "true",
        filterID: "11"
    });
    $.__views.__alloyId124.add($.__views.fsw13);
    changeSwitch ? $.__views.fsw13.addEventListener("change", changeSwitch) : __defers["$.__views.fsw13!change!changeSwitch"] = true;
    $.__views.__alloyId126 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId126"
    });
    $.__views.__alloyId75.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId127"
    });
    $.__views.__alloyId75.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "Suspicious person/Prowler",
        id: "__alloyId128"
    });
    $.__views.__alloyId127.add($.__views.__alloyId128);
    $.__views.fsw14 = Ti.UI.createSwitch({
        right: 6,
        id: "fsw14",
        value: "true",
        filterID: "5"
    });
    $.__views.__alloyId127.add($.__views.fsw14);
    changeSwitch ? $.__views.fsw14.addEventListener("change", changeSwitch) : __defers["$.__views.fsw14!change!changeSwitch"] = true;
    $.__views.__alloyId129 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId129"
    });
    $.__views.__alloyId75.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId130"
    });
    $.__views.__alloyId75.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "Vehicle Break-in/Theft",
        id: "__alloyId131"
    });
    $.__views.__alloyId130.add($.__views.__alloyId131);
    $.__views.fsw15 = Ti.UI.createSwitch({
        right: 6,
        id: "fsw15",
        value: "true",
        filterID: "13"
    });
    $.__views.__alloyId130.add($.__views.fsw15);
    changeSwitch ? $.__views.fsw15.addEventListener("change", changeSwitch) : __defers["$.__views.fsw15!change!changeSwitch"] = true;
    $.__views.__alloyId132 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId132"
    });
    $.__views.__alloyId75.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createView({
        right: 0,
        left: 0,
        height: 40,
        backgroundColor: "white",
        id: "__alloyId133"
    });
    $.__views.__alloyId75.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createLabel({
        color: "#231f20",
        font: {
            fontSize: 14
        },
        left: 9,
        right: 70,
        text: "Natural Disasters/Rescue",
        id: "__alloyId134"
    });
    $.__views.__alloyId133.add($.__views.__alloyId134);
    $.__views.fsw16 = Ti.UI.createSwitch({
        right: 6,
        id: "fsw16",
        value: "true",
        filterID: "18"
    });
    $.__views.__alloyId133.add($.__views.fsw16);
    changeSwitch ? $.__views.fsw16.addEventListener("change", changeSwitch) : __defers["$.__views.fsw16!change!changeSwitch"] = true;
    $.__views.__alloyId135 = Ti.UI.createView({
        backgroundColor: "#CCC",
        width: Ti.UI.FILL,
        height: 1,
        top: 0,
        id: "__alloyId135"
    });
    $.__views.__alloyId75.add($.__views.__alloyId135);
    $.__views.typesView = Ti.UI.createView({
        left: 0,
        top: "100%",
        height: "100%",
        width: "100%",
        id: "typesView",
        isOpen: "false"
    });
    $.__views.container.add($.__views.typesView);
    $.__views.__alloyId136 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bgBlackOpacity39.png",
        backgroundImage: "/images/bg_popup_flex.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        touchEnabled: false,
        backgroundLeftCap: 10,
        backgroundTopCap: 10,
        id: "__alloyId136"
    });
    $.__views.typesView.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 18
        },
        left: 10,
        top: 10,
        text: "Types",
        id: "__alloyId137"
    });
    $.__views.typesView.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createButton({
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
        right: 49,
        top: 10,
        height: 25,
        width: 80,
        title: "Map Alerts",
        id: "__alloyId138"
    });
    $.__views.typesView.add($.__views.__alloyId138);
    changeSettings ? $.__views.__alloyId138.addEventListener("click", changeSettings) : __defers["$.__views.__alloyId138!click!changeSettings"] = true;
    $.__views.close = Ti.UI.createButton({
        backgroundSelectedImage: "/images/ic_close_pressed.png",
        backgroundImage: "/images/ic_close.png",
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
        top: 0,
        right: 5,
        id: "close"
    });
    $.__views.typesView.add($.__views.close);
    openSettings ? $.__views.close.addEventListener("click", openSettings) : __defers["$.__views.close!click!openSettings"] = true;
    $.__views.__alloyId139 = Ti.UI.createScrollView({
        top: 50,
        left: 3,
        right: 6,
        bottom: 6,
        contentHeight: Ti.UI.SIZE,
        borderRadius: 5,
        backgroundColor: "white",
        layout: "vertical",
        id: "__alloyId139"
    });
    $.__views.typesView.add($.__views.__alloyId139);
    $.__views.__alloyId140 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bgBlackOpacity39.png",
        backgroundImage: "/images/transparent.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 1,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 17
        },
        left: 15,
        right: 15,
        height: 30,
        top: 10,
        title: "Standard",
        id: "__alloyId140"
    });
    $.__views.__alloyId139.add($.__views.__alloyId140);
    setStandView ? $.__views.__alloyId140.addEventListener("click", setStandView) : __defers["$.__views.__alloyId140!click!setStandView"] = true;
    $.__views.__alloyId141 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bgBlackOpacity39.png",
        backgroundImage: "/images/transparent.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 1,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 17
        },
        left: 15,
        right: 15,
        height: 30,
        top: 10,
        title: "Satellite",
        id: "__alloyId141"
    });
    $.__views.__alloyId139.add($.__views.__alloyId141);
    setSatView ? $.__views.__alloyId141.addEventListener("click", setSatView) : __defers["$.__views.__alloyId141!click!setSatView"] = true;
    $.__views.__alloyId142 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bgBlackOpacity39.png",
        backgroundImage: "/images/transparent.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 1,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 17
        },
        left: 15,
        right: 15,
        height: 30,
        top: 10,
        title: "Hybrid",
        id: "__alloyId142"
    });
    $.__views.__alloyId139.add($.__views.__alloyId142);
    setHybView ? $.__views.__alloyId142.addEventListener("click", setHybView) : __defers["$.__views.__alloyId142!click!setHybView"] = true;
    $.__views.__alloyId143 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bgBlackOpacity39.png",
        backgroundImage: "/images/transparent.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 1,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 17
        },
        left: 15,
        right: 15,
        height: 30,
        top: 10,
        title: "Traffic",
        id: "__alloyId143"
    });
    $.__views.__alloyId139.add($.__views.__alloyId143);
    setTrafficView ? $.__views.__alloyId143.addEventListener("click", setTrafficView) : __defers["$.__views.__alloyId143!click!setTrafficView"] = true;
    $.__views.listView = Ti.UI.createView({
        right: 0,
        top: "100%",
        height: "100%",
        width: "100%",
        id: "listView",
        isOpen: "false"
    });
    $.__views.container.add($.__views.listView);
    $.__views.__alloyId144 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bgBlackOpacity39.png",
        backgroundImage: "/images/bg_popup_flex.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        touchEnabled: false,
        backgroundLeftCap: 10,
        backgroundTopCap: 10,
        id: "__alloyId144"
    });
    $.__views.listView.add($.__views.__alloyId144);
    $.__views.close = Ti.UI.createButton({
        backgroundSelectedImage: "/images/ic_close_pressed.png",
        backgroundImage: "/images/ic_close.png",
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
        top: 0,
        right: 5,
        id: "close"
    });
    $.__views.listView.add($.__views.close);
    openListView ? $.__views.close.addEventListener("click", openListView) : __defers["$.__views.close!click!openListView"] = true;
    $.__views.__alloyId145 = Ti.UI.createLabel({
        color: "#17B8E4",
        font: {
            fontSize: 18
        },
        left: 10,
        top: 10,
        text: "Alerts and Advisories",
        id: "__alloyId145"
    });
    $.__views.listView.add($.__views.__alloyId145);
    $.__views.tableAlerts = Ti.UI.createTableView({
        top: 50,
        left: 3,
        right: 6,
        bottom: 10,
        borderRadius: 5,
        backgroundColor: "white",
        id: "tableAlerts"
    });
    $.__views.listView.add($.__views.tableAlerts);
    $.__views.__alloyId146 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bt_setting_pressed.png",
        backgroundImage: "/images/bt_setting.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        backgroundColor: "transparent",
        left: 10,
        bottom: Alloy.Globals.CONTENT_BOTTOM,
        width: 38,
        height: 38,
        id: "__alloyId146"
    });
    $.__views.container.add($.__views.__alloyId146);
    openSettings ? $.__views.__alloyId146.addEventListener("click", openSettings) : __defers["$.__views.__alloyId146!click!openSettings"] = true;
    $.__views.__alloyId147 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/bt_menu_pressed.png",
        backgroundImage: "/images/bt_menu.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        backgroundColor: "transparent",
        right: 10,
        bottom: Alloy.Globals.CONTENT_BOTTOM,
        width: 38,
        height: 38,
        id: "__alloyId147"
    });
    $.__views.container.add($.__views.__alloyId147);
    openListView ? $.__views.__alloyId147.addEventListener("click", openListView) : __defers["$.__views.__alloyId147!click!openListView"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    arguments[0] || {};
    var map = Ti.Map;
    var _isLogged = false;
    var latitude = 0;
    var longitude = 0;
    var _updateLatitude = 0;
    var _updateLongitude = 0;
    var shouldLoadMap = false;
    var latitudeDelta;
    var longitudeDelta;
    var latitudeDelta = .02;
    var longitudeDelta = .02;
    var days = [ {
        title: "Last 24 hours",
        filterID: "last1"
    }, {
        title: "Last 3 days",
        filterID: "last3"
    }, {
        title: "Last 7 days",
        filterID: "last7"
    }, {
        title: "Last 30 days",
        filterID: "last30"
    }, {
        title: "Last 90 days",
        filterID: "last90"
    }, {
        title: "All Days",
        filterID: "ALL"
    } ];
    currentPosition();
    $.alertsTitleContainer.top = 43 + APP.fixSizeIos7();
    $.refreshMap.top = 78 + APP.fixSizeIos7();
    $.settingsView.isOpen = false;
    $.typesView.isOpen = true;
    $.listView.isOpen = false;
    var tempFilters = Ti.App.Properties.getString("MapFilter.Categories.EnabledCategories", "4,1,2,3,5,6,7,9,10,11,12,13,14,15,16,18,19");
    var regString = new RegExp("," + $.fsw2.filterID + "\\b", "g");
    $.fsw2.value = null != tempFilters.match(regString) && tempFilters.match(regString).length > 0 ? true : false;
    var regString = new RegExp("," + $.fsw3.filterID + "\\b", "g");
    $.fsw3.value = null != tempFilters.match(regString) && tempFilters.match(regString).length > 0 ? true : false;
    var regString = new RegExp("," + $.fsw4.filterID + "\\b", "g");
    $.fsw4.value = null != tempFilters.match(regString) && tempFilters.match(regString).length > 0 ? true : false;
    var regString = new RegExp("," + $.fsw5.filterID + "\\b", "g");
    $.fsw5.value = null != tempFilters.match(regString) && tempFilters.match(regString).length > 0 ? true : false;
    var regString = new RegExp("," + $.fsw6.filterID + "\\b", "g");
    $.fsw6.value = null != tempFilters.match(regString) && tempFilters.match(regString).length > 0 ? true : false;
    var regString = new RegExp("," + $.fsw7.filterID + "\\b", "g");
    $.fsw7.value = null != tempFilters.match(regString) && tempFilters.match(regString).length > 0 ? true : false;
    var regString = new RegExp("," + $.fsw8.filterID + "\\b", "g");
    $.fsw8.value = null != tempFilters.match(regString) && tempFilters.match(regString).length > 0 ? true : false;
    var regString = new RegExp("," + $.fsw9.filterID + "\\b", "g");
    $.fsw9.value = null != tempFilters.match(regString) && tempFilters.match(regString).length > 0 ? true : false;
    var regString = new RegExp("," + $.fsw10.filterID + "\\b", "g");
    $.fsw10.value = null != tempFilters.match(regString) && tempFilters.match(regString).length > 0 ? true : false;
    var regString = new RegExp("," + $.fsw11.filterID + "\\b", "g");
    $.fsw11.value = null != tempFilters.match(regString) && tempFilters.match(regString).length > 0 ? true : false;
    var regString = new RegExp("," + $.fsw12.filterID + "\\b", "g");
    $.fsw12.value = null != tempFilters.match(regString) && tempFilters.match(regString).length > 0 ? true : false;
    var regString = new RegExp("," + $.fsw13.filterID + "\\b", "g");
    $.fsw13.value = null != tempFilters.match(regString) && tempFilters.match(regString).length > 0 ? true : false;
    var regString = new RegExp("," + $.fsw14.filterID + "\\b", "g");
    $.fsw14.value = null != tempFilters.match(regString) && tempFilters.match(regString).length > 0 ? true : false;
    var regString = new RegExp("," + $.fsw15.filterID + "\\b", "g");
    $.fsw15.value = null != tempFilters.match(regString) && tempFilters.match(regString).length > 0 ? true : false;
    var regString = new RegExp("," + $.fsw16.filterID + "\\b", "g");
    $.fsw16.value = null != tempFilters.match(regString) && tempFilters.match(regString).length > 0 ? true : false;
    var regString = new RegExp("," + $.fsw17.filterID + "\\b", "g");
    $.fsw17.value = null != tempFilters.match(regString) && tempFilters.match(regString).length > 0 ? true : false;
    $.fsw0.value = tempFilters.length >= 2 ? true : false;
    $.mapView.addEventListener("postlayout", function() {
        var tempWidth = $.mapView.size.width;
        var tempHeight = $.mapView.size.height;
        $.settingsView.opacity = .8;
        $.settingsView.width = APP.numberOperation(tempWidth, "-", 36, false);
        $.settingsView.height = APP.numberOperation(tempHeight, "-", 144, false);
        $.settingsView.left = APP.numberOperation(-tempWidth, "-", 0, false);
        $.settingsView.top = APP.numberOperation(tempHeight, "+", 20, false);
        $.typesView.width = APP.numberOperation(tempWidth, "-", 36, false);
        $.typesView.height = APP.numberOperation(tempHeight, "-", 144, false);
        $.typesView.left = APP.numberOperation(-tempWidth, "-", 0, false);
        $.typesView.top = APP.numberOperation(tempHeight, "+", 20, false);
        $.listView.width = APP.numberOperation(tempWidth, "-", 40, false);
        $.listView.height = APP.numberOperation(tempHeight, "-", 144, false);
        $.listView.right = APP.numberOperation(-tempWidth, "-", 0, false);
        $.listView.top = APP.numberOperation(tempHeight, "+", 20, false);
    });
    $.mapView.addEventListener("click", function(evt) {
        var annotation = evt.annotation;
        var url = evt.annotation ? evt.annotation.url : "http://alertid.com/our-story.asp";
        ("subtitle" === evt.clicksource || "leftButton" === evt.clicksource || "annotation" === evt.clicksource || "rightButton" === evt.clicksource || "title" === evt.clicksource) && ("Neighbor" == url ? APP.openWindow({
            controller: "MyNeighborhoods/MyNeighborhoods",
            controllerParams: {
                pknmessage: annotation.crimeid
            }
        }) : APP.openWindow({
            controller: "Widgets/Browser",
            controllerParams: {
                url: url,
                title: evt.annotation.title
            }
        }));
    });
    $.mapView.addEventListener("regionChanged", function(e) {
        _updateLatitude = e.latitude;
        _updateLongitude = e.longitude;
    });
    exports.updateView = updateView;
    exports.getCrimes = getCrimes;
    exports.currentPosition = currentPosition;
    exports.searchAddress = searchAddress;
    exports.initializeView = initializeView;
    __defers["$.__views.refreshMap!click!refreshMap"] && $.__views.refreshMap.addEventListener("click", refreshMap);
    __defers["$.__views.__alloyId74!click!changeSettings"] && $.__views.__alloyId74.addEventListener("click", changeSettings);
    __defers["$.__views.close!click!openSettings"] && $.__views.close.addEventListener("click", openSettings);
    __defers["$.__views.__alloyId77!click!selectRegion"] && $.__views.__alloyId77.addEventListener("click", selectRegion);
    __defers["$.__views.__alloyId80!click!selectDays"] && $.__views.__alloyId80.addEventListener("click", selectDays);
    __defers["$.__views.fsw0!change!changeSwitch"] && $.__views.fsw0.addEventListener("change", changeSwitch);
    __defers["$.__views.fsw2!change!changeSwitch"] && $.__views.fsw2.addEventListener("change", changeSwitch);
    __defers["$.__views.fsw3!change!changeSwitch"] && $.__views.fsw3.addEventListener("change", changeSwitch);
    __defers["$.__views.fsw4!change!changeSwitch"] && $.__views.fsw4.addEventListener("change", changeSwitch);
    __defers["$.__views.fsw5!change!changeSwitch"] && $.__views.fsw5.addEventListener("change", changeSwitch);
    __defers["$.__views.fsw6!change!changeSwitch"] && $.__views.fsw6.addEventListener("change", changeSwitch);
    __defers["$.__views.fsw7!change!changeSwitch"] && $.__views.fsw7.addEventListener("change", changeSwitch);
    __defers["$.__views.fsw17!change!changeSwitch"] && $.__views.fsw17.addEventListener("change", changeSwitch);
    __defers["$.__views.fsw8!change!changeSwitch"] && $.__views.fsw8.addEventListener("change", changeSwitch);
    __defers["$.__views.fsw9!change!changeSwitch"] && $.__views.fsw9.addEventListener("change", changeSwitch);
    __defers["$.__views.fsw10!change!changeSwitch"] && $.__views.fsw10.addEventListener("change", changeSwitch);
    __defers["$.__views.fsw11!change!changeSwitch"] && $.__views.fsw11.addEventListener("change", changeSwitch);
    __defers["$.__views.fsw12!change!changeSwitch"] && $.__views.fsw12.addEventListener("change", changeSwitch);
    __defers["$.__views.fsw13!change!changeSwitch"] && $.__views.fsw13.addEventListener("change", changeSwitch);
    __defers["$.__views.fsw14!change!changeSwitch"] && $.__views.fsw14.addEventListener("change", changeSwitch);
    __defers["$.__views.fsw15!change!changeSwitch"] && $.__views.fsw15.addEventListener("change", changeSwitch);
    __defers["$.__views.fsw16!change!changeSwitch"] && $.__views.fsw16.addEventListener("change", changeSwitch);
    __defers["$.__views.__alloyId138!click!changeSettings"] && $.__views.__alloyId138.addEventListener("click", changeSettings);
    __defers["$.__views.close!click!openSettings"] && $.__views.close.addEventListener("click", openSettings);
    __defers["$.__views.__alloyId140!click!setStandView"] && $.__views.__alloyId140.addEventListener("click", setStandView);
    __defers["$.__views.__alloyId141!click!setSatView"] && $.__views.__alloyId141.addEventListener("click", setSatView);
    __defers["$.__views.__alloyId142!click!setHybView"] && $.__views.__alloyId142.addEventListener("click", setHybView);
    __defers["$.__views.__alloyId143!click!setTrafficView"] && $.__views.__alloyId143.addEventListener("click", setTrafficView);
    __defers["$.__views.close!click!openListView"] && $.__views.close.addEventListener("click", openListView);
    __defers["$.__views.__alloyId146!click!openSettings"] && $.__views.__alloyId146.addEventListener("click", openSettings);
    __defers["$.__views.__alloyId147!click!openListView"] && $.__views.__alloyId147.addEventListener("click", openListView);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;