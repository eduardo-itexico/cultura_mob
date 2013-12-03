function Controller() {
    function setValue() {
        args.params.callback && args.params.callback({
            value: this.value
        });
        APP.popOut();
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Settings/CountryPicker";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.CountryPicker = Ti.UI.createScrollView({
        backgroundColor: "#ecf1f4",
        layout: "vertical",
        scrollType: "vertical",
        id: "CountryPicker"
    });
    $.__views.CountryPicker && $.addTopLevelView($.__views.CountryPicker);
    $.__views.__alloyId212 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "United States",
        id: "__alloyId212"
    });
    $.__views.CountryPicker.add($.__views.__alloyId212);
    setValue ? $.__views.__alloyId212.addEventListener("click", setValue) : __defers["$.__views.__alloyId212!click!setValue"] = true;
    $.__views.__alloyId213 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "United States",
        id: "__alloyId213"
    });
    $.__views.__alloyId212.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId214"
    });
    $.__views.__alloyId212.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId215"
    });
    $.__views.__alloyId212.add($.__views.__alloyId215);
    $.__views.__alloyId216 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Afghanistan",
        id: "__alloyId216"
    });
    $.__views.CountryPicker.add($.__views.__alloyId216);
    setValue ? $.__views.__alloyId216.addEventListener("click", setValue) : __defers["$.__views.__alloyId216!click!setValue"] = true;
    $.__views.__alloyId217 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Afghanistan",
        id: "__alloyId217"
    });
    $.__views.__alloyId216.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId218"
    });
    $.__views.__alloyId216.add($.__views.__alloyId218);
    $.__views.__alloyId219 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId219"
    });
    $.__views.__alloyId216.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Albania",
        id: "__alloyId220"
    });
    $.__views.CountryPicker.add($.__views.__alloyId220);
    setValue ? $.__views.__alloyId220.addEventListener("click", setValue) : __defers["$.__views.__alloyId220!click!setValue"] = true;
    $.__views.__alloyId221 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Albania",
        id: "__alloyId221"
    });
    $.__views.__alloyId220.add($.__views.__alloyId221);
    $.__views.__alloyId222 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId222"
    });
    $.__views.__alloyId220.add($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId223"
    });
    $.__views.__alloyId220.add($.__views.__alloyId223);
    $.__views.__alloyId224 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Algeria",
        id: "__alloyId224"
    });
    $.__views.CountryPicker.add($.__views.__alloyId224);
    setValue ? $.__views.__alloyId224.addEventListener("click", setValue) : __defers["$.__views.__alloyId224!click!setValue"] = true;
    $.__views.__alloyId225 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Algeria",
        id: "__alloyId225"
    });
    $.__views.__alloyId224.add($.__views.__alloyId225);
    $.__views.__alloyId226 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId226"
    });
    $.__views.__alloyId224.add($.__views.__alloyId226);
    $.__views.__alloyId227 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId227"
    });
    $.__views.__alloyId224.add($.__views.__alloyId227);
    $.__views.__alloyId228 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Andorra",
        id: "__alloyId228"
    });
    $.__views.CountryPicker.add($.__views.__alloyId228);
    setValue ? $.__views.__alloyId228.addEventListener("click", setValue) : __defers["$.__views.__alloyId228!click!setValue"] = true;
    $.__views.__alloyId229 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Andorra",
        id: "__alloyId229"
    });
    $.__views.__alloyId228.add($.__views.__alloyId229);
    $.__views.__alloyId230 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId230"
    });
    $.__views.__alloyId228.add($.__views.__alloyId230);
    $.__views.__alloyId231 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId231"
    });
    $.__views.__alloyId228.add($.__views.__alloyId231);
    $.__views.__alloyId232 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Angola",
        id: "__alloyId232"
    });
    $.__views.CountryPicker.add($.__views.__alloyId232);
    setValue ? $.__views.__alloyId232.addEventListener("click", setValue) : __defers["$.__views.__alloyId232!click!setValue"] = true;
    $.__views.__alloyId233 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Angola",
        id: "__alloyId233"
    });
    $.__views.__alloyId232.add($.__views.__alloyId233);
    $.__views.__alloyId234 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId234"
    });
    $.__views.__alloyId232.add($.__views.__alloyId234);
    $.__views.__alloyId235 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId235"
    });
    $.__views.__alloyId232.add($.__views.__alloyId235);
    $.__views.__alloyId236 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Argentina",
        id: "__alloyId236"
    });
    $.__views.CountryPicker.add($.__views.__alloyId236);
    setValue ? $.__views.__alloyId236.addEventListener("click", setValue) : __defers["$.__views.__alloyId236!click!setValue"] = true;
    $.__views.__alloyId237 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Argentina",
        id: "__alloyId237"
    });
    $.__views.__alloyId236.add($.__views.__alloyId237);
    $.__views.__alloyId238 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId238"
    });
    $.__views.__alloyId236.add($.__views.__alloyId238);
    $.__views.__alloyId239 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId239"
    });
    $.__views.__alloyId236.add($.__views.__alloyId239);
    $.__views.__alloyId240 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Ascension Islands",
        id: "__alloyId240"
    });
    $.__views.CountryPicker.add($.__views.__alloyId240);
    setValue ? $.__views.__alloyId240.addEventListener("click", setValue) : __defers["$.__views.__alloyId240!click!setValue"] = true;
    $.__views.__alloyId241 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Ascension Islands",
        id: "__alloyId241"
    });
    $.__views.__alloyId240.add($.__views.__alloyId241);
    $.__views.__alloyId242 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId242"
    });
    $.__views.__alloyId240.add($.__views.__alloyId242);
    $.__views.__alloyId243 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId243"
    });
    $.__views.__alloyId240.add($.__views.__alloyId243);
    $.__views.__alloyId244 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Australia",
        id: "__alloyId244"
    });
    $.__views.CountryPicker.add($.__views.__alloyId244);
    setValue ? $.__views.__alloyId244.addEventListener("click", setValue) : __defers["$.__views.__alloyId244!click!setValue"] = true;
    $.__views.__alloyId245 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Australia",
        id: "__alloyId245"
    });
    $.__views.__alloyId244.add($.__views.__alloyId245);
    $.__views.__alloyId246 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId246"
    });
    $.__views.__alloyId244.add($.__views.__alloyId246);
    $.__views.__alloyId247 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId247"
    });
    $.__views.__alloyId244.add($.__views.__alloyId247);
    $.__views.__alloyId248 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Austria",
        id: "__alloyId248"
    });
    $.__views.CountryPicker.add($.__views.__alloyId248);
    setValue ? $.__views.__alloyId248.addEventListener("click", setValue) : __defers["$.__views.__alloyId248!click!setValue"] = true;
    $.__views.__alloyId249 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Austria",
        id: "__alloyId249"
    });
    $.__views.__alloyId248.add($.__views.__alloyId249);
    $.__views.__alloyId250 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId250"
    });
    $.__views.__alloyId248.add($.__views.__alloyId250);
    $.__views.__alloyId251 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId251"
    });
    $.__views.__alloyId248.add($.__views.__alloyId251);
    $.__views.__alloyId252 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Azores",
        id: "__alloyId252"
    });
    $.__views.CountryPicker.add($.__views.__alloyId252);
    setValue ? $.__views.__alloyId252.addEventListener("click", setValue) : __defers["$.__views.__alloyId252!click!setValue"] = true;
    $.__views.__alloyId253 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Azores",
        id: "__alloyId253"
    });
    $.__views.__alloyId252.add($.__views.__alloyId253);
    $.__views.__alloyId254 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId254"
    });
    $.__views.__alloyId252.add($.__views.__alloyId254);
    $.__views.__alloyId255 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId255"
    });
    $.__views.__alloyId252.add($.__views.__alloyId255);
    $.__views.__alloyId256 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Bahamas",
        id: "__alloyId256"
    });
    $.__views.CountryPicker.add($.__views.__alloyId256);
    setValue ? $.__views.__alloyId256.addEventListener("click", setValue) : __defers["$.__views.__alloyId256!click!setValue"] = true;
    $.__views.__alloyId257 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Bahamas",
        id: "__alloyId257"
    });
    $.__views.__alloyId256.add($.__views.__alloyId257);
    $.__views.__alloyId258 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId258"
    });
    $.__views.__alloyId256.add($.__views.__alloyId258);
    $.__views.__alloyId259 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId259"
    });
    $.__views.__alloyId256.add($.__views.__alloyId259);
    $.__views.__alloyId260 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Bahrain",
        id: "__alloyId260"
    });
    $.__views.CountryPicker.add($.__views.__alloyId260);
    setValue ? $.__views.__alloyId260.addEventListener("click", setValue) : __defers["$.__views.__alloyId260!click!setValue"] = true;
    $.__views.__alloyId261 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Bahrain",
        id: "__alloyId261"
    });
    $.__views.__alloyId260.add($.__views.__alloyId261);
    $.__views.__alloyId262 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId262"
    });
    $.__views.__alloyId260.add($.__views.__alloyId262);
    $.__views.__alloyId263 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId263"
    });
    $.__views.__alloyId260.add($.__views.__alloyId263);
    $.__views.__alloyId264 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Bangladesh",
        id: "__alloyId264"
    });
    $.__views.CountryPicker.add($.__views.__alloyId264);
    setValue ? $.__views.__alloyId264.addEventListener("click", setValue) : __defers["$.__views.__alloyId264!click!setValue"] = true;
    $.__views.__alloyId265 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Bangladesh",
        id: "__alloyId265"
    });
    $.__views.__alloyId264.add($.__views.__alloyId265);
    $.__views.__alloyId266 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId266"
    });
    $.__views.__alloyId264.add($.__views.__alloyId266);
    $.__views.__alloyId267 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId267"
    });
    $.__views.__alloyId264.add($.__views.__alloyId267);
    $.__views.__alloyId268 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Barbados",
        id: "__alloyId268"
    });
    $.__views.CountryPicker.add($.__views.__alloyId268);
    setValue ? $.__views.__alloyId268.addEventListener("click", setValue) : __defers["$.__views.__alloyId268!click!setValue"] = true;
    $.__views.__alloyId269 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Barbados",
        id: "__alloyId269"
    });
    $.__views.__alloyId268.add($.__views.__alloyId269);
    $.__views.__alloyId270 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId270"
    });
    $.__views.__alloyId268.add($.__views.__alloyId270);
    $.__views.__alloyId271 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId271"
    });
    $.__views.__alloyId268.add($.__views.__alloyId271);
    $.__views.__alloyId272 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Belgium",
        id: "__alloyId272"
    });
    $.__views.CountryPicker.add($.__views.__alloyId272);
    setValue ? $.__views.__alloyId272.addEventListener("click", setValue) : __defers["$.__views.__alloyId272!click!setValue"] = true;
    $.__views.__alloyId273 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Belgium",
        id: "__alloyId273"
    });
    $.__views.__alloyId272.add($.__views.__alloyId273);
    $.__views.__alloyId274 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId274"
    });
    $.__views.__alloyId272.add($.__views.__alloyId274);
    $.__views.__alloyId275 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId275"
    });
    $.__views.__alloyId272.add($.__views.__alloyId275);
    $.__views.__alloyId276 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Belize",
        id: "__alloyId276"
    });
    $.__views.CountryPicker.add($.__views.__alloyId276);
    setValue ? $.__views.__alloyId276.addEventListener("click", setValue) : __defers["$.__views.__alloyId276!click!setValue"] = true;
    $.__views.__alloyId277 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Belize",
        id: "__alloyId277"
    });
    $.__views.__alloyId276.add($.__views.__alloyId277);
    $.__views.__alloyId278 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId278"
    });
    $.__views.__alloyId276.add($.__views.__alloyId278);
    $.__views.__alloyId279 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId279"
    });
    $.__views.__alloyId276.add($.__views.__alloyId279);
    $.__views.__alloyId280 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Benin",
        id: "__alloyId280"
    });
    $.__views.CountryPicker.add($.__views.__alloyId280);
    setValue ? $.__views.__alloyId280.addEventListener("click", setValue) : __defers["$.__views.__alloyId280!click!setValue"] = true;
    $.__views.__alloyId281 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Benin",
        id: "__alloyId281"
    });
    $.__views.__alloyId280.add($.__views.__alloyId281);
    $.__views.__alloyId282 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId282"
    });
    $.__views.__alloyId280.add($.__views.__alloyId282);
    $.__views.__alloyId283 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId283"
    });
    $.__views.__alloyId280.add($.__views.__alloyId283);
    $.__views.__alloyId284 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Bermuda",
        id: "__alloyId284"
    });
    $.__views.CountryPicker.add($.__views.__alloyId284);
    setValue ? $.__views.__alloyId284.addEventListener("click", setValue) : __defers["$.__views.__alloyId284!click!setValue"] = true;
    $.__views.__alloyId285 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Bermuda",
        id: "__alloyId285"
    });
    $.__views.__alloyId284.add($.__views.__alloyId285);
    $.__views.__alloyId286 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId286"
    });
    $.__views.__alloyId284.add($.__views.__alloyId286);
    $.__views.__alloyId287 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId287"
    });
    $.__views.__alloyId284.add($.__views.__alloyId287);
    $.__views.__alloyId288 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Bhutan",
        id: "__alloyId288"
    });
    $.__views.CountryPicker.add($.__views.__alloyId288);
    setValue ? $.__views.__alloyId288.addEventListener("click", setValue) : __defers["$.__views.__alloyId288!click!setValue"] = true;
    $.__views.__alloyId289 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Bhutan",
        id: "__alloyId289"
    });
    $.__views.__alloyId288.add($.__views.__alloyId289);
    $.__views.__alloyId290 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId290"
    });
    $.__views.__alloyId288.add($.__views.__alloyId290);
    $.__views.__alloyId291 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId291"
    });
    $.__views.__alloyId288.add($.__views.__alloyId291);
    $.__views.__alloyId292 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Bolivia",
        id: "__alloyId292"
    });
    $.__views.CountryPicker.add($.__views.__alloyId292);
    setValue ? $.__views.__alloyId292.addEventListener("click", setValue) : __defers["$.__views.__alloyId292!click!setValue"] = true;
    $.__views.__alloyId293 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Bolivia",
        id: "__alloyId293"
    });
    $.__views.__alloyId292.add($.__views.__alloyId293);
    $.__views.__alloyId294 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId294"
    });
    $.__views.__alloyId292.add($.__views.__alloyId294);
    $.__views.__alloyId295 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId295"
    });
    $.__views.__alloyId292.add($.__views.__alloyId295);
    $.__views.__alloyId296 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Borneo",
        id: "__alloyId296"
    });
    $.__views.CountryPicker.add($.__views.__alloyId296);
    setValue ? $.__views.__alloyId296.addEventListener("click", setValue) : __defers["$.__views.__alloyId296!click!setValue"] = true;
    $.__views.__alloyId297 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Borneo",
        id: "__alloyId297"
    });
    $.__views.__alloyId296.add($.__views.__alloyId297);
    $.__views.__alloyId298 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId298"
    });
    $.__views.__alloyId296.add($.__views.__alloyId298);
    $.__views.__alloyId299 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId299"
    });
    $.__views.__alloyId296.add($.__views.__alloyId299);
    $.__views.__alloyId300 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Bosnia-Hertzegovina",
        id: "__alloyId300"
    });
    $.__views.CountryPicker.add($.__views.__alloyId300);
    setValue ? $.__views.__alloyId300.addEventListener("click", setValue) : __defers["$.__views.__alloyId300!click!setValue"] = true;
    $.__views.__alloyId301 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Bosnia-Hertzegovina",
        id: "__alloyId301"
    });
    $.__views.__alloyId300.add($.__views.__alloyId301);
    $.__views.__alloyId302 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId302"
    });
    $.__views.__alloyId300.add($.__views.__alloyId302);
    $.__views.__alloyId303 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId303"
    });
    $.__views.__alloyId300.add($.__views.__alloyId303);
    $.__views.__alloyId304 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Botswana",
        id: "__alloyId304"
    });
    $.__views.CountryPicker.add($.__views.__alloyId304);
    setValue ? $.__views.__alloyId304.addEventListener("click", setValue) : __defers["$.__views.__alloyId304!click!setValue"] = true;
    $.__views.__alloyId305 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Botswana",
        id: "__alloyId305"
    });
    $.__views.__alloyId304.add($.__views.__alloyId305);
    $.__views.__alloyId306 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId306"
    });
    $.__views.__alloyId304.add($.__views.__alloyId306);
    $.__views.__alloyId307 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId307"
    });
    $.__views.__alloyId304.add($.__views.__alloyId307);
    $.__views.__alloyId308 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Brazil",
        id: "__alloyId308"
    });
    $.__views.CountryPicker.add($.__views.__alloyId308);
    setValue ? $.__views.__alloyId308.addEventListener("click", setValue) : __defers["$.__views.__alloyId308!click!setValue"] = true;
    $.__views.__alloyId309 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Brazil",
        id: "__alloyId309"
    });
    $.__views.__alloyId308.add($.__views.__alloyId309);
    $.__views.__alloyId310 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId310"
    });
    $.__views.__alloyId308.add($.__views.__alloyId310);
    $.__views.__alloyId311 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId311"
    });
    $.__views.__alloyId308.add($.__views.__alloyId311);
    $.__views.__alloyId312 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "British Isles",
        id: "__alloyId312"
    });
    $.__views.CountryPicker.add($.__views.__alloyId312);
    setValue ? $.__views.__alloyId312.addEventListener("click", setValue) : __defers["$.__views.__alloyId312!click!setValue"] = true;
    $.__views.__alloyId313 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "British Isles",
        id: "__alloyId313"
    });
    $.__views.__alloyId312.add($.__views.__alloyId313);
    $.__views.__alloyId314 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId314"
    });
    $.__views.__alloyId312.add($.__views.__alloyId314);
    $.__views.__alloyId315 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId315"
    });
    $.__views.__alloyId312.add($.__views.__alloyId315);
    $.__views.__alloyId316 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Brunei",
        id: "__alloyId316"
    });
    $.__views.CountryPicker.add($.__views.__alloyId316);
    setValue ? $.__views.__alloyId316.addEventListener("click", setValue) : __defers["$.__views.__alloyId316!click!setValue"] = true;
    $.__views.__alloyId317 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Brunei",
        id: "__alloyId317"
    });
    $.__views.__alloyId316.add($.__views.__alloyId317);
    $.__views.__alloyId318 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId318"
    });
    $.__views.__alloyId316.add($.__views.__alloyId318);
    $.__views.__alloyId319 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId319"
    });
    $.__views.__alloyId316.add($.__views.__alloyId319);
    $.__views.__alloyId320 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Bulgaria",
        id: "__alloyId320"
    });
    $.__views.CountryPicker.add($.__views.__alloyId320);
    setValue ? $.__views.__alloyId320.addEventListener("click", setValue) : __defers["$.__views.__alloyId320!click!setValue"] = true;
    $.__views.__alloyId321 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Bulgaria",
        id: "__alloyId321"
    });
    $.__views.__alloyId320.add($.__views.__alloyId321);
    $.__views.__alloyId322 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId322"
    });
    $.__views.__alloyId320.add($.__views.__alloyId322);
    $.__views.__alloyId323 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId323"
    });
    $.__views.__alloyId320.add($.__views.__alloyId323);
    $.__views.__alloyId324 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Burma",
        id: "__alloyId324"
    });
    $.__views.CountryPicker.add($.__views.__alloyId324);
    setValue ? $.__views.__alloyId324.addEventListener("click", setValue) : __defers["$.__views.__alloyId324!click!setValue"] = true;
    $.__views.__alloyId325 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Burma",
        id: "__alloyId325"
    });
    $.__views.__alloyId324.add($.__views.__alloyId325);
    $.__views.__alloyId326 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId326"
    });
    $.__views.__alloyId324.add($.__views.__alloyId326);
    $.__views.__alloyId327 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId327"
    });
    $.__views.__alloyId324.add($.__views.__alloyId327);
    $.__views.__alloyId328 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Burundi",
        id: "__alloyId328"
    });
    $.__views.CountryPicker.add($.__views.__alloyId328);
    setValue ? $.__views.__alloyId328.addEventListener("click", setValue) : __defers["$.__views.__alloyId328!click!setValue"] = true;
    $.__views.__alloyId329 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Burundi",
        id: "__alloyId329"
    });
    $.__views.__alloyId328.add($.__views.__alloyId329);
    $.__views.__alloyId330 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId330"
    });
    $.__views.__alloyId328.add($.__views.__alloyId330);
    $.__views.__alloyId331 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId331"
    });
    $.__views.__alloyId328.add($.__views.__alloyId331);
    $.__views.__alloyId332 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Cambodia",
        id: "__alloyId332"
    });
    $.__views.CountryPicker.add($.__views.__alloyId332);
    setValue ? $.__views.__alloyId332.addEventListener("click", setValue) : __defers["$.__views.__alloyId332!click!setValue"] = true;
    $.__views.__alloyId333 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Cambodia",
        id: "__alloyId333"
    });
    $.__views.__alloyId332.add($.__views.__alloyId333);
    $.__views.__alloyId334 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId334"
    });
    $.__views.__alloyId332.add($.__views.__alloyId334);
    $.__views.__alloyId335 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId335"
    });
    $.__views.__alloyId332.add($.__views.__alloyId335);
    $.__views.__alloyId336 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Cameroon",
        id: "__alloyId336"
    });
    $.__views.CountryPicker.add($.__views.__alloyId336);
    setValue ? $.__views.__alloyId336.addEventListener("click", setValue) : __defers["$.__views.__alloyId336!click!setValue"] = true;
    $.__views.__alloyId337 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Cameroon",
        id: "__alloyId337"
    });
    $.__views.__alloyId336.add($.__views.__alloyId337);
    $.__views.__alloyId338 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId338"
    });
    $.__views.__alloyId336.add($.__views.__alloyId338);
    $.__views.__alloyId339 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId339"
    });
    $.__views.__alloyId336.add($.__views.__alloyId339);
    $.__views.__alloyId340 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Canada",
        id: "__alloyId340"
    });
    $.__views.CountryPicker.add($.__views.__alloyId340);
    setValue ? $.__views.__alloyId340.addEventListener("click", setValue) : __defers["$.__views.__alloyId340!click!setValue"] = true;
    $.__views.__alloyId341 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Canada",
        id: "__alloyId341"
    });
    $.__views.__alloyId340.add($.__views.__alloyId341);
    $.__views.__alloyId342 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId342"
    });
    $.__views.__alloyId340.add($.__views.__alloyId342);
    $.__views.__alloyId343 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId343"
    });
    $.__views.__alloyId340.add($.__views.__alloyId343);
    $.__views.__alloyId344 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Canary Islands",
        id: "__alloyId344"
    });
    $.__views.CountryPicker.add($.__views.__alloyId344);
    setValue ? $.__views.__alloyId344.addEventListener("click", setValue) : __defers["$.__views.__alloyId344!click!setValue"] = true;
    $.__views.__alloyId345 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Canary Islands",
        id: "__alloyId345"
    });
    $.__views.__alloyId344.add($.__views.__alloyId345);
    $.__views.__alloyId346 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId346"
    });
    $.__views.__alloyId344.add($.__views.__alloyId346);
    $.__views.__alloyId347 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId347"
    });
    $.__views.__alloyId344.add($.__views.__alloyId347);
    $.__views.__alloyId348 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Cape Vere Islands",
        id: "__alloyId348"
    });
    $.__views.CountryPicker.add($.__views.__alloyId348);
    setValue ? $.__views.__alloyId348.addEventListener("click", setValue) : __defers["$.__views.__alloyId348!click!setValue"] = true;
    $.__views.__alloyId349 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Cape Vere Islands",
        id: "__alloyId349"
    });
    $.__views.__alloyId348.add($.__views.__alloyId349);
    $.__views.__alloyId350 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId350"
    });
    $.__views.__alloyId348.add($.__views.__alloyId350);
    $.__views.__alloyId351 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId351"
    });
    $.__views.__alloyId348.add($.__views.__alloyId351);
    $.__views.__alloyId352 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Caroline Islands",
        id: "__alloyId352"
    });
    $.__views.CountryPicker.add($.__views.__alloyId352);
    setValue ? $.__views.__alloyId352.addEventListener("click", setValue) : __defers["$.__views.__alloyId352!click!setValue"] = true;
    $.__views.__alloyId353 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Caroline Islands",
        id: "__alloyId353"
    });
    $.__views.__alloyId352.add($.__views.__alloyId353);
    $.__views.__alloyId354 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId354"
    });
    $.__views.__alloyId352.add($.__views.__alloyId354);
    $.__views.__alloyId355 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId355"
    });
    $.__views.__alloyId352.add($.__views.__alloyId355);
    $.__views.__alloyId356 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Cayman Islands",
        id: "__alloyId356"
    });
    $.__views.CountryPicker.add($.__views.__alloyId356);
    setValue ? $.__views.__alloyId356.addEventListener("click", setValue) : __defers["$.__views.__alloyId356!click!setValue"] = true;
    $.__views.__alloyId357 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Cayman Islands",
        id: "__alloyId357"
    });
    $.__views.__alloyId356.add($.__views.__alloyId357);
    $.__views.__alloyId358 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId358"
    });
    $.__views.__alloyId356.add($.__views.__alloyId358);
    $.__views.__alloyId359 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId359"
    });
    $.__views.__alloyId356.add($.__views.__alloyId359);
    $.__views.__alloyId360 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Central African Republic",
        id: "__alloyId360"
    });
    $.__views.CountryPicker.add($.__views.__alloyId360);
    setValue ? $.__views.__alloyId360.addEventListener("click", setValue) : __defers["$.__views.__alloyId360!click!setValue"] = true;
    $.__views.__alloyId361 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Central African Republic",
        id: "__alloyId361"
    });
    $.__views.__alloyId360.add($.__views.__alloyId361);
    $.__views.__alloyId362 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId362"
    });
    $.__views.__alloyId360.add($.__views.__alloyId362);
    $.__views.__alloyId363 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId363"
    });
    $.__views.__alloyId360.add($.__views.__alloyId363);
    $.__views.__alloyId364 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Chad",
        id: "__alloyId364"
    });
    $.__views.CountryPicker.add($.__views.__alloyId364);
    setValue ? $.__views.__alloyId364.addEventListener("click", setValue) : __defers["$.__views.__alloyId364!click!setValue"] = true;
    $.__views.__alloyId365 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Chad",
        id: "__alloyId365"
    });
    $.__views.__alloyId364.add($.__views.__alloyId365);
    $.__views.__alloyId366 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId366"
    });
    $.__views.__alloyId364.add($.__views.__alloyId366);
    $.__views.__alloyId367 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId367"
    });
    $.__views.__alloyId364.add($.__views.__alloyId367);
    $.__views.__alloyId368 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Channel Islands",
        id: "__alloyId368"
    });
    $.__views.CountryPicker.add($.__views.__alloyId368);
    setValue ? $.__views.__alloyId368.addEventListener("click", setValue) : __defers["$.__views.__alloyId368!click!setValue"] = true;
    $.__views.__alloyId369 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Channel Islands",
        id: "__alloyId369"
    });
    $.__views.__alloyId368.add($.__views.__alloyId369);
    $.__views.__alloyId370 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId370"
    });
    $.__views.__alloyId368.add($.__views.__alloyId370);
    $.__views.__alloyId371 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId371"
    });
    $.__views.__alloyId368.add($.__views.__alloyId371);
    $.__views.__alloyId372 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Chile",
        id: "__alloyId372"
    });
    $.__views.CountryPicker.add($.__views.__alloyId372);
    setValue ? $.__views.__alloyId372.addEventListener("click", setValue) : __defers["$.__views.__alloyId372!click!setValue"] = true;
    $.__views.__alloyId373 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Chile",
        id: "__alloyId373"
    });
    $.__views.__alloyId372.add($.__views.__alloyId373);
    $.__views.__alloyId374 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId374"
    });
    $.__views.__alloyId372.add($.__views.__alloyId374);
    $.__views.__alloyId375 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId375"
    });
    $.__views.__alloyId372.add($.__views.__alloyId375);
    $.__views.__alloyId376 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "China",
        id: "__alloyId376"
    });
    $.__views.CountryPicker.add($.__views.__alloyId376);
    setValue ? $.__views.__alloyId376.addEventListener("click", setValue) : __defers["$.__views.__alloyId376!click!setValue"] = true;
    $.__views.__alloyId377 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "China",
        id: "__alloyId377"
    });
    $.__views.__alloyId376.add($.__views.__alloyId377);
    $.__views.__alloyId378 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId378"
    });
    $.__views.__alloyId376.add($.__views.__alloyId378);
    $.__views.__alloyId379 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId379"
    });
    $.__views.__alloyId376.add($.__views.__alloyId379);
    $.__views.__alloyId380 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Colombia",
        id: "__alloyId380"
    });
    $.__views.CountryPicker.add($.__views.__alloyId380);
    setValue ? $.__views.__alloyId380.addEventListener("click", setValue) : __defers["$.__views.__alloyId380!click!setValue"] = true;
    $.__views.__alloyId381 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Colombia",
        id: "__alloyId381"
    });
    $.__views.__alloyId380.add($.__views.__alloyId381);
    $.__views.__alloyId382 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId382"
    });
    $.__views.__alloyId380.add($.__views.__alloyId382);
    $.__views.__alloyId383 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId383"
    });
    $.__views.__alloyId380.add($.__views.__alloyId383);
    $.__views.__alloyId384 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Comoros Islands",
        id: "__alloyId384"
    });
    $.__views.CountryPicker.add($.__views.__alloyId384);
    setValue ? $.__views.__alloyId384.addEventListener("click", setValue) : __defers["$.__views.__alloyId384!click!setValue"] = true;
    $.__views.__alloyId385 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Comoros Islands",
        id: "__alloyId385"
    });
    $.__views.__alloyId384.add($.__views.__alloyId385);
    $.__views.__alloyId386 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId386"
    });
    $.__views.__alloyId384.add($.__views.__alloyId386);
    $.__views.__alloyId387 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId387"
    });
    $.__views.__alloyId384.add($.__views.__alloyId387);
    $.__views.__alloyId388 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Congo",
        id: "__alloyId388"
    });
    $.__views.CountryPicker.add($.__views.__alloyId388);
    setValue ? $.__views.__alloyId388.addEventListener("click", setValue) : __defers["$.__views.__alloyId388!click!setValue"] = true;
    $.__views.__alloyId389 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Congo",
        id: "__alloyId389"
    });
    $.__views.__alloyId388.add($.__views.__alloyId389);
    $.__views.__alloyId390 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId390"
    });
    $.__views.__alloyId388.add($.__views.__alloyId390);
    $.__views.__alloyId391 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId391"
    });
    $.__views.__alloyId388.add($.__views.__alloyId391);
    $.__views.__alloyId392 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Corsica",
        id: "__alloyId392"
    });
    $.__views.CountryPicker.add($.__views.__alloyId392);
    setValue ? $.__views.__alloyId392.addEventListener("click", setValue) : __defers["$.__views.__alloyId392!click!setValue"] = true;
    $.__views.__alloyId393 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Corsica",
        id: "__alloyId393"
    });
    $.__views.__alloyId392.add($.__views.__alloyId393);
    $.__views.__alloyId394 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId394"
    });
    $.__views.__alloyId392.add($.__views.__alloyId394);
    $.__views.__alloyId395 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId395"
    });
    $.__views.__alloyId392.add($.__views.__alloyId395);
    $.__views.__alloyId396 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Costa Rica",
        id: "__alloyId396"
    });
    $.__views.CountryPicker.add($.__views.__alloyId396);
    setValue ? $.__views.__alloyId396.addEventListener("click", setValue) : __defers["$.__views.__alloyId396!click!setValue"] = true;
    $.__views.__alloyId397 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Costa Rica",
        id: "__alloyId397"
    });
    $.__views.__alloyId396.add($.__views.__alloyId397);
    $.__views.__alloyId398 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId398"
    });
    $.__views.__alloyId396.add($.__views.__alloyId398);
    $.__views.__alloyId399 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId399"
    });
    $.__views.__alloyId396.add($.__views.__alloyId399);
    $.__views.__alloyId400 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Cuba",
        id: "__alloyId400"
    });
    $.__views.CountryPicker.add($.__views.__alloyId400);
    setValue ? $.__views.__alloyId400.addEventListener("click", setValue) : __defers["$.__views.__alloyId400!click!setValue"] = true;
    $.__views.__alloyId401 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Cuba",
        id: "__alloyId401"
    });
    $.__views.__alloyId400.add($.__views.__alloyId401);
    $.__views.__alloyId402 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId402"
    });
    $.__views.__alloyId400.add($.__views.__alloyId402);
    $.__views.__alloyId403 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId403"
    });
    $.__views.__alloyId400.add($.__views.__alloyId403);
    $.__views.__alloyId404 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Cyprus",
        id: "__alloyId404"
    });
    $.__views.CountryPicker.add($.__views.__alloyId404);
    setValue ? $.__views.__alloyId404.addEventListener("click", setValue) : __defers["$.__views.__alloyId404!click!setValue"] = true;
    $.__views.__alloyId405 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Cyprus",
        id: "__alloyId405"
    });
    $.__views.__alloyId404.add($.__views.__alloyId405);
    $.__views.__alloyId406 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId406"
    });
    $.__views.__alloyId404.add($.__views.__alloyId406);
    $.__views.__alloyId407 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId407"
    });
    $.__views.__alloyId404.add($.__views.__alloyId407);
    $.__views.__alloyId408 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Czechoslovakia",
        id: "__alloyId408"
    });
    $.__views.CountryPicker.add($.__views.__alloyId408);
    setValue ? $.__views.__alloyId408.addEventListener("click", setValue) : __defers["$.__views.__alloyId408!click!setValue"] = true;
    $.__views.__alloyId409 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Czechoslovakia",
        id: "__alloyId409"
    });
    $.__views.__alloyId408.add($.__views.__alloyId409);
    $.__views.__alloyId410 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId410"
    });
    $.__views.__alloyId408.add($.__views.__alloyId410);
    $.__views.__alloyId411 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId411"
    });
    $.__views.__alloyId408.add($.__views.__alloyId411);
    $.__views.__alloyId412 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Denmark",
        id: "__alloyId412"
    });
    $.__views.CountryPicker.add($.__views.__alloyId412);
    setValue ? $.__views.__alloyId412.addEventListener("click", setValue) : __defers["$.__views.__alloyId412!click!setValue"] = true;
    $.__views.__alloyId413 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Denmark",
        id: "__alloyId413"
    });
    $.__views.__alloyId412.add($.__views.__alloyId413);
    $.__views.__alloyId414 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId414"
    });
    $.__views.__alloyId412.add($.__views.__alloyId414);
    $.__views.__alloyId415 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId415"
    });
    $.__views.__alloyId412.add($.__views.__alloyId415);
    $.__views.__alloyId416 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Djibouti",
        id: "__alloyId416"
    });
    $.__views.CountryPicker.add($.__views.__alloyId416);
    setValue ? $.__views.__alloyId416.addEventListener("click", setValue) : __defers["$.__views.__alloyId416!click!setValue"] = true;
    $.__views.__alloyId417 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Djibouti",
        id: "__alloyId417"
    });
    $.__views.__alloyId416.add($.__views.__alloyId417);
    $.__views.__alloyId418 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId418"
    });
    $.__views.__alloyId416.add($.__views.__alloyId418);
    $.__views.__alloyId419 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId419"
    });
    $.__views.__alloyId416.add($.__views.__alloyId419);
    $.__views.__alloyId420 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Dominica",
        id: "__alloyId420"
    });
    $.__views.CountryPicker.add($.__views.__alloyId420);
    setValue ? $.__views.__alloyId420.addEventListener("click", setValue) : __defers["$.__views.__alloyId420!click!setValue"] = true;
    $.__views.__alloyId421 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Dominica",
        id: "__alloyId421"
    });
    $.__views.__alloyId420.add($.__views.__alloyId421);
    $.__views.__alloyId422 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId422"
    });
    $.__views.__alloyId420.add($.__views.__alloyId422);
    $.__views.__alloyId423 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId423"
    });
    $.__views.__alloyId420.add($.__views.__alloyId423);
    $.__views.__alloyId424 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Dominican Republic",
        id: "__alloyId424"
    });
    $.__views.CountryPicker.add($.__views.__alloyId424);
    setValue ? $.__views.__alloyId424.addEventListener("click", setValue) : __defers["$.__views.__alloyId424!click!setValue"] = true;
    $.__views.__alloyId425 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Dominican Republic",
        id: "__alloyId425"
    });
    $.__views.__alloyId424.add($.__views.__alloyId425);
    $.__views.__alloyId426 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId426"
    });
    $.__views.__alloyId424.add($.__views.__alloyId426);
    $.__views.__alloyId427 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId427"
    });
    $.__views.__alloyId424.add($.__views.__alloyId427);
    $.__views.__alloyId428 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "East Timor",
        id: "__alloyId428"
    });
    $.__views.CountryPicker.add($.__views.__alloyId428);
    setValue ? $.__views.__alloyId428.addEventListener("click", setValue) : __defers["$.__views.__alloyId428!click!setValue"] = true;
    $.__views.__alloyId429 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "East Timor",
        id: "__alloyId429"
    });
    $.__views.__alloyId428.add($.__views.__alloyId429);
    $.__views.__alloyId430 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId430"
    });
    $.__views.__alloyId428.add($.__views.__alloyId430);
    $.__views.__alloyId431 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId431"
    });
    $.__views.__alloyId428.add($.__views.__alloyId431);
    $.__views.__alloyId432 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Ecuador",
        id: "__alloyId432"
    });
    $.__views.CountryPicker.add($.__views.__alloyId432);
    setValue ? $.__views.__alloyId432.addEventListener("click", setValue) : __defers["$.__views.__alloyId432!click!setValue"] = true;
    $.__views.__alloyId433 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Ecuador",
        id: "__alloyId433"
    });
    $.__views.__alloyId432.add($.__views.__alloyId433);
    $.__views.__alloyId434 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId434"
    });
    $.__views.__alloyId432.add($.__views.__alloyId434);
    $.__views.__alloyId435 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId435"
    });
    $.__views.__alloyId432.add($.__views.__alloyId435);
    $.__views.__alloyId436 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Egypt",
        id: "__alloyId436"
    });
    $.__views.CountryPicker.add($.__views.__alloyId436);
    setValue ? $.__views.__alloyId436.addEventListener("click", setValue) : __defers["$.__views.__alloyId436!click!setValue"] = true;
    $.__views.__alloyId437 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Egypt",
        id: "__alloyId437"
    });
    $.__views.__alloyId436.add($.__views.__alloyId437);
    $.__views.__alloyId438 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId438"
    });
    $.__views.__alloyId436.add($.__views.__alloyId438);
    $.__views.__alloyId439 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId439"
    });
    $.__views.__alloyId436.add($.__views.__alloyId439);
    $.__views.__alloyId440 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "El Salvador",
        id: "__alloyId440"
    });
    $.__views.CountryPicker.add($.__views.__alloyId440);
    setValue ? $.__views.__alloyId440.addEventListener("click", setValue) : __defers["$.__views.__alloyId440!click!setValue"] = true;
    $.__views.__alloyId441 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "El Salvador",
        id: "__alloyId441"
    });
    $.__views.__alloyId440.add($.__views.__alloyId441);
    $.__views.__alloyId442 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId442"
    });
    $.__views.__alloyId440.add($.__views.__alloyId442);
    $.__views.__alloyId443 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId443"
    });
    $.__views.__alloyId440.add($.__views.__alloyId443);
    $.__views.__alloyId444 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "England",
        id: "__alloyId444"
    });
    $.__views.CountryPicker.add($.__views.__alloyId444);
    setValue ? $.__views.__alloyId444.addEventListener("click", setValue) : __defers["$.__views.__alloyId444!click!setValue"] = true;
    $.__views.__alloyId445 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "England",
        id: "__alloyId445"
    });
    $.__views.__alloyId444.add($.__views.__alloyId445);
    $.__views.__alloyId446 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId446"
    });
    $.__views.__alloyId444.add($.__views.__alloyId446);
    $.__views.__alloyId447 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId447"
    });
    $.__views.__alloyId444.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Equatorial Guinea",
        id: "__alloyId448"
    });
    $.__views.CountryPicker.add($.__views.__alloyId448);
    setValue ? $.__views.__alloyId448.addEventListener("click", setValue) : __defers["$.__views.__alloyId448!click!setValue"] = true;
    $.__views.__alloyId449 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Equatorial Guinea",
        id: "__alloyId449"
    });
    $.__views.__alloyId448.add($.__views.__alloyId449);
    $.__views.__alloyId450 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId450"
    });
    $.__views.__alloyId448.add($.__views.__alloyId450);
    $.__views.__alloyId451 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId451"
    });
    $.__views.__alloyId448.add($.__views.__alloyId451);
    $.__views.__alloyId452 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Estonia",
        id: "__alloyId452"
    });
    $.__views.CountryPicker.add($.__views.__alloyId452);
    setValue ? $.__views.__alloyId452.addEventListener("click", setValue) : __defers["$.__views.__alloyId452!click!setValue"] = true;
    $.__views.__alloyId453 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Estonia",
        id: "__alloyId453"
    });
    $.__views.__alloyId452.add($.__views.__alloyId453);
    $.__views.__alloyId454 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId454"
    });
    $.__views.__alloyId452.add($.__views.__alloyId454);
    $.__views.__alloyId455 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId455"
    });
    $.__views.__alloyId452.add($.__views.__alloyId455);
    $.__views.__alloyId456 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Ethiopia",
        id: "__alloyId456"
    });
    $.__views.CountryPicker.add($.__views.__alloyId456);
    setValue ? $.__views.__alloyId456.addEventListener("click", setValue) : __defers["$.__views.__alloyId456!click!setValue"] = true;
    $.__views.__alloyId457 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Ethiopia",
        id: "__alloyId457"
    });
    $.__views.__alloyId456.add($.__views.__alloyId457);
    $.__views.__alloyId458 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId458"
    });
    $.__views.__alloyId456.add($.__views.__alloyId458);
    $.__views.__alloyId459 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId459"
    });
    $.__views.__alloyId456.add($.__views.__alloyId459);
    $.__views.__alloyId460 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Faeroe Islands",
        id: "__alloyId460"
    });
    $.__views.CountryPicker.add($.__views.__alloyId460);
    setValue ? $.__views.__alloyId460.addEventListener("click", setValue) : __defers["$.__views.__alloyId460!click!setValue"] = true;
    $.__views.__alloyId461 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Faeroe Islands",
        id: "__alloyId461"
    });
    $.__views.__alloyId460.add($.__views.__alloyId461);
    $.__views.__alloyId462 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId462"
    });
    $.__views.__alloyId460.add($.__views.__alloyId462);
    $.__views.__alloyId463 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId463"
    });
    $.__views.__alloyId460.add($.__views.__alloyId463);
    $.__views.__alloyId464 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Falkland Islands",
        id: "__alloyId464"
    });
    $.__views.CountryPicker.add($.__views.__alloyId464);
    setValue ? $.__views.__alloyId464.addEventListener("click", setValue) : __defers["$.__views.__alloyId464!click!setValue"] = true;
    $.__views.__alloyId465 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Falkland Islands",
        id: "__alloyId465"
    });
    $.__views.__alloyId464.add($.__views.__alloyId465);
    $.__views.__alloyId466 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId466"
    });
    $.__views.__alloyId464.add($.__views.__alloyId466);
    $.__views.__alloyId467 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId467"
    });
    $.__views.__alloyId464.add($.__views.__alloyId467);
    $.__views.__alloyId468 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Fiji",
        id: "__alloyId468"
    });
    $.__views.CountryPicker.add($.__views.__alloyId468);
    setValue ? $.__views.__alloyId468.addEventListener("click", setValue) : __defers["$.__views.__alloyId468!click!setValue"] = true;
    $.__views.__alloyId469 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Fiji",
        id: "__alloyId469"
    });
    $.__views.__alloyId468.add($.__views.__alloyId469);
    $.__views.__alloyId470 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId470"
    });
    $.__views.__alloyId468.add($.__views.__alloyId470);
    $.__views.__alloyId471 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId471"
    });
    $.__views.__alloyId468.add($.__views.__alloyId471);
    $.__views.__alloyId472 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Finland",
        id: "__alloyId472"
    });
    $.__views.CountryPicker.add($.__views.__alloyId472);
    setValue ? $.__views.__alloyId472.addEventListener("click", setValue) : __defers["$.__views.__alloyId472!click!setValue"] = true;
    $.__views.__alloyId473 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Finland",
        id: "__alloyId473"
    });
    $.__views.__alloyId472.add($.__views.__alloyId473);
    $.__views.__alloyId474 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId474"
    });
    $.__views.__alloyId472.add($.__views.__alloyId474);
    $.__views.__alloyId475 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId475"
    });
    $.__views.__alloyId472.add($.__views.__alloyId475);
    $.__views.__alloyId476 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "France",
        id: "__alloyId476"
    });
    $.__views.CountryPicker.add($.__views.__alloyId476);
    setValue ? $.__views.__alloyId476.addEventListener("click", setValue) : __defers["$.__views.__alloyId476!click!setValue"] = true;
    $.__views.__alloyId477 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "France",
        id: "__alloyId477"
    });
    $.__views.__alloyId476.add($.__views.__alloyId477);
    $.__views.__alloyId478 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId478"
    });
    $.__views.__alloyId476.add($.__views.__alloyId478);
    $.__views.__alloyId479 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId479"
    });
    $.__views.__alloyId476.add($.__views.__alloyId479);
    $.__views.__alloyId480 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "French Guiana",
        id: "__alloyId480"
    });
    $.__views.CountryPicker.add($.__views.__alloyId480);
    setValue ? $.__views.__alloyId480.addEventListener("click", setValue) : __defers["$.__views.__alloyId480!click!setValue"] = true;
    $.__views.__alloyId481 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "French Guiana",
        id: "__alloyId481"
    });
    $.__views.__alloyId480.add($.__views.__alloyId481);
    $.__views.__alloyId482 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId482"
    });
    $.__views.__alloyId480.add($.__views.__alloyId482);
    $.__views.__alloyId483 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId483"
    });
    $.__views.__alloyId480.add($.__views.__alloyId483);
    $.__views.__alloyId484 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "French Polynesia",
        id: "__alloyId484"
    });
    $.__views.CountryPicker.add($.__views.__alloyId484);
    setValue ? $.__views.__alloyId484.addEventListener("click", setValue) : __defers["$.__views.__alloyId484!click!setValue"] = true;
    $.__views.__alloyId485 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "French Polynesia",
        id: "__alloyId485"
    });
    $.__views.__alloyId484.add($.__views.__alloyId485);
    $.__views.__alloyId486 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId486"
    });
    $.__views.__alloyId484.add($.__views.__alloyId486);
    $.__views.__alloyId487 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId487"
    });
    $.__views.__alloyId484.add($.__views.__alloyId487);
    $.__views.__alloyId488 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Gabon",
        id: "__alloyId488"
    });
    $.__views.CountryPicker.add($.__views.__alloyId488);
    setValue ? $.__views.__alloyId488.addEventListener("click", setValue) : __defers["$.__views.__alloyId488!click!setValue"] = true;
    $.__views.__alloyId489 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Gabon",
        id: "__alloyId489"
    });
    $.__views.__alloyId488.add($.__views.__alloyId489);
    $.__views.__alloyId490 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId490"
    });
    $.__views.__alloyId488.add($.__views.__alloyId490);
    $.__views.__alloyId491 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId491"
    });
    $.__views.__alloyId488.add($.__views.__alloyId491);
    $.__views.__alloyId492 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Gambia",
        id: "__alloyId492"
    });
    $.__views.CountryPicker.add($.__views.__alloyId492);
    setValue ? $.__views.__alloyId492.addEventListener("click", setValue) : __defers["$.__views.__alloyId492!click!setValue"] = true;
    $.__views.__alloyId493 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Gambia",
        id: "__alloyId493"
    });
    $.__views.__alloyId492.add($.__views.__alloyId493);
    $.__views.__alloyId494 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId494"
    });
    $.__views.__alloyId492.add($.__views.__alloyId494);
    $.__views.__alloyId495 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId495"
    });
    $.__views.__alloyId492.add($.__views.__alloyId495);
    $.__views.__alloyId496 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Germany",
        id: "__alloyId496"
    });
    $.__views.CountryPicker.add($.__views.__alloyId496);
    setValue ? $.__views.__alloyId496.addEventListener("click", setValue) : __defers["$.__views.__alloyId496!click!setValue"] = true;
    $.__views.__alloyId497 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Germany",
        id: "__alloyId497"
    });
    $.__views.__alloyId496.add($.__views.__alloyId497);
    $.__views.__alloyId498 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId498"
    });
    $.__views.__alloyId496.add($.__views.__alloyId498);
    $.__views.__alloyId499 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId499"
    });
    $.__views.__alloyId496.add($.__views.__alloyId499);
    $.__views.__alloyId500 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Ghana",
        id: "__alloyId500"
    });
    $.__views.CountryPicker.add($.__views.__alloyId500);
    setValue ? $.__views.__alloyId500.addEventListener("click", setValue) : __defers["$.__views.__alloyId500!click!setValue"] = true;
    $.__views.__alloyId501 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Ghana",
        id: "__alloyId501"
    });
    $.__views.__alloyId500.add($.__views.__alloyId501);
    $.__views.__alloyId502 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId502"
    });
    $.__views.__alloyId500.add($.__views.__alloyId502);
    $.__views.__alloyId503 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId503"
    });
    $.__views.__alloyId500.add($.__views.__alloyId503);
    $.__views.__alloyId504 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Gibraltar",
        id: "__alloyId504"
    });
    $.__views.CountryPicker.add($.__views.__alloyId504);
    setValue ? $.__views.__alloyId504.addEventListener("click", setValue) : __defers["$.__views.__alloyId504!click!setValue"] = true;
    $.__views.__alloyId505 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Gibraltar",
        id: "__alloyId505"
    });
    $.__views.__alloyId504.add($.__views.__alloyId505);
    $.__views.__alloyId506 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId506"
    });
    $.__views.__alloyId504.add($.__views.__alloyId506);
    $.__views.__alloyId507 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId507"
    });
    $.__views.__alloyId504.add($.__views.__alloyId507);
    $.__views.__alloyId508 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Greece",
        id: "__alloyId508"
    });
    $.__views.CountryPicker.add($.__views.__alloyId508);
    setValue ? $.__views.__alloyId508.addEventListener("click", setValue) : __defers["$.__views.__alloyId508!click!setValue"] = true;
    $.__views.__alloyId509 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Greece",
        id: "__alloyId509"
    });
    $.__views.__alloyId508.add($.__views.__alloyId509);
    $.__views.__alloyId510 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId510"
    });
    $.__views.__alloyId508.add($.__views.__alloyId510);
    $.__views.__alloyId511 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId511"
    });
    $.__views.__alloyId508.add($.__views.__alloyId511);
    $.__views.__alloyId512 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Greenland",
        id: "__alloyId512"
    });
    $.__views.CountryPicker.add($.__views.__alloyId512);
    setValue ? $.__views.__alloyId512.addEventListener("click", setValue) : __defers["$.__views.__alloyId512!click!setValue"] = true;
    $.__views.__alloyId513 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Greenland",
        id: "__alloyId513"
    });
    $.__views.__alloyId512.add($.__views.__alloyId513);
    $.__views.__alloyId514 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId514"
    });
    $.__views.__alloyId512.add($.__views.__alloyId514);
    $.__views.__alloyId515 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId515"
    });
    $.__views.__alloyId512.add($.__views.__alloyId515);
    $.__views.__alloyId516 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Grenada",
        id: "__alloyId516"
    });
    $.__views.CountryPicker.add($.__views.__alloyId516);
    setValue ? $.__views.__alloyId516.addEventListener("click", setValue) : __defers["$.__views.__alloyId516!click!setValue"] = true;
    $.__views.__alloyId517 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Grenada",
        id: "__alloyId517"
    });
    $.__views.__alloyId516.add($.__views.__alloyId517);
    $.__views.__alloyId518 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId518"
    });
    $.__views.__alloyId516.add($.__views.__alloyId518);
    $.__views.__alloyId519 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId519"
    });
    $.__views.__alloyId516.add($.__views.__alloyId519);
    $.__views.__alloyId520 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Guadelupe",
        id: "__alloyId520"
    });
    $.__views.CountryPicker.add($.__views.__alloyId520);
    setValue ? $.__views.__alloyId520.addEventListener("click", setValue) : __defers["$.__views.__alloyId520!click!setValue"] = true;
    $.__views.__alloyId521 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Guadelupe",
        id: "__alloyId521"
    });
    $.__views.__alloyId520.add($.__views.__alloyId521);
    $.__views.__alloyId522 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId522"
    });
    $.__views.__alloyId520.add($.__views.__alloyId522);
    $.__views.__alloyId523 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId523"
    });
    $.__views.__alloyId520.add($.__views.__alloyId523);
    $.__views.__alloyId524 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Guam",
        id: "__alloyId524"
    });
    $.__views.CountryPicker.add($.__views.__alloyId524);
    setValue ? $.__views.__alloyId524.addEventListener("click", setValue) : __defers["$.__views.__alloyId524!click!setValue"] = true;
    $.__views.__alloyId525 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Guam",
        id: "__alloyId525"
    });
    $.__views.__alloyId524.add($.__views.__alloyId525);
    $.__views.__alloyId526 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId526"
    });
    $.__views.__alloyId524.add($.__views.__alloyId526);
    $.__views.__alloyId527 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId527"
    });
    $.__views.__alloyId524.add($.__views.__alloyId527);
    $.__views.__alloyId528 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Guatemala",
        id: "__alloyId528"
    });
    $.__views.CountryPicker.add($.__views.__alloyId528);
    setValue ? $.__views.__alloyId528.addEventListener("click", setValue) : __defers["$.__views.__alloyId528!click!setValue"] = true;
    $.__views.__alloyId529 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Guatemala",
        id: "__alloyId529"
    });
    $.__views.__alloyId528.add($.__views.__alloyId529);
    $.__views.__alloyId530 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId530"
    });
    $.__views.__alloyId528.add($.__views.__alloyId530);
    $.__views.__alloyId531 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId531"
    });
    $.__views.__alloyId528.add($.__views.__alloyId531);
    $.__views.__alloyId532 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Guinea",
        id: "__alloyId532"
    });
    $.__views.CountryPicker.add($.__views.__alloyId532);
    setValue ? $.__views.__alloyId532.addEventListener("click", setValue) : __defers["$.__views.__alloyId532!click!setValue"] = true;
    $.__views.__alloyId533 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Guinea",
        id: "__alloyId533"
    });
    $.__views.__alloyId532.add($.__views.__alloyId533);
    $.__views.__alloyId534 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId534"
    });
    $.__views.__alloyId532.add($.__views.__alloyId534);
    $.__views.__alloyId535 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId535"
    });
    $.__views.__alloyId532.add($.__views.__alloyId535);
    $.__views.__alloyId536 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Guinea-Bissau",
        id: "__alloyId536"
    });
    $.__views.CountryPicker.add($.__views.__alloyId536);
    setValue ? $.__views.__alloyId536.addEventListener("click", setValue) : __defers["$.__views.__alloyId536!click!setValue"] = true;
    $.__views.__alloyId537 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Guinea-Bissau",
        id: "__alloyId537"
    });
    $.__views.__alloyId536.add($.__views.__alloyId537);
    $.__views.__alloyId538 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId538"
    });
    $.__views.__alloyId536.add($.__views.__alloyId538);
    $.__views.__alloyId539 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId539"
    });
    $.__views.__alloyId536.add($.__views.__alloyId539);
    $.__views.__alloyId540 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Guyana",
        id: "__alloyId540"
    });
    $.__views.CountryPicker.add($.__views.__alloyId540);
    setValue ? $.__views.__alloyId540.addEventListener("click", setValue) : __defers["$.__views.__alloyId540!click!setValue"] = true;
    $.__views.__alloyId541 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Guyana",
        id: "__alloyId541"
    });
    $.__views.__alloyId540.add($.__views.__alloyId541);
    $.__views.__alloyId542 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId542"
    });
    $.__views.__alloyId540.add($.__views.__alloyId542);
    $.__views.__alloyId543 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId543"
    });
    $.__views.__alloyId540.add($.__views.__alloyId543);
    $.__views.__alloyId544 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Haiti",
        id: "__alloyId544"
    });
    $.__views.CountryPicker.add($.__views.__alloyId544);
    setValue ? $.__views.__alloyId544.addEventListener("click", setValue) : __defers["$.__views.__alloyId544!click!setValue"] = true;
    $.__views.__alloyId545 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Haiti",
        id: "__alloyId545"
    });
    $.__views.__alloyId544.add($.__views.__alloyId545);
    $.__views.__alloyId546 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId546"
    });
    $.__views.__alloyId544.add($.__views.__alloyId546);
    $.__views.__alloyId547 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId547"
    });
    $.__views.__alloyId544.add($.__views.__alloyId547);
    $.__views.__alloyId548 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Honduras",
        id: "__alloyId548"
    });
    $.__views.CountryPicker.add($.__views.__alloyId548);
    setValue ? $.__views.__alloyId548.addEventListener("click", setValue) : __defers["$.__views.__alloyId548!click!setValue"] = true;
    $.__views.__alloyId549 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Honduras",
        id: "__alloyId549"
    });
    $.__views.__alloyId548.add($.__views.__alloyId549);
    $.__views.__alloyId550 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId550"
    });
    $.__views.__alloyId548.add($.__views.__alloyId550);
    $.__views.__alloyId551 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId551"
    });
    $.__views.__alloyId548.add($.__views.__alloyId551);
    $.__views.__alloyId552 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Hong Kong",
        id: "__alloyId552"
    });
    $.__views.CountryPicker.add($.__views.__alloyId552);
    setValue ? $.__views.__alloyId552.addEventListener("click", setValue) : __defers["$.__views.__alloyId552!click!setValue"] = true;
    $.__views.__alloyId553 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Hong Kong",
        id: "__alloyId553"
    });
    $.__views.__alloyId552.add($.__views.__alloyId553);
    $.__views.__alloyId554 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId554"
    });
    $.__views.__alloyId552.add($.__views.__alloyId554);
    $.__views.__alloyId555 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId555"
    });
    $.__views.__alloyId552.add($.__views.__alloyId555);
    $.__views.__alloyId556 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Hungary",
        id: "__alloyId556"
    });
    $.__views.CountryPicker.add($.__views.__alloyId556);
    setValue ? $.__views.__alloyId556.addEventListener("click", setValue) : __defers["$.__views.__alloyId556!click!setValue"] = true;
    $.__views.__alloyId557 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Hungary",
        id: "__alloyId557"
    });
    $.__views.__alloyId556.add($.__views.__alloyId557);
    $.__views.__alloyId558 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId558"
    });
    $.__views.__alloyId556.add($.__views.__alloyId558);
    $.__views.__alloyId559 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId559"
    });
    $.__views.__alloyId556.add($.__views.__alloyId559);
    $.__views.__alloyId560 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Iceland",
        id: "__alloyId560"
    });
    $.__views.CountryPicker.add($.__views.__alloyId560);
    setValue ? $.__views.__alloyId560.addEventListener("click", setValue) : __defers["$.__views.__alloyId560!click!setValue"] = true;
    $.__views.__alloyId561 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Iceland",
        id: "__alloyId561"
    });
    $.__views.__alloyId560.add($.__views.__alloyId561);
    $.__views.__alloyId562 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId562"
    });
    $.__views.__alloyId560.add($.__views.__alloyId562);
    $.__views.__alloyId563 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId563"
    });
    $.__views.__alloyId560.add($.__views.__alloyId563);
    $.__views.__alloyId564 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "India",
        id: "__alloyId564"
    });
    $.__views.CountryPicker.add($.__views.__alloyId564);
    setValue ? $.__views.__alloyId564.addEventListener("click", setValue) : __defers["$.__views.__alloyId564!click!setValue"] = true;
    $.__views.__alloyId565 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "India",
        id: "__alloyId565"
    });
    $.__views.__alloyId564.add($.__views.__alloyId565);
    $.__views.__alloyId566 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId566"
    });
    $.__views.__alloyId564.add($.__views.__alloyId566);
    $.__views.__alloyId567 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId567"
    });
    $.__views.__alloyId564.add($.__views.__alloyId567);
    $.__views.__alloyId568 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Indonesia",
        id: "__alloyId568"
    });
    $.__views.CountryPicker.add($.__views.__alloyId568);
    setValue ? $.__views.__alloyId568.addEventListener("click", setValue) : __defers["$.__views.__alloyId568!click!setValue"] = true;
    $.__views.__alloyId569 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Indonesia",
        id: "__alloyId569"
    });
    $.__views.__alloyId568.add($.__views.__alloyId569);
    $.__views.__alloyId570 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId570"
    });
    $.__views.__alloyId568.add($.__views.__alloyId570);
    $.__views.__alloyId571 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId571"
    });
    $.__views.__alloyId568.add($.__views.__alloyId571);
    $.__views.__alloyId572 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Iran",
        id: "__alloyId572"
    });
    $.__views.CountryPicker.add($.__views.__alloyId572);
    setValue ? $.__views.__alloyId572.addEventListener("click", setValue) : __defers["$.__views.__alloyId572!click!setValue"] = true;
    $.__views.__alloyId573 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Iran",
        id: "__alloyId573"
    });
    $.__views.__alloyId572.add($.__views.__alloyId573);
    $.__views.__alloyId574 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId574"
    });
    $.__views.__alloyId572.add($.__views.__alloyId574);
    $.__views.__alloyId575 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId575"
    });
    $.__views.__alloyId572.add($.__views.__alloyId575);
    $.__views.__alloyId576 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Iraq",
        id: "__alloyId576"
    });
    $.__views.CountryPicker.add($.__views.__alloyId576);
    setValue ? $.__views.__alloyId576.addEventListener("click", setValue) : __defers["$.__views.__alloyId576!click!setValue"] = true;
    $.__views.__alloyId577 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Iraq",
        id: "__alloyId577"
    });
    $.__views.__alloyId576.add($.__views.__alloyId577);
    $.__views.__alloyId578 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId578"
    });
    $.__views.__alloyId576.add($.__views.__alloyId578);
    $.__views.__alloyId579 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId579"
    });
    $.__views.__alloyId576.add($.__views.__alloyId579);
    $.__views.__alloyId580 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Ireland",
        id: "__alloyId580"
    });
    $.__views.CountryPicker.add($.__views.__alloyId580);
    setValue ? $.__views.__alloyId580.addEventListener("click", setValue) : __defers["$.__views.__alloyId580!click!setValue"] = true;
    $.__views.__alloyId581 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Ireland",
        id: "__alloyId581"
    });
    $.__views.__alloyId580.add($.__views.__alloyId581);
    $.__views.__alloyId582 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId582"
    });
    $.__views.__alloyId580.add($.__views.__alloyId582);
    $.__views.__alloyId583 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId583"
    });
    $.__views.__alloyId580.add($.__views.__alloyId583);
    $.__views.__alloyId584 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Israel",
        id: "__alloyId584"
    });
    $.__views.CountryPicker.add($.__views.__alloyId584);
    setValue ? $.__views.__alloyId584.addEventListener("click", setValue) : __defers["$.__views.__alloyId584!click!setValue"] = true;
    $.__views.__alloyId585 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Israel",
        id: "__alloyId585"
    });
    $.__views.__alloyId584.add($.__views.__alloyId585);
    $.__views.__alloyId586 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId586"
    });
    $.__views.__alloyId584.add($.__views.__alloyId586);
    $.__views.__alloyId587 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId587"
    });
    $.__views.__alloyId584.add($.__views.__alloyId587);
    $.__views.__alloyId588 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Italy",
        id: "__alloyId588"
    });
    $.__views.CountryPicker.add($.__views.__alloyId588);
    setValue ? $.__views.__alloyId588.addEventListener("click", setValue) : __defers["$.__views.__alloyId588!click!setValue"] = true;
    $.__views.__alloyId589 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Italy",
        id: "__alloyId589"
    });
    $.__views.__alloyId588.add($.__views.__alloyId589);
    $.__views.__alloyId590 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId590"
    });
    $.__views.__alloyId588.add($.__views.__alloyId590);
    $.__views.__alloyId591 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId591"
    });
    $.__views.__alloyId588.add($.__views.__alloyId591);
    $.__views.__alloyId592 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Ivory Coast",
        id: "__alloyId592"
    });
    $.__views.CountryPicker.add($.__views.__alloyId592);
    setValue ? $.__views.__alloyId592.addEventListener("click", setValue) : __defers["$.__views.__alloyId592!click!setValue"] = true;
    $.__views.__alloyId593 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Ivory Coast",
        id: "__alloyId593"
    });
    $.__views.__alloyId592.add($.__views.__alloyId593);
    $.__views.__alloyId594 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId594"
    });
    $.__views.__alloyId592.add($.__views.__alloyId594);
    $.__views.__alloyId595 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId595"
    });
    $.__views.__alloyId592.add($.__views.__alloyId595);
    $.__views.__alloyId596 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Jamaica",
        id: "__alloyId596"
    });
    $.__views.CountryPicker.add($.__views.__alloyId596);
    setValue ? $.__views.__alloyId596.addEventListener("click", setValue) : __defers["$.__views.__alloyId596!click!setValue"] = true;
    $.__views.__alloyId597 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Jamaica",
        id: "__alloyId597"
    });
    $.__views.__alloyId596.add($.__views.__alloyId597);
    $.__views.__alloyId598 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId598"
    });
    $.__views.__alloyId596.add($.__views.__alloyId598);
    $.__views.__alloyId599 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId599"
    });
    $.__views.__alloyId596.add($.__views.__alloyId599);
    $.__views.__alloyId600 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Japan",
        id: "__alloyId600"
    });
    $.__views.CountryPicker.add($.__views.__alloyId600);
    setValue ? $.__views.__alloyId600.addEventListener("click", setValue) : __defers["$.__views.__alloyId600!click!setValue"] = true;
    $.__views.__alloyId601 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Japan",
        id: "__alloyId601"
    });
    $.__views.__alloyId600.add($.__views.__alloyId601);
    $.__views.__alloyId602 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId602"
    });
    $.__views.__alloyId600.add($.__views.__alloyId602);
    $.__views.__alloyId603 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId603"
    });
    $.__views.__alloyId600.add($.__views.__alloyId603);
    $.__views.__alloyId604 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Jordan",
        id: "__alloyId604"
    });
    $.__views.CountryPicker.add($.__views.__alloyId604);
    setValue ? $.__views.__alloyId604.addEventListener("click", setValue) : __defers["$.__views.__alloyId604!click!setValue"] = true;
    $.__views.__alloyId605 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Jordan",
        id: "__alloyId605"
    });
    $.__views.__alloyId604.add($.__views.__alloyId605);
    $.__views.__alloyId606 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId606"
    });
    $.__views.__alloyId604.add($.__views.__alloyId606);
    $.__views.__alloyId607 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId607"
    });
    $.__views.__alloyId604.add($.__views.__alloyId607);
    $.__views.__alloyId608 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Kampuchea",
        id: "__alloyId608"
    });
    $.__views.CountryPicker.add($.__views.__alloyId608);
    setValue ? $.__views.__alloyId608.addEventListener("click", setValue) : __defers["$.__views.__alloyId608!click!setValue"] = true;
    $.__views.__alloyId609 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Kampuchea",
        id: "__alloyId609"
    });
    $.__views.__alloyId608.add($.__views.__alloyId609);
    $.__views.__alloyId610 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId610"
    });
    $.__views.__alloyId608.add($.__views.__alloyId610);
    $.__views.__alloyId611 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId611"
    });
    $.__views.__alloyId608.add($.__views.__alloyId611);
    $.__views.__alloyId612 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Kenya",
        id: "__alloyId612"
    });
    $.__views.CountryPicker.add($.__views.__alloyId612);
    setValue ? $.__views.__alloyId612.addEventListener("click", setValue) : __defers["$.__views.__alloyId612!click!setValue"] = true;
    $.__views.__alloyId613 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Kenya",
        id: "__alloyId613"
    });
    $.__views.__alloyId612.add($.__views.__alloyId613);
    $.__views.__alloyId614 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId614"
    });
    $.__views.__alloyId612.add($.__views.__alloyId614);
    $.__views.__alloyId615 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId615"
    });
    $.__views.__alloyId612.add($.__views.__alloyId615);
    $.__views.__alloyId616 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Kiribati",
        id: "__alloyId616"
    });
    $.__views.CountryPicker.add($.__views.__alloyId616);
    setValue ? $.__views.__alloyId616.addEventListener("click", setValue) : __defers["$.__views.__alloyId616!click!setValue"] = true;
    $.__views.__alloyId617 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Kiribati",
        id: "__alloyId617"
    });
    $.__views.__alloyId616.add($.__views.__alloyId617);
    $.__views.__alloyId618 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId618"
    });
    $.__views.__alloyId616.add($.__views.__alloyId618);
    $.__views.__alloyId619 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId619"
    });
    $.__views.__alloyId616.add($.__views.__alloyId619);
    $.__views.__alloyId620 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Korea",
        id: "__alloyId620"
    });
    $.__views.CountryPicker.add($.__views.__alloyId620);
    setValue ? $.__views.__alloyId620.addEventListener("click", setValue) : __defers["$.__views.__alloyId620!click!setValue"] = true;
    $.__views.__alloyId621 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Korea",
        id: "__alloyId621"
    });
    $.__views.__alloyId620.add($.__views.__alloyId621);
    $.__views.__alloyId622 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId622"
    });
    $.__views.__alloyId620.add($.__views.__alloyId622);
    $.__views.__alloyId623 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId623"
    });
    $.__views.__alloyId620.add($.__views.__alloyId623);
    $.__views.__alloyId624 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Kuwait",
        id: "__alloyId624"
    });
    $.__views.CountryPicker.add($.__views.__alloyId624);
    setValue ? $.__views.__alloyId624.addEventListener("click", setValue) : __defers["$.__views.__alloyId624!click!setValue"] = true;
    $.__views.__alloyId625 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Kuwait",
        id: "__alloyId625"
    });
    $.__views.__alloyId624.add($.__views.__alloyId625);
    $.__views.__alloyId626 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId626"
    });
    $.__views.__alloyId624.add($.__views.__alloyId626);
    $.__views.__alloyId627 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId627"
    });
    $.__views.__alloyId624.add($.__views.__alloyId627);
    $.__views.__alloyId628 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Laos",
        id: "__alloyId628"
    });
    $.__views.CountryPicker.add($.__views.__alloyId628);
    setValue ? $.__views.__alloyId628.addEventListener("click", setValue) : __defers["$.__views.__alloyId628!click!setValue"] = true;
    $.__views.__alloyId629 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Laos",
        id: "__alloyId629"
    });
    $.__views.__alloyId628.add($.__views.__alloyId629);
    $.__views.__alloyId630 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId630"
    });
    $.__views.__alloyId628.add($.__views.__alloyId630);
    $.__views.__alloyId631 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId631"
    });
    $.__views.__alloyId628.add($.__views.__alloyId631);
    $.__views.__alloyId632 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Latvia",
        id: "__alloyId632"
    });
    $.__views.CountryPicker.add($.__views.__alloyId632);
    setValue ? $.__views.__alloyId632.addEventListener("click", setValue) : __defers["$.__views.__alloyId632!click!setValue"] = true;
    $.__views.__alloyId633 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Latvia",
        id: "__alloyId633"
    });
    $.__views.__alloyId632.add($.__views.__alloyId633);
    $.__views.__alloyId634 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId634"
    });
    $.__views.__alloyId632.add($.__views.__alloyId634);
    $.__views.__alloyId635 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId635"
    });
    $.__views.__alloyId632.add($.__views.__alloyId635);
    $.__views.__alloyId636 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Lebanon",
        id: "__alloyId636"
    });
    $.__views.CountryPicker.add($.__views.__alloyId636);
    setValue ? $.__views.__alloyId636.addEventListener("click", setValue) : __defers["$.__views.__alloyId636!click!setValue"] = true;
    $.__views.__alloyId637 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Lebanon",
        id: "__alloyId637"
    });
    $.__views.__alloyId636.add($.__views.__alloyId637);
    $.__views.__alloyId638 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId638"
    });
    $.__views.__alloyId636.add($.__views.__alloyId638);
    $.__views.__alloyId639 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId639"
    });
    $.__views.__alloyId636.add($.__views.__alloyId639);
    $.__views.__alloyId640 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Leeward Islands",
        id: "__alloyId640"
    });
    $.__views.CountryPicker.add($.__views.__alloyId640);
    setValue ? $.__views.__alloyId640.addEventListener("click", setValue) : __defers["$.__views.__alloyId640!click!setValue"] = true;
    $.__views.__alloyId641 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Leeward Islands",
        id: "__alloyId641"
    });
    $.__views.__alloyId640.add($.__views.__alloyId641);
    $.__views.__alloyId642 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId642"
    });
    $.__views.__alloyId640.add($.__views.__alloyId642);
    $.__views.__alloyId643 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId643"
    });
    $.__views.__alloyId640.add($.__views.__alloyId643);
    $.__views.__alloyId644 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Lesotho",
        id: "__alloyId644"
    });
    $.__views.CountryPicker.add($.__views.__alloyId644);
    setValue ? $.__views.__alloyId644.addEventListener("click", setValue) : __defers["$.__views.__alloyId644!click!setValue"] = true;
    $.__views.__alloyId645 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Lesotho",
        id: "__alloyId645"
    });
    $.__views.__alloyId644.add($.__views.__alloyId645);
    $.__views.__alloyId646 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId646"
    });
    $.__views.__alloyId644.add($.__views.__alloyId646);
    $.__views.__alloyId647 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId647"
    });
    $.__views.__alloyId644.add($.__views.__alloyId647);
    $.__views.__alloyId648 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Liberia",
        id: "__alloyId648"
    });
    $.__views.CountryPicker.add($.__views.__alloyId648);
    setValue ? $.__views.__alloyId648.addEventListener("click", setValue) : __defers["$.__views.__alloyId648!click!setValue"] = true;
    $.__views.__alloyId649 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Liberia",
        id: "__alloyId649"
    });
    $.__views.__alloyId648.add($.__views.__alloyId649);
    $.__views.__alloyId650 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId650"
    });
    $.__views.__alloyId648.add($.__views.__alloyId650);
    $.__views.__alloyId651 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId651"
    });
    $.__views.__alloyId648.add($.__views.__alloyId651);
    $.__views.__alloyId652 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Libya",
        id: "__alloyId652"
    });
    $.__views.CountryPicker.add($.__views.__alloyId652);
    setValue ? $.__views.__alloyId652.addEventListener("click", setValue) : __defers["$.__views.__alloyId652!click!setValue"] = true;
    $.__views.__alloyId653 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Libya",
        id: "__alloyId653"
    });
    $.__views.__alloyId652.add($.__views.__alloyId653);
    $.__views.__alloyId654 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId654"
    });
    $.__views.__alloyId652.add($.__views.__alloyId654);
    $.__views.__alloyId655 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId655"
    });
    $.__views.__alloyId652.add($.__views.__alloyId655);
    $.__views.__alloyId656 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Liechtenstein",
        id: "__alloyId656"
    });
    $.__views.CountryPicker.add($.__views.__alloyId656);
    setValue ? $.__views.__alloyId656.addEventListener("click", setValue) : __defers["$.__views.__alloyId656!click!setValue"] = true;
    $.__views.__alloyId657 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Liechtenstein",
        id: "__alloyId657"
    });
    $.__views.__alloyId656.add($.__views.__alloyId657);
    $.__views.__alloyId658 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId658"
    });
    $.__views.__alloyId656.add($.__views.__alloyId658);
    $.__views.__alloyId659 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId659"
    });
    $.__views.__alloyId656.add($.__views.__alloyId659);
    $.__views.__alloyId660 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Lithuania",
        id: "__alloyId660"
    });
    $.__views.CountryPicker.add($.__views.__alloyId660);
    setValue ? $.__views.__alloyId660.addEventListener("click", setValue) : __defers["$.__views.__alloyId660!click!setValue"] = true;
    $.__views.__alloyId661 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Lithuania",
        id: "__alloyId661"
    });
    $.__views.__alloyId660.add($.__views.__alloyId661);
    $.__views.__alloyId662 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId662"
    });
    $.__views.__alloyId660.add($.__views.__alloyId662);
    $.__views.__alloyId663 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId663"
    });
    $.__views.__alloyId660.add($.__views.__alloyId663);
    $.__views.__alloyId664 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Luxembourg",
        id: "__alloyId664"
    });
    $.__views.CountryPicker.add($.__views.__alloyId664);
    setValue ? $.__views.__alloyId664.addEventListener("click", setValue) : __defers["$.__views.__alloyId664!click!setValue"] = true;
    $.__views.__alloyId665 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Luxembourg",
        id: "__alloyId665"
    });
    $.__views.__alloyId664.add($.__views.__alloyId665);
    $.__views.__alloyId666 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId666"
    });
    $.__views.__alloyId664.add($.__views.__alloyId666);
    $.__views.__alloyId667 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId667"
    });
    $.__views.__alloyId664.add($.__views.__alloyId667);
    $.__views.__alloyId668 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Macao",
        id: "__alloyId668"
    });
    $.__views.CountryPicker.add($.__views.__alloyId668);
    setValue ? $.__views.__alloyId668.addEventListener("click", setValue) : __defers["$.__views.__alloyId668!click!setValue"] = true;
    $.__views.__alloyId669 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Macao",
        id: "__alloyId669"
    });
    $.__views.__alloyId668.add($.__views.__alloyId669);
    $.__views.__alloyId670 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId670"
    });
    $.__views.__alloyId668.add($.__views.__alloyId670);
    $.__views.__alloyId671 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId671"
    });
    $.__views.__alloyId668.add($.__views.__alloyId671);
    $.__views.__alloyId672 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Madagascar",
        id: "__alloyId672"
    });
    $.__views.CountryPicker.add($.__views.__alloyId672);
    setValue ? $.__views.__alloyId672.addEventListener("click", setValue) : __defers["$.__views.__alloyId672!click!setValue"] = true;
    $.__views.__alloyId673 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Madagascar",
        id: "__alloyId673"
    });
    $.__views.__alloyId672.add($.__views.__alloyId673);
    $.__views.__alloyId674 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId674"
    });
    $.__views.__alloyId672.add($.__views.__alloyId674);
    $.__views.__alloyId675 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId675"
    });
    $.__views.__alloyId672.add($.__views.__alloyId675);
    $.__views.__alloyId676 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Madeira Islands",
        id: "__alloyId676"
    });
    $.__views.CountryPicker.add($.__views.__alloyId676);
    setValue ? $.__views.__alloyId676.addEventListener("click", setValue) : __defers["$.__views.__alloyId676!click!setValue"] = true;
    $.__views.__alloyId677 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Madeira Islands",
        id: "__alloyId677"
    });
    $.__views.__alloyId676.add($.__views.__alloyId677);
    $.__views.__alloyId678 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId678"
    });
    $.__views.__alloyId676.add($.__views.__alloyId678);
    $.__views.__alloyId679 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId679"
    });
    $.__views.__alloyId676.add($.__views.__alloyId679);
    $.__views.__alloyId680 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Malawi",
        id: "__alloyId680"
    });
    $.__views.CountryPicker.add($.__views.__alloyId680);
    setValue ? $.__views.__alloyId680.addEventListener("click", setValue) : __defers["$.__views.__alloyId680!click!setValue"] = true;
    $.__views.__alloyId681 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Malawi",
        id: "__alloyId681"
    });
    $.__views.__alloyId680.add($.__views.__alloyId681);
    $.__views.__alloyId682 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId682"
    });
    $.__views.__alloyId680.add($.__views.__alloyId682);
    $.__views.__alloyId683 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId683"
    });
    $.__views.__alloyId680.add($.__views.__alloyId683);
    $.__views.__alloyId684 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Malaysia",
        id: "__alloyId684"
    });
    $.__views.CountryPicker.add($.__views.__alloyId684);
    setValue ? $.__views.__alloyId684.addEventListener("click", setValue) : __defers["$.__views.__alloyId684!click!setValue"] = true;
    $.__views.__alloyId685 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Malaysia",
        id: "__alloyId685"
    });
    $.__views.__alloyId684.add($.__views.__alloyId685);
    $.__views.__alloyId686 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId686"
    });
    $.__views.__alloyId684.add($.__views.__alloyId686);
    $.__views.__alloyId687 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId687"
    });
    $.__views.__alloyId684.add($.__views.__alloyId687);
    $.__views.__alloyId688 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Maldives",
        id: "__alloyId688"
    });
    $.__views.CountryPicker.add($.__views.__alloyId688);
    setValue ? $.__views.__alloyId688.addEventListener("click", setValue) : __defers["$.__views.__alloyId688!click!setValue"] = true;
    $.__views.__alloyId689 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Maldives",
        id: "__alloyId689"
    });
    $.__views.__alloyId688.add($.__views.__alloyId689);
    $.__views.__alloyId690 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId690"
    });
    $.__views.__alloyId688.add($.__views.__alloyId690);
    $.__views.__alloyId691 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId691"
    });
    $.__views.__alloyId688.add($.__views.__alloyId691);
    $.__views.__alloyId692 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Mali",
        id: "__alloyId692"
    });
    $.__views.CountryPicker.add($.__views.__alloyId692);
    setValue ? $.__views.__alloyId692.addEventListener("click", setValue) : __defers["$.__views.__alloyId692!click!setValue"] = true;
    $.__views.__alloyId693 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Mali",
        id: "__alloyId693"
    });
    $.__views.__alloyId692.add($.__views.__alloyId693);
    $.__views.__alloyId694 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId694"
    });
    $.__views.__alloyId692.add($.__views.__alloyId694);
    $.__views.__alloyId695 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId695"
    });
    $.__views.__alloyId692.add($.__views.__alloyId695);
    $.__views.__alloyId696 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Malta",
        id: "__alloyId696"
    });
    $.__views.CountryPicker.add($.__views.__alloyId696);
    setValue ? $.__views.__alloyId696.addEventListener("click", setValue) : __defers["$.__views.__alloyId696!click!setValue"] = true;
    $.__views.__alloyId697 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Malta",
        id: "__alloyId697"
    });
    $.__views.__alloyId696.add($.__views.__alloyId697);
    $.__views.__alloyId698 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId698"
    });
    $.__views.__alloyId696.add($.__views.__alloyId698);
    $.__views.__alloyId699 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId699"
    });
    $.__views.__alloyId696.add($.__views.__alloyId699);
    $.__views.__alloyId700 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Martinique",
        id: "__alloyId700"
    });
    $.__views.CountryPicker.add($.__views.__alloyId700);
    setValue ? $.__views.__alloyId700.addEventListener("click", setValue) : __defers["$.__views.__alloyId700!click!setValue"] = true;
    $.__views.__alloyId701 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Martinique",
        id: "__alloyId701"
    });
    $.__views.__alloyId700.add($.__views.__alloyId701);
    $.__views.__alloyId702 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId702"
    });
    $.__views.__alloyId700.add($.__views.__alloyId702);
    $.__views.__alloyId703 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId703"
    });
    $.__views.__alloyId700.add($.__views.__alloyId703);
    $.__views.__alloyId704 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Maruitius",
        id: "__alloyId704"
    });
    $.__views.CountryPicker.add($.__views.__alloyId704);
    setValue ? $.__views.__alloyId704.addEventListener("click", setValue) : __defers["$.__views.__alloyId704!click!setValue"] = true;
    $.__views.__alloyId705 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Maruitius",
        id: "__alloyId705"
    });
    $.__views.__alloyId704.add($.__views.__alloyId705);
    $.__views.__alloyId706 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId706"
    });
    $.__views.__alloyId704.add($.__views.__alloyId706);
    $.__views.__alloyId707 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId707"
    });
    $.__views.__alloyId704.add($.__views.__alloyId707);
    $.__views.__alloyId708 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Mauritania",
        id: "__alloyId708"
    });
    $.__views.CountryPicker.add($.__views.__alloyId708);
    setValue ? $.__views.__alloyId708.addEventListener("click", setValue) : __defers["$.__views.__alloyId708!click!setValue"] = true;
    $.__views.__alloyId709 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Mauritania",
        id: "__alloyId709"
    });
    $.__views.__alloyId708.add($.__views.__alloyId709);
    $.__views.__alloyId710 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId710"
    });
    $.__views.__alloyId708.add($.__views.__alloyId710);
    $.__views.__alloyId711 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId711"
    });
    $.__views.__alloyId708.add($.__views.__alloyId711);
    $.__views.__alloyId712 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Mexico",
        id: "__alloyId712"
    });
    $.__views.CountryPicker.add($.__views.__alloyId712);
    setValue ? $.__views.__alloyId712.addEventListener("click", setValue) : __defers["$.__views.__alloyId712!click!setValue"] = true;
    $.__views.__alloyId713 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Mexico",
        id: "__alloyId713"
    });
    $.__views.__alloyId712.add($.__views.__alloyId713);
    $.__views.__alloyId714 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId714"
    });
    $.__views.__alloyId712.add($.__views.__alloyId714);
    $.__views.__alloyId715 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId715"
    });
    $.__views.__alloyId712.add($.__views.__alloyId715);
    $.__views.__alloyId716 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Monaco",
        id: "__alloyId716"
    });
    $.__views.CountryPicker.add($.__views.__alloyId716);
    setValue ? $.__views.__alloyId716.addEventListener("click", setValue) : __defers["$.__views.__alloyId716!click!setValue"] = true;
    $.__views.__alloyId717 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Monaco",
        id: "__alloyId717"
    });
    $.__views.__alloyId716.add($.__views.__alloyId717);
    $.__views.__alloyId718 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId718"
    });
    $.__views.__alloyId716.add($.__views.__alloyId718);
    $.__views.__alloyId719 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId719"
    });
    $.__views.__alloyId716.add($.__views.__alloyId719);
    $.__views.__alloyId720 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Mongolia",
        id: "__alloyId720"
    });
    $.__views.CountryPicker.add($.__views.__alloyId720);
    setValue ? $.__views.__alloyId720.addEventListener("click", setValue) : __defers["$.__views.__alloyId720!click!setValue"] = true;
    $.__views.__alloyId721 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Mongolia",
        id: "__alloyId721"
    });
    $.__views.__alloyId720.add($.__views.__alloyId721);
    $.__views.__alloyId722 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId722"
    });
    $.__views.__alloyId720.add($.__views.__alloyId722);
    $.__views.__alloyId723 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId723"
    });
    $.__views.__alloyId720.add($.__views.__alloyId723);
    $.__views.__alloyId724 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Morocco",
        id: "__alloyId724"
    });
    $.__views.CountryPicker.add($.__views.__alloyId724);
    setValue ? $.__views.__alloyId724.addEventListener("click", setValue) : __defers["$.__views.__alloyId724!click!setValue"] = true;
    $.__views.__alloyId725 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Morocco",
        id: "__alloyId725"
    });
    $.__views.__alloyId724.add($.__views.__alloyId725);
    $.__views.__alloyId726 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId726"
    });
    $.__views.__alloyId724.add($.__views.__alloyId726);
    $.__views.__alloyId727 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId727"
    });
    $.__views.__alloyId724.add($.__views.__alloyId727);
    $.__views.__alloyId728 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Mozambique",
        id: "__alloyId728"
    });
    $.__views.CountryPicker.add($.__views.__alloyId728);
    setValue ? $.__views.__alloyId728.addEventListener("click", setValue) : __defers["$.__views.__alloyId728!click!setValue"] = true;
    $.__views.__alloyId729 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Mozambique",
        id: "__alloyId729"
    });
    $.__views.__alloyId728.add($.__views.__alloyId729);
    $.__views.__alloyId730 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId730"
    });
    $.__views.__alloyId728.add($.__views.__alloyId730);
    $.__views.__alloyId731 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId731"
    });
    $.__views.__alloyId728.add($.__views.__alloyId731);
    $.__views.__alloyId732 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Namibia",
        id: "__alloyId732"
    });
    $.__views.CountryPicker.add($.__views.__alloyId732);
    setValue ? $.__views.__alloyId732.addEventListener("click", setValue) : __defers["$.__views.__alloyId732!click!setValue"] = true;
    $.__views.__alloyId733 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Namibia",
        id: "__alloyId733"
    });
    $.__views.__alloyId732.add($.__views.__alloyId733);
    $.__views.__alloyId734 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId734"
    });
    $.__views.__alloyId732.add($.__views.__alloyId734);
    $.__views.__alloyId735 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId735"
    });
    $.__views.__alloyId732.add($.__views.__alloyId735);
    $.__views.__alloyId736 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Naura",
        id: "__alloyId736"
    });
    $.__views.CountryPicker.add($.__views.__alloyId736);
    setValue ? $.__views.__alloyId736.addEventListener("click", setValue) : __defers["$.__views.__alloyId736!click!setValue"] = true;
    $.__views.__alloyId737 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Naura",
        id: "__alloyId737"
    });
    $.__views.__alloyId736.add($.__views.__alloyId737);
    $.__views.__alloyId738 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId738"
    });
    $.__views.__alloyId736.add($.__views.__alloyId738);
    $.__views.__alloyId739 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId739"
    });
    $.__views.__alloyId736.add($.__views.__alloyId739);
    $.__views.__alloyId740 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Nepal",
        id: "__alloyId740"
    });
    $.__views.CountryPicker.add($.__views.__alloyId740);
    setValue ? $.__views.__alloyId740.addEventListener("click", setValue) : __defers["$.__views.__alloyId740!click!setValue"] = true;
    $.__views.__alloyId741 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Nepal",
        id: "__alloyId741"
    });
    $.__views.__alloyId740.add($.__views.__alloyId741);
    $.__views.__alloyId742 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId742"
    });
    $.__views.__alloyId740.add($.__views.__alloyId742);
    $.__views.__alloyId743 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId743"
    });
    $.__views.__alloyId740.add($.__views.__alloyId743);
    $.__views.__alloyId744 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Netherlands",
        id: "__alloyId744"
    });
    $.__views.CountryPicker.add($.__views.__alloyId744);
    setValue ? $.__views.__alloyId744.addEventListener("click", setValue) : __defers["$.__views.__alloyId744!click!setValue"] = true;
    $.__views.__alloyId745 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Netherlands",
        id: "__alloyId745"
    });
    $.__views.__alloyId744.add($.__views.__alloyId745);
    $.__views.__alloyId746 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId746"
    });
    $.__views.__alloyId744.add($.__views.__alloyId746);
    $.__views.__alloyId747 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId747"
    });
    $.__views.__alloyId744.add($.__views.__alloyId747);
    $.__views.__alloyId748 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Netherlands Antilles",
        id: "__alloyId748"
    });
    $.__views.CountryPicker.add($.__views.__alloyId748);
    setValue ? $.__views.__alloyId748.addEventListener("click", setValue) : __defers["$.__views.__alloyId748!click!setValue"] = true;
    $.__views.__alloyId749 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Netherlands Antilles",
        id: "__alloyId749"
    });
    $.__views.__alloyId748.add($.__views.__alloyId749);
    $.__views.__alloyId750 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId750"
    });
    $.__views.__alloyId748.add($.__views.__alloyId750);
    $.__views.__alloyId751 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId751"
    });
    $.__views.__alloyId748.add($.__views.__alloyId751);
    $.__views.__alloyId752 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "New Caledonia",
        id: "__alloyId752"
    });
    $.__views.CountryPicker.add($.__views.__alloyId752);
    setValue ? $.__views.__alloyId752.addEventListener("click", setValue) : __defers["$.__views.__alloyId752!click!setValue"] = true;
    $.__views.__alloyId753 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "New Caledonia",
        id: "__alloyId753"
    });
    $.__views.__alloyId752.add($.__views.__alloyId753);
    $.__views.__alloyId754 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId754"
    });
    $.__views.__alloyId752.add($.__views.__alloyId754);
    $.__views.__alloyId755 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId755"
    });
    $.__views.__alloyId752.add($.__views.__alloyId755);
    $.__views.__alloyId756 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "New Zealand",
        id: "__alloyId756"
    });
    $.__views.CountryPicker.add($.__views.__alloyId756);
    setValue ? $.__views.__alloyId756.addEventListener("click", setValue) : __defers["$.__views.__alloyId756!click!setValue"] = true;
    $.__views.__alloyId757 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "New Zealand",
        id: "__alloyId757"
    });
    $.__views.__alloyId756.add($.__views.__alloyId757);
    $.__views.__alloyId758 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId758"
    });
    $.__views.__alloyId756.add($.__views.__alloyId758);
    $.__views.__alloyId759 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId759"
    });
    $.__views.__alloyId756.add($.__views.__alloyId759);
    $.__views.__alloyId760 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Nicaragua",
        id: "__alloyId760"
    });
    $.__views.CountryPicker.add($.__views.__alloyId760);
    setValue ? $.__views.__alloyId760.addEventListener("click", setValue) : __defers["$.__views.__alloyId760!click!setValue"] = true;
    $.__views.__alloyId761 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Nicaragua",
        id: "__alloyId761"
    });
    $.__views.__alloyId760.add($.__views.__alloyId761);
    $.__views.__alloyId762 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId762"
    });
    $.__views.__alloyId760.add($.__views.__alloyId762);
    $.__views.__alloyId763 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId763"
    });
    $.__views.__alloyId760.add($.__views.__alloyId763);
    $.__views.__alloyId764 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Niger",
        id: "__alloyId764"
    });
    $.__views.CountryPicker.add($.__views.__alloyId764);
    setValue ? $.__views.__alloyId764.addEventListener("click", setValue) : __defers["$.__views.__alloyId764!click!setValue"] = true;
    $.__views.__alloyId765 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Niger",
        id: "__alloyId765"
    });
    $.__views.__alloyId764.add($.__views.__alloyId765);
    $.__views.__alloyId766 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId766"
    });
    $.__views.__alloyId764.add($.__views.__alloyId766);
    $.__views.__alloyId767 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId767"
    });
    $.__views.__alloyId764.add($.__views.__alloyId767);
    $.__views.__alloyId768 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Nigeria",
        id: "__alloyId768"
    });
    $.__views.CountryPicker.add($.__views.__alloyId768);
    setValue ? $.__views.__alloyId768.addEventListener("click", setValue) : __defers["$.__views.__alloyId768!click!setValue"] = true;
    $.__views.__alloyId769 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Nigeria",
        id: "__alloyId769"
    });
    $.__views.__alloyId768.add($.__views.__alloyId769);
    $.__views.__alloyId770 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId770"
    });
    $.__views.__alloyId768.add($.__views.__alloyId770);
    $.__views.__alloyId771 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId771"
    });
    $.__views.__alloyId768.add($.__views.__alloyId771);
    $.__views.__alloyId772 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Northern Ireland",
        id: "__alloyId772"
    });
    $.__views.CountryPicker.add($.__views.__alloyId772);
    setValue ? $.__views.__alloyId772.addEventListener("click", setValue) : __defers["$.__views.__alloyId772!click!setValue"] = true;
    $.__views.__alloyId773 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Northern Ireland",
        id: "__alloyId773"
    });
    $.__views.__alloyId772.add($.__views.__alloyId773);
    $.__views.__alloyId774 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId774"
    });
    $.__views.__alloyId772.add($.__views.__alloyId774);
    $.__views.__alloyId775 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId775"
    });
    $.__views.__alloyId772.add($.__views.__alloyId775);
    $.__views.__alloyId776 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Norway",
        id: "__alloyId776"
    });
    $.__views.CountryPicker.add($.__views.__alloyId776);
    setValue ? $.__views.__alloyId776.addEventListener("click", setValue) : __defers["$.__views.__alloyId776!click!setValue"] = true;
    $.__views.__alloyId777 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Norway",
        id: "__alloyId777"
    });
    $.__views.__alloyId776.add($.__views.__alloyId777);
    $.__views.__alloyId778 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId778"
    });
    $.__views.__alloyId776.add($.__views.__alloyId778);
    $.__views.__alloyId779 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId779"
    });
    $.__views.__alloyId776.add($.__views.__alloyId779);
    $.__views.__alloyId780 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Oman",
        id: "__alloyId780"
    });
    $.__views.CountryPicker.add($.__views.__alloyId780);
    setValue ? $.__views.__alloyId780.addEventListener("click", setValue) : __defers["$.__views.__alloyId780!click!setValue"] = true;
    $.__views.__alloyId781 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Oman",
        id: "__alloyId781"
    });
    $.__views.__alloyId780.add($.__views.__alloyId781);
    $.__views.__alloyId782 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId782"
    });
    $.__views.__alloyId780.add($.__views.__alloyId782);
    $.__views.__alloyId783 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId783"
    });
    $.__views.__alloyId780.add($.__views.__alloyId783);
    $.__views.__alloyId784 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Pakistan",
        id: "__alloyId784"
    });
    $.__views.CountryPicker.add($.__views.__alloyId784);
    setValue ? $.__views.__alloyId784.addEventListener("click", setValue) : __defers["$.__views.__alloyId784!click!setValue"] = true;
    $.__views.__alloyId785 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Pakistan",
        id: "__alloyId785"
    });
    $.__views.__alloyId784.add($.__views.__alloyId785);
    $.__views.__alloyId786 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId786"
    });
    $.__views.__alloyId784.add($.__views.__alloyId786);
    $.__views.__alloyId787 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId787"
    });
    $.__views.__alloyId784.add($.__views.__alloyId787);
    $.__views.__alloyId788 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Panama",
        id: "__alloyId788"
    });
    $.__views.CountryPicker.add($.__views.__alloyId788);
    setValue ? $.__views.__alloyId788.addEventListener("click", setValue) : __defers["$.__views.__alloyId788!click!setValue"] = true;
    $.__views.__alloyId789 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Panama",
        id: "__alloyId789"
    });
    $.__views.__alloyId788.add($.__views.__alloyId789);
    $.__views.__alloyId790 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId790"
    });
    $.__views.__alloyId788.add($.__views.__alloyId790);
    $.__views.__alloyId791 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId791"
    });
    $.__views.__alloyId788.add($.__views.__alloyId791);
    $.__views.__alloyId792 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Papua New Guinea",
        id: "__alloyId792"
    });
    $.__views.CountryPicker.add($.__views.__alloyId792);
    setValue ? $.__views.__alloyId792.addEventListener("click", setValue) : __defers["$.__views.__alloyId792!click!setValue"] = true;
    $.__views.__alloyId793 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Papua New Guinea",
        id: "__alloyId793"
    });
    $.__views.__alloyId792.add($.__views.__alloyId793);
    $.__views.__alloyId794 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId794"
    });
    $.__views.__alloyId792.add($.__views.__alloyId794);
    $.__views.__alloyId795 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId795"
    });
    $.__views.__alloyId792.add($.__views.__alloyId795);
    $.__views.__alloyId796 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Paraguay",
        id: "__alloyId796"
    });
    $.__views.CountryPicker.add($.__views.__alloyId796);
    setValue ? $.__views.__alloyId796.addEventListener("click", setValue) : __defers["$.__views.__alloyId796!click!setValue"] = true;
    $.__views.__alloyId797 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Paraguay",
        id: "__alloyId797"
    });
    $.__views.__alloyId796.add($.__views.__alloyId797);
    $.__views.__alloyId798 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId798"
    });
    $.__views.__alloyId796.add($.__views.__alloyId798);
    $.__views.__alloyId799 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId799"
    });
    $.__views.__alloyId796.add($.__views.__alloyId799);
    $.__views.__alloyId800 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Peru",
        id: "__alloyId800"
    });
    $.__views.CountryPicker.add($.__views.__alloyId800);
    setValue ? $.__views.__alloyId800.addEventListener("click", setValue) : __defers["$.__views.__alloyId800!click!setValue"] = true;
    $.__views.__alloyId801 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Peru",
        id: "__alloyId801"
    });
    $.__views.__alloyId800.add($.__views.__alloyId801);
    $.__views.__alloyId802 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId802"
    });
    $.__views.__alloyId800.add($.__views.__alloyId802);
    $.__views.__alloyId803 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId803"
    });
    $.__views.__alloyId800.add($.__views.__alloyId803);
    $.__views.__alloyId804 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Philippines",
        id: "__alloyId804"
    });
    $.__views.CountryPicker.add($.__views.__alloyId804);
    setValue ? $.__views.__alloyId804.addEventListener("click", setValue) : __defers["$.__views.__alloyId804!click!setValue"] = true;
    $.__views.__alloyId805 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Philippines",
        id: "__alloyId805"
    });
    $.__views.__alloyId804.add($.__views.__alloyId805);
    $.__views.__alloyId806 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId806"
    });
    $.__views.__alloyId804.add($.__views.__alloyId806);
    $.__views.__alloyId807 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId807"
    });
    $.__views.__alloyId804.add($.__views.__alloyId807);
    $.__views.__alloyId808 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Pitcaihn Islands",
        id: "__alloyId808"
    });
    $.__views.CountryPicker.add($.__views.__alloyId808);
    setValue ? $.__views.__alloyId808.addEventListener("click", setValue) : __defers["$.__views.__alloyId808!click!setValue"] = true;
    $.__views.__alloyId809 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Pitcaihn Islands",
        id: "__alloyId809"
    });
    $.__views.__alloyId808.add($.__views.__alloyId809);
    $.__views.__alloyId810 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId810"
    });
    $.__views.__alloyId808.add($.__views.__alloyId810);
    $.__views.__alloyId811 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId811"
    });
    $.__views.__alloyId808.add($.__views.__alloyId811);
    $.__views.__alloyId812 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Poland",
        id: "__alloyId812"
    });
    $.__views.CountryPicker.add($.__views.__alloyId812);
    setValue ? $.__views.__alloyId812.addEventListener("click", setValue) : __defers["$.__views.__alloyId812!click!setValue"] = true;
    $.__views.__alloyId813 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Poland",
        id: "__alloyId813"
    });
    $.__views.__alloyId812.add($.__views.__alloyId813);
    $.__views.__alloyId814 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId814"
    });
    $.__views.__alloyId812.add($.__views.__alloyId814);
    $.__views.__alloyId815 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId815"
    });
    $.__views.__alloyId812.add($.__views.__alloyId815);
    $.__views.__alloyId816 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Portugal",
        id: "__alloyId816"
    });
    $.__views.CountryPicker.add($.__views.__alloyId816);
    setValue ? $.__views.__alloyId816.addEventListener("click", setValue) : __defers["$.__views.__alloyId816!click!setValue"] = true;
    $.__views.__alloyId817 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Portugal",
        id: "__alloyId817"
    });
    $.__views.__alloyId816.add($.__views.__alloyId817);
    $.__views.__alloyId818 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId818"
    });
    $.__views.__alloyId816.add($.__views.__alloyId818);
    $.__views.__alloyId819 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId819"
    });
    $.__views.__alloyId816.add($.__views.__alloyId819);
    $.__views.__alloyId820 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Qatar",
        id: "__alloyId820"
    });
    $.__views.CountryPicker.add($.__views.__alloyId820);
    setValue ? $.__views.__alloyId820.addEventListener("click", setValue) : __defers["$.__views.__alloyId820!click!setValue"] = true;
    $.__views.__alloyId821 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Qatar",
        id: "__alloyId821"
    });
    $.__views.__alloyId820.add($.__views.__alloyId821);
    $.__views.__alloyId822 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId822"
    });
    $.__views.__alloyId820.add($.__views.__alloyId822);
    $.__views.__alloyId823 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId823"
    });
    $.__views.__alloyId820.add($.__views.__alloyId823);
    $.__views.__alloyId824 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Rep of Korea",
        id: "__alloyId824"
    });
    $.__views.CountryPicker.add($.__views.__alloyId824);
    setValue ? $.__views.__alloyId824.addEventListener("click", setValue) : __defers["$.__views.__alloyId824!click!setValue"] = true;
    $.__views.__alloyId825 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Rep of Korea",
        id: "__alloyId825"
    });
    $.__views.__alloyId824.add($.__views.__alloyId825);
    $.__views.__alloyId826 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId826"
    });
    $.__views.__alloyId824.add($.__views.__alloyId826);
    $.__views.__alloyId827 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId827"
    });
    $.__views.__alloyId824.add($.__views.__alloyId827);
    $.__views.__alloyId828 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Reunion Island",
        id: "__alloyId828"
    });
    $.__views.CountryPicker.add($.__views.__alloyId828);
    setValue ? $.__views.__alloyId828.addEventListener("click", setValue) : __defers["$.__views.__alloyId828!click!setValue"] = true;
    $.__views.__alloyId829 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Reunion Island",
        id: "__alloyId829"
    });
    $.__views.__alloyId828.add($.__views.__alloyId829);
    $.__views.__alloyId830 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId830"
    });
    $.__views.__alloyId828.add($.__views.__alloyId830);
    $.__views.__alloyId831 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId831"
    });
    $.__views.__alloyId828.add($.__views.__alloyId831);
    $.__views.__alloyId832 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Rhodesia",
        id: "__alloyId832"
    });
    $.__views.CountryPicker.add($.__views.__alloyId832);
    setValue ? $.__views.__alloyId832.addEventListener("click", setValue) : __defers["$.__views.__alloyId832!click!setValue"] = true;
    $.__views.__alloyId833 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Rhodesia",
        id: "__alloyId833"
    });
    $.__views.__alloyId832.add($.__views.__alloyId833);
    $.__views.__alloyId834 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId834"
    });
    $.__views.__alloyId832.add($.__views.__alloyId834);
    $.__views.__alloyId835 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId835"
    });
    $.__views.__alloyId832.add($.__views.__alloyId835);
    $.__views.__alloyId836 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Romania",
        id: "__alloyId836"
    });
    $.__views.CountryPicker.add($.__views.__alloyId836);
    setValue ? $.__views.__alloyId836.addEventListener("click", setValue) : __defers["$.__views.__alloyId836!click!setValue"] = true;
    $.__views.__alloyId837 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Romania",
        id: "__alloyId837"
    });
    $.__views.__alloyId836.add($.__views.__alloyId837);
    $.__views.__alloyId838 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId838"
    });
    $.__views.__alloyId836.add($.__views.__alloyId838);
    $.__views.__alloyId839 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId839"
    });
    $.__views.__alloyId836.add($.__views.__alloyId839);
    $.__views.__alloyId840 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Russia",
        id: "__alloyId840"
    });
    $.__views.CountryPicker.add($.__views.__alloyId840);
    setValue ? $.__views.__alloyId840.addEventListener("click", setValue) : __defers["$.__views.__alloyId840!click!setValue"] = true;
    $.__views.__alloyId841 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Russia",
        id: "__alloyId841"
    });
    $.__views.__alloyId840.add($.__views.__alloyId841);
    $.__views.__alloyId842 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId842"
    });
    $.__views.__alloyId840.add($.__views.__alloyId842);
    $.__views.__alloyId843 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId843"
    });
    $.__views.__alloyId840.add($.__views.__alloyId843);
    $.__views.__alloyId844 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Rwanda",
        id: "__alloyId844"
    });
    $.__views.CountryPicker.add($.__views.__alloyId844);
    setValue ? $.__views.__alloyId844.addEventListener("click", setValue) : __defers["$.__views.__alloyId844!click!setValue"] = true;
    $.__views.__alloyId845 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Rwanda",
        id: "__alloyId845"
    });
    $.__views.__alloyId844.add($.__views.__alloyId845);
    $.__views.__alloyId846 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId846"
    });
    $.__views.__alloyId844.add($.__views.__alloyId846);
    $.__views.__alloyId847 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId847"
    });
    $.__views.__alloyId844.add($.__views.__alloyId847);
    $.__views.__alloyId848 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Saint Helena",
        id: "__alloyId848"
    });
    $.__views.CountryPicker.add($.__views.__alloyId848);
    setValue ? $.__views.__alloyId848.addEventListener("click", setValue) : __defers["$.__views.__alloyId848!click!setValue"] = true;
    $.__views.__alloyId849 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Saint Helena",
        id: "__alloyId849"
    });
    $.__views.__alloyId848.add($.__views.__alloyId849);
    $.__views.__alloyId850 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId850"
    });
    $.__views.__alloyId848.add($.__views.__alloyId850);
    $.__views.__alloyId851 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId851"
    });
    $.__views.__alloyId848.add($.__views.__alloyId851);
    $.__views.__alloyId852 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Saint Lucia",
        id: "__alloyId852"
    });
    $.__views.CountryPicker.add($.__views.__alloyId852);
    setValue ? $.__views.__alloyId852.addEventListener("click", setValue) : __defers["$.__views.__alloyId852!click!setValue"] = true;
    $.__views.__alloyId853 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Saint Lucia",
        id: "__alloyId853"
    });
    $.__views.__alloyId852.add($.__views.__alloyId853);
    $.__views.__alloyId854 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId854"
    });
    $.__views.__alloyId852.add($.__views.__alloyId854);
    $.__views.__alloyId855 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId855"
    });
    $.__views.__alloyId852.add($.__views.__alloyId855);
    $.__views.__alloyId856 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Santa Cruz Islands",
        id: "__alloyId856"
    });
    $.__views.CountryPicker.add($.__views.__alloyId856);
    setValue ? $.__views.__alloyId856.addEventListener("click", setValue) : __defers["$.__views.__alloyId856!click!setValue"] = true;
    $.__views.__alloyId857 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Santa Cruz Islands",
        id: "__alloyId857"
    });
    $.__views.__alloyId856.add($.__views.__alloyId857);
    $.__views.__alloyId858 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId858"
    });
    $.__views.__alloyId856.add($.__views.__alloyId858);
    $.__views.__alloyId859 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId859"
    });
    $.__views.__alloyId856.add($.__views.__alloyId859);
    $.__views.__alloyId860 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Sao Tome & Principe",
        id: "__alloyId860"
    });
    $.__views.CountryPicker.add($.__views.__alloyId860);
    setValue ? $.__views.__alloyId860.addEventListener("click", setValue) : __defers["$.__views.__alloyId860!click!setValue"] = true;
    $.__views.__alloyId861 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Sao Tome & Principe",
        id: "__alloyId861"
    });
    $.__views.__alloyId860.add($.__views.__alloyId861);
    $.__views.__alloyId862 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId862"
    });
    $.__views.__alloyId860.add($.__views.__alloyId862);
    $.__views.__alloyId863 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId863"
    });
    $.__views.__alloyId860.add($.__views.__alloyId863);
    $.__views.__alloyId864 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Saudi Arabia",
        id: "__alloyId864"
    });
    $.__views.CountryPicker.add($.__views.__alloyId864);
    setValue ? $.__views.__alloyId864.addEventListener("click", setValue) : __defers["$.__views.__alloyId864!click!setValue"] = true;
    $.__views.__alloyId865 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Saudi Arabia",
        id: "__alloyId865"
    });
    $.__views.__alloyId864.add($.__views.__alloyId865);
    $.__views.__alloyId866 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId866"
    });
    $.__views.__alloyId864.add($.__views.__alloyId866);
    $.__views.__alloyId867 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId867"
    });
    $.__views.__alloyId864.add($.__views.__alloyId867);
    $.__views.__alloyId868 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Scotland",
        id: "__alloyId868"
    });
    $.__views.CountryPicker.add($.__views.__alloyId868);
    setValue ? $.__views.__alloyId868.addEventListener("click", setValue) : __defers["$.__views.__alloyId868!click!setValue"] = true;
    $.__views.__alloyId869 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Scotland",
        id: "__alloyId869"
    });
    $.__views.__alloyId868.add($.__views.__alloyId869);
    $.__views.__alloyId870 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId870"
    });
    $.__views.__alloyId868.add($.__views.__alloyId870);
    $.__views.__alloyId871 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId871"
    });
    $.__views.__alloyId868.add($.__views.__alloyId871);
    $.__views.__alloyId872 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Senegal",
        id: "__alloyId872"
    });
    $.__views.CountryPicker.add($.__views.__alloyId872);
    setValue ? $.__views.__alloyId872.addEventListener("click", setValue) : __defers["$.__views.__alloyId872!click!setValue"] = true;
    $.__views.__alloyId873 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Senegal",
        id: "__alloyId873"
    });
    $.__views.__alloyId872.add($.__views.__alloyId873);
    $.__views.__alloyId874 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId874"
    });
    $.__views.__alloyId872.add($.__views.__alloyId874);
    $.__views.__alloyId875 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId875"
    });
    $.__views.__alloyId872.add($.__views.__alloyId875);
    $.__views.__alloyId876 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Seychelles",
        id: "__alloyId876"
    });
    $.__views.CountryPicker.add($.__views.__alloyId876);
    setValue ? $.__views.__alloyId876.addEventListener("click", setValue) : __defers["$.__views.__alloyId876!click!setValue"] = true;
    $.__views.__alloyId877 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Seychelles",
        id: "__alloyId877"
    });
    $.__views.__alloyId876.add($.__views.__alloyId877);
    $.__views.__alloyId878 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId878"
    });
    $.__views.__alloyId876.add($.__views.__alloyId878);
    $.__views.__alloyId879 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId879"
    });
    $.__views.__alloyId876.add($.__views.__alloyId879);
    $.__views.__alloyId880 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Sierra Leone",
        id: "__alloyId880"
    });
    $.__views.CountryPicker.add($.__views.__alloyId880);
    setValue ? $.__views.__alloyId880.addEventListener("click", setValue) : __defers["$.__views.__alloyId880!click!setValue"] = true;
    $.__views.__alloyId881 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Sierra Leone",
        id: "__alloyId881"
    });
    $.__views.__alloyId880.add($.__views.__alloyId881);
    $.__views.__alloyId882 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId882"
    });
    $.__views.__alloyId880.add($.__views.__alloyId882);
    $.__views.__alloyId883 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId883"
    });
    $.__views.__alloyId880.add($.__views.__alloyId883);
    $.__views.__alloyId884 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Singapore",
        id: "__alloyId884"
    });
    $.__views.CountryPicker.add($.__views.__alloyId884);
    setValue ? $.__views.__alloyId884.addEventListener("click", setValue) : __defers["$.__views.__alloyId884!click!setValue"] = true;
    $.__views.__alloyId885 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Singapore",
        id: "__alloyId885"
    });
    $.__views.__alloyId884.add($.__views.__alloyId885);
    $.__views.__alloyId886 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId886"
    });
    $.__views.__alloyId884.add($.__views.__alloyId886);
    $.__views.__alloyId887 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId887"
    });
    $.__views.__alloyId884.add($.__views.__alloyId887);
    $.__views.__alloyId888 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Solomon Islands",
        id: "__alloyId888"
    });
    $.__views.CountryPicker.add($.__views.__alloyId888);
    setValue ? $.__views.__alloyId888.addEventListener("click", setValue) : __defers["$.__views.__alloyId888!click!setValue"] = true;
    $.__views.__alloyId889 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Solomon Islands",
        id: "__alloyId889"
    });
    $.__views.__alloyId888.add($.__views.__alloyId889);
    $.__views.__alloyId890 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId890"
    });
    $.__views.__alloyId888.add($.__views.__alloyId890);
    $.__views.__alloyId891 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId891"
    });
    $.__views.__alloyId888.add($.__views.__alloyId891);
    $.__views.__alloyId892 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Somalia-Northern-Reg",
        id: "__alloyId892"
    });
    $.__views.CountryPicker.add($.__views.__alloyId892);
    setValue ? $.__views.__alloyId892.addEventListener("click", setValue) : __defers["$.__views.__alloyId892!click!setValue"] = true;
    $.__views.__alloyId893 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Somalia-Northern-Reg",
        id: "__alloyId893"
    });
    $.__views.__alloyId892.add($.__views.__alloyId893);
    $.__views.__alloyId894 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId894"
    });
    $.__views.__alloyId892.add($.__views.__alloyId894);
    $.__views.__alloyId895 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId895"
    });
    $.__views.__alloyId892.add($.__views.__alloyId895);
    $.__views.__alloyId896 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Somalia-Southern-Reg",
        id: "__alloyId896"
    });
    $.__views.CountryPicker.add($.__views.__alloyId896);
    setValue ? $.__views.__alloyId896.addEventListener("click", setValue) : __defers["$.__views.__alloyId896!click!setValue"] = true;
    $.__views.__alloyId897 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Somalia-Southern-Reg",
        id: "__alloyId897"
    });
    $.__views.__alloyId896.add($.__views.__alloyId897);
    $.__views.__alloyId898 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId898"
    });
    $.__views.__alloyId896.add($.__views.__alloyId898);
    $.__views.__alloyId899 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId899"
    });
    $.__views.__alloyId896.add($.__views.__alloyId899);
    $.__views.__alloyId900 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "South Africa",
        id: "__alloyId900"
    });
    $.__views.CountryPicker.add($.__views.__alloyId900);
    setValue ? $.__views.__alloyId900.addEventListener("click", setValue) : __defers["$.__views.__alloyId900!click!setValue"] = true;
    $.__views.__alloyId901 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "South Africa",
        id: "__alloyId901"
    });
    $.__views.__alloyId900.add($.__views.__alloyId901);
    $.__views.__alloyId902 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId902"
    });
    $.__views.__alloyId900.add($.__views.__alloyId902);
    $.__views.__alloyId903 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId903"
    });
    $.__views.__alloyId900.add($.__views.__alloyId903);
    $.__views.__alloyId904 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Spain",
        id: "__alloyId904"
    });
    $.__views.CountryPicker.add($.__views.__alloyId904);
    setValue ? $.__views.__alloyId904.addEventListener("click", setValue) : __defers["$.__views.__alloyId904!click!setValue"] = true;
    $.__views.__alloyId905 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Spain",
        id: "__alloyId905"
    });
    $.__views.__alloyId904.add($.__views.__alloyId905);
    $.__views.__alloyId906 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId906"
    });
    $.__views.__alloyId904.add($.__views.__alloyId906);
    $.__views.__alloyId907 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId907"
    });
    $.__views.__alloyId904.add($.__views.__alloyId907);
    $.__views.__alloyId908 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "SriLanka",
        id: "__alloyId908"
    });
    $.__views.CountryPicker.add($.__views.__alloyId908);
    setValue ? $.__views.__alloyId908.addEventListener("click", setValue) : __defers["$.__views.__alloyId908!click!setValue"] = true;
    $.__views.__alloyId909 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "SriLanka",
        id: "__alloyId909"
    });
    $.__views.__alloyId908.add($.__views.__alloyId909);
    $.__views.__alloyId910 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId910"
    });
    $.__views.__alloyId908.add($.__views.__alloyId910);
    $.__views.__alloyId911 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId911"
    });
    $.__views.__alloyId908.add($.__views.__alloyId911);
    $.__views.__alloyId912 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "St Pierre & Miquelon",
        id: "__alloyId912"
    });
    $.__views.CountryPicker.add($.__views.__alloyId912);
    setValue ? $.__views.__alloyId912.addEventListener("click", setValue) : __defers["$.__views.__alloyId912!click!setValue"] = true;
    $.__views.__alloyId913 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "St Pierre & Miquelon",
        id: "__alloyId913"
    });
    $.__views.__alloyId912.add($.__views.__alloyId913);
    $.__views.__alloyId914 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId914"
    });
    $.__views.__alloyId912.add($.__views.__alloyId914);
    $.__views.__alloyId915 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId915"
    });
    $.__views.__alloyId912.add($.__views.__alloyId915);
    $.__views.__alloyId916 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "St Vincent & Grenadi",
        id: "__alloyId916"
    });
    $.__views.CountryPicker.add($.__views.__alloyId916);
    setValue ? $.__views.__alloyId916.addEventListener("click", setValue) : __defers["$.__views.__alloyId916!click!setValue"] = true;
    $.__views.__alloyId917 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "St Vincent & Grenadi",
        id: "__alloyId917"
    });
    $.__views.__alloyId916.add($.__views.__alloyId917);
    $.__views.__alloyId918 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId918"
    });
    $.__views.__alloyId916.add($.__views.__alloyId918);
    $.__views.__alloyId919 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId919"
    });
    $.__views.__alloyId916.add($.__views.__alloyId919);
    $.__views.__alloyId920 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Sudan",
        id: "__alloyId920"
    });
    $.__views.CountryPicker.add($.__views.__alloyId920);
    setValue ? $.__views.__alloyId920.addEventListener("click", setValue) : __defers["$.__views.__alloyId920!click!setValue"] = true;
    $.__views.__alloyId921 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Sudan",
        id: "__alloyId921"
    });
    $.__views.__alloyId920.add($.__views.__alloyId921);
    $.__views.__alloyId922 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId922"
    });
    $.__views.__alloyId920.add($.__views.__alloyId922);
    $.__views.__alloyId923 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId923"
    });
    $.__views.__alloyId920.add($.__views.__alloyId923);
    $.__views.__alloyId924 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Suriname",
        id: "__alloyId924"
    });
    $.__views.CountryPicker.add($.__views.__alloyId924);
    setValue ? $.__views.__alloyId924.addEventListener("click", setValue) : __defers["$.__views.__alloyId924!click!setValue"] = true;
    $.__views.__alloyId925 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Suriname",
        id: "__alloyId925"
    });
    $.__views.__alloyId924.add($.__views.__alloyId925);
    $.__views.__alloyId926 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId926"
    });
    $.__views.__alloyId924.add($.__views.__alloyId926);
    $.__views.__alloyId927 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId927"
    });
    $.__views.__alloyId924.add($.__views.__alloyId927);
    $.__views.__alloyId928 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Swaziland",
        id: "__alloyId928"
    });
    $.__views.CountryPicker.add($.__views.__alloyId928);
    setValue ? $.__views.__alloyId928.addEventListener("click", setValue) : __defers["$.__views.__alloyId928!click!setValue"] = true;
    $.__views.__alloyId929 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Swaziland",
        id: "__alloyId929"
    });
    $.__views.__alloyId928.add($.__views.__alloyId929);
    $.__views.__alloyId930 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId930"
    });
    $.__views.__alloyId928.add($.__views.__alloyId930);
    $.__views.__alloyId931 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId931"
    });
    $.__views.__alloyId928.add($.__views.__alloyId931);
    $.__views.__alloyId932 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Sweden",
        id: "__alloyId932"
    });
    $.__views.CountryPicker.add($.__views.__alloyId932);
    setValue ? $.__views.__alloyId932.addEventListener("click", setValue) : __defers["$.__views.__alloyId932!click!setValue"] = true;
    $.__views.__alloyId933 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Sweden",
        id: "__alloyId933"
    });
    $.__views.__alloyId932.add($.__views.__alloyId933);
    $.__views.__alloyId934 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId934"
    });
    $.__views.__alloyId932.add($.__views.__alloyId934);
    $.__views.__alloyId935 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId935"
    });
    $.__views.__alloyId932.add($.__views.__alloyId935);
    $.__views.__alloyId936 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Switzerland",
        id: "__alloyId936"
    });
    $.__views.CountryPicker.add($.__views.__alloyId936);
    setValue ? $.__views.__alloyId936.addEventListener("click", setValue) : __defers["$.__views.__alloyId936!click!setValue"] = true;
    $.__views.__alloyId937 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Switzerland",
        id: "__alloyId937"
    });
    $.__views.__alloyId936.add($.__views.__alloyId937);
    $.__views.__alloyId938 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId938"
    });
    $.__views.__alloyId936.add($.__views.__alloyId938);
    $.__views.__alloyId939 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId939"
    });
    $.__views.__alloyId936.add($.__views.__alloyId939);
    $.__views.__alloyId940 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Syria",
        id: "__alloyId940"
    });
    $.__views.CountryPicker.add($.__views.__alloyId940);
    setValue ? $.__views.__alloyId940.addEventListener("click", setValue) : __defers["$.__views.__alloyId940!click!setValue"] = true;
    $.__views.__alloyId941 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Syria",
        id: "__alloyId941"
    });
    $.__views.__alloyId940.add($.__views.__alloyId941);
    $.__views.__alloyId942 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId942"
    });
    $.__views.__alloyId940.add($.__views.__alloyId942);
    $.__views.__alloyId943 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId943"
    });
    $.__views.__alloyId940.add($.__views.__alloyId943);
    $.__views.__alloyId944 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Taiwan",
        id: "__alloyId944"
    });
    $.__views.CountryPicker.add($.__views.__alloyId944);
    setValue ? $.__views.__alloyId944.addEventListener("click", setValue) : __defers["$.__views.__alloyId944!click!setValue"] = true;
    $.__views.__alloyId945 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Taiwan",
        id: "__alloyId945"
    });
    $.__views.__alloyId944.add($.__views.__alloyId945);
    $.__views.__alloyId946 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId946"
    });
    $.__views.__alloyId944.add($.__views.__alloyId946);
    $.__views.__alloyId947 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId947"
    });
    $.__views.__alloyId944.add($.__views.__alloyId947);
    $.__views.__alloyId948 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Tanzania",
        id: "__alloyId948"
    });
    $.__views.CountryPicker.add($.__views.__alloyId948);
    setValue ? $.__views.__alloyId948.addEventListener("click", setValue) : __defers["$.__views.__alloyId948!click!setValue"] = true;
    $.__views.__alloyId949 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Tanzania",
        id: "__alloyId949"
    });
    $.__views.__alloyId948.add($.__views.__alloyId949);
    $.__views.__alloyId950 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId950"
    });
    $.__views.__alloyId948.add($.__views.__alloyId950);
    $.__views.__alloyId951 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId951"
    });
    $.__views.__alloyId948.add($.__views.__alloyId951);
    $.__views.__alloyId952 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Thailand",
        id: "__alloyId952"
    });
    $.__views.CountryPicker.add($.__views.__alloyId952);
    setValue ? $.__views.__alloyId952.addEventListener("click", setValue) : __defers["$.__views.__alloyId952!click!setValue"] = true;
    $.__views.__alloyId953 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Thailand",
        id: "__alloyId953"
    });
    $.__views.__alloyId952.add($.__views.__alloyId953);
    $.__views.__alloyId954 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId954"
    });
    $.__views.__alloyId952.add($.__views.__alloyId954);
    $.__views.__alloyId955 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId955"
    });
    $.__views.__alloyId952.add($.__views.__alloyId955);
    $.__views.__alloyId956 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Togo",
        id: "__alloyId956"
    });
    $.__views.CountryPicker.add($.__views.__alloyId956);
    setValue ? $.__views.__alloyId956.addEventListener("click", setValue) : __defers["$.__views.__alloyId956!click!setValue"] = true;
    $.__views.__alloyId957 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Togo",
        id: "__alloyId957"
    });
    $.__views.__alloyId956.add($.__views.__alloyId957);
    $.__views.__alloyId958 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId958"
    });
    $.__views.__alloyId956.add($.__views.__alloyId958);
    $.__views.__alloyId959 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId959"
    });
    $.__views.__alloyId956.add($.__views.__alloyId959);
    $.__views.__alloyId960 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Tonga",
        id: "__alloyId960"
    });
    $.__views.CountryPicker.add($.__views.__alloyId960);
    setValue ? $.__views.__alloyId960.addEventListener("click", setValue) : __defers["$.__views.__alloyId960!click!setValue"] = true;
    $.__views.__alloyId961 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Tonga",
        id: "__alloyId961"
    });
    $.__views.__alloyId960.add($.__views.__alloyId961);
    $.__views.__alloyId962 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId962"
    });
    $.__views.__alloyId960.add($.__views.__alloyId962);
    $.__views.__alloyId963 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId963"
    });
    $.__views.__alloyId960.add($.__views.__alloyId963);
    $.__views.__alloyId964 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Trinidad & Tobago",
        id: "__alloyId964"
    });
    $.__views.CountryPicker.add($.__views.__alloyId964);
    setValue ? $.__views.__alloyId964.addEventListener("click", setValue) : __defers["$.__views.__alloyId964!click!setValue"] = true;
    $.__views.__alloyId965 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Trinidad & Tobago",
        id: "__alloyId965"
    });
    $.__views.__alloyId964.add($.__views.__alloyId965);
    $.__views.__alloyId966 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId966"
    });
    $.__views.__alloyId964.add($.__views.__alloyId966);
    $.__views.__alloyId967 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId967"
    });
    $.__views.__alloyId964.add($.__views.__alloyId967);
    $.__views.__alloyId968 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Tristan de Cunha",
        id: "__alloyId968"
    });
    $.__views.CountryPicker.add($.__views.__alloyId968);
    setValue ? $.__views.__alloyId968.addEventListener("click", setValue) : __defers["$.__views.__alloyId968!click!setValue"] = true;
    $.__views.__alloyId969 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Tristan de Cunha",
        id: "__alloyId969"
    });
    $.__views.__alloyId968.add($.__views.__alloyId969);
    $.__views.__alloyId970 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId970"
    });
    $.__views.__alloyId968.add($.__views.__alloyId970);
    $.__views.__alloyId971 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId971"
    });
    $.__views.__alloyId968.add($.__views.__alloyId971);
    $.__views.__alloyId972 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Tunisia",
        id: "__alloyId972"
    });
    $.__views.CountryPicker.add($.__views.__alloyId972);
    setValue ? $.__views.__alloyId972.addEventListener("click", setValue) : __defers["$.__views.__alloyId972!click!setValue"] = true;
    $.__views.__alloyId973 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Tunisia",
        id: "__alloyId973"
    });
    $.__views.__alloyId972.add($.__views.__alloyId973);
    $.__views.__alloyId974 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId974"
    });
    $.__views.__alloyId972.add($.__views.__alloyId974);
    $.__views.__alloyId975 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId975"
    });
    $.__views.__alloyId972.add($.__views.__alloyId975);
    $.__views.__alloyId976 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Turkey",
        id: "__alloyId976"
    });
    $.__views.CountryPicker.add($.__views.__alloyId976);
    setValue ? $.__views.__alloyId976.addEventListener("click", setValue) : __defers["$.__views.__alloyId976!click!setValue"] = true;
    $.__views.__alloyId977 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Turkey",
        id: "__alloyId977"
    });
    $.__views.__alloyId976.add($.__views.__alloyId977);
    $.__views.__alloyId978 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId978"
    });
    $.__views.__alloyId976.add($.__views.__alloyId978);
    $.__views.__alloyId979 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId979"
    });
    $.__views.__alloyId976.add($.__views.__alloyId979);
    $.__views.__alloyId980 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Turks & Caicos Island",
        id: "__alloyId980"
    });
    $.__views.CountryPicker.add($.__views.__alloyId980);
    setValue ? $.__views.__alloyId980.addEventListener("click", setValue) : __defers["$.__views.__alloyId980!click!setValue"] = true;
    $.__views.__alloyId981 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Turks & Caicos Island",
        id: "__alloyId981"
    });
    $.__views.__alloyId980.add($.__views.__alloyId981);
    $.__views.__alloyId982 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId982"
    });
    $.__views.__alloyId980.add($.__views.__alloyId982);
    $.__views.__alloyId983 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId983"
    });
    $.__views.__alloyId980.add($.__views.__alloyId983);
    $.__views.__alloyId984 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Tuvalu",
        id: "__alloyId984"
    });
    $.__views.CountryPicker.add($.__views.__alloyId984);
    setValue ? $.__views.__alloyId984.addEventListener("click", setValue) : __defers["$.__views.__alloyId984!click!setValue"] = true;
    $.__views.__alloyId985 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Tuvalu",
        id: "__alloyId985"
    });
    $.__views.__alloyId984.add($.__views.__alloyId985);
    $.__views.__alloyId986 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId986"
    });
    $.__views.__alloyId984.add($.__views.__alloyId986);
    $.__views.__alloyId987 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId987"
    });
    $.__views.__alloyId984.add($.__views.__alloyId987);
    $.__views.__alloyId988 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Uganda",
        id: "__alloyId988"
    });
    $.__views.CountryPicker.add($.__views.__alloyId988);
    setValue ? $.__views.__alloyId988.addEventListener("click", setValue) : __defers["$.__views.__alloyId988!click!setValue"] = true;
    $.__views.__alloyId989 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Uganda",
        id: "__alloyId989"
    });
    $.__views.__alloyId988.add($.__views.__alloyId989);
    $.__views.__alloyId990 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId990"
    });
    $.__views.__alloyId988.add($.__views.__alloyId990);
    $.__views.__alloyId991 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId991"
    });
    $.__views.__alloyId988.add($.__views.__alloyId991);
    $.__views.__alloyId992 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "United Arab Emirates",
        id: "__alloyId992"
    });
    $.__views.CountryPicker.add($.__views.__alloyId992);
    setValue ? $.__views.__alloyId992.addEventListener("click", setValue) : __defers["$.__views.__alloyId992!click!setValue"] = true;
    $.__views.__alloyId993 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "United Arab Emirates",
        id: "__alloyId993"
    });
    $.__views.__alloyId992.add($.__views.__alloyId993);
    $.__views.__alloyId994 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId994"
    });
    $.__views.__alloyId992.add($.__views.__alloyId994);
    $.__views.__alloyId995 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId995"
    });
    $.__views.__alloyId992.add($.__views.__alloyId995);
    $.__views.__alloyId996 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Upper Volta",
        id: "__alloyId996"
    });
    $.__views.CountryPicker.add($.__views.__alloyId996);
    setValue ? $.__views.__alloyId996.addEventListener("click", setValue) : __defers["$.__views.__alloyId996!click!setValue"] = true;
    $.__views.__alloyId997 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Upper Volta",
        id: "__alloyId997"
    });
    $.__views.__alloyId996.add($.__views.__alloyId997);
    $.__views.__alloyId998 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId998"
    });
    $.__views.__alloyId996.add($.__views.__alloyId998);
    $.__views.__alloyId999 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId999"
    });
    $.__views.__alloyId996.add($.__views.__alloyId999);
    $.__views.__alloyId1000 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Uruguay",
        id: "__alloyId1000"
    });
    $.__views.CountryPicker.add($.__views.__alloyId1000);
    setValue ? $.__views.__alloyId1000.addEventListener("click", setValue) : __defers["$.__views.__alloyId1000!click!setValue"] = true;
    $.__views.__alloyId1001 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Uruguay",
        id: "__alloyId1001"
    });
    $.__views.__alloyId1000.add($.__views.__alloyId1001);
    $.__views.__alloyId1002 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1002"
    });
    $.__views.__alloyId1000.add($.__views.__alloyId1002);
    $.__views.__alloyId1003 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1003"
    });
    $.__views.__alloyId1000.add($.__views.__alloyId1003);
    $.__views.__alloyId1004 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Vanuatu",
        id: "__alloyId1004"
    });
    $.__views.CountryPicker.add($.__views.__alloyId1004);
    setValue ? $.__views.__alloyId1004.addEventListener("click", setValue) : __defers["$.__views.__alloyId1004!click!setValue"] = true;
    $.__views.__alloyId1005 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Vanuatu",
        id: "__alloyId1005"
    });
    $.__views.__alloyId1004.add($.__views.__alloyId1005);
    $.__views.__alloyId1006 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1006"
    });
    $.__views.__alloyId1004.add($.__views.__alloyId1006);
    $.__views.__alloyId1007 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1007"
    });
    $.__views.__alloyId1004.add($.__views.__alloyId1007);
    $.__views.__alloyId1008 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Vatican City",
        id: "__alloyId1008"
    });
    $.__views.CountryPicker.add($.__views.__alloyId1008);
    setValue ? $.__views.__alloyId1008.addEventListener("click", setValue) : __defers["$.__views.__alloyId1008!click!setValue"] = true;
    $.__views.__alloyId1009 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Vatican City",
        id: "__alloyId1009"
    });
    $.__views.__alloyId1008.add($.__views.__alloyId1009);
    $.__views.__alloyId1010 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1010"
    });
    $.__views.__alloyId1008.add($.__views.__alloyId1010);
    $.__views.__alloyId1011 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1011"
    });
    $.__views.__alloyId1008.add($.__views.__alloyId1011);
    $.__views.__alloyId1012 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Venezuela",
        id: "__alloyId1012"
    });
    $.__views.CountryPicker.add($.__views.__alloyId1012);
    setValue ? $.__views.__alloyId1012.addEventListener("click", setValue) : __defers["$.__views.__alloyId1012!click!setValue"] = true;
    $.__views.__alloyId1013 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Venezuela",
        id: "__alloyId1013"
    });
    $.__views.__alloyId1012.add($.__views.__alloyId1013);
    $.__views.__alloyId1014 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1014"
    });
    $.__views.__alloyId1012.add($.__views.__alloyId1014);
    $.__views.__alloyId1015 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1015"
    });
    $.__views.__alloyId1012.add($.__views.__alloyId1015);
    $.__views.__alloyId1016 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Vietnam",
        id: "__alloyId1016"
    });
    $.__views.CountryPicker.add($.__views.__alloyId1016);
    setValue ? $.__views.__alloyId1016.addEventListener("click", setValue) : __defers["$.__views.__alloyId1016!click!setValue"] = true;
    $.__views.__alloyId1017 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Vietnam",
        id: "__alloyId1017"
    });
    $.__views.__alloyId1016.add($.__views.__alloyId1017);
    $.__views.__alloyId1018 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1018"
    });
    $.__views.__alloyId1016.add($.__views.__alloyId1018);
    $.__views.__alloyId1019 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1019"
    });
    $.__views.__alloyId1016.add($.__views.__alloyId1019);
    $.__views.__alloyId1020 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Virgin Islands",
        id: "__alloyId1020"
    });
    $.__views.CountryPicker.add($.__views.__alloyId1020);
    setValue ? $.__views.__alloyId1020.addEventListener("click", setValue) : __defers["$.__views.__alloyId1020!click!setValue"] = true;
    $.__views.__alloyId1021 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Virgin Islands",
        id: "__alloyId1021"
    });
    $.__views.__alloyId1020.add($.__views.__alloyId1021);
    $.__views.__alloyId1022 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1022"
    });
    $.__views.__alloyId1020.add($.__views.__alloyId1022);
    $.__views.__alloyId1023 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1023"
    });
    $.__views.__alloyId1020.add($.__views.__alloyId1023);
    $.__views.__alloyId1024 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Wales",
        id: "__alloyId1024"
    });
    $.__views.CountryPicker.add($.__views.__alloyId1024);
    setValue ? $.__views.__alloyId1024.addEventListener("click", setValue) : __defers["$.__views.__alloyId1024!click!setValue"] = true;
    $.__views.__alloyId1025 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Wales",
        id: "__alloyId1025"
    });
    $.__views.__alloyId1024.add($.__views.__alloyId1025);
    $.__views.__alloyId1026 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1026"
    });
    $.__views.__alloyId1024.add($.__views.__alloyId1026);
    $.__views.__alloyId1027 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1027"
    });
    $.__views.__alloyId1024.add($.__views.__alloyId1027);
    $.__views.__alloyId1028 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Western Samoa",
        id: "__alloyId1028"
    });
    $.__views.CountryPicker.add($.__views.__alloyId1028);
    setValue ? $.__views.__alloyId1028.addEventListener("click", setValue) : __defers["$.__views.__alloyId1028!click!setValue"] = true;
    $.__views.__alloyId1029 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Western Samoa",
        id: "__alloyId1029"
    });
    $.__views.__alloyId1028.add($.__views.__alloyId1029);
    $.__views.__alloyId1030 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1030"
    });
    $.__views.__alloyId1028.add($.__views.__alloyId1030);
    $.__views.__alloyId1031 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1031"
    });
    $.__views.__alloyId1028.add($.__views.__alloyId1031);
    $.__views.__alloyId1032 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Yemen",
        id: "__alloyId1032"
    });
    $.__views.CountryPicker.add($.__views.__alloyId1032);
    setValue ? $.__views.__alloyId1032.addEventListener("click", setValue) : __defers["$.__views.__alloyId1032!click!setValue"] = true;
    $.__views.__alloyId1033 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Yemen",
        id: "__alloyId1033"
    });
    $.__views.__alloyId1032.add($.__views.__alloyId1033);
    $.__views.__alloyId1034 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1034"
    });
    $.__views.__alloyId1032.add($.__views.__alloyId1034);
    $.__views.__alloyId1035 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1035"
    });
    $.__views.__alloyId1032.add($.__views.__alloyId1035);
    $.__views.__alloyId1036 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Yemen Arab Rep",
        id: "__alloyId1036"
    });
    $.__views.CountryPicker.add($.__views.__alloyId1036);
    setValue ? $.__views.__alloyId1036.addEventListener("click", setValue) : __defers["$.__views.__alloyId1036!click!setValue"] = true;
    $.__views.__alloyId1037 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Yemen Arab Rep",
        id: "__alloyId1037"
    });
    $.__views.__alloyId1036.add($.__views.__alloyId1037);
    $.__views.__alloyId1038 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1038"
    });
    $.__views.__alloyId1036.add($.__views.__alloyId1038);
    $.__views.__alloyId1039 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1039"
    });
    $.__views.__alloyId1036.add($.__views.__alloyId1039);
    $.__views.__alloyId1040 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Zaire",
        id: "__alloyId1040"
    });
    $.__views.CountryPicker.add($.__views.__alloyId1040);
    setValue ? $.__views.__alloyId1040.addEventListener("click", setValue) : __defers["$.__views.__alloyId1040!click!setValue"] = true;
    $.__views.__alloyId1041 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Zaire",
        id: "__alloyId1041"
    });
    $.__views.__alloyId1040.add($.__views.__alloyId1041);
    $.__views.__alloyId1042 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1042"
    });
    $.__views.__alloyId1040.add($.__views.__alloyId1042);
    $.__views.__alloyId1043 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1043"
    });
    $.__views.__alloyId1040.add($.__views.__alloyId1043);
    $.__views.__alloyId1044 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Zambia  ",
        id: "__alloyId1044"
    });
    $.__views.CountryPicker.add($.__views.__alloyId1044);
    setValue ? $.__views.__alloyId1044.addEventListener("click", setValue) : __defers["$.__views.__alloyId1044!click!setValue"] = true;
    $.__views.__alloyId1045 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Zambia  ",
        id: "__alloyId1045"
    });
    $.__views.__alloyId1044.add($.__views.__alloyId1045);
    $.__views.__alloyId1046 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1046"
    });
    $.__views.__alloyId1044.add($.__views.__alloyId1046);
    $.__views.__alloyId1047 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1047"
    });
    $.__views.__alloyId1044.add($.__views.__alloyId1047);
    $.__views.__alloyId1048 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "Zimbabwe",
        id: "__alloyId1048"
    });
    $.__views.CountryPicker.add($.__views.__alloyId1048);
    setValue ? $.__views.__alloyId1048.addEventListener("click", setValue) : __defers["$.__views.__alloyId1048!click!setValue"] = true;
    $.__views.__alloyId1049 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Zimbabwe",
        id: "__alloyId1049"
    });
    $.__views.__alloyId1048.add($.__views.__alloyId1049);
    $.__views.__alloyId1050 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1050"
    });
    $.__views.__alloyId1048.add($.__views.__alloyId1050);
    $.__views.__alloyId1051 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1051"
    });
    $.__views.__alloyId1048.add($.__views.__alloyId1051);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    __defers["$.__views.__alloyId212!click!setValue"] && $.__views.__alloyId212.addEventListener("click", setValue);
    __defers["$.__views.__alloyId216!click!setValue"] && $.__views.__alloyId216.addEventListener("click", setValue);
    __defers["$.__views.__alloyId220!click!setValue"] && $.__views.__alloyId220.addEventListener("click", setValue);
    __defers["$.__views.__alloyId224!click!setValue"] && $.__views.__alloyId224.addEventListener("click", setValue);
    __defers["$.__views.__alloyId228!click!setValue"] && $.__views.__alloyId228.addEventListener("click", setValue);
    __defers["$.__views.__alloyId232!click!setValue"] && $.__views.__alloyId232.addEventListener("click", setValue);
    __defers["$.__views.__alloyId236!click!setValue"] && $.__views.__alloyId236.addEventListener("click", setValue);
    __defers["$.__views.__alloyId240!click!setValue"] && $.__views.__alloyId240.addEventListener("click", setValue);
    __defers["$.__views.__alloyId244!click!setValue"] && $.__views.__alloyId244.addEventListener("click", setValue);
    __defers["$.__views.__alloyId248!click!setValue"] && $.__views.__alloyId248.addEventListener("click", setValue);
    __defers["$.__views.__alloyId252!click!setValue"] && $.__views.__alloyId252.addEventListener("click", setValue);
    __defers["$.__views.__alloyId256!click!setValue"] && $.__views.__alloyId256.addEventListener("click", setValue);
    __defers["$.__views.__alloyId260!click!setValue"] && $.__views.__alloyId260.addEventListener("click", setValue);
    __defers["$.__views.__alloyId264!click!setValue"] && $.__views.__alloyId264.addEventListener("click", setValue);
    __defers["$.__views.__alloyId268!click!setValue"] && $.__views.__alloyId268.addEventListener("click", setValue);
    __defers["$.__views.__alloyId272!click!setValue"] && $.__views.__alloyId272.addEventListener("click", setValue);
    __defers["$.__views.__alloyId276!click!setValue"] && $.__views.__alloyId276.addEventListener("click", setValue);
    __defers["$.__views.__alloyId280!click!setValue"] && $.__views.__alloyId280.addEventListener("click", setValue);
    __defers["$.__views.__alloyId284!click!setValue"] && $.__views.__alloyId284.addEventListener("click", setValue);
    __defers["$.__views.__alloyId288!click!setValue"] && $.__views.__alloyId288.addEventListener("click", setValue);
    __defers["$.__views.__alloyId292!click!setValue"] && $.__views.__alloyId292.addEventListener("click", setValue);
    __defers["$.__views.__alloyId296!click!setValue"] && $.__views.__alloyId296.addEventListener("click", setValue);
    __defers["$.__views.__alloyId300!click!setValue"] && $.__views.__alloyId300.addEventListener("click", setValue);
    __defers["$.__views.__alloyId304!click!setValue"] && $.__views.__alloyId304.addEventListener("click", setValue);
    __defers["$.__views.__alloyId308!click!setValue"] && $.__views.__alloyId308.addEventListener("click", setValue);
    __defers["$.__views.__alloyId312!click!setValue"] && $.__views.__alloyId312.addEventListener("click", setValue);
    __defers["$.__views.__alloyId316!click!setValue"] && $.__views.__alloyId316.addEventListener("click", setValue);
    __defers["$.__views.__alloyId320!click!setValue"] && $.__views.__alloyId320.addEventListener("click", setValue);
    __defers["$.__views.__alloyId324!click!setValue"] && $.__views.__alloyId324.addEventListener("click", setValue);
    __defers["$.__views.__alloyId328!click!setValue"] && $.__views.__alloyId328.addEventListener("click", setValue);
    __defers["$.__views.__alloyId332!click!setValue"] && $.__views.__alloyId332.addEventListener("click", setValue);
    __defers["$.__views.__alloyId336!click!setValue"] && $.__views.__alloyId336.addEventListener("click", setValue);
    __defers["$.__views.__alloyId340!click!setValue"] && $.__views.__alloyId340.addEventListener("click", setValue);
    __defers["$.__views.__alloyId344!click!setValue"] && $.__views.__alloyId344.addEventListener("click", setValue);
    __defers["$.__views.__alloyId348!click!setValue"] && $.__views.__alloyId348.addEventListener("click", setValue);
    __defers["$.__views.__alloyId352!click!setValue"] && $.__views.__alloyId352.addEventListener("click", setValue);
    __defers["$.__views.__alloyId356!click!setValue"] && $.__views.__alloyId356.addEventListener("click", setValue);
    __defers["$.__views.__alloyId360!click!setValue"] && $.__views.__alloyId360.addEventListener("click", setValue);
    __defers["$.__views.__alloyId364!click!setValue"] && $.__views.__alloyId364.addEventListener("click", setValue);
    __defers["$.__views.__alloyId368!click!setValue"] && $.__views.__alloyId368.addEventListener("click", setValue);
    __defers["$.__views.__alloyId372!click!setValue"] && $.__views.__alloyId372.addEventListener("click", setValue);
    __defers["$.__views.__alloyId376!click!setValue"] && $.__views.__alloyId376.addEventListener("click", setValue);
    __defers["$.__views.__alloyId380!click!setValue"] && $.__views.__alloyId380.addEventListener("click", setValue);
    __defers["$.__views.__alloyId384!click!setValue"] && $.__views.__alloyId384.addEventListener("click", setValue);
    __defers["$.__views.__alloyId388!click!setValue"] && $.__views.__alloyId388.addEventListener("click", setValue);
    __defers["$.__views.__alloyId392!click!setValue"] && $.__views.__alloyId392.addEventListener("click", setValue);
    __defers["$.__views.__alloyId396!click!setValue"] && $.__views.__alloyId396.addEventListener("click", setValue);
    __defers["$.__views.__alloyId400!click!setValue"] && $.__views.__alloyId400.addEventListener("click", setValue);
    __defers["$.__views.__alloyId404!click!setValue"] && $.__views.__alloyId404.addEventListener("click", setValue);
    __defers["$.__views.__alloyId408!click!setValue"] && $.__views.__alloyId408.addEventListener("click", setValue);
    __defers["$.__views.__alloyId412!click!setValue"] && $.__views.__alloyId412.addEventListener("click", setValue);
    __defers["$.__views.__alloyId416!click!setValue"] && $.__views.__alloyId416.addEventListener("click", setValue);
    __defers["$.__views.__alloyId420!click!setValue"] && $.__views.__alloyId420.addEventListener("click", setValue);
    __defers["$.__views.__alloyId424!click!setValue"] && $.__views.__alloyId424.addEventListener("click", setValue);
    __defers["$.__views.__alloyId428!click!setValue"] && $.__views.__alloyId428.addEventListener("click", setValue);
    __defers["$.__views.__alloyId432!click!setValue"] && $.__views.__alloyId432.addEventListener("click", setValue);
    __defers["$.__views.__alloyId436!click!setValue"] && $.__views.__alloyId436.addEventListener("click", setValue);
    __defers["$.__views.__alloyId440!click!setValue"] && $.__views.__alloyId440.addEventListener("click", setValue);
    __defers["$.__views.__alloyId444!click!setValue"] && $.__views.__alloyId444.addEventListener("click", setValue);
    __defers["$.__views.__alloyId448!click!setValue"] && $.__views.__alloyId448.addEventListener("click", setValue);
    __defers["$.__views.__alloyId452!click!setValue"] && $.__views.__alloyId452.addEventListener("click", setValue);
    __defers["$.__views.__alloyId456!click!setValue"] && $.__views.__alloyId456.addEventListener("click", setValue);
    __defers["$.__views.__alloyId460!click!setValue"] && $.__views.__alloyId460.addEventListener("click", setValue);
    __defers["$.__views.__alloyId464!click!setValue"] && $.__views.__alloyId464.addEventListener("click", setValue);
    __defers["$.__views.__alloyId468!click!setValue"] && $.__views.__alloyId468.addEventListener("click", setValue);
    __defers["$.__views.__alloyId472!click!setValue"] && $.__views.__alloyId472.addEventListener("click", setValue);
    __defers["$.__views.__alloyId476!click!setValue"] && $.__views.__alloyId476.addEventListener("click", setValue);
    __defers["$.__views.__alloyId480!click!setValue"] && $.__views.__alloyId480.addEventListener("click", setValue);
    __defers["$.__views.__alloyId484!click!setValue"] && $.__views.__alloyId484.addEventListener("click", setValue);
    __defers["$.__views.__alloyId488!click!setValue"] && $.__views.__alloyId488.addEventListener("click", setValue);
    __defers["$.__views.__alloyId492!click!setValue"] && $.__views.__alloyId492.addEventListener("click", setValue);
    __defers["$.__views.__alloyId496!click!setValue"] && $.__views.__alloyId496.addEventListener("click", setValue);
    __defers["$.__views.__alloyId500!click!setValue"] && $.__views.__alloyId500.addEventListener("click", setValue);
    __defers["$.__views.__alloyId504!click!setValue"] && $.__views.__alloyId504.addEventListener("click", setValue);
    __defers["$.__views.__alloyId508!click!setValue"] && $.__views.__alloyId508.addEventListener("click", setValue);
    __defers["$.__views.__alloyId512!click!setValue"] && $.__views.__alloyId512.addEventListener("click", setValue);
    __defers["$.__views.__alloyId516!click!setValue"] && $.__views.__alloyId516.addEventListener("click", setValue);
    __defers["$.__views.__alloyId520!click!setValue"] && $.__views.__alloyId520.addEventListener("click", setValue);
    __defers["$.__views.__alloyId524!click!setValue"] && $.__views.__alloyId524.addEventListener("click", setValue);
    __defers["$.__views.__alloyId528!click!setValue"] && $.__views.__alloyId528.addEventListener("click", setValue);
    __defers["$.__views.__alloyId532!click!setValue"] && $.__views.__alloyId532.addEventListener("click", setValue);
    __defers["$.__views.__alloyId536!click!setValue"] && $.__views.__alloyId536.addEventListener("click", setValue);
    __defers["$.__views.__alloyId540!click!setValue"] && $.__views.__alloyId540.addEventListener("click", setValue);
    __defers["$.__views.__alloyId544!click!setValue"] && $.__views.__alloyId544.addEventListener("click", setValue);
    __defers["$.__views.__alloyId548!click!setValue"] && $.__views.__alloyId548.addEventListener("click", setValue);
    __defers["$.__views.__alloyId552!click!setValue"] && $.__views.__alloyId552.addEventListener("click", setValue);
    __defers["$.__views.__alloyId556!click!setValue"] && $.__views.__alloyId556.addEventListener("click", setValue);
    __defers["$.__views.__alloyId560!click!setValue"] && $.__views.__alloyId560.addEventListener("click", setValue);
    __defers["$.__views.__alloyId564!click!setValue"] && $.__views.__alloyId564.addEventListener("click", setValue);
    __defers["$.__views.__alloyId568!click!setValue"] && $.__views.__alloyId568.addEventListener("click", setValue);
    __defers["$.__views.__alloyId572!click!setValue"] && $.__views.__alloyId572.addEventListener("click", setValue);
    __defers["$.__views.__alloyId576!click!setValue"] && $.__views.__alloyId576.addEventListener("click", setValue);
    __defers["$.__views.__alloyId580!click!setValue"] && $.__views.__alloyId580.addEventListener("click", setValue);
    __defers["$.__views.__alloyId584!click!setValue"] && $.__views.__alloyId584.addEventListener("click", setValue);
    __defers["$.__views.__alloyId588!click!setValue"] && $.__views.__alloyId588.addEventListener("click", setValue);
    __defers["$.__views.__alloyId592!click!setValue"] && $.__views.__alloyId592.addEventListener("click", setValue);
    __defers["$.__views.__alloyId596!click!setValue"] && $.__views.__alloyId596.addEventListener("click", setValue);
    __defers["$.__views.__alloyId600!click!setValue"] && $.__views.__alloyId600.addEventListener("click", setValue);
    __defers["$.__views.__alloyId604!click!setValue"] && $.__views.__alloyId604.addEventListener("click", setValue);
    __defers["$.__views.__alloyId608!click!setValue"] && $.__views.__alloyId608.addEventListener("click", setValue);
    __defers["$.__views.__alloyId612!click!setValue"] && $.__views.__alloyId612.addEventListener("click", setValue);
    __defers["$.__views.__alloyId616!click!setValue"] && $.__views.__alloyId616.addEventListener("click", setValue);
    __defers["$.__views.__alloyId620!click!setValue"] && $.__views.__alloyId620.addEventListener("click", setValue);
    __defers["$.__views.__alloyId624!click!setValue"] && $.__views.__alloyId624.addEventListener("click", setValue);
    __defers["$.__views.__alloyId628!click!setValue"] && $.__views.__alloyId628.addEventListener("click", setValue);
    __defers["$.__views.__alloyId632!click!setValue"] && $.__views.__alloyId632.addEventListener("click", setValue);
    __defers["$.__views.__alloyId636!click!setValue"] && $.__views.__alloyId636.addEventListener("click", setValue);
    __defers["$.__views.__alloyId640!click!setValue"] && $.__views.__alloyId640.addEventListener("click", setValue);
    __defers["$.__views.__alloyId644!click!setValue"] && $.__views.__alloyId644.addEventListener("click", setValue);
    __defers["$.__views.__alloyId648!click!setValue"] && $.__views.__alloyId648.addEventListener("click", setValue);
    __defers["$.__views.__alloyId652!click!setValue"] && $.__views.__alloyId652.addEventListener("click", setValue);
    __defers["$.__views.__alloyId656!click!setValue"] && $.__views.__alloyId656.addEventListener("click", setValue);
    __defers["$.__views.__alloyId660!click!setValue"] && $.__views.__alloyId660.addEventListener("click", setValue);
    __defers["$.__views.__alloyId664!click!setValue"] && $.__views.__alloyId664.addEventListener("click", setValue);
    __defers["$.__views.__alloyId668!click!setValue"] && $.__views.__alloyId668.addEventListener("click", setValue);
    __defers["$.__views.__alloyId672!click!setValue"] && $.__views.__alloyId672.addEventListener("click", setValue);
    __defers["$.__views.__alloyId676!click!setValue"] && $.__views.__alloyId676.addEventListener("click", setValue);
    __defers["$.__views.__alloyId680!click!setValue"] && $.__views.__alloyId680.addEventListener("click", setValue);
    __defers["$.__views.__alloyId684!click!setValue"] && $.__views.__alloyId684.addEventListener("click", setValue);
    __defers["$.__views.__alloyId688!click!setValue"] && $.__views.__alloyId688.addEventListener("click", setValue);
    __defers["$.__views.__alloyId692!click!setValue"] && $.__views.__alloyId692.addEventListener("click", setValue);
    __defers["$.__views.__alloyId696!click!setValue"] && $.__views.__alloyId696.addEventListener("click", setValue);
    __defers["$.__views.__alloyId700!click!setValue"] && $.__views.__alloyId700.addEventListener("click", setValue);
    __defers["$.__views.__alloyId704!click!setValue"] && $.__views.__alloyId704.addEventListener("click", setValue);
    __defers["$.__views.__alloyId708!click!setValue"] && $.__views.__alloyId708.addEventListener("click", setValue);
    __defers["$.__views.__alloyId712!click!setValue"] && $.__views.__alloyId712.addEventListener("click", setValue);
    __defers["$.__views.__alloyId716!click!setValue"] && $.__views.__alloyId716.addEventListener("click", setValue);
    __defers["$.__views.__alloyId720!click!setValue"] && $.__views.__alloyId720.addEventListener("click", setValue);
    __defers["$.__views.__alloyId724!click!setValue"] && $.__views.__alloyId724.addEventListener("click", setValue);
    __defers["$.__views.__alloyId728!click!setValue"] && $.__views.__alloyId728.addEventListener("click", setValue);
    __defers["$.__views.__alloyId732!click!setValue"] && $.__views.__alloyId732.addEventListener("click", setValue);
    __defers["$.__views.__alloyId736!click!setValue"] && $.__views.__alloyId736.addEventListener("click", setValue);
    __defers["$.__views.__alloyId740!click!setValue"] && $.__views.__alloyId740.addEventListener("click", setValue);
    __defers["$.__views.__alloyId744!click!setValue"] && $.__views.__alloyId744.addEventListener("click", setValue);
    __defers["$.__views.__alloyId748!click!setValue"] && $.__views.__alloyId748.addEventListener("click", setValue);
    __defers["$.__views.__alloyId752!click!setValue"] && $.__views.__alloyId752.addEventListener("click", setValue);
    __defers["$.__views.__alloyId756!click!setValue"] && $.__views.__alloyId756.addEventListener("click", setValue);
    __defers["$.__views.__alloyId760!click!setValue"] && $.__views.__alloyId760.addEventListener("click", setValue);
    __defers["$.__views.__alloyId764!click!setValue"] && $.__views.__alloyId764.addEventListener("click", setValue);
    __defers["$.__views.__alloyId768!click!setValue"] && $.__views.__alloyId768.addEventListener("click", setValue);
    __defers["$.__views.__alloyId772!click!setValue"] && $.__views.__alloyId772.addEventListener("click", setValue);
    __defers["$.__views.__alloyId776!click!setValue"] && $.__views.__alloyId776.addEventListener("click", setValue);
    __defers["$.__views.__alloyId780!click!setValue"] && $.__views.__alloyId780.addEventListener("click", setValue);
    __defers["$.__views.__alloyId784!click!setValue"] && $.__views.__alloyId784.addEventListener("click", setValue);
    __defers["$.__views.__alloyId788!click!setValue"] && $.__views.__alloyId788.addEventListener("click", setValue);
    __defers["$.__views.__alloyId792!click!setValue"] && $.__views.__alloyId792.addEventListener("click", setValue);
    __defers["$.__views.__alloyId796!click!setValue"] && $.__views.__alloyId796.addEventListener("click", setValue);
    __defers["$.__views.__alloyId800!click!setValue"] && $.__views.__alloyId800.addEventListener("click", setValue);
    __defers["$.__views.__alloyId804!click!setValue"] && $.__views.__alloyId804.addEventListener("click", setValue);
    __defers["$.__views.__alloyId808!click!setValue"] && $.__views.__alloyId808.addEventListener("click", setValue);
    __defers["$.__views.__alloyId812!click!setValue"] && $.__views.__alloyId812.addEventListener("click", setValue);
    __defers["$.__views.__alloyId816!click!setValue"] && $.__views.__alloyId816.addEventListener("click", setValue);
    __defers["$.__views.__alloyId820!click!setValue"] && $.__views.__alloyId820.addEventListener("click", setValue);
    __defers["$.__views.__alloyId824!click!setValue"] && $.__views.__alloyId824.addEventListener("click", setValue);
    __defers["$.__views.__alloyId828!click!setValue"] && $.__views.__alloyId828.addEventListener("click", setValue);
    __defers["$.__views.__alloyId832!click!setValue"] && $.__views.__alloyId832.addEventListener("click", setValue);
    __defers["$.__views.__alloyId836!click!setValue"] && $.__views.__alloyId836.addEventListener("click", setValue);
    __defers["$.__views.__alloyId840!click!setValue"] && $.__views.__alloyId840.addEventListener("click", setValue);
    __defers["$.__views.__alloyId844!click!setValue"] && $.__views.__alloyId844.addEventListener("click", setValue);
    __defers["$.__views.__alloyId848!click!setValue"] && $.__views.__alloyId848.addEventListener("click", setValue);
    __defers["$.__views.__alloyId852!click!setValue"] && $.__views.__alloyId852.addEventListener("click", setValue);
    __defers["$.__views.__alloyId856!click!setValue"] && $.__views.__alloyId856.addEventListener("click", setValue);
    __defers["$.__views.__alloyId860!click!setValue"] && $.__views.__alloyId860.addEventListener("click", setValue);
    __defers["$.__views.__alloyId864!click!setValue"] && $.__views.__alloyId864.addEventListener("click", setValue);
    __defers["$.__views.__alloyId868!click!setValue"] && $.__views.__alloyId868.addEventListener("click", setValue);
    __defers["$.__views.__alloyId872!click!setValue"] && $.__views.__alloyId872.addEventListener("click", setValue);
    __defers["$.__views.__alloyId876!click!setValue"] && $.__views.__alloyId876.addEventListener("click", setValue);
    __defers["$.__views.__alloyId880!click!setValue"] && $.__views.__alloyId880.addEventListener("click", setValue);
    __defers["$.__views.__alloyId884!click!setValue"] && $.__views.__alloyId884.addEventListener("click", setValue);
    __defers["$.__views.__alloyId888!click!setValue"] && $.__views.__alloyId888.addEventListener("click", setValue);
    __defers["$.__views.__alloyId892!click!setValue"] && $.__views.__alloyId892.addEventListener("click", setValue);
    __defers["$.__views.__alloyId896!click!setValue"] && $.__views.__alloyId896.addEventListener("click", setValue);
    __defers["$.__views.__alloyId900!click!setValue"] && $.__views.__alloyId900.addEventListener("click", setValue);
    __defers["$.__views.__alloyId904!click!setValue"] && $.__views.__alloyId904.addEventListener("click", setValue);
    __defers["$.__views.__alloyId908!click!setValue"] && $.__views.__alloyId908.addEventListener("click", setValue);
    __defers["$.__views.__alloyId912!click!setValue"] && $.__views.__alloyId912.addEventListener("click", setValue);
    __defers["$.__views.__alloyId916!click!setValue"] && $.__views.__alloyId916.addEventListener("click", setValue);
    __defers["$.__views.__alloyId920!click!setValue"] && $.__views.__alloyId920.addEventListener("click", setValue);
    __defers["$.__views.__alloyId924!click!setValue"] && $.__views.__alloyId924.addEventListener("click", setValue);
    __defers["$.__views.__alloyId928!click!setValue"] && $.__views.__alloyId928.addEventListener("click", setValue);
    __defers["$.__views.__alloyId932!click!setValue"] && $.__views.__alloyId932.addEventListener("click", setValue);
    __defers["$.__views.__alloyId936!click!setValue"] && $.__views.__alloyId936.addEventListener("click", setValue);
    __defers["$.__views.__alloyId940!click!setValue"] && $.__views.__alloyId940.addEventListener("click", setValue);
    __defers["$.__views.__alloyId944!click!setValue"] && $.__views.__alloyId944.addEventListener("click", setValue);
    __defers["$.__views.__alloyId948!click!setValue"] && $.__views.__alloyId948.addEventListener("click", setValue);
    __defers["$.__views.__alloyId952!click!setValue"] && $.__views.__alloyId952.addEventListener("click", setValue);
    __defers["$.__views.__alloyId956!click!setValue"] && $.__views.__alloyId956.addEventListener("click", setValue);
    __defers["$.__views.__alloyId960!click!setValue"] && $.__views.__alloyId960.addEventListener("click", setValue);
    __defers["$.__views.__alloyId964!click!setValue"] && $.__views.__alloyId964.addEventListener("click", setValue);
    __defers["$.__views.__alloyId968!click!setValue"] && $.__views.__alloyId968.addEventListener("click", setValue);
    __defers["$.__views.__alloyId972!click!setValue"] && $.__views.__alloyId972.addEventListener("click", setValue);
    __defers["$.__views.__alloyId976!click!setValue"] && $.__views.__alloyId976.addEventListener("click", setValue);
    __defers["$.__views.__alloyId980!click!setValue"] && $.__views.__alloyId980.addEventListener("click", setValue);
    __defers["$.__views.__alloyId984!click!setValue"] && $.__views.__alloyId984.addEventListener("click", setValue);
    __defers["$.__views.__alloyId988!click!setValue"] && $.__views.__alloyId988.addEventListener("click", setValue);
    __defers["$.__views.__alloyId992!click!setValue"] && $.__views.__alloyId992.addEventListener("click", setValue);
    __defers["$.__views.__alloyId996!click!setValue"] && $.__views.__alloyId996.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1000!click!setValue"] && $.__views.__alloyId1000.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1004!click!setValue"] && $.__views.__alloyId1004.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1008!click!setValue"] && $.__views.__alloyId1008.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1012!click!setValue"] && $.__views.__alloyId1012.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1016!click!setValue"] && $.__views.__alloyId1016.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1020!click!setValue"] && $.__views.__alloyId1020.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1024!click!setValue"] && $.__views.__alloyId1024.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1028!click!setValue"] && $.__views.__alloyId1028.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1032!click!setValue"] && $.__views.__alloyId1032.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1036!click!setValue"] && $.__views.__alloyId1036.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1040!click!setValue"] && $.__views.__alloyId1040.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1044!click!setValue"] && $.__views.__alloyId1044.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1048!click!setValue"] && $.__views.__alloyId1048.addEventListener("click", setValue);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;