exports.slideIn = function(tiObject, params) {
    params = params ? params : {};
    var a = Ti.UI.createAnimation();
    tiObject.opacity = 0;
    tiObject[params.side] = params.sideValue + params.offset;
    a.duration = params.duration ? params.duration : 250;
    a[params.side] = tiObject[params.side] - params.offset;
    a.opacity = params.fade || 1;
    tiObject.animate(a);
    params.callback && a.addEventListener("complete", params.callback);
};

exports.slideOut = function(tiObject, params) {
    params = params ? params : {};
    var a = Ti.UI.createAnimation();
    a.duration = params.duration ? params.duration : 250;
    a[params.side] = params.sideValue;
    a.opacity = 0;
    tiObject.animate(a);
    params.callback && a.addEventListener("complete", params.callback);
};

exports.puffIn = function(tiObject, params) {
    params = params ? params : {};
    var scale = params.scale ? params.scale : 1.1, puffIn = Ti.UI.create2DMatrix().scale(scale), a = Ti.UI.createAnimation();
    tiObject.opacity = 0;
    a.transform = puffIn;
    a.duration = params.duration ? params.duration : 250;
    a.opacity = params.fade || 1;
    tiObject.animate(a);
    a.addEventListener("complete", function() {
        var scaleNormal = Ti.UI.create2DMatrix().scale(params.defaultScale || 1);
        var b = Ti.UI.createAnimation();
        b.transform = scaleNormal;
        b.duration = params.duration ? params.duration : 250;
        tiObject.animate(b);
        b.addEventListener("complete", function() {
            params.callback && params.callback();
        });
    });
};

exports.puffOut = function(tiObject, params) {
    params = params ? params : {};
    var scale = params.scale ? params.scale : 1.03, puffOut = Ti.UI.create2DMatrix().scale(scale), a = Ti.UI.createAnimation();
    a.transform = puffOut;
    a.duration = params.duration ? params.duration : 200;
    a.opacity = params.fade || 1;
    tiObject.animate(a);
    a.addEventListener("complete", function() {
        var scaleNormal = Ti.UI.create2DMatrix().scale(params.defaultScale || .9);
        var b = Ti.UI.createAnimation();
        b.transform = scaleNormal;
        b.opacity = 0;
        b.duration = params.duration ? params.duration : 200;
        tiObject.animate(b);
        b.addEventListener("complete", function() {
            params.callback && params.callback();
        });
    });
};

exports.fadeIn = function(tiObject, params) {
    params = params ? params : {};
    var a = Ti.UI.createAnimation();
    tiObject.opacity = 0;
    a.duration = params.duration ? params.duration : 250;
    a.opacity = params.fade || 1;
    tiObject.animate(a);
    params.callback && a.addEventListener("complete", params.callback);
};

exports.fadeOut = function(tiObject, params) {
    params = params ? params : {};
    var a = Ti.UI.createAnimation();
    a.duration = params.duration ? params.duration : 250;
    a.opacity = 0;
    tiObject.animate(a);
    params.callback && a.addEventListener("complete", params.callback);
};

exports.shake = function(tiObject, params) {
    function shakeLeft() {
        if (count) {
            var a = Ti.UI.createAnimation();
            a.duration = params.duration ? params.duration : 75;
            a.left = params.offset ? -params.offset : -5;
            tiObject.animate(a);
            a.addEventListener("complete", shakeRight);
            count--;
        } else shakeComplete();
    }
    function shakeRight() {
        var b = Ti.UI.createAnimation();
        b.duration = params.duration ? params.duration : 75;
        b.left = params.offset ? -params.offset : 5;
        tiObject.animate(b);
        b.addEventListener("complete", shakeLeft);
    }
    function shakeComplete() {
        var c = Ti.UI.createAnimation();
        c.duration = params.duration ? params.duration : 75;
        c.left = 0;
        tiObject.animate(c);
    }
    params = params || {};
    var count = params.shakeTimes ? params.shakeTimes : 3;
    shakeLeft();
};