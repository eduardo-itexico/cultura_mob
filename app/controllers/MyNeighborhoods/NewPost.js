// INSTANTIATION
var APP         = require("/core");
var media       = require("/media");
var args        = arguments[ 0 ] || {};

var tempArr     = [];
var tempIndexes = [];

var isPhoto     = 0;
var image       = "";

// FUNCTIONS
function clearHint(){
    if($.textFld.value.length > 0){
        $.textFldHide.hintText = "";
    }else{
        $.textFldHide.hintText = "Write your comment";
    }
}

function addPhoto(){
    media.getPicture({callback:function(_params){
        image   = _params.media;
        isPhoto = 1;
        
        var hgt = image.height;
        var wdt = image.width;

		if( image.height > image.width ){
			if( image.height >= 480 ){
				hgt = 480;
				wdt = (((480 * 100) / image.height) * image.width) / 100;
			}
		}
		else {
			if( image.width >= 480 ){
				wdt = 480;
				hgt = (((480 * 100) / image.width) * image.height) / 100;
			}
		}
        
        image = Ti.UI.createImageView({
			image	: image,
            width	: wdt,
            height	: hgt
		});
		image = Ti.UI.createImageView({
            image	: image.toBlob(),
            width	: wdt,
            height	: hgt
        });
		
		image = OS_IOS ? image.toImage() : image.toBlob();
		
        $.postImage.image = image;
        
        return true;
        
    }});
}

function normalize(){
	$.textFld.borderWidth = 0;
	return true;
}

function selectMessageType(){
	if( args.params.isGroup != 1 && args.params.pknmessage == 0 ){
	    var dialog = Titanium.UI.createOptionDialog({
	        options: tempArr,
	        cancel:tempArr.length-1
	    });
	    dialog.show();
	    dialog.addEventListener('click',function(_event){
	       if(_event.index == 0){
	            $.messageTypeLabel.text     = _event.source.options[_event.index];
	            $.messageTypeLabel.NCTType  = tempIndexes[_event.index].NCTType;
	       }else if(_event.index == 1){
	            $.messageTypeLabel.text     = _event.source.options[_event.index];
	            $.messageTypeLabel.NCTType  = tempIndexes[_event.index].NCTType;
	       }else if(_event.index == 2){
	            $.messageTypeLabel.text     = _event.source.options[_event.index];
	            $.messageTypeLabel.NCTType  = tempIndexes[_event.index].NCTType;
	       }else if(_event.index == 3){
	            $.messageTypeLabel.text     = _event.source.options[_event.index];
	            $.messageTypeLabel.NCTType  = tempIndexes[_event.index].NCTType;
	       }else if(_event.index == 4){ 
	            $.messageTypeLabel.text     = _event.source.options[_event.index];
	            $.messageTypeLabel.NCTType  = tempIndexes[_event.index].NCTType;
	       }else if(_event.index == 5){
	            $.messageTypeLabel.text     = _event.source.options[_event.index];
	            $.messageTypeLabel.NCTType  = tempIndexes[_event.index].NCTType;
	       }else{
	            $.messageTypeLabel.NCTType  = 0;
	       }
	   });
	}
	return true;
}

function sendPost(){
	if( $.textFld.value == '' ){
		$.textFld.borderWidth = 1;
		$.textFld.borderColor = 'red';
		alert( L( 'invalid_comment' ) );
	}
	else{
	    APP.showActivityindicator();
		if (args.params.isGroup == 1) {
			APP.getCurrentLocation(function(_event) {
				if (_event.success) {
					if (isPhoto) {
						postMessagePhoto(_event);
					} else {
						postMessage(_event);
					}
				} else {
					APP.hideActivityindicator();
				}
			});
		} else {
			if (isPhoto) {
				postMessagePhoto({
					lat : args.params.lat,
					lon : args.params.lon
				});
			} else {
				postMessage({
					lat : args.params.lat,
					lon : args.params.lon
				});
			}
		}
	}
	return true;
}

