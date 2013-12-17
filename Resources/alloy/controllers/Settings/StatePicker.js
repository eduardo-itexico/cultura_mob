function Controller() {
    function setValue() {
        args.params.callback && args.params.callback({
            value: L(String(this.value))
        });
        APP.popOut();
        return true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Settings/StatePicker";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.StatePicker = Ti.UI.createScrollView({
        backgroundColor: "#ecf1f4",
        layout: "vertical",
        scrollType: "vertical",
        id: "StatePicker"
    });
    $.__views.StatePicker && $.addTopLevelView($.__views.StatePicker);
    $.__views.__alloyId1209 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "AL",
        id: "__alloyId1209"
    });
    $.__views.StatePicker.add($.__views.__alloyId1209);
    setValue ? $.__views.__alloyId1209.addEventListener("click", setValue) : __defers["$.__views.__alloyId1209!click!setValue"] = true;
    $.__views.__alloyId1210 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Alabama",
        id: "__alloyId1210"
    });
    $.__views.__alloyId1209.add($.__views.__alloyId1210);
    $.__views.__alloyId1211 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1211"
    });
    $.__views.__alloyId1209.add($.__views.__alloyId1211);
    $.__views.__alloyId1212 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1212"
    });
    $.__views.__alloyId1209.add($.__views.__alloyId1212);
    $.__views.__alloyId1213 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "AK",
        id: "__alloyId1213"
    });
    $.__views.StatePicker.add($.__views.__alloyId1213);
    setValue ? $.__views.__alloyId1213.addEventListener("click", setValue) : __defers["$.__views.__alloyId1213!click!setValue"] = true;
    $.__views.__alloyId1214 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Alaska",
        id: "__alloyId1214"
    });
    $.__views.__alloyId1213.add($.__views.__alloyId1214);
    $.__views.__alloyId1215 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1215"
    });
    $.__views.__alloyId1213.add($.__views.__alloyId1215);
    $.__views.__alloyId1216 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1216"
    });
    $.__views.__alloyId1213.add($.__views.__alloyId1216);
    $.__views.__alloyId1217 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "AZ",
        id: "__alloyId1217"
    });
    $.__views.StatePicker.add($.__views.__alloyId1217);
    setValue ? $.__views.__alloyId1217.addEventListener("click", setValue) : __defers["$.__views.__alloyId1217!click!setValue"] = true;
    $.__views.__alloyId1218 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Arizona",
        id: "__alloyId1218"
    });
    $.__views.__alloyId1217.add($.__views.__alloyId1218);
    $.__views.__alloyId1219 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1219"
    });
    $.__views.__alloyId1217.add($.__views.__alloyId1219);
    $.__views.__alloyId1220 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1220"
    });
    $.__views.__alloyId1217.add($.__views.__alloyId1220);
    $.__views.__alloyId1221 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "AR",
        id: "__alloyId1221"
    });
    $.__views.StatePicker.add($.__views.__alloyId1221);
    setValue ? $.__views.__alloyId1221.addEventListener("click", setValue) : __defers["$.__views.__alloyId1221!click!setValue"] = true;
    $.__views.__alloyId1222 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Arkansas",
        id: "__alloyId1222"
    });
    $.__views.__alloyId1221.add($.__views.__alloyId1222);
    $.__views.__alloyId1223 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1223"
    });
    $.__views.__alloyId1221.add($.__views.__alloyId1223);
    $.__views.__alloyId1224 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1224"
    });
    $.__views.__alloyId1221.add($.__views.__alloyId1224);
    $.__views.__alloyId1225 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "CA",
        id: "__alloyId1225"
    });
    $.__views.StatePicker.add($.__views.__alloyId1225);
    setValue ? $.__views.__alloyId1225.addEventListener("click", setValue) : __defers["$.__views.__alloyId1225!click!setValue"] = true;
    $.__views.__alloyId1226 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "California",
        id: "__alloyId1226"
    });
    $.__views.__alloyId1225.add($.__views.__alloyId1226);
    $.__views.__alloyId1227 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1227"
    });
    $.__views.__alloyId1225.add($.__views.__alloyId1227);
    $.__views.__alloyId1228 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1228"
    });
    $.__views.__alloyId1225.add($.__views.__alloyId1228);
    $.__views.__alloyId1229 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "CO",
        id: "__alloyId1229"
    });
    $.__views.StatePicker.add($.__views.__alloyId1229);
    setValue ? $.__views.__alloyId1229.addEventListener("click", setValue) : __defers["$.__views.__alloyId1229!click!setValue"] = true;
    $.__views.__alloyId1230 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Colorado",
        id: "__alloyId1230"
    });
    $.__views.__alloyId1229.add($.__views.__alloyId1230);
    $.__views.__alloyId1231 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1231"
    });
    $.__views.__alloyId1229.add($.__views.__alloyId1231);
    $.__views.__alloyId1232 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1232"
    });
    $.__views.__alloyId1229.add($.__views.__alloyId1232);
    $.__views.__alloyId1233 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "CT",
        id: "__alloyId1233"
    });
    $.__views.StatePicker.add($.__views.__alloyId1233);
    setValue ? $.__views.__alloyId1233.addEventListener("click", setValue) : __defers["$.__views.__alloyId1233!click!setValue"] = true;
    $.__views.__alloyId1234 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Connecticut",
        id: "__alloyId1234"
    });
    $.__views.__alloyId1233.add($.__views.__alloyId1234);
    $.__views.__alloyId1235 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1235"
    });
    $.__views.__alloyId1233.add($.__views.__alloyId1235);
    $.__views.__alloyId1236 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1236"
    });
    $.__views.__alloyId1233.add($.__views.__alloyId1236);
    $.__views.__alloyId1237 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "DE",
        id: "__alloyId1237"
    });
    $.__views.StatePicker.add($.__views.__alloyId1237);
    setValue ? $.__views.__alloyId1237.addEventListener("click", setValue) : __defers["$.__views.__alloyId1237!click!setValue"] = true;
    $.__views.__alloyId1238 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Delaware",
        id: "__alloyId1238"
    });
    $.__views.__alloyId1237.add($.__views.__alloyId1238);
    $.__views.__alloyId1239 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1239"
    });
    $.__views.__alloyId1237.add($.__views.__alloyId1239);
    $.__views.__alloyId1240 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1240"
    });
    $.__views.__alloyId1237.add($.__views.__alloyId1240);
    $.__views.__alloyId1241 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "DC",
        id: "__alloyId1241"
    });
    $.__views.StatePicker.add($.__views.__alloyId1241);
    setValue ? $.__views.__alloyId1241.addEventListener("click", setValue) : __defers["$.__views.__alloyId1241!click!setValue"] = true;
    $.__views.__alloyId1242 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "District of Columbia",
        id: "__alloyId1242"
    });
    $.__views.__alloyId1241.add($.__views.__alloyId1242);
    $.__views.__alloyId1243 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1243"
    });
    $.__views.__alloyId1241.add($.__views.__alloyId1243);
    $.__views.__alloyId1244 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1244"
    });
    $.__views.__alloyId1241.add($.__views.__alloyId1244);
    $.__views.__alloyId1245 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "FL",
        id: "__alloyId1245"
    });
    $.__views.StatePicker.add($.__views.__alloyId1245);
    setValue ? $.__views.__alloyId1245.addEventListener("click", setValue) : __defers["$.__views.__alloyId1245!click!setValue"] = true;
    $.__views.__alloyId1246 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Florida",
        id: "__alloyId1246"
    });
    $.__views.__alloyId1245.add($.__views.__alloyId1246);
    $.__views.__alloyId1247 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1247"
    });
    $.__views.__alloyId1245.add($.__views.__alloyId1247);
    $.__views.__alloyId1248 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1248"
    });
    $.__views.__alloyId1245.add($.__views.__alloyId1248);
    $.__views.__alloyId1249 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "GA",
        id: "__alloyId1249"
    });
    $.__views.StatePicker.add($.__views.__alloyId1249);
    setValue ? $.__views.__alloyId1249.addEventListener("click", setValue) : __defers["$.__views.__alloyId1249!click!setValue"] = true;
    $.__views.__alloyId1250 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Georgia",
        id: "__alloyId1250"
    });
    $.__views.__alloyId1249.add($.__views.__alloyId1250);
    $.__views.__alloyId1251 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1251"
    });
    $.__views.__alloyId1249.add($.__views.__alloyId1251);
    $.__views.__alloyId1252 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1252"
    });
    $.__views.__alloyId1249.add($.__views.__alloyId1252);
    $.__views.__alloyId1253 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "HI",
        id: "__alloyId1253"
    });
    $.__views.StatePicker.add($.__views.__alloyId1253);
    setValue ? $.__views.__alloyId1253.addEventListener("click", setValue) : __defers["$.__views.__alloyId1253!click!setValue"] = true;
    $.__views.__alloyId1254 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Hawaii",
        id: "__alloyId1254"
    });
    $.__views.__alloyId1253.add($.__views.__alloyId1254);
    $.__views.__alloyId1255 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1255"
    });
    $.__views.__alloyId1253.add($.__views.__alloyId1255);
    $.__views.__alloyId1256 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1256"
    });
    $.__views.__alloyId1253.add($.__views.__alloyId1256);
    $.__views.__alloyId1257 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "ID",
        id: "__alloyId1257"
    });
    $.__views.StatePicker.add($.__views.__alloyId1257);
    setValue ? $.__views.__alloyId1257.addEventListener("click", setValue) : __defers["$.__views.__alloyId1257!click!setValue"] = true;
    $.__views.__alloyId1258 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Idaho",
        id: "__alloyId1258"
    });
    $.__views.__alloyId1257.add($.__views.__alloyId1258);
    $.__views.__alloyId1259 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1259"
    });
    $.__views.__alloyId1257.add($.__views.__alloyId1259);
    $.__views.__alloyId1260 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1260"
    });
    $.__views.__alloyId1257.add($.__views.__alloyId1260);
    $.__views.__alloyId1261 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "IL",
        id: "__alloyId1261"
    });
    $.__views.StatePicker.add($.__views.__alloyId1261);
    setValue ? $.__views.__alloyId1261.addEventListener("click", setValue) : __defers["$.__views.__alloyId1261!click!setValue"] = true;
    $.__views.__alloyId1262 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Illinois",
        id: "__alloyId1262"
    });
    $.__views.__alloyId1261.add($.__views.__alloyId1262);
    $.__views.__alloyId1263 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1263"
    });
    $.__views.__alloyId1261.add($.__views.__alloyId1263);
    $.__views.__alloyId1264 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1264"
    });
    $.__views.__alloyId1261.add($.__views.__alloyId1264);
    $.__views.__alloyId1265 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "IN",
        id: "__alloyId1265"
    });
    $.__views.StatePicker.add($.__views.__alloyId1265);
    setValue ? $.__views.__alloyId1265.addEventListener("click", setValue) : __defers["$.__views.__alloyId1265!click!setValue"] = true;
    $.__views.__alloyId1266 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Indiana",
        id: "__alloyId1266"
    });
    $.__views.__alloyId1265.add($.__views.__alloyId1266);
    $.__views.__alloyId1267 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1267"
    });
    $.__views.__alloyId1265.add($.__views.__alloyId1267);
    $.__views.__alloyId1268 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1268"
    });
    $.__views.__alloyId1265.add($.__views.__alloyId1268);
    $.__views.__alloyId1269 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "IA",
        id: "__alloyId1269"
    });
    $.__views.StatePicker.add($.__views.__alloyId1269);
    setValue ? $.__views.__alloyId1269.addEventListener("click", setValue) : __defers["$.__views.__alloyId1269!click!setValue"] = true;
    $.__views.__alloyId1270 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Iowa",
        id: "__alloyId1270"
    });
    $.__views.__alloyId1269.add($.__views.__alloyId1270);
    $.__views.__alloyId1271 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1271"
    });
    $.__views.__alloyId1269.add($.__views.__alloyId1271);
    $.__views.__alloyId1272 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1272"
    });
    $.__views.__alloyId1269.add($.__views.__alloyId1272);
    $.__views.__alloyId1273 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "KS",
        id: "__alloyId1273"
    });
    $.__views.StatePicker.add($.__views.__alloyId1273);
    setValue ? $.__views.__alloyId1273.addEventListener("click", setValue) : __defers["$.__views.__alloyId1273!click!setValue"] = true;
    $.__views.__alloyId1274 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Kansas",
        id: "__alloyId1274"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1274);
    $.__views.__alloyId1275 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1275"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1275);
    $.__views.__alloyId1276 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1276"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1276);
    $.__views.__alloyId1277 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "KY",
        id: "__alloyId1277"
    });
    $.__views.StatePicker.add($.__views.__alloyId1277);
    setValue ? $.__views.__alloyId1277.addEventListener("click", setValue) : __defers["$.__views.__alloyId1277!click!setValue"] = true;
    $.__views.__alloyId1278 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Kentucky",
        id: "__alloyId1278"
    });
    $.__views.__alloyId1277.add($.__views.__alloyId1278);
    $.__views.__alloyId1279 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1279"
    });
    $.__views.__alloyId1277.add($.__views.__alloyId1279);
    $.__views.__alloyId1280 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1280"
    });
    $.__views.__alloyId1277.add($.__views.__alloyId1280);
    $.__views.__alloyId1281 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "LA",
        id: "__alloyId1281"
    });
    $.__views.StatePicker.add($.__views.__alloyId1281);
    setValue ? $.__views.__alloyId1281.addEventListener("click", setValue) : __defers["$.__views.__alloyId1281!click!setValue"] = true;
    $.__views.__alloyId1282 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Louisiana",
        id: "__alloyId1282"
    });
    $.__views.__alloyId1281.add($.__views.__alloyId1282);
    $.__views.__alloyId1283 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1283"
    });
    $.__views.__alloyId1281.add($.__views.__alloyId1283);
    $.__views.__alloyId1284 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1284"
    });
    $.__views.__alloyId1281.add($.__views.__alloyId1284);
    $.__views.__alloyId1285 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "ME",
        id: "__alloyId1285"
    });
    $.__views.StatePicker.add($.__views.__alloyId1285);
    setValue ? $.__views.__alloyId1285.addEventListener("click", setValue) : __defers["$.__views.__alloyId1285!click!setValue"] = true;
    $.__views.__alloyId1286 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Maine",
        id: "__alloyId1286"
    });
    $.__views.__alloyId1285.add($.__views.__alloyId1286);
    $.__views.__alloyId1287 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1287"
    });
    $.__views.__alloyId1285.add($.__views.__alloyId1287);
    $.__views.__alloyId1288 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1288"
    });
    $.__views.__alloyId1285.add($.__views.__alloyId1288);
    $.__views.__alloyId1289 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "MD",
        id: "__alloyId1289"
    });
    $.__views.StatePicker.add($.__views.__alloyId1289);
    setValue ? $.__views.__alloyId1289.addEventListener("click", setValue) : __defers["$.__views.__alloyId1289!click!setValue"] = true;
    $.__views.__alloyId1290 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Maryland",
        id: "__alloyId1290"
    });
    $.__views.__alloyId1289.add($.__views.__alloyId1290);
    $.__views.__alloyId1291 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1291"
    });
    $.__views.__alloyId1289.add($.__views.__alloyId1291);
    $.__views.__alloyId1292 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1292"
    });
    $.__views.__alloyId1289.add($.__views.__alloyId1292);
    $.__views.__alloyId1293 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "MA",
        id: "__alloyId1293"
    });
    $.__views.StatePicker.add($.__views.__alloyId1293);
    setValue ? $.__views.__alloyId1293.addEventListener("click", setValue) : __defers["$.__views.__alloyId1293!click!setValue"] = true;
    $.__views.__alloyId1294 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Massachusetts",
        id: "__alloyId1294"
    });
    $.__views.__alloyId1293.add($.__views.__alloyId1294);
    $.__views.__alloyId1295 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1295"
    });
    $.__views.__alloyId1293.add($.__views.__alloyId1295);
    $.__views.__alloyId1296 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1296"
    });
    $.__views.__alloyId1293.add($.__views.__alloyId1296);
    $.__views.__alloyId1297 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "MI",
        id: "__alloyId1297"
    });
    $.__views.StatePicker.add($.__views.__alloyId1297);
    setValue ? $.__views.__alloyId1297.addEventListener("click", setValue) : __defers["$.__views.__alloyId1297!click!setValue"] = true;
    $.__views.__alloyId1298 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Michigan",
        id: "__alloyId1298"
    });
    $.__views.__alloyId1297.add($.__views.__alloyId1298);
    $.__views.__alloyId1299 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1299"
    });
    $.__views.__alloyId1297.add($.__views.__alloyId1299);
    $.__views.__alloyId1300 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1300"
    });
    $.__views.__alloyId1297.add($.__views.__alloyId1300);
    $.__views.__alloyId1301 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "MN",
        id: "__alloyId1301"
    });
    $.__views.StatePicker.add($.__views.__alloyId1301);
    setValue ? $.__views.__alloyId1301.addEventListener("click", setValue) : __defers["$.__views.__alloyId1301!click!setValue"] = true;
    $.__views.__alloyId1302 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Minnesota",
        id: "__alloyId1302"
    });
    $.__views.__alloyId1301.add($.__views.__alloyId1302);
    $.__views.__alloyId1303 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1303"
    });
    $.__views.__alloyId1301.add($.__views.__alloyId1303);
    $.__views.__alloyId1304 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1304"
    });
    $.__views.__alloyId1301.add($.__views.__alloyId1304);
    $.__views.__alloyId1305 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "MS",
        id: "__alloyId1305"
    });
    $.__views.StatePicker.add($.__views.__alloyId1305);
    setValue ? $.__views.__alloyId1305.addEventListener("click", setValue) : __defers["$.__views.__alloyId1305!click!setValue"] = true;
    $.__views.__alloyId1306 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Mississippi",
        id: "__alloyId1306"
    });
    $.__views.__alloyId1305.add($.__views.__alloyId1306);
    $.__views.__alloyId1307 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1307"
    });
    $.__views.__alloyId1305.add($.__views.__alloyId1307);
    $.__views.__alloyId1308 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1308"
    });
    $.__views.__alloyId1305.add($.__views.__alloyId1308);
    $.__views.__alloyId1309 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "MO",
        id: "__alloyId1309"
    });
    $.__views.StatePicker.add($.__views.__alloyId1309);
    setValue ? $.__views.__alloyId1309.addEventListener("click", setValue) : __defers["$.__views.__alloyId1309!click!setValue"] = true;
    $.__views.__alloyId1310 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Missouri",
        id: "__alloyId1310"
    });
    $.__views.__alloyId1309.add($.__views.__alloyId1310);
    $.__views.__alloyId1311 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1311"
    });
    $.__views.__alloyId1309.add($.__views.__alloyId1311);
    $.__views.__alloyId1312 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1312"
    });
    $.__views.__alloyId1309.add($.__views.__alloyId1312);
    $.__views.__alloyId1313 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "MT",
        id: "__alloyId1313"
    });
    $.__views.StatePicker.add($.__views.__alloyId1313);
    setValue ? $.__views.__alloyId1313.addEventListener("click", setValue) : __defers["$.__views.__alloyId1313!click!setValue"] = true;
    $.__views.__alloyId1314 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Montana",
        id: "__alloyId1314"
    });
    $.__views.__alloyId1313.add($.__views.__alloyId1314);
    $.__views.__alloyId1315 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1315"
    });
    $.__views.__alloyId1313.add($.__views.__alloyId1315);
    $.__views.__alloyId1316 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1316"
    });
    $.__views.__alloyId1313.add($.__views.__alloyId1316);
    $.__views.__alloyId1317 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "NE",
        id: "__alloyId1317"
    });
    $.__views.StatePicker.add($.__views.__alloyId1317);
    setValue ? $.__views.__alloyId1317.addEventListener("click", setValue) : __defers["$.__views.__alloyId1317!click!setValue"] = true;
    $.__views.__alloyId1318 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Nebraska",
        id: "__alloyId1318"
    });
    $.__views.__alloyId1317.add($.__views.__alloyId1318);
    $.__views.__alloyId1319 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1319"
    });
    $.__views.__alloyId1317.add($.__views.__alloyId1319);
    $.__views.__alloyId1320 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1320"
    });
    $.__views.__alloyId1317.add($.__views.__alloyId1320);
    $.__views.__alloyId1321 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "NV",
        id: "__alloyId1321"
    });
    $.__views.StatePicker.add($.__views.__alloyId1321);
    setValue ? $.__views.__alloyId1321.addEventListener("click", setValue) : __defers["$.__views.__alloyId1321!click!setValue"] = true;
    $.__views.__alloyId1322 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Nevada",
        id: "__alloyId1322"
    });
    $.__views.__alloyId1321.add($.__views.__alloyId1322);
    $.__views.__alloyId1323 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1323"
    });
    $.__views.__alloyId1321.add($.__views.__alloyId1323);
    $.__views.__alloyId1324 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1324"
    });
    $.__views.__alloyId1321.add($.__views.__alloyId1324);
    $.__views.__alloyId1325 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "NH",
        id: "__alloyId1325"
    });
    $.__views.StatePicker.add($.__views.__alloyId1325);
    setValue ? $.__views.__alloyId1325.addEventListener("click", setValue) : __defers["$.__views.__alloyId1325!click!setValue"] = true;
    $.__views.__alloyId1326 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "New Hampshire",
        id: "__alloyId1326"
    });
    $.__views.__alloyId1325.add($.__views.__alloyId1326);
    $.__views.__alloyId1327 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1327"
    });
    $.__views.__alloyId1325.add($.__views.__alloyId1327);
    $.__views.__alloyId1328 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1328"
    });
    $.__views.__alloyId1325.add($.__views.__alloyId1328);
    $.__views.__alloyId1329 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "NJ",
        id: "__alloyId1329"
    });
    $.__views.StatePicker.add($.__views.__alloyId1329);
    setValue ? $.__views.__alloyId1329.addEventListener("click", setValue) : __defers["$.__views.__alloyId1329!click!setValue"] = true;
    $.__views.__alloyId1330 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "New Jersey",
        id: "__alloyId1330"
    });
    $.__views.__alloyId1329.add($.__views.__alloyId1330);
    $.__views.__alloyId1331 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1331"
    });
    $.__views.__alloyId1329.add($.__views.__alloyId1331);
    $.__views.__alloyId1332 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1332"
    });
    $.__views.__alloyId1329.add($.__views.__alloyId1332);
    $.__views.__alloyId1333 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "NM",
        id: "__alloyId1333"
    });
    $.__views.StatePicker.add($.__views.__alloyId1333);
    setValue ? $.__views.__alloyId1333.addEventListener("click", setValue) : __defers["$.__views.__alloyId1333!click!setValue"] = true;
    $.__views.__alloyId1334 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "New Mexico",
        id: "__alloyId1334"
    });
    $.__views.__alloyId1333.add($.__views.__alloyId1334);
    $.__views.__alloyId1335 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1335"
    });
    $.__views.__alloyId1333.add($.__views.__alloyId1335);
    $.__views.__alloyId1336 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1336"
    });
    $.__views.__alloyId1333.add($.__views.__alloyId1336);
    $.__views.__alloyId1337 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "NY",
        id: "__alloyId1337"
    });
    $.__views.StatePicker.add($.__views.__alloyId1337);
    setValue ? $.__views.__alloyId1337.addEventListener("click", setValue) : __defers["$.__views.__alloyId1337!click!setValue"] = true;
    $.__views.__alloyId1338 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "New York",
        id: "__alloyId1338"
    });
    $.__views.__alloyId1337.add($.__views.__alloyId1338);
    $.__views.__alloyId1339 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1339"
    });
    $.__views.__alloyId1337.add($.__views.__alloyId1339);
    $.__views.__alloyId1340 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1340"
    });
    $.__views.__alloyId1337.add($.__views.__alloyId1340);
    $.__views.__alloyId1341 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "NC",
        id: "__alloyId1341"
    });
    $.__views.StatePicker.add($.__views.__alloyId1341);
    setValue ? $.__views.__alloyId1341.addEventListener("click", setValue) : __defers["$.__views.__alloyId1341!click!setValue"] = true;
    $.__views.__alloyId1342 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "North Carolina",
        id: "__alloyId1342"
    });
    $.__views.__alloyId1341.add($.__views.__alloyId1342);
    $.__views.__alloyId1343 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1343"
    });
    $.__views.__alloyId1341.add($.__views.__alloyId1343);
    $.__views.__alloyId1344 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1344"
    });
    $.__views.__alloyId1341.add($.__views.__alloyId1344);
    $.__views.__alloyId1345 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "ND",
        id: "__alloyId1345"
    });
    $.__views.StatePicker.add($.__views.__alloyId1345);
    setValue ? $.__views.__alloyId1345.addEventListener("click", setValue) : __defers["$.__views.__alloyId1345!click!setValue"] = true;
    $.__views.__alloyId1346 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "North Dakota",
        id: "__alloyId1346"
    });
    $.__views.__alloyId1345.add($.__views.__alloyId1346);
    $.__views.__alloyId1347 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1347"
    });
    $.__views.__alloyId1345.add($.__views.__alloyId1347);
    $.__views.__alloyId1348 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1348"
    });
    $.__views.__alloyId1345.add($.__views.__alloyId1348);
    $.__views.__alloyId1349 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "OH",
        id: "__alloyId1349"
    });
    $.__views.StatePicker.add($.__views.__alloyId1349);
    setValue ? $.__views.__alloyId1349.addEventListener("click", setValue) : __defers["$.__views.__alloyId1349!click!setValue"] = true;
    $.__views.__alloyId1350 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Ohio",
        id: "__alloyId1350"
    });
    $.__views.__alloyId1349.add($.__views.__alloyId1350);
    $.__views.__alloyId1351 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1351"
    });
    $.__views.__alloyId1349.add($.__views.__alloyId1351);
    $.__views.__alloyId1352 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1352"
    });
    $.__views.__alloyId1349.add($.__views.__alloyId1352);
    $.__views.__alloyId1353 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "OK",
        id: "__alloyId1353"
    });
    $.__views.StatePicker.add($.__views.__alloyId1353);
    setValue ? $.__views.__alloyId1353.addEventListener("click", setValue) : __defers["$.__views.__alloyId1353!click!setValue"] = true;
    $.__views.__alloyId1354 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Oklahoma",
        id: "__alloyId1354"
    });
    $.__views.__alloyId1353.add($.__views.__alloyId1354);
    $.__views.__alloyId1355 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1355"
    });
    $.__views.__alloyId1353.add($.__views.__alloyId1355);
    $.__views.__alloyId1356 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1356"
    });
    $.__views.__alloyId1353.add($.__views.__alloyId1356);
    $.__views.__alloyId1357 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "OR",
        id: "__alloyId1357"
    });
    $.__views.StatePicker.add($.__views.__alloyId1357);
    setValue ? $.__views.__alloyId1357.addEventListener("click", setValue) : __defers["$.__views.__alloyId1357!click!setValue"] = true;
    $.__views.__alloyId1358 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Oregon",
        id: "__alloyId1358"
    });
    $.__views.__alloyId1357.add($.__views.__alloyId1358);
    $.__views.__alloyId1359 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1359"
    });
    $.__views.__alloyId1357.add($.__views.__alloyId1359);
    $.__views.__alloyId1360 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1360"
    });
    $.__views.__alloyId1357.add($.__views.__alloyId1360);
    $.__views.__alloyId1361 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "PA",
        id: "__alloyId1361"
    });
    $.__views.StatePicker.add($.__views.__alloyId1361);
    setValue ? $.__views.__alloyId1361.addEventListener("click", setValue) : __defers["$.__views.__alloyId1361!click!setValue"] = true;
    $.__views.__alloyId1362 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Pennsylvania",
        id: "__alloyId1362"
    });
    $.__views.__alloyId1361.add($.__views.__alloyId1362);
    $.__views.__alloyId1363 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1363"
    });
    $.__views.__alloyId1361.add($.__views.__alloyId1363);
    $.__views.__alloyId1364 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1364"
    });
    $.__views.__alloyId1361.add($.__views.__alloyId1364);
    $.__views.__alloyId1365 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "PR",
        id: "__alloyId1365"
    });
    $.__views.StatePicker.add($.__views.__alloyId1365);
    setValue ? $.__views.__alloyId1365.addEventListener("click", setValue) : __defers["$.__views.__alloyId1365!click!setValue"] = true;
    $.__views.__alloyId1366 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Puerto Rico",
        id: "__alloyId1366"
    });
    $.__views.__alloyId1365.add($.__views.__alloyId1366);
    $.__views.__alloyId1367 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1367"
    });
    $.__views.__alloyId1365.add($.__views.__alloyId1367);
    $.__views.__alloyId1368 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1368"
    });
    $.__views.__alloyId1365.add($.__views.__alloyId1368);
    $.__views.__alloyId1369 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "RI",
        id: "__alloyId1369"
    });
    $.__views.StatePicker.add($.__views.__alloyId1369);
    setValue ? $.__views.__alloyId1369.addEventListener("click", setValue) : __defers["$.__views.__alloyId1369!click!setValue"] = true;
    $.__views.__alloyId1370 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Rhode Island",
        id: "__alloyId1370"
    });
    $.__views.__alloyId1369.add($.__views.__alloyId1370);
    $.__views.__alloyId1371 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1371"
    });
    $.__views.__alloyId1369.add($.__views.__alloyId1371);
    $.__views.__alloyId1372 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1372"
    });
    $.__views.__alloyId1369.add($.__views.__alloyId1372);
    $.__views.__alloyId1373 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "SC",
        id: "__alloyId1373"
    });
    $.__views.StatePicker.add($.__views.__alloyId1373);
    setValue ? $.__views.__alloyId1373.addEventListener("click", setValue) : __defers["$.__views.__alloyId1373!click!setValue"] = true;
    $.__views.__alloyId1374 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "South Carolina",
        id: "__alloyId1374"
    });
    $.__views.__alloyId1373.add($.__views.__alloyId1374);
    $.__views.__alloyId1375 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1375"
    });
    $.__views.__alloyId1373.add($.__views.__alloyId1375);
    $.__views.__alloyId1376 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1376"
    });
    $.__views.__alloyId1373.add($.__views.__alloyId1376);
    $.__views.__alloyId1377 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "SD",
        id: "__alloyId1377"
    });
    $.__views.StatePicker.add($.__views.__alloyId1377);
    setValue ? $.__views.__alloyId1377.addEventListener("click", setValue) : __defers["$.__views.__alloyId1377!click!setValue"] = true;
    $.__views.__alloyId1378 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "South Dakota",
        id: "__alloyId1378"
    });
    $.__views.__alloyId1377.add($.__views.__alloyId1378);
    $.__views.__alloyId1379 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1379"
    });
    $.__views.__alloyId1377.add($.__views.__alloyId1379);
    $.__views.__alloyId1380 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1380"
    });
    $.__views.__alloyId1377.add($.__views.__alloyId1380);
    $.__views.__alloyId1381 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "TN",
        id: "__alloyId1381"
    });
    $.__views.StatePicker.add($.__views.__alloyId1381);
    setValue ? $.__views.__alloyId1381.addEventListener("click", setValue) : __defers["$.__views.__alloyId1381!click!setValue"] = true;
    $.__views.__alloyId1382 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Tennessee",
        id: "__alloyId1382"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1382);
    $.__views.__alloyId1383 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1383"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1383);
    $.__views.__alloyId1384 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1384"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1384);
    $.__views.__alloyId1385 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "TX",
        id: "__alloyId1385"
    });
    $.__views.StatePicker.add($.__views.__alloyId1385);
    setValue ? $.__views.__alloyId1385.addEventListener("click", setValue) : __defers["$.__views.__alloyId1385!click!setValue"] = true;
    $.__views.__alloyId1386 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Texas",
        id: "__alloyId1386"
    });
    $.__views.__alloyId1385.add($.__views.__alloyId1386);
    $.__views.__alloyId1387 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1387"
    });
    $.__views.__alloyId1385.add($.__views.__alloyId1387);
    $.__views.__alloyId1388 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1388"
    });
    $.__views.__alloyId1385.add($.__views.__alloyId1388);
    $.__views.__alloyId1389 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "UT",
        id: "__alloyId1389"
    });
    $.__views.StatePicker.add($.__views.__alloyId1389);
    setValue ? $.__views.__alloyId1389.addEventListener("click", setValue) : __defers["$.__views.__alloyId1389!click!setValue"] = true;
    $.__views.__alloyId1390 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Utah",
        id: "__alloyId1390"
    });
    $.__views.__alloyId1389.add($.__views.__alloyId1390);
    $.__views.__alloyId1391 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1391"
    });
    $.__views.__alloyId1389.add($.__views.__alloyId1391);
    $.__views.__alloyId1392 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1392"
    });
    $.__views.__alloyId1389.add($.__views.__alloyId1392);
    $.__views.__alloyId1393 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "VT",
        id: "__alloyId1393"
    });
    $.__views.StatePicker.add($.__views.__alloyId1393);
    setValue ? $.__views.__alloyId1393.addEventListener("click", setValue) : __defers["$.__views.__alloyId1393!click!setValue"] = true;
    $.__views.__alloyId1394 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Vermont",
        id: "__alloyId1394"
    });
    $.__views.__alloyId1393.add($.__views.__alloyId1394);
    $.__views.__alloyId1395 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1395"
    });
    $.__views.__alloyId1393.add($.__views.__alloyId1395);
    $.__views.__alloyId1396 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1396"
    });
    $.__views.__alloyId1393.add($.__views.__alloyId1396);
    $.__views.__alloyId1397 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "VI",
        id: "__alloyId1397"
    });
    $.__views.StatePicker.add($.__views.__alloyId1397);
    setValue ? $.__views.__alloyId1397.addEventListener("click", setValue) : __defers["$.__views.__alloyId1397!click!setValue"] = true;
    $.__views.__alloyId1398 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Virgin Islands",
        id: "__alloyId1398"
    });
    $.__views.__alloyId1397.add($.__views.__alloyId1398);
    $.__views.__alloyId1399 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1399"
    });
    $.__views.__alloyId1397.add($.__views.__alloyId1399);
    $.__views.__alloyId1400 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1400"
    });
    $.__views.__alloyId1397.add($.__views.__alloyId1400);
    $.__views.__alloyId1401 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "VA",
        id: "__alloyId1401"
    });
    $.__views.StatePicker.add($.__views.__alloyId1401);
    setValue ? $.__views.__alloyId1401.addEventListener("click", setValue) : __defers["$.__views.__alloyId1401!click!setValue"] = true;
    $.__views.__alloyId1402 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Virginia",
        id: "__alloyId1402"
    });
    $.__views.__alloyId1401.add($.__views.__alloyId1402);
    $.__views.__alloyId1403 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1403"
    });
    $.__views.__alloyId1401.add($.__views.__alloyId1403);
    $.__views.__alloyId1404 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1404"
    });
    $.__views.__alloyId1401.add($.__views.__alloyId1404);
    $.__views.__alloyId1405 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "WA",
        id: "__alloyId1405"
    });
    $.__views.StatePicker.add($.__views.__alloyId1405);
    setValue ? $.__views.__alloyId1405.addEventListener("click", setValue) : __defers["$.__views.__alloyId1405!click!setValue"] = true;
    $.__views.__alloyId1406 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Washington",
        id: "__alloyId1406"
    });
    $.__views.__alloyId1405.add($.__views.__alloyId1406);
    $.__views.__alloyId1407 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1407"
    });
    $.__views.__alloyId1405.add($.__views.__alloyId1407);
    $.__views.__alloyId1408 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1408"
    });
    $.__views.__alloyId1405.add($.__views.__alloyId1408);
    $.__views.__alloyId1409 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "WV",
        id: "__alloyId1409"
    });
    $.__views.StatePicker.add($.__views.__alloyId1409);
    setValue ? $.__views.__alloyId1409.addEventListener("click", setValue) : __defers["$.__views.__alloyId1409!click!setValue"] = true;
    $.__views.__alloyId1410 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "West Virginia",
        id: "__alloyId1410"
    });
    $.__views.__alloyId1409.add($.__views.__alloyId1410);
    $.__views.__alloyId1411 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1411"
    });
    $.__views.__alloyId1409.add($.__views.__alloyId1411);
    $.__views.__alloyId1412 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1412"
    });
    $.__views.__alloyId1409.add($.__views.__alloyId1412);
    $.__views.__alloyId1413 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "WI",
        id: "__alloyId1413"
    });
    $.__views.StatePicker.add($.__views.__alloyId1413);
    setValue ? $.__views.__alloyId1413.addEventListener("click", setValue) : __defers["$.__views.__alloyId1413!click!setValue"] = true;
    $.__views.__alloyId1414 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Wisconsin",
        id: "__alloyId1414"
    });
    $.__views.__alloyId1413.add($.__views.__alloyId1414);
    $.__views.__alloyId1415 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1415"
    });
    $.__views.__alloyId1413.add($.__views.__alloyId1415);
    $.__views.__alloyId1416 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1416"
    });
    $.__views.__alloyId1413.add($.__views.__alloyId1416);
    $.__views.__alloyId1417 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "WY",
        id: "__alloyId1417"
    });
    $.__views.StatePicker.add($.__views.__alloyId1417);
    setValue ? $.__views.__alloyId1417.addEventListener("click", setValue) : __defers["$.__views.__alloyId1417!click!setValue"] = true;
    $.__views.__alloyId1418 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Wyoming",
        id: "__alloyId1418"
    });
    $.__views.__alloyId1417.add($.__views.__alloyId1418);
    $.__views.__alloyId1419 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1419"
    });
    $.__views.__alloyId1417.add($.__views.__alloyId1419);
    $.__views.__alloyId1420 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1420"
    });
    $.__views.__alloyId1417.add($.__views.__alloyId1420);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    __defers["$.__views.__alloyId1209!click!setValue"] && $.__views.__alloyId1209.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1213!click!setValue"] && $.__views.__alloyId1213.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1217!click!setValue"] && $.__views.__alloyId1217.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1221!click!setValue"] && $.__views.__alloyId1221.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1225!click!setValue"] && $.__views.__alloyId1225.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1229!click!setValue"] && $.__views.__alloyId1229.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1233!click!setValue"] && $.__views.__alloyId1233.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1237!click!setValue"] && $.__views.__alloyId1237.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1241!click!setValue"] && $.__views.__alloyId1241.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1245!click!setValue"] && $.__views.__alloyId1245.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1249!click!setValue"] && $.__views.__alloyId1249.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1253!click!setValue"] && $.__views.__alloyId1253.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1257!click!setValue"] && $.__views.__alloyId1257.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1261!click!setValue"] && $.__views.__alloyId1261.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1265!click!setValue"] && $.__views.__alloyId1265.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1269!click!setValue"] && $.__views.__alloyId1269.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1273!click!setValue"] && $.__views.__alloyId1273.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1277!click!setValue"] && $.__views.__alloyId1277.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1281!click!setValue"] && $.__views.__alloyId1281.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1285!click!setValue"] && $.__views.__alloyId1285.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1289!click!setValue"] && $.__views.__alloyId1289.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1293!click!setValue"] && $.__views.__alloyId1293.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1297!click!setValue"] && $.__views.__alloyId1297.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1301!click!setValue"] && $.__views.__alloyId1301.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1305!click!setValue"] && $.__views.__alloyId1305.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1309!click!setValue"] && $.__views.__alloyId1309.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1313!click!setValue"] && $.__views.__alloyId1313.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1317!click!setValue"] && $.__views.__alloyId1317.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1321!click!setValue"] && $.__views.__alloyId1321.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1325!click!setValue"] && $.__views.__alloyId1325.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1329!click!setValue"] && $.__views.__alloyId1329.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1333!click!setValue"] && $.__views.__alloyId1333.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1337!click!setValue"] && $.__views.__alloyId1337.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1341!click!setValue"] && $.__views.__alloyId1341.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1345!click!setValue"] && $.__views.__alloyId1345.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1349!click!setValue"] && $.__views.__alloyId1349.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1353!click!setValue"] && $.__views.__alloyId1353.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1357!click!setValue"] && $.__views.__alloyId1357.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1361!click!setValue"] && $.__views.__alloyId1361.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1365!click!setValue"] && $.__views.__alloyId1365.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1369!click!setValue"] && $.__views.__alloyId1369.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1373!click!setValue"] && $.__views.__alloyId1373.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1377!click!setValue"] && $.__views.__alloyId1377.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1381!click!setValue"] && $.__views.__alloyId1381.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1385!click!setValue"] && $.__views.__alloyId1385.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1389!click!setValue"] && $.__views.__alloyId1389.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1393!click!setValue"] && $.__views.__alloyId1393.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1397!click!setValue"] && $.__views.__alloyId1397.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1401!click!setValue"] && $.__views.__alloyId1401.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1405!click!setValue"] && $.__views.__alloyId1405.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1409!click!setValue"] && $.__views.__alloyId1409.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1413!click!setValue"] && $.__views.__alloyId1413.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1417!click!setValue"] && $.__views.__alloyId1417.addEventListener("click", setValue);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;