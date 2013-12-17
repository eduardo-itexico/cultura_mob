// INSTANTIATION
var APP          = require("/core");
var args         = arguments[0] || {};


// FUNCTIONS
function joinGroup(_pkOrgGroups){
    var dataTemp = {
        url     : L("ws_groupjoin"),
        type    : 'GET',
        format  : 'JSON',
        data    : {
            atoken      : APP.getToken({openLogin:false}),
            pkOrgGroups : _pkOrgGroups
        }
    };
    APP.http.request(dataTemp,function(_result){
       if(_result._result == 1){
            if(_result._data.errorcode == 0){
                APP.optionbar.changeView(5);
                alert("You have joined a new group.");
            }else{
                alert(_result._data.message);
            }
        }else{
            alert("Internet connection error, please try again.");
        }
    });
}


// CODE
args.toolBar.setTitle("Search List");
$.tempRow.height = $.tempRow.height+APP.fixSizeIos7();

for(var i=0;i<args.params.data.length;i++){
    if(args.params.data[i].iscategory == true)
        $.table.appendRow({title:args.params.data[i].name,color:"#136C8B",hasChild:true,leftImage:'/images/folder.png',data:args.params.data[i].data,iscategory:args.params.data[i].iscategory});
    else{
        //Ti.API.info("logo : "+_data[i].oglogo.replace(" ","%20"));
        var row = Ti.UI.createTableViewRow({hasChild:false,pkOrgGroups:args.params.data[i].pkOrgGroups,height:35});
        row.add(Ti.UI.createLabel({text:args.params.data[i].name,color:"#136C8B",left:35,height:35,width:Ti.UI.SIZE}));
        if(args.params.data[i].oglogo.length > 6 && i != 14){
            var img = Ti.UI.createImageView({width:25,hight:25,image:args.params.data[i].oglogo.replace(/ /g,"%20"),left:5});
            row.add(img);
        }
        $.table.appendRow(row);
    }   
    
}


// LISTENERS
$.table.addEventListener("click",function(_evt){
    if(OS_IOS)
        var selfRow = _evt.row;
    else
        var selfRow = _evt.rowData;
        
    if(selfRow.iscategory == true){
        APP.openWindow({
            controller : 'MyNeighborhoods/GroupList',
            controllerParams : {
                data     : selfRow.data,
                callback : function(){
                    //send update
                }
            }
        });
    }else{
        var notificationDialog = Ti.UI.createAlertDialog({
            title : 'Join Group',
            message : 'Are you sure you want to join this Group?',
            buttonNames : ['YES', 'NO']
        });
        notificationDialog.addEventListener('click', function(e) {
            if(e.index === 0) {
                joinGroup(selfRow.pkOrgGroups);
            }
        });
        notificationDialog.show();
    }
});