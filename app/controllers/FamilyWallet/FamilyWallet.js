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
DB.init(function(){});
loadUsers();

// ADDITIONS 

// FUNCTIONS
function loadUsers(){
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
            	
                if(longitud > 0){
                    for(var i=0; i < longitud; i++ ){
                    	var element = data[i];
						var row = Alloy.createController('FamilyWallet/RowFamily',{element:element}).getView();
						$.scrollFamily.add(row);
					}
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
    /*    
	var members = DB.getMembers(user_token,function(){});
	Utils.removeChildren($.scrollFamily);
	if(members && members.length > 0){
		$.scrollFamily.add(Ti.UI.createView({height:44+APP.fixSizeIos7()}));
		for(var i=0; i < members.length; i++ ){
			var row = Alloy.createController('FamilyWallet/RowFamily',{member:members[i]}).getView();
			$.scrollFamily.add(row);
		}
		$.scrollFamily.add(Alloy.createController('FamilyWallet/Caption').getView());
	}else{
		//FIX TO
		var row = Alloy.createController('FamilyWallet/EmptyMembers').getView();
		$.scrollFamily.add(row);
	}
	*/
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
    APP.headerbar.setTitle("My Family Wallet");
    user_token	=  Ti.App.Properties.getString("user_token",false);
    loadUsers();
}

function showProfile(e){
	//Ti.API.info('Console-------->'+JSON.stringify(e.source));
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
}

function openDetailView(controller,params){
	APP.openWindow({controller:controller,
						controllerParams:params});
}

function showAndLoadImage(objectController,imageView){

	var dialog = Titanium.UI.createOptionDialog({
	    		options: ['Camera','Gallery','Cancel'],
	    		cancel:2
	    	});
	dialog.show();
	dialog.addEventListener('click',function(e){
		if(e.index == 0){
			 // Camera
			 Titanium.Media.showCamera({
			 	allowEditing:true,
	            success:function(event){
	            	
					var ImageFactory = require( 'ti.imagefactory' );
                    
					var _image 		= event.media;
					var _height 	= _image.height;
                    var _width 		= _image.width;
                    var _type 		= _image.mimeType.split("/").pop();
					
					Ti.API.info( '\n\nTitanium.Media.openPhotoGallery >>> _image:' + _image );
					Ti.API.warn( 'Titanium.Media.openPhotoGallery >>> _image:' + JSON.stringify( _image ) );
                   
                    if( _image.height > _image.width ){
                        if( _image.height >= 480 ){
                            _height = 480;
                            _width = (((480 * 100) / _image.height) * _image.width) / 100;
                        }
                    }
                    else {
                        if( _image.width >= 480 ){
                            _width = 480;
                            _height = (((480 * 100) / _image.width) * _image.height) / 100;
                        }
                    }

					_image = ImageFactory.imageAsResized(_image, {
						width : _width,
						height : _height
					});
					
					Ti.API.info( '\n\nTitanium.Media.openPhotoGallery >>> _image:' + _image );
					Ti.API.warn( 'Titanium.Media.openPhotoGallery >>> _image:' + JSON.stringify( _image ) );
                    
                    var _date 		= new Date();
					var _time 		= _date.getTime();
                    var _base 		= Titanium.Filesystem.applicationDataDirectory;
                    var _filename  	= 'alert_id_' + _time + '.' + _type;
                    var _file 		= Titanium.Filesystem.getFile( _base , _filename ); _file.write( _image );
                    
					imageView.image 				= "/images/im_mask_large.png";
					imageView.backgroundImage 		= _base + _filename;

					objectController.photoMemberURL = _base + _filename;
					objectController.blobimage  	= _image;
					
	             	return true;
	             	
	            },
	            cancel:function()
	            {
	 
	            },
	            error:function(error)
	            {
	                // create alert
	                var a = Titanium.UI.createAlertDialog({title:'Camera'});
	 
	                // set message
	                if (error.code == Titanium.Media.NO_CAMERA)
	                {
	                    a.setMessage('Device does not have camera capabilities');
	                }
	                else
	                {
	                    a.setMessage('Unexpected error: ' + error.code);
	                }
	 
	                // show alert
	                a.show();
	            },
	            allowImageEditing:true,
	            saveToPhotoGallery:true
	        });
		}else if(e.index == 1){
			// Gallery
			Titanium.Media.openPhotoGallery({
				allowEditing:true,
				success:function(event){
					
					if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO){
						
						var ImageFactory = require( 'ti.imagefactory' );
	                    
						var _image 		= event.media;
						var _height 	= _image.height;
	                    var _width 		= _image.width;
	                    var _type 		= _image.mimeType.split("/").pop();
						
						Ti.API.info( '\n\nTitanium.Media.openPhotoGallery >>> _image:' + _image );
						Ti.API.warn( 'Titanium.Media.openPhotoGallery >>> _image:' + JSON.stringify( _image ) );
	                   
	                    if( _image.height > _image.width ){
	                        if( _image.height >= 480 ){
	                            _height = 480;
	                            _width = (((480 * 100) / _image.height) * _image.width) / 100;
	                        }
	                    }
	                    else {
	                        if( _image.width >= 480 ){
	                            _width = 480;
	                            _height = (((480 * 100) / _image.width) * _image.height) / 100;
	                        }
	                    }
	
						_image = ImageFactory.imageAsResized(_image, {
							width : _width,
							height : _height
						});
						
						Ti.API.info( '\n\nTitanium.Media.openPhotoGallery >>> _image:' + _image );
						Ti.API.warn( 'Titanium.Media.openPhotoGallery >>> _image:' + JSON.stringify( _image ) );
	                    
	                    var _date 		= new Date();
						var _time 		= _date.getTime();
	                    var _base 		= Titanium.Filesystem.applicationDataDirectory;
	                    var _filename  	= 'alert_id_' + _time + '.' + _type;
	                    var _file 		= Titanium.Filesystem.getFile( _base , _filename ); _file.write( _image );
	                    
						imageView.image 				= "/images/im_mask_large.png";
						imageView.backgroundImage 		= _base + _filename;
	
						objectController.photoMemberURL = _base + _filename;
						objectController.blobimage  	= _image;
					}
					
					return true;
					
				},
				cancel:function()
				{
			
				},
				error:function(error)
				{
				},
				allowEditing:false
			});

		}
	});	
};

