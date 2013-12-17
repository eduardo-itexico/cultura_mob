var APP = require("/core");
var actual_options = [];
var actual_category = null;
var self = this;
var actual_image = null;
var actual_coords = null;
var actual_heading = null;

function clickActionsBar(e){
	
	switch(e.source.id){
		case "cameraButton":
			
			
			var dialog = Titanium.UI.createOptionDialog({
	    		options: ['Camera','Gallery','Cancel'],
	    		cancel:2
	    	});
			dialog.show();
			dialog.addEventListener('click',function(e){
				switch(e.index){
					case 0:
						Ti.Geolocation.getCurrentHeading(function(eHeading) {
							if(eHeading.error) {
								//Ti.API.error('Ti.Geolocation.getCurrentHeading Error: ' + eHeading.error);
								var badHeadingAlert = Titanium.UI.createAlertDialog({
									title : 'Photo Upload'
								});
								badHeadingAlert.setMessage('Unable to upload photo at this time, please try again later.');
								badHeadingAlert.show();
							} else {
								actual_heading = eHeading.heading;
								APP.getCurrentLocation(function(coords){
									showAndLoadImage(e.index,coords)
								});
							}
						});	
					break;
					case 1:
						APP.getCurrentLocation(function(coords){
							showAndLoadImage(e.index,coords)
						});	
					break;
				}
					
			});
			
			
			break;
			
		case "configButton":
			APP.popUp({controller:"Report/Categories",
					   controllerParams:{controller:self,
					   	actualCategory:actual_category},
					   	title		: 'Select a Category',
						container : {
							width	: 300,
							height	: 250
						}
						});
			break;			
			
		case "filesButton":
			APP.popUp({controller:"Report/Options",
					   controllerParams:{controller:self,
					   					rowsSelected:actual_options},
					   	title		: 'Select a Community',
						container : {
							width	: 300,
							height	: 250
						}});
			break;	
			
		case "shareButton":
			APP.getToken({	openLogin:true,
							callback:uploadContentToServer});
		break;
	}
}

function showAndLoadImage(option_case,coords){
		actual_coords = coords
		switch(option_case){
			case 0: 
			 // Camera
			 Titanium.Media.showCamera({
	            success:function(event)
	            {
	               treatPhotography(event,coords);
	            },
	            cancel:function()
	            {
	 
	            },
	            error:function(error)
	            {   
	                var a = Titanium.UI.createAlertDialog({title:'Camera'});
	                
	                if (error.code == Titanium.Media.NO_CAMERA){
	                    a.setMessage('Device does not have camera capabilities');
	                }else{
	                    a.setMessage('Unexpected error: ' + error.code);
	                }
	                a.show();
	            },
	            allowImageEditing:true,
	            saveToPhotoGallery:true
	        });
	        break;
		case 1:
			// Gallery
			Titanium.Media.openPhotoGallery({

				success:function(event)
				{
					treatPhotography(event,coords,true)
				},
				cancel:function()
				{
			
				},
				error:function(error)
				{
				},
				allowEditing:false
			});
		break;
		}
}


function treatPhotography(event,coords,fromGallery){

	var imgType = "";
	if(OS_ANDROID){
		imgType = event.media.mimeType.split("/");
	}else{
		imgType = event.media.getMimetype().split("/");
	}
	
	//alert(event.mediaType+" "+imgType[1]);
	if((event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) || (imgType[1] == "JPEG" || imgType[1] == "jpeg" || imgType[1] == "JPG" || imgType[1] == "jpg" || imgType[1] == "PNG" ||imgType[1] == "png")) {
		
		$.imageCaptured.image = event.media;
		var cropRect = event.cropRect;
		var image = event.media;
		var hgt = image.height;
		var wdt = image.width;
		if(image.height > image.width){
			if(image.height >= 480) {
				hgt = 480;
				wdt = (((480*100)/image.height)*image.width)/100;
				
			}
		}else{
			if(image.width >= 480) {
				wdt = 480;
				hgt = (((480*100)/image.width)*image.height)/100;
			}
		}
		
		
		var imageView = Titanium.UI.createImageView({
			image : image,
			width:wdt,
			height:hgt
		});
		
		var image2 = Ti.UI.createImageView({
	        image: imageView.toBlob(),
	        width: wdt,
	        height: hgt
	    });
		
		if(OS_ANDROID)
			image = image2.toBlob();
		else
			image = imageView.toImage();
			
		actual_image = image;
			
	} else {
		actual_image = event.media;
	}				
	
}

