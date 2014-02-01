// INSTANTIATION
var APP = require("/core");
var DB  = require("/db");
var Utils  = require("/utils");
var args = arguments[0] || {};
var familyListController = this;
var user_token	=  Ti.App.Properties.getString("user_token",false);
var action 		= DB.INSERT;
var actual_page = 1;
var total_paginado = 10;
var descargando	   = false;
DB.init(function(){});
var dataInmuebles = args && args.params && args.params.data ? args.params.data : null;
var isFromBusqueda = args && args.params && args.params.from ? true:false;


if(dataInmuebles && dataInmuebles.length > 0){
		showRows(dataInmuebles);
}
// ADDITIONS 

// FUNCTIONS
	
function loadInmuebles(pagina){
	
	
}
function loadUsers(){
	
		APP.showActivityindicator();
		descargando = true;
		 var dataTemp = {
	            url     : L("url_inmuebles_paginados") + actual_page + "/" + total_paginado,
	            type    : 'GET',
	            format  : 'JSON',
	            data    : {
	            }
	        };
		APP.http.request(dataTemp,function(_result){
	            //Ti.API.info("-->"+JSON.stringify(_result));
	            
	            if(_result._result == 1){
	            	var longitud = _result._data.length ? _result._data.length : 0;
	            	var data	 = _result._data ? _result._data : 0;
	            	Ti.API.info('LONGITUD-----'+longitud);
	                if(longitud > 0){
	                    showRows(data);
						descargando = false;
	                    APP.hideActivityindicator();
	                }else{
	                    //alert(_result._data.message);
	                    APP.hideActivityindicator();
	                    alert("No messages were found.");
	                }
	            }else{
	                APP.hideActivityindicator();
	                alert("Internet connection error, please try again.");
	            }
	        });
	
	
  
}

function showRows(data){
	for(var i=0; i < data.length; i++ ){
    	var element = data[i];
		var row = Alloy.createController('FamilyWallet/RowFamily',{element:element}).getView();
		$.wrapper.add(row);
	}
}

function initializeView(){
    user_token  =  Ti.App.Properties.getString("user_token",false);
    loadUsers();
}

function updateView(){
    APP.headerbar.removeAllCustomViews();
    APP.headerbar.setLeftButton(0,false);
    APP.headerbar.setRightButton(0,false);
    APP.headerbar.setLeftButton(APP.OPENMENU,true);
    APP.headerbar.setTitle("Inmuebles");
    user_token	=  Ti.App.Properties.getString("user_token",false);
    loadUsers();
}

function showProfile(e){
	//Ti.API.info('Console-------->'+JSON.stringify(e.source));
	APP.openWindow({controller:"FamilyWallet/ProfileFamily",
					controllerParams:e.source.elemento});
/*
	var id = "";
	var member = null;
	if(e.source && e.source.id_profile){
		id = e.source.id_profile;
		member = DB.getMember(id,function(){});
		if(member){
			member = member[0];
		}
		action = DB.UPDATE;
		var params = {id_profile:id,
					  familyListController:familyListController,
					  member:member};
				  
		openDetailView((member.type == APP.USER_MEMBER) ?
							"FamilyWallet/ProfileFamily":
							"FamilyWallet/PetFamily",
							params);
	}else if(e.source.id == "plusBtn"){
		action = DB.INSERT;
		var dialog = Titanium.UI.createOptionDialog({
		    		options: ['Member','Pet','Cancel'],
		    		cancel:2
		    	});
		dialog.show();
		dialog.addEventListener('click',function(e){
			APP.getToken({
				openLogin : true,
				callback : function(_token) {
					if (e.index == 0) {
						openDetailView("FamilyWallet/ProfileFamily", {
							id_profile : id,
							familyListController : familyListController,
							member : member
						});
					} else if (e.index == 1) {
						openDetailView("FamilyWallet/PetFamily", {
							id_profile : id,
							familyListController : familyListController,
							member : member
						});
					} else {

					}
					return true;
				}
			});
		});
	}else{
		
	}
	*/
}

// CODEº

// LSITENERS



$.scrollFamily.addEventListener('scroll', function (e) {
	
	Ti.API.info('RECT:'+  ($.wrapper.rect.height - e.y));
	Ti.API.info('SIZEHE:'+ $.scrollFamily.getRect().height);
	//Ti.API.info('SIZEHE:'+ e.contentSize.height);
	var tolerancia = 100;
	if(( ($.wrapper.rect.height - e.y) <= ($.scrollFamily.getRect().height + tolerancia)) && !descargando ){
		actual_page += 1;
		!isFromBusqueda && loadUsers();
	}
	
});
// EXPORTS
exports.loadUsers 		 = loadUsers;



exports.updateView 		 = updateView;
exports.initializeView   = initializeView;