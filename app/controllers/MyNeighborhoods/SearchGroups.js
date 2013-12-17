// INSTANTIATION
var APP          = require("/core");
var args         = arguments[0] || {};

// FUNCTIONS
function androidSearch(){
    if(APP.getToken({openLogin:true})){
        var dataTemp = {
            url     : L("ws_groupsearch"),
            type    : 'GET',
            format  : 'JSON',
            data    : {
                atoken      : APP.getToken({openLogin:false}),
                searchcopy  : $.searchTxt.value
            }
        };
        APP.http.request(dataTemp,function(_result){
           if(_result._result == 1){
                if(_result._data.errorcode == 0){
                    var tempSearchResult = [];
                    for(var i=0;i < _result._data.data.length;i++){
                        tempSearchResult.push({iscategory:false,name:_result._data.data[i].ogGroup,pkOrgGroups:_result._data.data[i].pkorgGroups,oglogo:_result._data.data[i].ogLogo});
                    }
                    APP.openWindow({
                        controller : 'MyNeighborhoods/GroupList',
                        controllerParams : {
                            data     : tempSearchResult,
                            callback : function(){
                                //send update
                            }
                        }
                    });
                }else{
                    alert(_result._data.message);
                }
            }else{
                alert("Internet connection error, please try again.");
            }
        });
    }
}


// CODE
args.toolBar.setTitle("Search Group");
$.searchRow.height = $.searchRow.height+APP.fixSizeIos7();

var dataTemp = {
    url     : L("ws_grouppublic"),
    type    : 'GET',
    format  : 'JSON',
    data    : {}
};
APP.http.request(dataTemp,function(_result){
   if(_result._result == 1){
        if(_result._data.errorcode == 0){
            for(var i=0;i<_result._data.data.length;i++){
                $.table.appendRow({title:_result._data.data[i].name,color:"#136C8B",hasChild:true,leftImage:'/images/folder.png',data:_result._data.data[i].data});
            }
        }else{
            alert(_result._data.message);
        }
    }else{
        alert("Internet connection error, please try again.");
    }
});

// LIESTENERS
$.table.addEventListener("click",function(_evt){
	Ti.API.info( '$.table.click >>> _evt.index:' + _evt.index );
	if(_evt.index == 0){
		$.searchTxt.focus();
	}
	else if(_evt.index == 2){
		$.searchTxt.blur();
		APP.openWindow({
			controller : 'Widgets/Browser',
			controllerParams : {
				title : L('app_name'),
				url : L('url_alertid')
			}
		}); 
	}
	else if(_evt.index > 2){
		$.searchTxt.blur();
        if(OS_IOS){
            var tempData = _evt.row.data;
        }else{
            var tempData = _evt.rowData.data;
        }
        APP.openWindow({
            controller : 'MyNeighborhoods/GroupList',
            controllerParams : {
                data     : tempData,
                callback : function(){
                    //send update
                }
            }
        });
    }
    
});