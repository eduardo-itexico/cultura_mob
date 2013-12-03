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
    $.__views.__alloyId1200 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "AL",
        id: "__alloyId1200"
    });
    $.__views.StatePicker.add($.__views.__alloyId1200);
    setValue ? $.__views.__alloyId1200.addEventListener("click", setValue) : __defers["$.__views.__alloyId1200!click!setValue"] = true;
    $.__views.__alloyId1201 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Alabama",
        id: "__alloyId1201"
    });
    $.__views.__alloyId1200.add($.__views.__alloyId1201);
    $.__views.__alloyId1202 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1202"
    });
    $.__views.__alloyId1200.add($.__views.__alloyId1202);
    $.__views.__alloyId1203 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1203"
    });
    $.__views.__alloyId1200.add($.__views.__alloyId1203);
    $.__views.__alloyId1204 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "AK",
        id: "__alloyId1204"
    });
    $.__views.StatePicker.add($.__views.__alloyId1204);
    setValue ? $.__views.__alloyId1204.addEventListener("click", setValue) : __defers["$.__views.__alloyId1204!click!setValue"] = true;
    $.__views.__alloyId1205 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Alaska",
        id: "__alloyId1205"
    });
    $.__views.__alloyId1204.add($.__views.__alloyId1205);
    $.__views.__alloyId1206 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1206"
    });
    $.__views.__alloyId1204.add($.__views.__alloyId1206);
    $.__views.__alloyId1207 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1207"
    });
    $.__views.__alloyId1204.add($.__views.__alloyId1207);
    $.__views.__alloyId1208 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "AZ",
        id: "__alloyId1208"
    });
    $.__views.StatePicker.add($.__views.__alloyId1208);
    setValue ? $.__views.__alloyId1208.addEventListener("click", setValue) : __defers["$.__views.__alloyId1208!click!setValue"] = true;
    $.__views.__alloyId1209 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Arizona",
        id: "__alloyId1209"
    });
    $.__views.__alloyId1208.add($.__views.__alloyId1209);
    $.__views.__alloyId1210 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1210"
    });
    $.__views.__alloyId1208.add($.__views.__alloyId1210);
    $.__views.__alloyId1211 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1211"
    });
    $.__views.__alloyId1208.add($.__views.__alloyId1211);
    $.__views.__alloyId1212 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "AR",
        id: "__alloyId1212"
    });
    $.__views.StatePicker.add($.__views.__alloyId1212);
    setValue ? $.__views.__alloyId1212.addEventListener("click", setValue) : __defers["$.__views.__alloyId1212!click!setValue"] = true;
    $.__views.__alloyId1213 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Arkansas",
        id: "__alloyId1213"
    });
    $.__views.__alloyId1212.add($.__views.__alloyId1213);
    $.__views.__alloyId1214 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1214"
    });
    $.__views.__alloyId1212.add($.__views.__alloyId1214);
    $.__views.__alloyId1215 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1215"
    });
    $.__views.__alloyId1212.add($.__views.__alloyId1215);
    $.__views.__alloyId1216 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "CA",
        id: "__alloyId1216"
    });
    $.__views.StatePicker.add($.__views.__alloyId1216);
    setValue ? $.__views.__alloyId1216.addEventListener("click", setValue) : __defers["$.__views.__alloyId1216!click!setValue"] = true;
    $.__views.__alloyId1217 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "California",
        id: "__alloyId1217"
    });
    $.__views.__alloyId1216.add($.__views.__alloyId1217);
    $.__views.__alloyId1218 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1218"
    });
    $.__views.__alloyId1216.add($.__views.__alloyId1218);
    $.__views.__alloyId1219 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1219"
    });
    $.__views.__alloyId1216.add($.__views.__alloyId1219);
    $.__views.__alloyId1220 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "CO",
        id: "__alloyId1220"
    });
    $.__views.StatePicker.add($.__views.__alloyId1220);
    setValue ? $.__views.__alloyId1220.addEventListener("click", setValue) : __defers["$.__views.__alloyId1220!click!setValue"] = true;
    $.__views.__alloyId1221 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Colorado",
        id: "__alloyId1221"
    });
    $.__views.__alloyId1220.add($.__views.__alloyId1221);
    $.__views.__alloyId1222 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1222"
    });
    $.__views.__alloyId1220.add($.__views.__alloyId1222);
    $.__views.__alloyId1223 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1223"
    });
    $.__views.__alloyId1220.add($.__views.__alloyId1223);
    $.__views.__alloyId1224 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "CT",
        id: "__alloyId1224"
    });
    $.__views.StatePicker.add($.__views.__alloyId1224);
    setValue ? $.__views.__alloyId1224.addEventListener("click", setValue) : __defers["$.__views.__alloyId1224!click!setValue"] = true;
    $.__views.__alloyId1225 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Connecticut",
        id: "__alloyId1225"
    });
    $.__views.__alloyId1224.add($.__views.__alloyId1225);
    $.__views.__alloyId1226 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1226"
    });
    $.__views.__alloyId1224.add($.__views.__alloyId1226);
    $.__views.__alloyId1227 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1227"
    });
    $.__views.__alloyId1224.add($.__views.__alloyId1227);
    $.__views.__alloyId1228 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "DE",
        id: "__alloyId1228"
    });
    $.__views.StatePicker.add($.__views.__alloyId1228);
    setValue ? $.__views.__alloyId1228.addEventListener("click", setValue) : __defers["$.__views.__alloyId1228!click!setValue"] = true;
    $.__views.__alloyId1229 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Delaware",
        id: "__alloyId1229"
    });
    $.__views.__alloyId1228.add($.__views.__alloyId1229);
    $.__views.__alloyId1230 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1230"
    });
    $.__views.__alloyId1228.add($.__views.__alloyId1230);
    $.__views.__alloyId1231 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1231"
    });
    $.__views.__alloyId1228.add($.__views.__alloyId1231);
    $.__views.__alloyId1232 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "DC",
        id: "__alloyId1232"
    });
    $.__views.StatePicker.add($.__views.__alloyId1232);
    setValue ? $.__views.__alloyId1232.addEventListener("click", setValue) : __defers["$.__views.__alloyId1232!click!setValue"] = true;
    $.__views.__alloyId1233 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "District of Columbia",
        id: "__alloyId1233"
    });
    $.__views.__alloyId1232.add($.__views.__alloyId1233);
    $.__views.__alloyId1234 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1234"
    });
    $.__views.__alloyId1232.add($.__views.__alloyId1234);
    $.__views.__alloyId1235 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1235"
    });
    $.__views.__alloyId1232.add($.__views.__alloyId1235);
    $.__views.__alloyId1236 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "FL",
        id: "__alloyId1236"
    });
    $.__views.StatePicker.add($.__views.__alloyId1236);
    setValue ? $.__views.__alloyId1236.addEventListener("click", setValue) : __defers["$.__views.__alloyId1236!click!setValue"] = true;
    $.__views.__alloyId1237 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Florida",
        id: "__alloyId1237"
    });
    $.__views.__alloyId1236.add($.__views.__alloyId1237);
    $.__views.__alloyId1238 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1238"
    });
    $.__views.__alloyId1236.add($.__views.__alloyId1238);
    $.__views.__alloyId1239 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1239"
    });
    $.__views.__alloyId1236.add($.__views.__alloyId1239);
    $.__views.__alloyId1240 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "GA",
        id: "__alloyId1240"
    });
    $.__views.StatePicker.add($.__views.__alloyId1240);
    setValue ? $.__views.__alloyId1240.addEventListener("click", setValue) : __defers["$.__views.__alloyId1240!click!setValue"] = true;
    $.__views.__alloyId1241 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Georgia",
        id: "__alloyId1241"
    });
    $.__views.__alloyId1240.add($.__views.__alloyId1241);
    $.__views.__alloyId1242 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1242"
    });
    $.__views.__alloyId1240.add($.__views.__alloyId1242);
    $.__views.__alloyId1243 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1243"
    });
    $.__views.__alloyId1240.add($.__views.__alloyId1243);
    $.__views.__alloyId1244 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "HI",
        id: "__alloyId1244"
    });
    $.__views.StatePicker.add($.__views.__alloyId1244);
    setValue ? $.__views.__alloyId1244.addEventListener("click", setValue) : __defers["$.__views.__alloyId1244!click!setValue"] = true;
    $.__views.__alloyId1245 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Hawaii",
        id: "__alloyId1245"
    });
    $.__views.__alloyId1244.add($.__views.__alloyId1245);
    $.__views.__alloyId1246 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1246"
    });
    $.__views.__alloyId1244.add($.__views.__alloyId1246);
    $.__views.__alloyId1247 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1247"
    });
    $.__views.__alloyId1244.add($.__views.__alloyId1247);
    $.__views.__alloyId1248 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "ID",
        id: "__alloyId1248"
    });
    $.__views.StatePicker.add($.__views.__alloyId1248);
    setValue ? $.__views.__alloyId1248.addEventListener("click", setValue) : __defers["$.__views.__alloyId1248!click!setValue"] = true;
    $.__views.__alloyId1249 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Idaho",
        id: "__alloyId1249"
    });
    $.__views.__alloyId1248.add($.__views.__alloyId1249);
    $.__views.__alloyId1250 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1250"
    });
    $.__views.__alloyId1248.add($.__views.__alloyId1250);
    $.__views.__alloyId1251 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1251"
    });
    $.__views.__alloyId1248.add($.__views.__alloyId1251);
    $.__views.__alloyId1252 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "IL",
        id: "__alloyId1252"
    });
    $.__views.StatePicker.add($.__views.__alloyId1252);
    setValue ? $.__views.__alloyId1252.addEventListener("click", setValue) : __defers["$.__views.__alloyId1252!click!setValue"] = true;
    $.__views.__alloyId1253 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Illinois",
        id: "__alloyId1253"
    });
    $.__views.__alloyId1252.add($.__views.__alloyId1253);
    $.__views.__alloyId1254 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1254"
    });
    $.__views.__alloyId1252.add($.__views.__alloyId1254);
    $.__views.__alloyId1255 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1255"
    });
    $.__views.__alloyId1252.add($.__views.__alloyId1255);
    $.__views.__alloyId1256 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "IN",
        id: "__alloyId1256"
    });
    $.__views.StatePicker.add($.__views.__alloyId1256);
    setValue ? $.__views.__alloyId1256.addEventListener("click", setValue) : __defers["$.__views.__alloyId1256!click!setValue"] = true;
    $.__views.__alloyId1257 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Indiana",
        id: "__alloyId1257"
    });
    $.__views.__alloyId1256.add($.__views.__alloyId1257);
    $.__views.__alloyId1258 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1258"
    });
    $.__views.__alloyId1256.add($.__views.__alloyId1258);
    $.__views.__alloyId1259 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1259"
    });
    $.__views.__alloyId1256.add($.__views.__alloyId1259);
    $.__views.__alloyId1260 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "IA",
        id: "__alloyId1260"
    });
    $.__views.StatePicker.add($.__views.__alloyId1260);
    setValue ? $.__views.__alloyId1260.addEventListener("click", setValue) : __defers["$.__views.__alloyId1260!click!setValue"] = true;
    $.__views.__alloyId1261 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Iowa",
        id: "__alloyId1261"
    });
    $.__views.__alloyId1260.add($.__views.__alloyId1261);
    $.__views.__alloyId1262 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1262"
    });
    $.__views.__alloyId1260.add($.__views.__alloyId1262);
    $.__views.__alloyId1263 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1263"
    });
    $.__views.__alloyId1260.add($.__views.__alloyId1263);
    $.__views.__alloyId1264 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "KS",
        id: "__alloyId1264"
    });
    $.__views.StatePicker.add($.__views.__alloyId1264);
    setValue ? $.__views.__alloyId1264.addEventListener("click", setValue) : __defers["$.__views.__alloyId1264!click!setValue"] = true;
    $.__views.__alloyId1265 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Kansas",
        id: "__alloyId1265"
    });
    $.__views.__alloyId1264.add($.__views.__alloyId1265);
    $.__views.__alloyId1266 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1266"
    });
    $.__views.__alloyId1264.add($.__views.__alloyId1266);
    $.__views.__alloyId1267 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1267"
    });
    $.__views.__alloyId1264.add($.__views.__alloyId1267);
    $.__views.__alloyId1268 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "KY",
        id: "__alloyId1268"
    });
    $.__views.StatePicker.add($.__views.__alloyId1268);
    setValue ? $.__views.__alloyId1268.addEventListener("click", setValue) : __defers["$.__views.__alloyId1268!click!setValue"] = true;
    $.__views.__alloyId1269 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Kentucky",
        id: "__alloyId1269"
    });
    $.__views.__alloyId1268.add($.__views.__alloyId1269);
    $.__views.__alloyId1270 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1270"
    });
    $.__views.__alloyId1268.add($.__views.__alloyId1270);
    $.__views.__alloyId1271 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1271"
    });
    $.__views.__alloyId1268.add($.__views.__alloyId1271);
    $.__views.__alloyId1272 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "LA",
        id: "__alloyId1272"
    });
    $.__views.StatePicker.add($.__views.__alloyId1272);
    setValue ? $.__views.__alloyId1272.addEventListener("click", setValue) : __defers["$.__views.__alloyId1272!click!setValue"] = true;
    $.__views.__alloyId1273 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Louisiana",
        id: "__alloyId1273"
    });
    $.__views.__alloyId1272.add($.__views.__alloyId1273);
    $.__views.__alloyId1274 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1274"
    });
    $.__views.__alloyId1272.add($.__views.__alloyId1274);
    $.__views.__alloyId1275 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1275"
    });
    $.__views.__alloyId1272.add($.__views.__alloyId1275);
    $.__views.__alloyId1276 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "ME",
        id: "__alloyId1276"
    });
    $.__views.StatePicker.add($.__views.__alloyId1276);
    setValue ? $.__views.__alloyId1276.addEventListener("click", setValue) : __defers["$.__views.__alloyId1276!click!setValue"] = true;
    $.__views.__alloyId1277 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Maine",
        id: "__alloyId1277"
    });
    $.__views.__alloyId1276.add($.__views.__alloyId1277);
    $.__views.__alloyId1278 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1278"
    });
    $.__views.__alloyId1276.add($.__views.__alloyId1278);
    $.__views.__alloyId1279 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1279"
    });
    $.__views.__alloyId1276.add($.__views.__alloyId1279);
    $.__views.__alloyId1280 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "MD",
        id: "__alloyId1280"
    });
    $.__views.StatePicker.add($.__views.__alloyId1280);
    setValue ? $.__views.__alloyId1280.addEventListener("click", setValue) : __defers["$.__views.__alloyId1280!click!setValue"] = true;
    $.__views.__alloyId1281 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Maryland",
        id: "__alloyId1281"
    });
    $.__views.__alloyId1280.add($.__views.__alloyId1281);
    $.__views.__alloyId1282 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1282"
    });
    $.__views.__alloyId1280.add($.__views.__alloyId1282);
    $.__views.__alloyId1283 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1283"
    });
    $.__views.__alloyId1280.add($.__views.__alloyId1283);
    $.__views.__alloyId1284 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "MA",
        id: "__alloyId1284"
    });
    $.__views.StatePicker.add($.__views.__alloyId1284);
    setValue ? $.__views.__alloyId1284.addEventListener("click", setValue) : __defers["$.__views.__alloyId1284!click!setValue"] = true;
    $.__views.__alloyId1285 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Massachusetts",
        id: "__alloyId1285"
    });
    $.__views.__alloyId1284.add($.__views.__alloyId1285);
    $.__views.__alloyId1286 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1286"
    });
    $.__views.__alloyId1284.add($.__views.__alloyId1286);
    $.__views.__alloyId1287 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1287"
    });
    $.__views.__alloyId1284.add($.__views.__alloyId1287);
    $.__views.__alloyId1288 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "MI",
        id: "__alloyId1288"
    });
    $.__views.StatePicker.add($.__views.__alloyId1288);
    setValue ? $.__views.__alloyId1288.addEventListener("click", setValue) : __defers["$.__views.__alloyId1288!click!setValue"] = true;
    $.__views.__alloyId1289 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Michigan",
        id: "__alloyId1289"
    });
    $.__views.__alloyId1288.add($.__views.__alloyId1289);
    $.__views.__alloyId1290 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1290"
    });
    $.__views.__alloyId1288.add($.__views.__alloyId1290);
    $.__views.__alloyId1291 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1291"
    });
    $.__views.__alloyId1288.add($.__views.__alloyId1291);
    $.__views.__alloyId1292 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "MN",
        id: "__alloyId1292"
    });
    $.__views.StatePicker.add($.__views.__alloyId1292);
    setValue ? $.__views.__alloyId1292.addEventListener("click", setValue) : __defers["$.__views.__alloyId1292!click!setValue"] = true;
    $.__views.__alloyId1293 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Minnesota",
        id: "__alloyId1293"
    });
    $.__views.__alloyId1292.add($.__views.__alloyId1293);
    $.__views.__alloyId1294 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1294"
    });
    $.__views.__alloyId1292.add($.__views.__alloyId1294);
    $.__views.__alloyId1295 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1295"
    });
    $.__views.__alloyId1292.add($.__views.__alloyId1295);
    $.__views.__alloyId1296 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "MS",
        id: "__alloyId1296"
    });
    $.__views.StatePicker.add($.__views.__alloyId1296);
    setValue ? $.__views.__alloyId1296.addEventListener("click", setValue) : __defers["$.__views.__alloyId1296!click!setValue"] = true;
    $.__views.__alloyId1297 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Mississippi",
        id: "__alloyId1297"
    });
    $.__views.__alloyId1296.add($.__views.__alloyId1297);
    $.__views.__alloyId1298 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1298"
    });
    $.__views.__alloyId1296.add($.__views.__alloyId1298);
    $.__views.__alloyId1299 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1299"
    });
    $.__views.__alloyId1296.add($.__views.__alloyId1299);
    $.__views.__alloyId1300 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "MO",
        id: "__alloyId1300"
    });
    $.__views.StatePicker.add($.__views.__alloyId1300);
    setValue ? $.__views.__alloyId1300.addEventListener("click", setValue) : __defers["$.__views.__alloyId1300!click!setValue"] = true;
    $.__views.__alloyId1301 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Missouri",
        id: "__alloyId1301"
    });
    $.__views.__alloyId1300.add($.__views.__alloyId1301);
    $.__views.__alloyId1302 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1302"
    });
    $.__views.__alloyId1300.add($.__views.__alloyId1302);
    $.__views.__alloyId1303 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1303"
    });
    $.__views.__alloyId1300.add($.__views.__alloyId1303);
    $.__views.__alloyId1304 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "MT",
        id: "__alloyId1304"
    });
    $.__views.StatePicker.add($.__views.__alloyId1304);
    setValue ? $.__views.__alloyId1304.addEventListener("click", setValue) : __defers["$.__views.__alloyId1304!click!setValue"] = true;
    $.__views.__alloyId1305 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Montana",
        id: "__alloyId1305"
    });
    $.__views.__alloyId1304.add($.__views.__alloyId1305);
    $.__views.__alloyId1306 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1306"
    });
    $.__views.__alloyId1304.add($.__views.__alloyId1306);
    $.__views.__alloyId1307 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1307"
    });
    $.__views.__alloyId1304.add($.__views.__alloyId1307);
    $.__views.__alloyId1308 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "NE",
        id: "__alloyId1308"
    });
    $.__views.StatePicker.add($.__views.__alloyId1308);
    setValue ? $.__views.__alloyId1308.addEventListener("click", setValue) : __defers["$.__views.__alloyId1308!click!setValue"] = true;
    $.__views.__alloyId1309 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Nebraska",
        id: "__alloyId1309"
    });
    $.__views.__alloyId1308.add($.__views.__alloyId1309);
    $.__views.__alloyId1310 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1310"
    });
    $.__views.__alloyId1308.add($.__views.__alloyId1310);
    $.__views.__alloyId1311 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1311"
    });
    $.__views.__alloyId1308.add($.__views.__alloyId1311);
    $.__views.__alloyId1312 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "NV",
        id: "__alloyId1312"
    });
    $.__views.StatePicker.add($.__views.__alloyId1312);
    setValue ? $.__views.__alloyId1312.addEventListener("click", setValue) : __defers["$.__views.__alloyId1312!click!setValue"] = true;
    $.__views.__alloyId1313 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Nevada",
        id: "__alloyId1313"
    });
    $.__views.__alloyId1312.add($.__views.__alloyId1313);
    $.__views.__alloyId1314 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1314"
    });
    $.__views.__alloyId1312.add($.__views.__alloyId1314);
    $.__views.__alloyId1315 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1315"
    });
    $.__views.__alloyId1312.add($.__views.__alloyId1315);
    $.__views.__alloyId1316 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "NH",
        id: "__alloyId1316"
    });
    $.__views.StatePicker.add($.__views.__alloyId1316);
    setValue ? $.__views.__alloyId1316.addEventListener("click", setValue) : __defers["$.__views.__alloyId1316!click!setValue"] = true;
    $.__views.__alloyId1317 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "New Hampshire",
        id: "__alloyId1317"
    });
    $.__views.__alloyId1316.add($.__views.__alloyId1317);
    $.__views.__alloyId1318 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1318"
    });
    $.__views.__alloyId1316.add($.__views.__alloyId1318);
    $.__views.__alloyId1319 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1319"
    });
    $.__views.__alloyId1316.add($.__views.__alloyId1319);
    $.__views.__alloyId1320 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "NJ",
        id: "__alloyId1320"
    });
    $.__views.StatePicker.add($.__views.__alloyId1320);
    setValue ? $.__views.__alloyId1320.addEventListener("click", setValue) : __defers["$.__views.__alloyId1320!click!setValue"] = true;
    $.__views.__alloyId1321 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "New Jersey",
        id: "__alloyId1321"
    });
    $.__views.__alloyId1320.add($.__views.__alloyId1321);
    $.__views.__alloyId1322 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1322"
    });
    $.__views.__alloyId1320.add($.__views.__alloyId1322);
    $.__views.__alloyId1323 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1323"
    });
    $.__views.__alloyId1320.add($.__views.__alloyId1323);
    $.__views.__alloyId1324 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "NM",
        id: "__alloyId1324"
    });
    $.__views.StatePicker.add($.__views.__alloyId1324);
    setValue ? $.__views.__alloyId1324.addEventListener("click", setValue) : __defers["$.__views.__alloyId1324!click!setValue"] = true;
    $.__views.__alloyId1325 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "New Mexico",
        id: "__alloyId1325"
    });
    $.__views.__alloyId1324.add($.__views.__alloyId1325);
    $.__views.__alloyId1326 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1326"
    });
    $.__views.__alloyId1324.add($.__views.__alloyId1326);
    $.__views.__alloyId1327 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1327"
    });
    $.__views.__alloyId1324.add($.__views.__alloyId1327);
    $.__views.__alloyId1328 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "NY",
        id: "__alloyId1328"
    });
    $.__views.StatePicker.add($.__views.__alloyId1328);
    setValue ? $.__views.__alloyId1328.addEventListener("click", setValue) : __defers["$.__views.__alloyId1328!click!setValue"] = true;
    $.__views.__alloyId1329 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "New York",
        id: "__alloyId1329"
    });
    $.__views.__alloyId1328.add($.__views.__alloyId1329);
    $.__views.__alloyId1330 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1330"
    });
    $.__views.__alloyId1328.add($.__views.__alloyId1330);
    $.__views.__alloyId1331 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1331"
    });
    $.__views.__alloyId1328.add($.__views.__alloyId1331);
    $.__views.__alloyId1332 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "NC",
        id: "__alloyId1332"
    });
    $.__views.StatePicker.add($.__views.__alloyId1332);
    setValue ? $.__views.__alloyId1332.addEventListener("click", setValue) : __defers["$.__views.__alloyId1332!click!setValue"] = true;
    $.__views.__alloyId1333 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "North Carolina",
        id: "__alloyId1333"
    });
    $.__views.__alloyId1332.add($.__views.__alloyId1333);
    $.__views.__alloyId1334 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1334"
    });
    $.__views.__alloyId1332.add($.__views.__alloyId1334);
    $.__views.__alloyId1335 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1335"
    });
    $.__views.__alloyId1332.add($.__views.__alloyId1335);
    $.__views.__alloyId1336 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "ND",
        id: "__alloyId1336"
    });
    $.__views.StatePicker.add($.__views.__alloyId1336);
    setValue ? $.__views.__alloyId1336.addEventListener("click", setValue) : __defers["$.__views.__alloyId1336!click!setValue"] = true;
    $.__views.__alloyId1337 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "North Dakota",
        id: "__alloyId1337"
    });
    $.__views.__alloyId1336.add($.__views.__alloyId1337);
    $.__views.__alloyId1338 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1338"
    });
    $.__views.__alloyId1336.add($.__views.__alloyId1338);
    $.__views.__alloyId1339 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1339"
    });
    $.__views.__alloyId1336.add($.__views.__alloyId1339);
    $.__views.__alloyId1340 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "OH",
        id: "__alloyId1340"
    });
    $.__views.StatePicker.add($.__views.__alloyId1340);
    setValue ? $.__views.__alloyId1340.addEventListener("click", setValue) : __defers["$.__views.__alloyId1340!click!setValue"] = true;
    $.__views.__alloyId1341 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Ohio",
        id: "__alloyId1341"
    });
    $.__views.__alloyId1340.add($.__views.__alloyId1341);
    $.__views.__alloyId1342 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1342"
    });
    $.__views.__alloyId1340.add($.__views.__alloyId1342);
    $.__views.__alloyId1343 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1343"
    });
    $.__views.__alloyId1340.add($.__views.__alloyId1343);
    $.__views.__alloyId1344 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "OK",
        id: "__alloyId1344"
    });
    $.__views.StatePicker.add($.__views.__alloyId1344);
    setValue ? $.__views.__alloyId1344.addEventListener("click", setValue) : __defers["$.__views.__alloyId1344!click!setValue"] = true;
    $.__views.__alloyId1345 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Oklahoma",
        id: "__alloyId1345"
    });
    $.__views.__alloyId1344.add($.__views.__alloyId1345);
    $.__views.__alloyId1346 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1346"
    });
    $.__views.__alloyId1344.add($.__views.__alloyId1346);
    $.__views.__alloyId1347 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1347"
    });
    $.__views.__alloyId1344.add($.__views.__alloyId1347);
    $.__views.__alloyId1348 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "OR",
        id: "__alloyId1348"
    });
    $.__views.StatePicker.add($.__views.__alloyId1348);
    setValue ? $.__views.__alloyId1348.addEventListener("click", setValue) : __defers["$.__views.__alloyId1348!click!setValue"] = true;
    $.__views.__alloyId1349 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Oregon",
        id: "__alloyId1349"
    });
    $.__views.__alloyId1348.add($.__views.__alloyId1349);
    $.__views.__alloyId1350 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1350"
    });
    $.__views.__alloyId1348.add($.__views.__alloyId1350);
    $.__views.__alloyId1351 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1351"
    });
    $.__views.__alloyId1348.add($.__views.__alloyId1351);
    $.__views.__alloyId1352 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "PA",
        id: "__alloyId1352"
    });
    $.__views.StatePicker.add($.__views.__alloyId1352);
    setValue ? $.__views.__alloyId1352.addEventListener("click", setValue) : __defers["$.__views.__alloyId1352!click!setValue"] = true;
    $.__views.__alloyId1353 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Pennsylvania",
        id: "__alloyId1353"
    });
    $.__views.__alloyId1352.add($.__views.__alloyId1353);
    $.__views.__alloyId1354 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1354"
    });
    $.__views.__alloyId1352.add($.__views.__alloyId1354);
    $.__views.__alloyId1355 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1355"
    });
    $.__views.__alloyId1352.add($.__views.__alloyId1355);
    $.__views.__alloyId1356 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "PR",
        id: "__alloyId1356"
    });
    $.__views.StatePicker.add($.__views.__alloyId1356);
    setValue ? $.__views.__alloyId1356.addEventListener("click", setValue) : __defers["$.__views.__alloyId1356!click!setValue"] = true;
    $.__views.__alloyId1357 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Puerto Rico",
        id: "__alloyId1357"
    });
    $.__views.__alloyId1356.add($.__views.__alloyId1357);
    $.__views.__alloyId1358 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1358"
    });
    $.__views.__alloyId1356.add($.__views.__alloyId1358);
    $.__views.__alloyId1359 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1359"
    });
    $.__views.__alloyId1356.add($.__views.__alloyId1359);
    $.__views.__alloyId1360 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "RI",
        id: "__alloyId1360"
    });
    $.__views.StatePicker.add($.__views.__alloyId1360);
    setValue ? $.__views.__alloyId1360.addEventListener("click", setValue) : __defers["$.__views.__alloyId1360!click!setValue"] = true;
    $.__views.__alloyId1361 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Rhode Island",
        id: "__alloyId1361"
    });
    $.__views.__alloyId1360.add($.__views.__alloyId1361);
    $.__views.__alloyId1362 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1362"
    });
    $.__views.__alloyId1360.add($.__views.__alloyId1362);
    $.__views.__alloyId1363 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1363"
    });
    $.__views.__alloyId1360.add($.__views.__alloyId1363);
    $.__views.__alloyId1364 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "SC",
        id: "__alloyId1364"
    });
    $.__views.StatePicker.add($.__views.__alloyId1364);
    setValue ? $.__views.__alloyId1364.addEventListener("click", setValue) : __defers["$.__views.__alloyId1364!click!setValue"] = true;
    $.__views.__alloyId1365 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "South Carolina",
        id: "__alloyId1365"
    });
    $.__views.__alloyId1364.add($.__views.__alloyId1365);
    $.__views.__alloyId1366 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1366"
    });
    $.__views.__alloyId1364.add($.__views.__alloyId1366);
    $.__views.__alloyId1367 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1367"
    });
    $.__views.__alloyId1364.add($.__views.__alloyId1367);
    $.__views.__alloyId1368 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "SD",
        id: "__alloyId1368"
    });
    $.__views.StatePicker.add($.__views.__alloyId1368);
    setValue ? $.__views.__alloyId1368.addEventListener("click", setValue) : __defers["$.__views.__alloyId1368!click!setValue"] = true;
    $.__views.__alloyId1369 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "South Dakota",
        id: "__alloyId1369"
    });
    $.__views.__alloyId1368.add($.__views.__alloyId1369);
    $.__views.__alloyId1370 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1370"
    });
    $.__views.__alloyId1368.add($.__views.__alloyId1370);
    $.__views.__alloyId1371 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1371"
    });
    $.__views.__alloyId1368.add($.__views.__alloyId1371);
    $.__views.__alloyId1372 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "TN",
        id: "__alloyId1372"
    });
    $.__views.StatePicker.add($.__views.__alloyId1372);
    setValue ? $.__views.__alloyId1372.addEventListener("click", setValue) : __defers["$.__views.__alloyId1372!click!setValue"] = true;
    $.__views.__alloyId1373 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Tennessee",
        id: "__alloyId1373"
    });
    $.__views.__alloyId1372.add($.__views.__alloyId1373);
    $.__views.__alloyId1374 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1374"
    });
    $.__views.__alloyId1372.add($.__views.__alloyId1374);
    $.__views.__alloyId1375 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1375"
    });
    $.__views.__alloyId1372.add($.__views.__alloyId1375);
    $.__views.__alloyId1376 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "TX",
        id: "__alloyId1376"
    });
    $.__views.StatePicker.add($.__views.__alloyId1376);
    setValue ? $.__views.__alloyId1376.addEventListener("click", setValue) : __defers["$.__views.__alloyId1376!click!setValue"] = true;
    $.__views.__alloyId1377 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Texas",
        id: "__alloyId1377"
    });
    $.__views.__alloyId1376.add($.__views.__alloyId1377);
    $.__views.__alloyId1378 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1378"
    });
    $.__views.__alloyId1376.add($.__views.__alloyId1378);
    $.__views.__alloyId1379 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1379"
    });
    $.__views.__alloyId1376.add($.__views.__alloyId1379);
    $.__views.__alloyId1380 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "UT",
        id: "__alloyId1380"
    });
    $.__views.StatePicker.add($.__views.__alloyId1380);
    setValue ? $.__views.__alloyId1380.addEventListener("click", setValue) : __defers["$.__views.__alloyId1380!click!setValue"] = true;
    $.__views.__alloyId1381 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Utah",
        id: "__alloyId1381"
    });
    $.__views.__alloyId1380.add($.__views.__alloyId1381);
    $.__views.__alloyId1382 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1382"
    });
    $.__views.__alloyId1380.add($.__views.__alloyId1382);
    $.__views.__alloyId1383 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1383"
    });
    $.__views.__alloyId1380.add($.__views.__alloyId1383);
    $.__views.__alloyId1384 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "VT",
        id: "__alloyId1384"
    });
    $.__views.StatePicker.add($.__views.__alloyId1384);
    setValue ? $.__views.__alloyId1384.addEventListener("click", setValue) : __defers["$.__views.__alloyId1384!click!setValue"] = true;
    $.__views.__alloyId1385 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Vermont",
        id: "__alloyId1385"
    });
    $.__views.__alloyId1384.add($.__views.__alloyId1385);
    $.__views.__alloyId1386 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1386"
    });
    $.__views.__alloyId1384.add($.__views.__alloyId1386);
    $.__views.__alloyId1387 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1387"
    });
    $.__views.__alloyId1384.add($.__views.__alloyId1387);
    $.__views.__alloyId1388 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "VI",
        id: "__alloyId1388"
    });
    $.__views.StatePicker.add($.__views.__alloyId1388);
    setValue ? $.__views.__alloyId1388.addEventListener("click", setValue) : __defers["$.__views.__alloyId1388!click!setValue"] = true;
    $.__views.__alloyId1389 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Virgin Islands",
        id: "__alloyId1389"
    });
    $.__views.__alloyId1388.add($.__views.__alloyId1389);
    $.__views.__alloyId1390 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1390"
    });
    $.__views.__alloyId1388.add($.__views.__alloyId1390);
    $.__views.__alloyId1391 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1391"
    });
    $.__views.__alloyId1388.add($.__views.__alloyId1391);
    $.__views.__alloyId1392 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "VA",
        id: "__alloyId1392"
    });
    $.__views.StatePicker.add($.__views.__alloyId1392);
    setValue ? $.__views.__alloyId1392.addEventListener("click", setValue) : __defers["$.__views.__alloyId1392!click!setValue"] = true;
    $.__views.__alloyId1393 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Virginia",
        id: "__alloyId1393"
    });
    $.__views.__alloyId1392.add($.__views.__alloyId1393);
    $.__views.__alloyId1394 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1394"
    });
    $.__views.__alloyId1392.add($.__views.__alloyId1394);
    $.__views.__alloyId1395 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1395"
    });
    $.__views.__alloyId1392.add($.__views.__alloyId1395);
    $.__views.__alloyId1396 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "WA",
        id: "__alloyId1396"
    });
    $.__views.StatePicker.add($.__views.__alloyId1396);
    setValue ? $.__views.__alloyId1396.addEventListener("click", setValue) : __defers["$.__views.__alloyId1396!click!setValue"] = true;
    $.__views.__alloyId1397 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Washington",
        id: "__alloyId1397"
    });
    $.__views.__alloyId1396.add($.__views.__alloyId1397);
    $.__views.__alloyId1398 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1398"
    });
    $.__views.__alloyId1396.add($.__views.__alloyId1398);
    $.__views.__alloyId1399 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1399"
    });
    $.__views.__alloyId1396.add($.__views.__alloyId1399);
    $.__views.__alloyId1400 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "WV",
        id: "__alloyId1400"
    });
    $.__views.StatePicker.add($.__views.__alloyId1400);
    setValue ? $.__views.__alloyId1400.addEventListener("click", setValue) : __defers["$.__views.__alloyId1400!click!setValue"] = true;
    $.__views.__alloyId1401 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "West Virginia",
        id: "__alloyId1401"
    });
    $.__views.__alloyId1400.add($.__views.__alloyId1401);
    $.__views.__alloyId1402 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1402"
    });
    $.__views.__alloyId1400.add($.__views.__alloyId1402);
    $.__views.__alloyId1403 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1403"
    });
    $.__views.__alloyId1400.add($.__views.__alloyId1403);
    $.__views.__alloyId1404 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "WI",
        id: "__alloyId1404"
    });
    $.__views.StatePicker.add($.__views.__alloyId1404);
    setValue ? $.__views.__alloyId1404.addEventListener("click", setValue) : __defers["$.__views.__alloyId1404!click!setValue"] = true;
    $.__views.__alloyId1405 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Wisconsin",
        id: "__alloyId1405"
    });
    $.__views.__alloyId1404.add($.__views.__alloyId1405);
    $.__views.__alloyId1406 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1406"
    });
    $.__views.__alloyId1404.add($.__views.__alloyId1406);
    $.__views.__alloyId1407 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1407"
    });
    $.__views.__alloyId1404.add($.__views.__alloyId1407);
    $.__views.__alloyId1408 = Ti.UI.createView({
        backgroundColor: "white",
        height: 40,
        value: "WY",
        id: "__alloyId1408"
    });
    $.__views.StatePicker.add($.__views.__alloyId1408);
    setValue ? $.__views.__alloyId1408.addEventListener("click", setValue) : __defers["$.__views.__alloyId1408!click!setValue"] = true;
    $.__views.__alloyId1409 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        textAlign: "left",
        left: 15,
        text: "Wyoming",
        id: "__alloyId1409"
    });
    $.__views.__alloyId1408.add($.__views.__alloyId1409);
    $.__views.__alloyId1410 = Ti.UI.createImageView({
        image: "/images/ic_forward.png",
        right: 0,
        width: 36,
        height: 36,
        id: "__alloyId1410"
    });
    $.__views.__alloyId1408.add($.__views.__alloyId1410);
    $.__views.__alloyId1411 = Ti.UI.createView({
        backgroundColor: "#C0C6D0",
        width: Ti.UI.FILL,
        height: 1,
        top: null,
        bottom: 0,
        id: "__alloyId1411"
    });
    $.__views.__alloyId1408.add($.__views.__alloyId1411);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    __defers["$.__views.__alloyId1200!click!setValue"] && $.__views.__alloyId1200.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1204!click!setValue"] && $.__views.__alloyId1204.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1208!click!setValue"] && $.__views.__alloyId1208.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1212!click!setValue"] && $.__views.__alloyId1212.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1216!click!setValue"] && $.__views.__alloyId1216.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1220!click!setValue"] && $.__views.__alloyId1220.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1224!click!setValue"] && $.__views.__alloyId1224.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1228!click!setValue"] && $.__views.__alloyId1228.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1232!click!setValue"] && $.__views.__alloyId1232.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1236!click!setValue"] && $.__views.__alloyId1236.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1240!click!setValue"] && $.__views.__alloyId1240.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1244!click!setValue"] && $.__views.__alloyId1244.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1248!click!setValue"] && $.__views.__alloyId1248.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1252!click!setValue"] && $.__views.__alloyId1252.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1256!click!setValue"] && $.__views.__alloyId1256.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1260!click!setValue"] && $.__views.__alloyId1260.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1264!click!setValue"] && $.__views.__alloyId1264.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1268!click!setValue"] && $.__views.__alloyId1268.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1272!click!setValue"] && $.__views.__alloyId1272.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1276!click!setValue"] && $.__views.__alloyId1276.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1280!click!setValue"] && $.__views.__alloyId1280.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1284!click!setValue"] && $.__views.__alloyId1284.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1288!click!setValue"] && $.__views.__alloyId1288.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1292!click!setValue"] && $.__views.__alloyId1292.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1296!click!setValue"] && $.__views.__alloyId1296.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1300!click!setValue"] && $.__views.__alloyId1300.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1304!click!setValue"] && $.__views.__alloyId1304.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1308!click!setValue"] && $.__views.__alloyId1308.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1312!click!setValue"] && $.__views.__alloyId1312.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1316!click!setValue"] && $.__views.__alloyId1316.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1320!click!setValue"] && $.__views.__alloyId1320.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1324!click!setValue"] && $.__views.__alloyId1324.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1328!click!setValue"] && $.__views.__alloyId1328.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1332!click!setValue"] && $.__views.__alloyId1332.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1336!click!setValue"] && $.__views.__alloyId1336.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1340!click!setValue"] && $.__views.__alloyId1340.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1344!click!setValue"] && $.__views.__alloyId1344.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1348!click!setValue"] && $.__views.__alloyId1348.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1352!click!setValue"] && $.__views.__alloyId1352.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1356!click!setValue"] && $.__views.__alloyId1356.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1360!click!setValue"] && $.__views.__alloyId1360.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1364!click!setValue"] && $.__views.__alloyId1364.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1368!click!setValue"] && $.__views.__alloyId1368.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1372!click!setValue"] && $.__views.__alloyId1372.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1376!click!setValue"] && $.__views.__alloyId1376.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1380!click!setValue"] && $.__views.__alloyId1380.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1384!click!setValue"] && $.__views.__alloyId1384.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1388!click!setValue"] && $.__views.__alloyId1388.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1392!click!setValue"] && $.__views.__alloyId1392.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1396!click!setValue"] && $.__views.__alloyId1396.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1400!click!setValue"] && $.__views.__alloyId1400.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1404!click!setValue"] && $.__views.__alloyId1404.addEventListener("click", setValue);
    __defers["$.__views.__alloyId1408!click!setValue"] && $.__views.__alloyId1408.addEventListener("click", setValue);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;