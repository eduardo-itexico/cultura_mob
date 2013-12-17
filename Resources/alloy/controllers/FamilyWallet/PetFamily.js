function Controller() {
    function loadMember(member) {
        if (member) {
            $.nameProfile.setValue(member.f_name);
            $.typeProfile.setValue(member.l_name);
            $.breedProfile.setValue(member.m_name);
            $.ageProfile.setValue(member.n_name);
            $.sexProfile.setValue(member.birthdate);
            $.colorProfile.setValue(member.gender);
            $.microchipProfile.setValue(member.height);
            $.weightProfile.setValue(member.weight);
            $.identifyingProfile.setValue(member.marks);
            $.specialsProfile.setValue(member.hair);
            $.firstNameProfile.setValue(member.name1);
            $.lastNameProfile.setValue(member.name2);
            $.addressOwnerProfile.setValue(member.address1);
            $.homePhoneProfile.setValue(member.h_phone);
            $.cellPhoneProfile.setValue(member.cell_phone);
            $.veterinarianProfile.setValue(member.eye);
            $.addressVeterinarianProfile.setValue(member.address2);
            $.phoneVeterinarianProfile.setValue(member.phone1);
            self.photoMemberURL = member.m_photo;
            self.blobimage = member.blobimage;
            self.type = member.type;
            if (member.blobimage) {
                $.photoProfile.image = "/images/im_mask_large.png";
                var file = Ti.Filesystem.createTempFile(Ti.Filesystem.resourcesDirectory);
                file.write(member.blobimage);
                $.photoProfile.image = file.nativePath;
            }
            $.deleteBtn.id_profile = member.id;
            $.shareBtn.id_profile = member.id;
            $.helpBtn.photo = member.m_photo;
            $.helpBtn.blobImage = member.blobimage;
            $.helpBtn.imgType = "";
            $.helpBtn.id_profile = member.id;
        }
    }
    function actionsClick(e) {
        params.familyListController.clickActions(e.source);
    }
    function saveAction() {
        var insert = {
            token: user_token,
            f_name: $.nameProfile.getValue(),
            l_name: $.typeProfile.getValue(),
            m_name: $.breedProfile.getValue(),
            n_name: $.ageProfile.getValue(),
            birthdate: $.sexProfile.getValue(),
            gender: $.colorProfile.getValue(),
            height: $.microchipProfile.getValue(),
            weight: $.weightProfile.getValue(),
            marks: $.identifyingProfile.getValue(),
            hair: $.specialsProfile.getValue(),
            name1: $.firstNameProfile.getValue(),
            name2: $.lastNameProfile.getValue(),
            address1: $.addressOwnerProfile.getValue(),
            h_phone: $.homePhoneProfile.getValue(),
            cell_phone: $.cellPhoneProfile.getValue(),
            eye: $.veterinarianProfile.getValue(),
            address2: $.addressVeterinarianProfile.getValue(),
            phone1: $.phoneVeterinarianProfile.getValue(),
            m_photo: self.photoMemberURL,
            blobimage: self.blobimage,
            type: APP.PET_MEMBER
        };
        id_profile && (insert.id = id_profile);
        params.familyListController.saveMember(insert, action == DB.UPDATE ? callbackUpdatedMember : callbackAddedMember);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "FamilyWallet/PetFamily";
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
    $.__views.__alloyId16 = Ti.UI.createView({
        height: Alloy.Globals.CONTENT_TOP,
        id: "__alloyId16"
    });
    $.__views.mainContainerProfile.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createView({
        top: 5,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId17"
    });
    $.__views.mainContainerProfile.add($.__views.__alloyId17);
    $.__views.avatar_view = Ti.UI.createView({
        width: 125,
        height: 125,
        top: 5,
        id: "avatar_view"
    });
    $.__views.__alloyId17.add($.__views.avatar_view);
    $.__views.__alloyId18 = Ti.UI.createScrollView({
        width: 125,
        height: 125,
        id: "__alloyId18"
    });
    $.__views.avatar_view.add($.__views.__alloyId18);
    $.__views.photoProfile = Ti.UI.createImageView({
        image: "/images/ic_addphoto.png",
        width: 125,
        id: "photoProfile"
    });
    $.__views.__alloyId18.add($.__views.photoProfile);
    $.__views.avatar_mask = Ti.UI.createImageView({
        width: 125,
        height: 125,
        image: "/images/im_mask_large.png",
        id: "avatar_mask"
    });
    $.__views.avatar_view.add($.__views.avatar_mask);
    $.__views.__alloyId19 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId19"
    });
    $.__views.__alloyId17.add($.__views.__alloyId19);
    $.__views.actionsContainer = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "actionsContainer"
    });
    $.__views.__alloyId19.add($.__views.actionsContainer);
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
        height: 35,
        id: "nameLbl",
        text: "Pet's Name"
    });
    $.__views.__alloyId19.add($.__views.nameLbl);
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
    $.__views.__alloyId19.add($.__views.nameProfile);
    $.__views.typeProfile = Ti.UI.createTextField({
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
        id: "typeProfile",
        hintText: "Type (Dog,Cat, Other)"
    });
    $.__views.__alloyId19.add($.__views.typeProfile);
    $.__views.breedProfile = Ti.UI.createTextField({
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
        id: "breedProfile",
        hintText: "Breed"
    });
    $.__views.__alloyId19.add($.__views.breedProfile);
    $.__views.__alloyId20 = Ti.UI.createView({
        top: 5,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId20"
    });
    $.__views.mainContainerProfile.add($.__views.__alloyId20);
    $.__views.ageProfile = Ti.UI.createTextField({
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
        id: "ageProfile",
        hintText: "Age"
    });
    $.__views.__alloyId20.add($.__views.ageProfile);
    $.__views.sexProfile = Ti.UI.createTextField({
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
        id: "sexProfile",
        hintText: "Sex (M/F)"
    });
    $.__views.__alloyId20.add($.__views.sexProfile);
    $.__views.colorProfile = Ti.UI.createTextField({
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
        id: "colorProfile",
        hintText: "Color"
    });
    $.__views.__alloyId20.add($.__views.colorProfile);
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
    $.__views.__alloyId20.add($.__views.weightProfile);
    $.__views.microchipProfile = Ti.UI.createTextField({
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
        id: "microchipProfile",
        hintText: "Microchip #"
    });
    $.__views.__alloyId20.add($.__views.microchipProfile);
    $.__views.identifyingProfile = Ti.UI.createTextField({
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
        id: "identifyingProfile",
        hintText: "Markings"
    });
    $.__views.__alloyId20.add($.__views.identifyingProfile);
    $.__views.specialsProfile = Ti.UI.createTextArea({
        textAlign: "left",
        color: "#333",
        font: {
            fontSize: 14
        },
        id: "specialsProfile",
        hintText: "Spec"
    });
    $.__views.__alloyId20.add($.__views.specialsProfile);
    $.__views.contactLbl = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        left: 5,
        top: 5,
        height: 35,
        id: "contactLbl",
        text: "Owner Information"
    });
    $.__views.__alloyId20.add($.__views.contactLbl);
    $.__views.firstNameProfile = Ti.UI.createTextField({
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
        id: "firstNameProfile",
        hintText: "First Name"
    });
    $.__views.__alloyId20.add($.__views.firstNameProfile);
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
    $.__views.__alloyId20.add($.__views.lastNameProfile);
    $.__views.addressOwnerProfile = Ti.UI.createTextField({
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
        id: "addressOwnerProfile",
        hintText: "Address"
    });
    $.__views.__alloyId20.add($.__views.addressOwnerProfile);
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
    $.__views.__alloyId20.add($.__views.homePhoneProfile);
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
    $.__views.__alloyId20.add($.__views.cellPhoneProfile);
    $.__views.guardianLbl = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 14
        },
        left: 5,
        top: 5,
        height: 35,
        id: "guardianLbl",
        text: "Veterinary information"
    });
    $.__views.__alloyId20.add($.__views.guardianLbl);
    $.__views.veterinarianProfile = Ti.UI.createTextField({
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
        id: "veterinarianProfile",
        hintText: "Veterinarian"
    });
    $.__views.__alloyId20.add($.__views.veterinarianProfile);
    $.__views.addressVeterinarianProfile = Ti.UI.createTextField({
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
        id: "addressVeterinarianProfile",
        hintText: "Address"
    });
    $.__views.__alloyId20.add($.__views.addressVeterinarianProfile);
    $.__views.phoneVeterinarianProfile = Ti.UI.createTextField({
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
        id: "phoneVeterinarianProfile",
        hintText: "Phone "
    });
    $.__views.__alloyId20.add($.__views.phoneVeterinarianProfile);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var DB = require("/db");
    var args = arguments[0] || {};
    var params = args.params;
    var id_profile = params.id_profile;
    DB.init(function() {});
    args.toolBar.setTitle("Detail Pet");
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
    var action = DB.INSERT;
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
    if (id_profile) {
        var member = DB.getMember(id_profile, function() {});
        loadMember(member[0]);
        action = DB.UPDATE;
    } else $.actionsContainer.visible = false;
    $.avatar_view.addEventListener("click", function() {
        params.familyListController.showAndLoadImage(self, $.photoProfile);
    });
    saveButton.addEventListener("click", saveAction);
    __defers["$.__views.actionsContainer!click!actionsClick"] && $.__views.actionsContainer.addEventListener("click", actionsClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;