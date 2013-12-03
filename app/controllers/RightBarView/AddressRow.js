// INSTANTIATION
var APP = require("/core");
var args = arguments[0] || {};



// ADDITIONS 



// FUNCTIONS
function loadData(){
    if(args._type == 2){
        //Ti.API.info(JSON.stringify(args._data));
        APP.openCloseOptions();
        if($.groupTitle.text == "Current Location"){
            APP.currentController.currentPosition();
        }else{
            APP.currentController.getMessages({lat:args._data.flat,lon:args._data.flon,faname:args._data.faname,pkorgGroups:0,ogfAdmin:0});
        }
    }else if(args._type == 1){
        APP.openCloseOptions();
        if($.groupTitle.text == "Current Location"){
            APP.currentController.currentPosition();
        }else{
            APP.currentController.getCrimes({lat:args._data.flat,lon:args._data.flon,faname:args._data.faname});
        }
    }
}

function editAddress(){
    //alert(JSON.stringify(args._data));
    APP.openWindow({
        controller : 'Settings/EditAddress',
        controllerParams : {
            data : args._data,
            callback : function(){
                APP.optionbar.updateMyAddresses();
            }
        }
    });
}

// CODE
$.groupTitle.text = args._data.faname;
if($.groupTitle.text == "Current Location"){
    $.groupButton.visible = false;
}
