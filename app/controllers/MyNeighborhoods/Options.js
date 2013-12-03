// INSTANTIATION
var APP = require("/core");
var args = arguments[0] || {};

// FUNCTIONS


// CODE
function selectOption(_event){
	APP.popOut();
    switch(_event.index){
        case 0:
            APP.openWindow({controller:"MyNeighborhoods/MyNeighborhoods",controllerParams:{pknmessage:args.params.data.pknmessage,refButton:args.params.refButton}});
        break;
        case 1:
            if(args.params.data.UserFollowing == "N")
                var isFollowing = "Y";
            else
                var isFollowing = "N";
                
            var dataTemp = {
            url     : L("ws_follow"),
            type    : 'GET',
            format  : 'JSON',
            data    : {
                    atoken      : APP.getToken({openLogin:false})?APP.getToken({openLogin:false}):"",
                    groupID     : args.params.groupID,
                    follow      : isFollowing,
                    pknmessage  : args.params.data.pknmessage
                }
            };
            //Ti.API.info(JSON.stringify(dataTemp));
            APP.http.request(dataTemp,function(_result){
                //Ti.API.info("-->"+JSON.stringify(_result));
                if(_result._result == 1){
                    if(_result._data.errorcode == 0){
                        if(isFollowing == "Y"){
                            _event.source.title             = "Unfollow";
                            args.params.data.UserFollowing  = "Y";
                        }else{
                            _event.source.title             = "Follow";
                            args.params.data.UserFollowing  = "N";
                        }
                    }else{
                        alert(_result._data.message);
                        //alert("No messages were found.");
                    }
                }else{
                    alert("Message could not be sent, please try again.");
                }
                
            });
        break;
        case 2:
            sendCommentsActions("likeperson","You have Liked this person");
        break;
        case 3:
            var notificationDialog = Ti.UI.createAlertDialog({
                title : 'Flag',
                message : 'Are you sure you want to FLAG this message’s content? \n AlertID support will be notified to take a look at this thread and potentially remove it.',
                buttonNames : ['YES', 'NO']
            });
            notificationDialog.addEventListener('click', function(e) {
                if(e.index === 0) {
                    sendCommentsActions("flag","You have Flagged this message");
                }
            });
            notificationDialog.show();
        break;
        case 4:
            var notificationDialog = Ti.UI.createAlertDialog({
                title : 'Hide',
                message : 'Are you sure you want to HIDE this message?',
                buttonNames : ['YES', 'NO']
            });
            notificationDialog.addEventListener('click', function(e) {
                if(e.index === 0) {
                    sendCommentsActions("hide","Message hidden");
                }
            });
            notificationDialog.show();
        break;
        case 5:
            var notificationDialog = Ti.UI.createAlertDialog({
                title : 'Block Person',
                message : 'Are you sure you want to BLOCK this person? \n You will no longer see messages from this person.',
                buttonNames : ['YES', 'NO']
            });
            notificationDialog.addEventListener('click', function(e) {
                if(e.index === 0) {
                    sendCommentsActions("blockperson","Person blocked");
                }
            });
            notificationDialog.show();
        break;
        case 6:
            var notificationDialog = Ti.UI.createAlertDialog({
                title : 'Remove',
                message : 'Are you sure you want to remove this message?',
                buttonNames : ['YES', 'NO']
            });
            notificationDialog.addEventListener('click', function(e) {
                if(e.index === 0) {
                    sendCommentsActions("remove","Message removed");
                }
            });
            notificationDialog.show();
        break;
        case 7:
            var e_body  = "This was just posted in our neighborhood discussion and I thought you might be interested: \n ";
            if(args.params.isGroup)
                e_body  += "https://alertid.com/v3/myhome.asp?gORn=2&vn="+args.params.groupID+"&athread="+args.params.data.pknmessage+" \n \n";
            else
                e_body  += "https://alertid.com/v3/myhome.asp?gORn=1&athread="+args.params.data.pknmessage+" \n \n";
            var emailDialog = Ti.UI.createEmailDialog();
            emailDialog.subject = "This may be interest for you";
            emailDialog.messageBody = e_body;
            emailDialog.open();
        break;
    }
}


function sendCommentsActions(_action,_msg){
    var dataTemp = {
    url     : L("ws_commaction"),
    type    : 'GET',
    format  : 'JSON',
    data    : {
            atoken      : APP.getToken({openLogin:false})?APP.getToken({openLogin:false}):"",
            groupID     : args.params.groupID,
            pknmessage  : args.params.data.pknmessage,
            action      : _action,
            nmfamilyID  : args.params.data.pkFamily
        }
    };
    //Ti.API.info(JSON.stringify(dataTemp));
    APP.http.request(dataTemp,function(_result){
        //Ti.API.info("-->"+JSON.stringify(_result));
        if(_result._result == 1){
            if(_result._data.errorcode == 0){
                if(_action == "hide" || _action == "remove"){
                    APP.currentController.removeComment(args.params.view);
                }else if(_action == "blockperson"){
                   APP.currentController.reloadMessages();
                }
                alert(_msg);
            }else{
                alert(_result._data.message);
                //alert("No messages were found.");
            }
        }else{
            alert("Internet connection error, please try again.");
        }
        
    });
}
 


// CODE
//alert(JSON.stringify(args.params.data.UserFollowing));
$.tblOptions.setData([{color:"black",title:"View",font:{fontSize:15}},{color:"black",title:(args.params.data.UserFollowing == "Y")?"Unfollow":"Follow",font:{fontSize:15}},{color:"black",title:"Like Person",font:{fontSize:15}},{color:"black",title:"Flag",font:{fontSize:15}},{color:"black",title:"Hide",font:{fontSize:15}},{color:"black",title:"Block Person",font:{fontSize:15}},{color:"black",title:"Remove",font:{fontSize:15}},{color:"black",title:"Share",font:{fontSize:15}}]);
