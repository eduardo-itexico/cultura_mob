// INSTANTIATION
var APP = require("/core");
var args = arguments[0] || {};



// ADDITIONS 



// FUNCTIONS
function loadData(){
    if(args._type == 3){
        //Ti.API.info(JSON.stringify(args._data));
        APP.openCloseOptions();
        APP.currentController.getMessages({lat:0,lon:0,faname:args._data.ogGroup,pkorgGroups:args._data.pkorgGroups,ogfAdmin:args._data.ogfAdmin});
    }else if(args._type == 4){
        APP.openCloseOptions();
        APP.currentController.getMessages({lat:0,lon:0,faname:args._data.ogGroup,pkorgGroups:args._data.pkorgGroups,ogfAdmin:args._data.ogfAdmin});
    }
}

function editAddress(){
    var notificationDialog = Ti.UI.createAlertDialog({
        title : 'Remove Group',
        message : 'Do you want to remove this group?',
        buttonNames : ['Yes', 'No']
    });
    notificationDialog.addEventListener('click', function(e) {
        if(e.index === 0) {
            var dataTemp = {
                url     : L("ws_groupremove"),
                type    : 'GET',
                format  : 'JSON',
                data    : {
                    atoken      : APP.getToken({openLogin:false}),
                    pkorggroups : args._data.pkorgGroups
                }
            };
            APP.http.request(dataTemp,function(_result){
               if(_result._result == 1){
                    if(_result._data.errorcode == 0){
                        APP.optionbar.changeView(5);
                        alert("You have removed a group.");
                    }else{
                        alert(_result._data.message);
                    }
                }else{
                    alert("Internet connection error, please try again.");
                }
            });
        }
    });
    notificationDialog.show();
}

// CODE
$.groupTitle.text = args._data.ogGroup;