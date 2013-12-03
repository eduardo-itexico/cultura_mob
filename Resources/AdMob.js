function AdMob(parent, backgroundColor) {
    function createAd(event) {
        if (!event.success || event.error) {
            Ti.API.error("createAd >>> event.error: " + event.error);
            return false;
        }
        _settings.location = event.coords;
        self = _module.createView(_settings);
        parent.add(self);
        currentAd = self;
        return true;
    }
    var self, _module, _settings, _isGreater;
    _module = require("ti.admob");
    _isGreater = Ti.Platform.displayCaps.platformWidth > 468;
    _settings = {
        bottom: 0,
        width: _isGreater ? 468 : 320,
        height: _isGreater ? 60 : 50,
        zIndex: 9999,
        publisherId: "ca-app-pub-1961850437262657/5957399128",
        adBackgroundColor: backgroundColor || "transparent",
        testing: true,
        dateOfBirth: new Date(1990, 1, 1, 0, 0, 0),
        gender: "male",
        keywords: ""
    };
    if (parent) if (currentAd) currentAd.zIndex = 9999; else {
        Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
        Ti.Geolocation.distanceFilter = 0;
        Ti.Geolocation.purpose = "To show you local ads, of course!";
        Ti.Geolocation.getCurrentPosition(createAd);
    } else currentAd && (currentAd.zIndex = -1);
    return true;
}

var currentAd;

module.exports = AdMob;