function Controller() {
    function selectOption(_event) {
        APP.popOut();
        switch (_event.index) {
          case 0:
            APP.openWindow({
                controller: "MyNeighborhoods/MyNeighborhoods",
                controllerParams: {
                    pknmessage: args.params.data.pknmessage,
                    refButton: args.params.refButton
                }
            });
            break;

          case 1:
            if ("N" == args.params.data.UserFollowing) var isFollowing = "Y"; else var isFollowing = "N";
            var dataTemp = {
                url: L("ws_follow"),
                type: "GET",
                format: "JSON",
                data: {
                    atoken: APP.getToken({
                        openLogin: false
                    }) ? APP.getToken({
                        openLogin: false
                    }) : "",
                    groupID: args.params.groupID,
                    follow: isFollowing,
                    pknmessage: args.params.data.pknmessage
                }
            };
            APP.http.request(dataTemp, function(_result) {
                if (1 == _result._result) if (0 == _result._data.errorcode) if ("Y" == isFollowing) {
                    _event.source.title = "Unfollow";
                    args.params.data.UserFollowing = "Y";
                } else {
                    _event.source.title = "Follow";
                    args.params.data.UserFollowing = "N";
                } else alert(_result._data.message); else alert("Message could not be sent, please try again.");
            });
            break;

          case 2:
            sendCommentsActions("likeperson", "You have Liked this person");
            break;

          case 3:
            var notificationDialog = Ti.UI.createAlertDialog({
                title: "Flag",
                message: "Are you sure you want to FLAG this message’s content? \n AlertID support will be notified to take a look at this thread and potentially remove it.",
                buttonNames: [ "YES", "NO" ]
            });
            notificationDialog.addEventListener("click", function(e) {
                0 === e.index && sendCommentsActions("flag", "You have Flagged this message");
            });
            notificationDialog.show();
            break;

          case 4:
            var notificationDialog = Ti.UI.createAlertDialog({
                title: "Hide",
                message: "Are you sure you want to HIDE this message?",
                buttonNames: [ "YES", "NO" ]
            });
            notificationDialog.addEventListener("click", function(e) {
                0 === e.index && sendCommentsActions("hide", "Message hidden");
            });
            notificationDialog.show();
            break;

          case 5:
            var notificationDialog = Ti.UI.createAlertDialog({
                title: "Block Person",
                message: "Are you sure you want to BLOCK this person? \n You will no longer see messages from this person.",
                buttonNames: [ "YES", "NO" ]
            });
            notificationDialog.addEventListener("click", function(e) {
                0 === e.index && sendCommentsActions("blockperson", "Person blocked");
            });
            notificationDialog.show();
            break;

          case 6:
            var notificationDialog = Ti.UI.createAlertDialog({
                title: "Remove",
                message: "Are you sure you want to remove this message?",
                buttonNames: [ "YES", "NO" ]
            });
            notificationDialog.addEventListener("click", function(e) {
                0 === e.index && sendCommentsActions("remove", "Message removed");
            });
            notificationDialog.show();
            break;

          case 7:
            var e_body = "This was just posted in our neighborhood discussion and I thought you might be interested: \n ";
            e_body += args.params.isGroup ? "https://alertid.com/v3/myhome.asp?gORn=2&vn=" + args.params.groupID + "&athread=" + args.params.data.pknmessage + " \n \n" : "https://alertid.com/v3/myhome.asp?gORn=1&athread=" + args.params.data.pknmessage + " \n \n";
            var emailDialog = Ti.UI.createEmailDialog();
            emailDialog.subject = "This may be interest for you";
            emailDialog.messageBody = e_body;
            emailDialog.open();
        }
    }
    function sendCommentsActions(_action, _msg) {
        var dataTemp = {
            url: L("ws_commaction"),
            type: "GET",
            format: "JSON",
            data: {
                atoken: APP.getToken({
                    openLogin: false
                }) ? APP.getToken({
                    openLogin: false
                }) : "",
                groupID: args.params.groupID,
                pknmessage: args.params.data.pknmessage,
                action: _action,
                nmfamilyID: args.params.data.pkFamily
            }
        };
        APP.http.request(dataTemp, function(_result) {
            if (1 == _result._result) if (0 == _result._data.errorcode) {
                "hide" == _action || "remove" == _action ? APP.currentController.removeComment(args.params.view) : "blockperson" == _action && APP.currentController.reloadMessages();
                alert(_msg);
            } else alert(_result._data.message); else alert("Internet connection error, please try again.");
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "MyNeighborhoods/Options";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.Options = Ti.UI.createView({
        id: "Options"
    });
    $.__views.Options && $.addTopLevelView($.__views.Options);
    $.__views.tblOptions = Ti.UI.createTableView({
        id: "tblOptions"
    });
    $.__views.Options.add($.__views.tblOptions);
    selectOption ? $.__views.tblOptions.addEventListener("click", selectOption) : __defers["$.__views.tblOptions!click!selectOption"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("/core");
    var args = arguments[0] || {};
    $.tblOptions.setData([ {
        color: "black",
        title: "View",
        font: {
            fontSize: 15
        }
    }, {
        color: "black",
        title: "Y" == args.params.data.UserFollowing ? "Unfollow" : "Follow",
        font: {
            fontSize: 15
        }
    }, {
        color: "black",
        title: "Like Person",
        font: {
            fontSize: 15
        }
    }, {
        color: "black",
        title: "Flag",
        font: {
            fontSize: 15
        }
    }, {
        color: "black",
        title: "Hide",
        font: {
            fontSize: 15
        }
    }, {
        color: "black",
        title: "Block Person",
        font: {
            fontSize: 15
        }
    }, {
        color: "black",
        title: "Remove",
        font: {
            fontSize: 15
        }
    }, {
        color: "black",
        title: "Share",
        font: {
            fontSize: 15
        }
    } ]);
    __defers["$.__views.tblOptions!click!selectOption"] && $.__views.tblOptions.addEventListener("click", selectOption);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;