function clickActions(source){
	Ti.API.warn( 'clickActions >>> source:' + JSON.stringify( source ) );
	switch(source.id){
		case "deleteBtn":
			var notificationDialog = Ti.UI.createAlertDialog({
				title : 'Confirmation',
				message : 'Are you sure you want to delete this member?',
				buttonNames : ['Yes', 'No']
			});
			notificationDialog.addEventListener('click', function(e) {
				if(e.index === 0) {
					var id_profile = source.id_profile;
					
					if(id_profile){
						DB.deleteRecord(id_profile,function(){alert("Member deleted!")});
						APP.closeWindow();
						loadUsers();	
					}			
				}
			});
			notificationDialog.show();
		
			break;
			
		case "helpBtn":
			APP.openWindow({controller:"FamilyWallet/Emergency",
						controllerParams:{}});
			break;
		
		case "shareBtn":
			var dialog = Titanium.UI.createOptionDialog({
	    		options: ['Send Via Email','Send to My Neighborhood','Cancel'],cancel:2
	    	});
	    	var photo  		= source.photo;
	    	var blobImage 	= source.blobImage;
	    	var imgType		= source.imgType;
	    	var id_profile  = source.id_profile;
	    	
			dialog.show();
			dialog.addEventListener('click',function(e){
				var member = DB.getMember(id_profile,function(){});
				if(e.index == 0){
					sendMail(photo,blobImage,imgType,member[0]);
				}else if(e.index == 1){
					sendCommunity(member[0]);
				}
			});
			break;
			
			
	}
}