function actualOption(option){
	actual_options = option;
}
function actualCategory(category){
	actual_category = category;
}


function uploadContentToServer(token) {
			
			
			var description = $.contentTextArea.value;
			var acategory = actual_category ? actual_category.value:'No Category';
			var authenicationToken = token;
	
			var shareServerUrl = L( 'ws_uploadbase' ) + '?atoken=' + authenicationToken;
	
			if(actual_coords != null) {
				shareServerUrl += '&flat=' + actual_coords.lat + '&flon=' + actual_coords.lon;
			}
			shareServerUrl += '&le=' + (Ti.App.Properties.getBool('lawEnforcementS')?"Y":"N") + '&anon=' + 
									   (Ti.App.Properties.getBool('anonymousS') ?"Y":"N")  + '&fpCommunity=' +
									   (Ti.App.Properties.getBool('communityS')?"Y":"N") + '&fpMedia=' + 
									   (Ti.App.Properties.getBool('mediaS')?"Y":"N")  + '&desc=' +
									   (Ti.Network.encodeURIComponent(description)) + '&acategory=' + 
									   (Ti.Network.encodeURIComponent(acategory));
	
			if(actual_heading != null) {
				// Ti.API.info('>>>>>>>>>>>>>>>>>>>>>>>>>>>>> heading = ' + JSON.stringify(heading));
				shareServerUrl += '&magneticHeading=' + actual_heading.magneticHeading + '&trueHeading=' + actual_heading.trueHeading;
			}
	
			//shareServerUrl = https://alertid.com/apps/upload-base.asp?atoken=18B7018765CBE&flat=39.42518801885817&flon=-119.718189239502&le=Y&anonN&fpCommunity=N&fpMedia=N&desc=Test&acategory=No%20category&magneticHeading=254.0816650390625&trueHeading=268.08746337890625
	
			Ti.API.info('shareServerUrl = ' + shareServerUrl);
			APP.showActivityindicator();
			var xhr = Titanium.Network.createHTTPClient();
			xhr.onload = function(e) {
				
				
				var temp = this.responseText;
				if(temp.indexOf('}]}') > -1) {
					temp = temp.substring(0, temp.indexOf('}]}') + 3);
				}
				
				var imageUploadResult = JSON.parse(temp);
				var message = "";
				
				
				if(imageUploadResult.errorcode != 0) {
					message = 'Upload failed!';
				} else {
					message = 'Upload complete';
				}
				var uploadStatusDialog = Ti.UI.createAlertDialog({
					title : 'Photo Upload',
					ok : 'OK',
					message : imageUploadResult.message
				});
				uploadStatusDialog.addEventListener('click', function(e) {
					if(imageUploadResult.errorcode == 0){
						APP.hideActivityindicator();
						APP.handleNavigation("MyNeighborhoods/MyNeighborhoods",{type:0});
            			//APP.openCloseMenu();
					}
				});
				uploadStatusDialog.show();
			};
			xhr.onerror = function(e) {
				
				Ti.API.error(JSON.stringify(e));
				var uploadFailedDialog = Ti.UI.createAlertDialog({
					title : 'Photo Upload',
					ok : 'OK',
					message : 'Unable to upload your photo at this time, please try again later.'
				});
				uploadFailedDialog.addEventListener('click', function(e) {
					
					//win.close();
					
				});
				uploadFailedDialog.show();
				APP.hideActivityindicator();
			};
			xhr.onsendstream = function(e) {
				
			};
			// need to set a timeout for this
			xhr.open('POST', shareServerUrl);
			xhr.setTimeout(120 * 1000);
			//xhr.setRequestHeader("Content-Type", "multipart/form-data");
			xhr.send({
				File1 : actual_image // event.media holds blob from gallery 
			});
	
}

function updateView(){
    APP.reportIsOpen = true; // this is used to prevent the blur
    APP.headerbar.removeAllCustomViews();
    APP.headerbar.setLeftButton(0,false);
    APP.headerbar.setRightButton(0,false);
    APP.headerbar.setLeftButton(APP.OPENMENU,true);
    APP.headerbar.setTitle("Report");
    $.contentTextArea.focus();
}
APP.reportTxtFld = $.contentTextArea;

exports.updateView 		= updateView;
exports.actualOption 	= actualOption;
exports.actualCategory  = actualCategory;