// INSTANTIATION
var APP = require("/core");
var args = arguments[0] || {};
var type;
var tempFunction;


// ADDITIONS 



// FUNCTIONS
function getMyAddresses(_type){
    if(APP.getToken({openLogin:false})){
        if(_type == 1 || _type == 2){
            var dataTemp = {
                url     : L("ws_getmyaddresses"),
                type    : 'POST',
                format  : 'JSON',
                data    : {
                    atoken      : APP.getToken({openLogin:false}),
                    pkfamily    : Ti.App.Properties.getInt('pkfamily'),
                    //flat        : event.coords.latitude,
                    //flon        : event.coords.longitude
                }
            };
            // Ti.API.info('dataTemp:'+JSON.stringify(dataTemp));
            
            APP.http.request(dataTemp,function(_result){
                //Ti.API.info("-->"+JSON.stringify(_result));
                if(_result._result == 1){
                    if(_result._data.errorcode == 0){
                        $.addressContainer.add(Alloy.createController("RightBarView/AddressRow",{_data:{faname:"Current Location"},_type:_type}).getView());
                        for(var i=0;i<_result._data.data.length;i++){
                            // Ti.API.info('loadLocations'+JSON.stringify(_result._data.data[i]));
                            $.addressContainer.add(Alloy.createController("RightBarView/AddressRow",{_data:_result._data.data[i],_type:_type}).getView());
                        }
                    }else{
                        //alert(_result._data.message);
                       // alert("No messages were found.");
                    }
                }else{
                    //alert("Internet connection error, please try again.");
                }
                
            });
        }else if(_type == 3 || _type == 4){
            var dataTemp = {
                url     : L("ws_mygroups"),
                type    : 'GET',
                format  : 'JSON',
                data    : {
                    atoken      : APP.getToken({openLogin:false})
                }
            };
            // Ti.API.info('dataTemp:'+JSON.stringify(dataTemp));
            
            APP.http.request(dataTemp,function(_result){
                //Ti.API.info("-->"+JSON.stringify(_result));
                if(_result._result == 1){
                    if(_result._data.errorcode == 0){
                        for(var i=0;i<_result._data.data.length;i++){
                            $.addressContainer.add(Alloy.createController("RightBarView/GroupsRow",{_data:_result._data.data[i],_type:_type}).getView());
                        }
                    }else{
                        if(_result._data.errorcode == 4){
                            var dialog = Ti.UI.createAlertDialog({
                                buttonNames: ['OK'],
                                message: 'You do not have any groups yet. Please select a group on the next screen',
                                title: 'My Groups'
                              });
                              dialog.addEventListener('click', function(e){
                                APP.openWindow({
                                    controller : 'MyNeighborhoods/SearchGroups',
                                    controllerParams : {
                                        callback : function(){
                                            //send update
                                        }
                                    }
                                });
                              });
                              dialog.show();
                            
                        }
                        //alert(_result._data.message);
                       // alert("No messages were found.");
                    }
                }else{
                    //alert("Internet connection error, please try again.");
                }
                APP.hideActivityindicator();
            });
        }
    }else{
        if(_type == 3 || _type == 4){
            APP.hideActivityindicator();
        }
    }
}


function searchAddress(){
    if( $.searchTxtFld.value !== '' ){
        $.rencentlyContainer.add(Alloy.createController("RightBarView/RecentlyAddressRow",{address:$.searchTxtFld.value}).getView());
        $.searchTxtFld.blur();
        APP.currentController.searchAddress($.searchTxtFld.value);
     }
     else{
        alert('Please enter an address');
        $.searchTxtFld.focus();
    }
}

function addAddress(){
    tempFunction();
}
function changeView(_type,_addFunction){
    switch(_type){
        case 1:
            for(var i = $.addressContainer.children.length-1; i >= 0;  i--){
                $.addressContainer.remove($.addressContainer.children[i]);
            }
            $.searchContainer.height        = 40;
            $.groupListContainer.height     = Ti.UI.SIZE;
            $.groupListTitle.text           = "My Neighborhoods";
            $.recentlyFoundContainer.height = Ti.UI.SIZE;
            type                            = _type;
            tempFunction                    = _addFunction;
            getMyAddresses(type);
            $.titleLbl.text                 = "Neighborhoods";
        break;
        case 2:
            for(var i = $.addressContainer.children.length-1; i >= 0;  i--){
                $.addressContainer.remove($.addressContainer.children[i]);
            }
            $.searchContainer.height        = 0;
            $.groupListContainer.height     = Ti.UI.SIZE;
            $.groupListTitle.text           = "My Neighborhoods";
            $.recentlyFoundContainer.height = 0;
            type                            = _type;
            tempFunction                    = _addFunction;
            getMyAddresses(type);
            $.titleLbl.text                 = "Neighborhoods";
        break;
        case 3:
            for(var i = $.addressContainer.children.length-1; i >= 0;  i--){
                $.addressContainer.remove($.addressContainer.children[i]);
            }
            $.searchContainer.height        = 0;
            $.groupListContainer.height     = Ti.UI.SIZE;
            $.groupListTitle.text           = "My Groups";
            $.recentlyFoundContainer.height = 0;
            type                            = _type;
            tempFunction                    = _addFunction;
            getMyAddresses(type);
            $.titleLbl.text                 = "Groups";
        break;
        case 4:
            for(var i = $.addressContainer.children.length-1; i >= 0;  i--){
                $.addressContainer.remove($.addressContainer.children[i]);
            }
            $.searchContainer.height        = 0;
            $.groupListContainer.height     = Ti.UI.SIZE;
            $.groupListTitle.text           = "My Friens and Family";
            $.recentlyFoundContainer.height = 0;
            type                            = _type;
            tempFunction                    = _addFunction;
            getMyAddresses(type);
            $.titleLbl.text                 = "Friens and Family";
        break;
        case 5:
            for(var i = $.addressContainer.children.length-1; i >= 0;  i--){
                $.addressContainer.remove($.addressContainer.children[i]);
            }
            getMyAddresses(type);
        break;
    }
}

function clearSearch(){
    $.searchTxtFld.value = "";
}

function updateMyAddresses(){
    for(var i = $.addressContainer.children.length-1; i >= 0;  i--){
        $.addressContainer.remove($.addressContainer.children[i]);
    }
    getMyAddresses(type)
}
function addTxtFld(){
	Ti.API.info( 'addTxtFld' )
	if( !$.searchTxtFld ){
		$.searchTxtFld = Ti.UI.createTextField({
			backgroundImage: "/images/transparent.png",
			returnKeyType: Ti.UI.RETURNKEY_DONE,
			textAlign: 'left',
			left:0,
			right:20,
			height: 36,
			paddingLeft: 5,
			color: '#333',
			font: {
				fontSize: 14
			},
			hintText:"Ex: street, city, state"
		});
		$.search_tf_view.add( $.searchTxtFld );
	}
	return true;
}
function removeTxtFld(){
	Ti.API.info( 'removeTxtFld' );
	if( $.searchTxtFld ){
		$.search_tf_view.remove( $.searchTxtFld );
		$.searchTxtFld = null;
	}
	return true;
}

// CODE
$.backgroundIosBar.height = APP.fixSizeIos7();

// EXPORTS
exports.changeView         	= changeView;
exports.updateMyAddresses  	= updateMyAddresses;
exports.addTxtFld			= addTxtFld;
exports.removeTxtFld		= removeTxtFld;