function sendMail(photoMember,blobImage,imgType,member){
	Ti.API.warn( 'sendMail >>> photoMember,blobImage,imgType,member:' + JSON.stringify([photoMember,blobImage,imgType,member]));
	var e_body = "<type your message> \n \n ";
	if(member.type == 1){
	    e_body += "First Name: "+member.f_name+" \n ";
        e_body += "Last Name: "+member.l_name+" \n ";
        e_body += "Middle Name: "+member.m_name+" \n ";
        e_body += "Nick Name: "+member.n_name+" \n ";
        e_body += "Birthdate: "+member.birthdate+" \n ";
        e_body += "Gender: "+member.gender+" \n ";
        e_body += "Height: "+member.height+" \n ";
        e_body += "Weight: "+member.weight+" \n ";
        e_body += "Hair Color: "+member.hair+" \n ";
        e_body += "Eye Color: "+member.eye+" \n ";
        e_body += "Birth City: "+member.birthcity+" \n ";
        e_body += "Glasses: "+member.glasses+" \n ";
        e_body += "Identifying Marks: "+member.marks+" \n ";
        e_body += "\n Contact Information \n ";
        e_body += "Address 1: "+member.address1+" \n ";
        e_body += "Address 2: "+member.address2+" \n ";
        e_body += "City: "+member.city+" \n ";
        e_body += "State: "+member.state+" \n ";
        e_body += "Zip: "+member.zip+" \n ";
        e_body += "Home Phone: "+member.h_phone+" \n ";
        e_body += "Cell Phone: "+member.cell_phone+" \n ";
        e_body += "\n Guardian Information \n ";
        e_body += "Name 1: "+member.name1+" \n ";
        e_body += "Phone: "+member.phone1+" \n ";
        e_body += "Name 2: "+member.name2+" \n ";
        e_body += "Phone: "+member.phone2+" \n ";
        var emailDialog = Ti.UI.createEmailDialog();
        emailDialog.subject = "Missing Family Member Information";
	}else{
	    e_body += "Pet's Name: "+member.f_name+" \n ";
        e_body += "Type: "+member.l_name+" \n ";
        e_body += "Breed: "+member.m_name+" \n ";
        e_body += "Age: "+member.n_name+" \n ";
        e_body += "Sex: "+member.birthdate+" \n ";
        e_body += "Color: "+member.gender+" \n ";
        e_body += "Weight: "+member.weight+" \n ";
        e_body += "Micropchip: "+member.height+" \n ";
        e_body += "Markings: "+member.hair+" \n ";
        e_body += "Special Needs or Handling Instructions: "+member.marks+" \n ";
        e_body += "\n Owner Information \n ";
        e_body += "First Name: "+member.name1+" \n ";
        e_body += "Last Name: "+member.name2+" \n ";
        e_body += "Address: "+member.address1+" \n ";
        e_body += "Home Phone: "+member.h_phone+" \n ";
        e_body += "Cell Phone: "+member.cell_phone+" \n ";
        e_body += "\n Veterinary Information \n ";
        e_body += "Veteriniarian: "+member.eye+" \n ";
        e_body += "Address: "+member.address2+" \n ";
        e_body += "Phone: "+member.phone1+" \n ";
        var emailDialog = Ti.UI.createEmailDialog();
        emailDialog.subject = "Missing Family Member Information";
        photoMember = member.m_photo;
        if(photoMember && photoMember.length > 0)
            blobImage = Ti.Filesystem.getFile(photoMember);
	}
	
	
	if(photoMember && photoMember.length > 0){
		var d = new Date();
		var d_now = d.getTime();
		var imgType = photoMember.split(".").pop();			
		var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'alert_id_'+d_now+'.'+imgType);
        f.write(blobImage);
		var e_image = Titanium.Filesystem.applicationDataDirectory+'alert_id_'+d_now+'.'+imgType;
		Ti.API.warn( 'sendMail >>> e_image:' + e_image );
		var e_image = Ti.Filesystem.getFile(e_image);
		emailDialog.addAttachment(e_image);
	}
	emailDialog.messageBody = e_body;
	emailDialog.open();
}

function sendCommunity(member){
		
		APP.popUp({controller:"FamilyWallet/SendCommunity",
						controllerParams:{member:member}});
		
}


function saveMember(insertObject,callback){
	if(action == DB.INSERT){
		DB.insertRecord(insertObject,callback);
	}else{
		DB.updateRecord(insertObject,callback);
	}
}
// CODEº

// LSITENERS

// EXPORTS
exports.loadUsers 		 = loadUsers;
exports.showAndLoadImage = showAndLoadImage;
exports.saveMember 		 = saveMember;
exports.clickActions 	 = clickActions;
exports.updateView 		 = updateView;
exports.initializeView   = initializeView