function postMessagePhoto(_event){
    var shareServerUrl = L( 'ws_uploadbase' ) + '?atoken=' + APP.getToken();
    shareServerUrl += '&flat=' + _event.lat + '&flon=' + _event.lon;
    shareServerUrl += '&le=' + "N" + '&anon=' + "N"  + '&fpCommunity=' + "Y"  + '&fpMedia=' + "N"  + '&desc=' + $.textFld.value + '&acategory=&nmparentid='+((args.params.pknmessage != 0)?args.params.pknmessage:0);
    shareServerUrl += '&groupid='+ args.params.groupID + '&pknCommtype='+$.messageTypeLabel.NCTType+'&prioritymessage='+(($.highPriorSwitch.value)?"Y":"N")+'&sendnotification='+(($.notifSwitch.value)?"Y":"N");

    Ti.API.info('shareServerUrl = ' + shareServerUrl);

    var xhr = Titanium.Network.createHTTPClient();
    xhr.onload = function(e) {
        var temp = this.responseText;
        if(temp.indexOf('}]}') > -1) {
            temp = temp.substring(0, temp.indexOf('}]}') + 3);
        }
        var imageUploadResult = JSON.parse(temp);
        // Ti.API.info('imageUploadResult = ' + JSON.stringify(imageUploadResult));
        if(imageUploadResult.errorcode == 0) {
            if(args.params.pknmessage != 0){
                 if(args.params.refButton != 0){
                        var tempText = args.params.refButton.text.split(" ");
                        args.params.refButton.text = (parseInt(tempText[0])+1)+" comments";
                    }
                    args.params.controller.getMessages({lat:0,lon:0,faname:"",pkorgGroups:0,pknmessage:args.params.pknmessage});
            }else{
                APP.currentController.reloadMessages();
            }
            APP.popOut();
        }else{
            APP.hideActivityindicator();
        }
        var uploadStatusDialog = Ti.UI.createAlertDialog({
            title : 'Photo Upload',
            ok : 'OK',
            message : imageUploadResult.message
        });
        uploadStatusDialog.show();
    };
    xhr.onerror = function(e) {
        APP.hideActivityindicator();
        var uploadFailedDialog = Ti.UI.createAlertDialog({
            title : 'Photo Upload',
            ok : 'OK',
            message : 'Unable to upload your photo at this time, please try again later.'
        });
        uploadFailedDialog.show();
    };
    xhr.onsendstream = function(e) {
        Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress);
        $.streaming.width = ( parseFloat( e.progress ) * 100 ) + '%';
    };
    // need to set a timeout for this
    xhr.open('POST', shareServerUrl);
    xhr.setTimeout(120 * 1000);
    //xhr.setRequestHeader("Content-Type", "multipart/form-data");
    //Ti.API.info("blob :"+JSON.stringify(App.UI.community.image));
    xhr.send({
        File1 : image /* event.media holds blob from gallery */
    });
}

function postMessage(_event){
    var dataTemp = {
    url     : L("ws_putcommunity"),
    type    : 'GET',
    format  : 'JSON',
    data    : {
            atoken          : APP.getToken({openLogin:false})?APP.getToken({openLogin:false}):"",
            groupid         : args.params.groupID,
            flat            : _event.lat,
            flon            : _event.lon,
            usehome         : 0,
            nmessage        : $.textFld.value,
            nmparentid      : (args.params.pknmessage != 0)?args.params.pknmessage:0,
            fpcommunity     : "Y",
            nmcrimedataid   : 0,// TODO: check
            prioritymessage : ($.highPriorSwitch.value)?"Y":"N",
            sendnotification: ($.notifSwitch.value)?"Y":"N",
            pknCommtype     : $.messageTypeLabel.NCTType
        }
    };
    //TODO: check notification and args.groupID
    //Ti.API.info("-->2"+JSON.stringify(dataTemp));
    APP.http.request(dataTemp,function(_result){
        Ti.API.info("-->"+JSON.stringify(_result));
        if(_result._result == 1){
            if(_result._data.errorcode == 0){
                if(args.params.pknmessage != 0){
                    if(args.params.refButton != 0){
                        var tempText = args.params.refButton.text.split(" ");
                        args.params.refButton.text = (parseInt(tempText[0])+1)+" comments";
                    }
                    args.params.controller.getMessages({lat:0,lon:0,faname:"",pkorgGroups:0,pknmessage:args.params.pknmessage});
                }else{
                    APP.currentController.reloadMessages();
                }
                APP.popOut();
            }else{
                APP.hideActivityindicator();
                alert(_result._data.message);
                //alert("No messages were found.");
            }
        }else{
            APP.hideActivityindicator();
            alert("Message could not be sent, please try again.");
        }
        
    });
}

function closePopup(){
    APP.popOut();
}

// CODE
//alert(args.params.isAdmin);
setTimeout(function(){
	$.textFld.focus();
},500);
if(args.params.isGroup == 1){
    if(args.params.isAdmin == "N"){
        $.notifLbl.visible = false;
        $.notifSwitch.visible = false;
        $.messageTypeContainer.visible = false;
    }
    $.messageTypeLabel.visible = false;
    $.messageTypeArrow.visible = false;
}else{
    $.notifLbl.visible = false;
    $.notifSwitch.visible = false;
}
if(args.params.pknmessage != 0){
    $.notifLbl.visible = false;
    $.notifSwitch.visible = false;
    $.messageTypeContainer.visible = false;
    $.messageTypeLabel.visible = false;
    $.messageTypeArrow.visible = false;
    $.high_prior.visible = false;
}
var dataTemp = {
    url     : L("ws_getmessagetype"),
    type    : 'GET',
    format  : 'JSON',
    data    : {
        atoken      : APP.getToken({openLogin:false})?APP.getToken({openLogin:false}):""
    }
};
APP.http.request(dataTemp,function(_result){
    //Ti.API.info("-->"+JSON.stringify(_result));
    if(_result._result == 1){
        if(_result._data.errorcode == 0){
            tempArr = [];
            tempIndexes = [];
            for (var i=0; i < _result._data.data.length; i++) {
                tempIndexes.push({NCTType:_result._data.data[i].pknCommtype});
                tempArr.push(_result._data.data[i].NCTType);
            }
            tempArr.push("Cancel");
        }else{
            //alert(_result._data.message);
            //alert("No messages were found.");
        }
    }else{
        //alert("Internet connection error, please try again.");
    }
    
});

