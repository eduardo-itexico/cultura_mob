function Controller() {
    function actionsClick(e) {
        params.familyListController.clickActions(e.source);
    }
    function loadMember(member) {
        Ti.API.warn("loadMember >>> member:" + JSON.stringify(member));
        if (member) {
            $.nameProfile.setValue(member.f_name);
            $.lastNameProfile.setValue(member.l_name);
            $.midleNameProfile.setValue(member.m_name);
            $.nickProfile.setValue(member.n_name);
            $.birthdayProfile.setValue(member.birthdate);
            $.genderProfile.setValue(member.gender);
            $.heightProfile.setValue(member.height);
            $.weightProfile.setValue(member.weight);
            $.hairProfile.setValue(member.hair);
            $.eyesProfile.setValue(member.eye);
            $.birthCityProfile.setValue(member.birthcity);
            $.glassesProfile.setValue(member.glasses);
            $.identifyingProfile.setValue(member.marks);
            $.address1Profile.setValue(member.address1);
            $.address2Profile.setValue(member.address2);
            $.cityProfile.setValue(member.city);
            $.stateProfile.setValue(member.state);
            $.zipProfile.setValue(member.zip);
            $.homePhoneProfile.setValue(member.h_phone);
            $.cellPhoneProfile.setValue(member.cell_phone);
            $.name1Profile.setValue(member.name1);
            $.phone1Profile.setValue(member.phone1);
            $.name2Profile.setValue(member.name2);
            $.phone2Profile.setValue(member.phone2);
            self.photoMemberURL = member.m_photo;
            self.blobimage = member.blobimage;
            self.type = member.type;
            if (member.blobimage) {
                var file = Ti.Filesystem.createTempFile(Ti.Filesystem.resourcesDirectory);
                file.write(member.blobimage);
                $.photoProfile.image = file.nativePath;
            }
            $.deleteBtn.id_profile = member.id;
            $.shareBtn.id_profile = member.id;
            $.shareBtn.photo = member.m_photo;
            $.shareBtn.blobImage = member.blobimage;
            $.shareBtn.imgType = "";
            $.helpBtn.photo = member.m_photo;
            $.helpBtn.blobImage = member.blobimage;
            $.helpBtn.imgType = "";
            $.helpBtn.id_profile = member.id;
        }
    }
    function saveAction() {
        var insert = {
            token: user_token,
            f_name: $.nameProfile.getValue(),
            l_name: $.lastNameProfile.getValue(),
            m_name: $.midleNameProfile.getValue(),
            n_name: $.nickProfile.getValue(),
            birthdate: $.birthdayProfile.getValue(),
            gender: $.genderProfile.getValue(),
            height: $.heightProfile.getValue(),
            weight: $.weightProfile.getValue(),
            hair: $.hairProfile.getValue(),
            eye: $.eyesProfile.getValue(),
            birthcity: $.birthCityProfile.getValue(),
            glasses: $.glassesProfile.getValue(),
            marks: $.identifyingProfile.getValue(),
            address1: $.address1Profile.getValue(),
            address2: $.address2Profile.getValue(),
            city: $.cityProfile.getValue(),
            state: $.stateProfile.getValue(),
            zip: $.zipProfile.getValue(),
            h_phone: $.homePhoneProfile.getValue(),
            cell_phone: $.cellPhoneProfile.getValue(),
            name1: $.name1Profile.getValue(),
            phone1: $.phone1Profile.getValue(),
            name2: $.name2Profile.getValue(),
            phone2: $.phone2Profile.getValue(),
            m_photo: self.photoMemberURL,
            blobimage: self.blobimage,
            type: APP.USER_MEMBER
        };
        id_profile && (insert.id = id_profile);
        params.familyListController.saveMember(insert, action == DB.UPDATE ? callbackUpdatedMember : callbackAddedMember);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "FamilyWallet/ProfileFamily";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.mainContainerProfile = Ti.UI.createScrollView({
        layout: "horizontal",
        left: 5,
        right: 5,
        contentWidth: Ti.UI.FILL,
        contentHeight: Ti.UI.SIZE,
        backgroundColor: "#F9F9F9",
        id: "mainContainerProfile"
    });
    $.__views.mainContainerProfile && $.addTopLevelView($.__views.mainContainerProfile);
    $.__views.__alloyId21 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_TOP,
        id: "__alloyId21"
    });
    $.__views.mainContainerProfile.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        top: 5,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId22"
    });
    $.__views.mainContainerProfile.add($.__views.__alloyId22);
    $.__views.avatar_view = Ti.UI.createView({
        width: 125,
        height: 125,
        top: 5,
        id: "avatar_view"
    });
    $.__views.__alloyId22.add($.__views.avatar_view);
    $.__views.__alloyId23 = Ti.UI.createScrollView({
        width: 125,
        height: 125,
        id: "__alloyId23"
    });
    $.__views.avatar_view.add($.__views.__alloyId23);
    $.__views.photoProfile = Ti.UI.createImageView({
        image: "/images/ic_addphoto.png",
        width: 125,
        id: "photoProfile"
    });
    $.__views.__alloyId23.add($.__views.photoProfile);
    $.__views.avatar_mask = Ti.UI.createImageView({
        width: 125,
        height: 125,
        image: "/images/im_mask_large.png",
        id: "avatar_mask"
    });
    $.__views.avatar_view.add($.__views.avatar_mask);
    $.__views.__alloyId24 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId24"
    });
    $.__views.__alloyId22.add($.__views.__alloyId24);
    $.__views.actionsContainer = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "actionsContainer"
    });
    $.__views.__alloyId24.add($.__views.actionsContainer);
    actionsClick ? $.__views.actionsContainer.addEventListener("click", actionsClick) : __defers["$.__views.actionsContainer!click!actionsClick"] = true;
    $.__views.deleteBtn = Ti.UI.createButton({
        backgroundSelectedImage: "/images/ic_trash_pressed.png",
        backgroundImage: "/images/ic_trash.png",
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
        right: 110,
        id: "deleteBtn",
        id_profile: ""
    });
    $.__views.actionsContainer.add($.__views.deleteBtn);
    $.__views.helpBtn = Ti.UI.createButton({
        backgroundSelectedImage: "/images/ic_help_pressed.png",
        backgroundImage: "/images/ic_help.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        right: 60,
        width: 36,
        height: 36,
        id: "helpBtn",
        id_profile: ""
    });
    $.__views.actionsContainer.add($.__views.helpBtn);
    $.__views.shareBtn = Ti.UI.createButton({
        backgroundSelectedImage: "/images/ic_undo_pressed.png",
        backgroundImage: "/images/ic_undo.png",
        color: "#17B8E4",
        borderColor: "#18b2e0",
        borderWidth: 0,
        borderRadius: 1,
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14
        },
        right: 10,
        width: 36,
        height: 36,
        id: "shareBtn",
        id_profile: "",
        photo: "",
        blobImage: "",
        imgType: ""
    });
    $.__views.actionsContainer.add($.__views.shareBtn);
    $.__views.nameLbl = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        left: 5,
        top: 5,
        height: 36,
        id: "nameLbl",
        text: "Name"
    });
    $.__views.__alloyId24.add($.__views.nameLbl);
    $.__views.nameProfile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "nameProfile",
        hintText: "Name"
    });
    $.__views.__alloyId24.add($.__views.nameProfile);
    $.__views.midleNameProfile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "midleNameProfile",
        hintText: "Middle Name"
    });
    $.__views.__alloyId24.add($.__views.midleNameProfile);
    $.__views.lastNameProfile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "lastNameProfile",
        hintText: "Last Name"
    });
    $.__views.__alloyId24.add($.__views.lastNameProfile);
    $.__views.__alloyId25 = Ti.UI.createView({
        top: 5,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId25"
    });
    $.__views.mainContainerProfile.add($.__views.__alloyId25);
    $.__views.nickProfile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "nickProfile",
        hintText: "Nick Name"
    });
    $.__views.__alloyId25.add($.__views.nickProfile);
    $.__views.descriptionLbl = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        left: 5,
        top: 5,
        height: 36,
        id: "descriptionLbl",
        text: "Description"
    });
    $.__views.__alloyId25.add($.__views.descriptionLbl);
    $.__views.birthdayProfile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "birthdayProfile",
        hintText: "Birthdate"
    });
    $.__views.__alloyId25.add($.__views.birthdayProfile);
    $.__views.genderProfile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "genderProfile",
        hintText: "Gender"
    });
    $.__views.__alloyId25.add($.__views.genderProfile);
    $.__views.heightProfile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "heightProfile",
        hintText: "Height"
    });
    $.__views.__alloyId25.add($.__views.heightProfile);
    $.__views.hairProfile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "hairProfile",
        hintText: "Hair color"
    });
    $.__views.__alloyId25.add($.__views.hairProfile);
    $.__views.weightProfile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "weightProfile",
        hintText: "Weight"
    });
    $.__views.__alloyId25.add($.__views.weightProfile);
    $.__views.eyesProfile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "eyesProfile",
        hintText: "Eye color"
    });
    $.__views.__alloyId25.add($.__views.eyesProfile);
    $.__views.birthCityProfile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "birthCityProfile",
        hintText: "Birth City"
    });
    $.__views.__alloyId25.add($.__views.birthCityProfile);
    $.__views.glassesProfile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "glassesProfile",
        hintText: "Glasses"
    });
    $.__views.__alloyId25.add($.__views.glassesProfile);
    $.__views.identifyingProfile = Ti.UI.createTextArea({
        textAlign: "left",
        color: "#333",
        font: {
            fontSize: 14
        },
        id: "identifyingProfile"
    });
    $.__views.__alloyId25.add($.__views.identifyingProfile);
    $.__views.contactLbl = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        left: 5,
        top: 5,
        height: 36,
        id: "contactLbl",
        text: "Contact Information"
    });
    $.__views.__alloyId25.add($.__views.contactLbl);
    $.__views.address1Profile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "address1Profile",
        hintText: "Address 1"
    });
    $.__views.__alloyId25.add($.__views.address1Profile);
    $.__views.address2Profile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "address2Profile",
        hintText: "Address 2"
    });
    $.__views.__alloyId25.add($.__views.address2Profile);
    $.__views.cityProfile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "cityProfile",
        hintText: "City"
    });
    $.__views.__alloyId25.add($.__views.cityProfile);
    $.__views.stateProfile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "stateProfile",
        hintText: "State"
    });
    $.__views.__alloyId25.add($.__views.stateProfile);
    $.__views.zipProfile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "zipProfile",
        hintText: "Zip"
    });
    $.__views.__alloyId25.add($.__views.zipProfile);
    $.__views.homePhoneProfile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "homePhoneProfile",
        hintText: "Home Phone"
    });
    $.__views.__alloyId25.add($.__views.homePhoneProfile);
    $.__views.cellPhoneProfile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "cellPhoneProfile",
        hintText: "Cell Phone"
    });
    $.__views.__alloyId25.add($.__views.cellPhoneProfile);
    $.__views.guardianLbl = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        left: 5,
        top: 5,
        height: 36,
        id: "guardianLbl",
        text: "Guardian Information"
    });
    $.__views.__alloyId25.add($.__views.guardianLbl);
    $.__views.name1Profile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "name1Profile",
        hintText: "Name 1"
    });
    $.__views.__alloyId25.add($.__views.name1Profile);
    $.__views.phone1Profile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "phone1Profile",
        hintText: "Phone "
    });
    $.__views.__alloyId25.add($.__views.phone1Profile);
    $.__views.name2Profile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "name2Profile",
        hintText: "Name 2"
    });
    $.__views.__alloyId25.add($.__views.name2Profile);
    $.__views.phone2Profile = Ti.UI.createTextField({
        backgroundImage: "/images/textbox_flex.png",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left",
        height: 36,
        paddingLeft: 10,
        color: "#333",
        font: {
            fontSize: 14
        },
        width: "100%",
        top: 10,
        id: "phone2Profile",
        hintText: "Phone "
    });
    $.__views.__alloyId25.add($.__views.phone2Profile);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var DB = require("/db");
    var args = arguments[0] || {};
    var params = args.params;
    var action = DB.INSERT;
    var id_profile = params.id_profile;
    DB.init(function() {});
    args.toolBar.setTitle("Detail Member");
    args.toolBar.setCloseAction(function() {
        "" != $.nameProfile.getValue() && saveAction();
        return true;
    });
    var args = arguments[0] || {};
    APP.fixSizeIos7();
    var saveButton = Ti.UI.createButton({
        title: "Save",
        right: 5,
        backgroundImage: "transparent"
    });
    var view = Ti.UI.createView({
        width: "100%"
    });
    var user_token = APP.getToken({
        openLogin: true
    });
    var callbackAddedMember = null;
    var callbackUpdatedMember = null;
    var self = null;
    self = this;
    view.add(saveButton);
    callbackAddedMember = function() {
        APP.closeWindow();
        params.familyListController.loadUsers();
    };
    callbackUpdatedMember = function() {
        APP.closeWindow();
        params.familyListController.loadUsers();
    };
    args.toolBar.addCustomView(saveButton);
    if (params.member) {
        action = DB.UPDATE;
        loadMember(params.member);
    } else $.actionsContainer.visible = false;
    saveButton.addEventListener("click", saveAction);
    $.avatar_view.addEventListener("click", function() {
        params.familyListController.showAndLoadImage(self, $.photoProfile);
    });
    __defers["$.__views.actionsContainer!click!actionsClick"] && $.__views.actionsContainer.addEventListener("click", actionsClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;