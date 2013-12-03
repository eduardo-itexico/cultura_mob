function Controller() {
    function loadUsers() {
        var members = DB.getMembers(user_token, function() {});
        Utils.removeChildren($.scrollFamily);
        if (members && members.length > 0) {
            $.scrollFamily.add(Ti.UI.createView({
                height: 44 + APP.fixSizeIos7()
            }));
            for (var i = 0; members.length > i; i++) {
                var row = Alloy.createController("FamilyWallet/RowFamily", {
                    member: members[i]
                }).getView();
                $.scrollFamily.add(row);
            }
            $.scrollFamily.add(Alloy.createController("FamilyWallet/Caption").getView());
        } else {
            var row = Alloy.createController("FamilyWallet/EmptyMembers").getView();
            $.scrollFamily.add(row);
        }
    }
    function initializeView() {
        user_token = Ti.App.Properties.getString("user_token", false);
        loadUsers();
    }
    function updateView() {
        APP.headerbar.removeAllCustomViews();
        APP.headerbar.setLeftButton(0, false);
        APP.headerbar.setRightButton(0, false);
        APP.headerbar.setLeftButton(APP.OPENMENU, true);
        APP.headerbar.setTitle("My Family Wallet");
        user_token = Ti.App.Properties.getString("user_token", false);
        loadUsers();
    }
    function showProfile(e) {
        var id = "";
        var member = null;
        if (e.source && e.source.id_profile) {
            id = e.source.id_profile;
            member = DB.getMember(id, function() {});
            member && (member = member[0]);
            action = DB.UPDATE;
            var params = {
                id_profile: id,
                familyListController: familyListController,
                member: member
            };
            openDetailView(member.type == APP.USER_MEMBER ? "FamilyWallet/ProfileFamily" : "FamilyWallet/PetFamily", params);
        } else if ("plusBtn" == e.source.id) {
            action = DB.INSERT;
            var dialog = Titanium.UI.createOptionDialog({
                options: [ "Member", "Pet", "Cancel" ],
                cancel: 2
            });
            dialog.show();
            dialog.addEventListener("click", function(e) {
                APP.getToken({
                    openLogin: true,
                    callback: function() {
                        0 == e.index ? openDetailView("FamilyWallet/ProfileFamily", {
                            id_profile: id,
                            familyListController: familyListController,
                            member: member
                        }) : 1 == e.index && openDetailView("FamilyWallet/PetFamily", {
                            id_profile: id,
                            familyListController: familyListController,
                            member: member
                        });
                        return true;
                    }
                });
            });
        }
    }
    function openDetailView(controller, params) {
        APP.openWindow({
            controller: controller,
            controllerParams: params
        });
    }
    function showAndLoadImage(objectController, imageView) {
        var dialog = Titanium.UI.createOptionDialog({
            options: [ "Camera", "Gallery", "Cancel" ],
            cancel: 2
        });
        dialog.show();
        dialog.addEventListener("click", function(e) {
            0 == e.index ? Titanium.Media.showCamera({
                allowEditing: true,
                success: function(event) {
                    var ImageFactory = require("ti.imagefactory");
                    var _image = event.media;
                    var _height = _image.height;
                    var _width = _image.width;
                    var _type = _image.mimeType.split("/").pop();
                    Ti.API.info("\n\nTitanium.Media.openPhotoGallery >>> _image:" + _image);
                    Ti.API.warn("Titanium.Media.openPhotoGallery >>> _image:" + JSON.stringify(_image));
                    if (_image.height > _image.width) {
                        if (_image.height >= 480) {
                            _height = 480;
                            _width = 48e3 / _image.height * _image.width / 100;
                        }
                    } else if (_image.width >= 480) {
                        _width = 480;
                        _height = 48e3 / _image.width * _image.height / 100;
                    }
                    _image = ImageFactory.imageAsResized(_image, {
                        width: _width,
                        height: _height
                    });
                    Ti.API.info("\n\nTitanium.Media.openPhotoGallery >>> _image:" + _image);
                    Ti.API.warn("Titanium.Media.openPhotoGallery >>> _image:" + JSON.stringify(_image));
                    var _date = new Date();
                    var _time = _date.getTime();
                    var _base = Titanium.Filesystem.applicationDataDirectory;
                    var _filename = "alert_id_" + _time + "." + _type;
                    var _file = Titanium.Filesystem.getFile(_base, _filename);
                    _file.write(_image);
                    imageView.image = "/images/im_mask_large.png";
                    imageView.backgroundImage = _base + _filename;
                    objectController.photoMemberURL = _base + _filename;
                    objectController.blobimage = _image;
                    return true;
                },
                cancel: function() {},
                error: function(error) {
                    var a = Titanium.UI.createAlertDialog({
                        title: "Camera"
                    });
                    error.code == Titanium.Media.NO_CAMERA ? a.setMessage("Device does not have camera capabilities") : a.setMessage("Unexpected error: " + error.code);
                    a.show();
                },
                allowImageEditing: true,
                saveToPhotoGallery: true
            }) : 1 == e.index && Titanium.Media.openPhotoGallery({
                allowEditing: true,
                success: function(event) {
                    if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                        var ImageFactory = require("ti.imagefactory");
                        var _image = event.media;
                        var _height = _image.height;
                        var _width = _image.width;
                        var _type = _image.mimeType.split("/").pop();
                        Ti.API.info("\n\nTitanium.Media.openPhotoGallery >>> _image:" + _image);
                        Ti.API.warn("Titanium.Media.openPhotoGallery >>> _image:" + JSON.stringify(_image));
                        if (_image.height > _image.width) {
                            if (_image.height >= 480) {
                                _height = 480;
                                _width = 48e3 / _image.height * _image.width / 100;
                            }
                        } else if (_image.width >= 480) {
                            _width = 480;
                            _height = 48e3 / _image.width * _image.height / 100;
                        }
                        _image = ImageFactory.imageAsResized(_image, {
                            width: _width,
                            height: _height
                        });
                        Ti.API.info("\n\nTitanium.Media.openPhotoGallery >>> _image:" + _image);
                        Ti.API.warn("Titanium.Media.openPhotoGallery >>> _image:" + JSON.stringify(_image));
                        var _date = new Date();
                        var _time = _date.getTime();
                        var _base = Titanium.Filesystem.applicationDataDirectory;
                        var _filename = "alert_id_" + _time + "." + _type;
                        var _file = Titanium.Filesystem.getFile(_base, _filename);
                        _file.write(_image);
                        imageView.image = "/images/im_mask_large.png";
                        imageView.backgroundImage = _base + _filename;
                        objectController.photoMemberURL = _base + _filename;
                        objectController.blobimage = _image;
                    }
                    return true;
                },
                cancel: function() {},
                error: function() {},
                allowEditing: false
            });
        });
    }
    function clickActions(source) {
        Ti.API.warn("clickActions >>> source:" + JSON.stringify(source));
        switch (source.id) {
          case "deleteBtn":
            var notificationDialog = Ti.UI.createAlertDialog({
                title: "Confirmation",
                message: "Are you sure you want to delete this member?",
                buttonNames: [ "Yes", "No" ]
            });
            notificationDialog.addEventListener("click", function(e) {
                if (0 === e.index) {
                    var id_profile = source.id_profile;
                    if (id_profile) {
                        DB.deleteRecord(id_profile, function() {
                            alert("Member deleted!");
                        });
                        APP.closeWindow();
                        loadUsers();
                    }
                }
            });
            notificationDialog.show();
            break;

          case "helpBtn":
            APP.openWindow({
                controller: "FamilyWallet/Emergency",
                controllerParams: {}
            });
            break;

          case "shareBtn":
            var dialog = Titanium.UI.createOptionDialog({
                options: [ "Send Via Email", "Send to My Neighborhood", "Cancel" ],
                cancel: 2
            });
            var photo = source.photo;
            var blobImage = source.blobImage;
            var imgType = source.imgType;
            var id_profile = source.id_profile;
            dialog.show();
            dialog.addEventListener("click", function(e) {
                var member = DB.getMember(id_profile, function() {});
                0 == e.index ? sendMail(photo, blobImage, imgType, member[0]) : 1 == e.index && sendCommunity(member[0]);
            });
        }
    }
    function sendMail(photoMember, blobImage, imgType, member) {
        Ti.API.warn("sendMail >>> photoMember,blobImage,imgType,member:" + JSON.stringify([ photoMember, blobImage, imgType, member ]));
        var e_body = "<type your message> \n \n ";
        if (1 == member.type) {
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
            var emailDialog = Ti.UI.createEmailDialog();
            emailDialog.subject = "Missing Family Member Information";
        } else {
            e_body += "Pet's Name: " + member.f_name + " \n ";
            e_body += "Type: " + member.l_name + " \n ";
            e_body += "Breed: " + member.m_name + " \n ";
            e_body += "Age: " + member.n_name + " \n ";
            e_body += "Sex: " + member.birthdate + " \n ";
            e_body += "Color: " + member.gender + " \n ";
            e_body += "Weight: " + member.weight + " \n ";
            e_body += "Micropchip: " + member.height + " \n ";
            e_body += "Markings: " + member.hair + " \n ";
            e_body += "Special Needs or Handling Instructions: " + member.marks + " \n ";
            e_body += "\n Owner Information \n ";
            e_body += "First Name: " + member.name1 + " \n ";
            e_body += "Last Name: " + member.name2 + " \n ";
            e_body += "Address: " + member.address1 + " \n ";
            e_body += "Home Phone: " + member.h_phone + " \n ";
            e_body += "Cell Phone: " + member.cell_phone + " \n ";
            e_body += "\n Veterinary Information \n ";
            e_body += "Veteriniarian: " + member.eye + " \n ";
            e_body += "Address: " + member.address2 + " \n ";
            e_body += "Phone: " + member.phone1 + " \n ";
            var emailDialog = Ti.UI.createEmailDialog();
            emailDialog.subject = "Missing Family Member Information";
            photoMember = member.m_photo;
            photoMember && photoMember.length > 0 && (blobImage = Ti.Filesystem.getFile(photoMember));
        }
        if (photoMember && photoMember.length > 0) {
            var d = new Date();
            var d_now = d.getTime();
            var imgType = photoMember.split(".").pop();
            var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, "alert_id_" + d_now + "." + imgType);
            f.write(blobImage);
            var e_image = Titanium.Filesystem.applicationDataDirectory + "alert_id_" + d_now + "." + imgType;
            Ti.API.warn("sendMail >>> e_image:" + e_image);
            var e_image = Ti.Filesystem.getFile(e_image);
            emailDialog.addAttachment(e_image);
        }
        emailDialog.messageBody = e_body;
        emailDialog.open();
    }
    function sendCommunity(member) {
        APP.popUp({
            controller: "FamilyWallet/SendCommunity",
            controllerParams: {
                member: member
            }
        });
    }
    function saveMember(insertObject, callback) {
        action == DB.INSERT ? DB.insertRecord(insertObject, callback) : DB.updateRecord(insertObject, callback);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "FamilyWallet/FamilyWallet";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.FamilyWallet = Ti.UI.createView({
        id: "FamilyWallet"
    });
    $.__views.FamilyWallet && $.addTopLevelView($.__views.FamilyWallet);
    $.__views.scrollFamily = Ti.UI.createScrollView({
        backgroundColor: "#F9F9F9",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        layout: "vertical",
        id: "scrollFamily"
    });
    $.__views.FamilyWallet.add($.__views.scrollFamily);
    showProfile ? $.__views.scrollFamily.addEventListener("click", showProfile) : __defers["$.__views.scrollFamily!click!showProfile"] = true;
    $.__views.plusBtn = Ti.UI.createImageView({
        left: 10,
        bottom: Alloy.Globals.CONTENT_BOTTOM,
        width: 38,
        height: 38,
        image: "/images/bt_add.png",
        id: "plusBtn"
    });
    $.__views.FamilyWallet.add($.__views.plusBtn);
    showProfile ? $.__views.plusBtn.addEventListener("click", showProfile) : __defers["$.__views.plusBtn!click!showProfile"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var DB = require("/db");
    var Utils = require("/utils");
    arguments[0] || {};
    var familyListController = this;
    var user_token = Ti.App.Properties.getString("user_token", false);
    var action = DB.INSERT;
    DB.init(function() {});
    loadUsers();
    exports.loadUsers = loadUsers;
    exports.showAndLoadImage = showAndLoadImage;
    exports.saveMember = saveMember;
    exports.clickActions = clickActions;
    exports.updateView = updateView;
    exports.initializeView = initializeView;
    __defers["$.__views.scrollFamily!click!showProfile"] && $.__views.scrollFamily.addEventListener("click", showProfile);
    __defers["$.__views.plusBtn!click!showProfile"] && $.__views.plusBtn.addEventListener("click", showProfile);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;