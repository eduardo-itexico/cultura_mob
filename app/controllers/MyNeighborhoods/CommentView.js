// INSTANTIATION
var APP = require("/core");
var args = arguments[0] || {};

// FUNCTIONS
function openNextWindow(){
    if(args.pknmessage == 0){
        APP.openWindow({controller:"MyNeighborhoods/MyNeighborhoods",controllerParams:{pknmessage:args._data.pknmessage,refButton:$.repliesLbl}});
    }
}

function openURL(){
    APP.openWindow({
        controller : 'Widgets/Browser',
        controllerParams : {
            url : args._data.nmURL,
            title: args._data.nmHeadline
        }
    });
}

function goTo(){
    if(args._data.nmHeadline.length > 1){
        openURL();
    }else{
        openNextWindow();
    }
}

function openOptions(){
    if(APP.getToken({openLogin:true}) && APP.popUpController == null) {
        APP.popUp({
            title       : 'Options',
            container : {
                width   : 300,
                height  : 300
            },
            controller  : 'MyNeighborhoods/Options',
            controllerParams : {
                data     : args._data,
                isGroup  : 0,
                groupID  : 0,
                view     : $.commentView,
                refButton:$.repliesLbl,
                callback : function( event ){
                    return true;
                }
            }
        });
    }
}

function likeComment(){
    var isFollowing = "Y";
    var dataTemp = {
    url     : L("ws_follow"),
    type    : 'GET',
    format  : 'JSON',
    data    : {
            atoken      : APP.getToken({openLogin:false})?APP.getToken({openLogin:false}):"",
            groupID     : 0,//args.groupID,
            follow      : isFollowing,
            pknmessage  : args._data.pknmessage
        }
    };
    //Ti.API.info(JSON.stringify(dataTemp));
    APP.http.request(dataTemp,function(_result){
        //Ti.API.info("-->"+JSON.stringify(_result));
        if(_result._result == 1){
            if(_result._data.errorcode == 0){
                if(isFollowing == "Y"){
                    args._data.UserFollowing  = "Y";
                }
                alert("You are now following this thread");
            }else{
                alert(_result._data.message);
                //alert("No messages were found.");
            }
        }else{
            alert("Message could not be sent, please try again.");
        }
        
    });
}

// CODE
//dataTemp.push({picture:App.UI.community.messages_arr[i].fpicture,image:App.UI.community.messages_arr[i].nmFamilyPicture, pknmessage:App.UI.community.messages_arr[i].pknmessage, UserFollowing:App.UI.community.messages_arr[i].UserFollowing, pkFamily:App.UI.community.messages_arr[i].pkFamily, ftoken:App.UI.community.messages_arr[i].ftoken});

/**** / Ti.API.warn( 'CommentView.js >>> args.data:' + JSON.stringify( args._data ) ); /****/
if(args.pknmessage != 0 && args.isFirst){
    $.commentOptions.visible = false;
    $.commentFooter.height = 0;
    
    $.imageUser.image   = (args._data.fpicture.length > 7)?args._data.fpicture : "";
    $.titleLbl.text     = args._data.falias;
    $.subTitleLbl.text  = args._data.nmtimestamp;
    
    $.hrefLbl.visible   = false;
    $.hrefLbl.text      = "";
    
    $.textLbl.text      = args._data.nmessage;
    if(args._data.nmFamilyPicture.length > 7){
        $.commentImage.visible  = true;
        $.commentImage.image    = (args._data.nmFamilyPicture.length > 7)?args._data.nmFamilyPicture : "";
    }
}else if(args.pknmessage != 0){
    $.commentOptions.visible = false;
    $.commentFooter.height = 0;
    
    $.imageUser.image   = (args._data.fpicture1.length > 7)?args._data.fpicture1 : "";
    $.titleLbl.text     = args._data.falias1;
    $.subTitleLbl.text  = args._data.nmtimestamp1;
    
    $.hrefLbl.visible   = false;
    $.hrefLbl.text      = "";
    
    $.textLbl.text      = args._data.nmessage1;
    
    if(args._data.nmFamilyPicture1.length > 7){
        $.commentImage.visible  = true;
        $.commentImage.image    = (args._data.nmFamilyPicture1.length > 7)?args._data.nmFamilyPicture1 : "";
    }
}else{
    $.imageUser.image   = (args._data.fpicture.length > 7)?args._data.fpicture : "";
    $.titleLbl.text     = args._data.falias;
    $.subTitleLbl.text  = args._data.nmlatestdate;
    if(args._data.nmHeadline.length > 1){
        $.hrefLbl.visible   = true;
        //$.hrefLbl.text      = args._data.nmHeadline;
    }
    $.textLbl.color     = (args._data.AlertMessage == "Y")?"red":"#333";
    $.textLbl.text      = args._data.nmessage;
    if(args._data.nmFamilyPicture.length > 7){
        $.commentImage.visible  = true;
        $.commentImage.image    = (args._data.nmFamilyPicture.length > 7)?args._data.nmFamilyPicture : "";
    }
    //$.likeLbl.text      = args._data.falias;
    $.repliesLbl.text   = args._data.total+" comments";
}
