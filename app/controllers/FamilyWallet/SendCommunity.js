// INSTANTIATION
var APP 	= require("/core");
var args 	= arguments[0] || {};
var member 	= args.params.member;
//Ti.API.info('ARGUMENTOS---------------->'+JSON.stringify(args));
// ADDITIONS 

// FUNCTIONS


function cancelWindow(){
	APP.closeWindow();
}


function sendInfo(){
	APP.closeWindow();
	var notificationDialog = Ti.UI.createAlertDialog({
		title : 'AlertID',
		message : 'For an emergency always call 911.  Posting this family member’s profile to the community will send his/her picture, description details and contact information to your neighborhood.  This post may be removed at any time and should be removed when the person is found.   Have you reviewed the profile information?',
		buttonNames : ['Cancel','Confirm']
	});
	notificationDialog.addEventListener('click', function(e) {
		if(e.index == 1) {
			if($.currentSwt.value == true)
				sendCurrentLocation();
			if($.homeSwt.value == true)
				APP.getCurrentLocation(sendUploadBase);
		}
	});
	notificationDialog.show();
}

function sendCurrentLocation(){
			APP.showActivityindicator();
			//HAFJ.loadingShow();
			Ti.Geolocation.purpose = "AlertID Threat Level";
			Titanium.Geolocation.preferredProvider = Titanium.Geolocation.PROVIDER_GPS;
			Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_KILOMETER;
			Titanium.Geolocation.distanceFilter = 50;
			
			if(Titanium.Geolocation.locationServicesEnabled === false && OS_ANDROID){
				APP.hideActivityindicator();
				//HAFJ.loadingHide();
	     		var notificationDialog = Ti.UI.createAlertDialog({
					title : 'AlertID',
					message : 'Please check your Wi-Fi and GPS connection in order to use AlertID app.',
					buttonNames : ['Open Settings']
				});
				notificationDialog.addEventListener('click', function(e) {
					if(e.index === 0) {
						var settingsIntent = Titanium.Android.createIntent({
			                action : 'android.settings.LOCATION_SOURCE_SETTINGS'
			            });
			            Ti.Android.currentActivity.startActivity(settingsIntent);
					}
				});
				notificationDialog.show();
		    }else{
		    	
		   		var authorization = Titanium.Geolocation.locationServicesAuthorization;
			    if(authorization == Titanium.Geolocation.AUTHORIZATION_DENIED && OS_IOS) {
			    	APP.hideActivityindicator();
			    	//HAFJ.loadingHide();
			    	Ti.UI.createAlertDialog({
			      		title:'AlertID',
			     		message:'AlertID is turned it off from running geolocation services.\n Please turn it on from the location services.'
			      	}).show();
			      	
			    }else if (authorization == Titanium.Geolocation.AUTHORIZATION_RESTRICTED && OS_IOS) {
			    	//HAFJ.loadingHide();
			    	APP.hideActivityindicator();
			        Ti.UI.createAlertDialog({
			        	title:'AlertID',
			        	message:'Your system has disallowed AlertID from running geolocation services.'
			        }).show();
			        
		    	}else{
		    		APP.getCurrentLocation(sendUploadBase);
				}
			}
		}
		
		function sendUploadBase(_coords){
			//alert(JSON.stringify(_coords));
			
			var e_body = "The following family member is missing.  Please help us locate them.  If you have any information, please reply to this post. \n \n ";
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
			//Ti.API.info('--------MEMBER---------------------->'+JSON.stringify(member));
			if(member.m_photo.length > 5){
					
					//////////////////// PHOTO
					APP.showActivityindicator();	
					//HAFJ.loadingShow();
					var shareServerUrl = 'https://alertid.com/apps/upload-baseV7.asp?atoken=' + Ti.App.Properties.getString('user_token');
					shareServerUrl += '&flat=' + _coords.lat + '&flon=' + _coords.lon;
					shareServerUrl += '&le=' + "N" + '&anon=' + "N"  + '&fpCommunity=' + "Y"  + '&fpMedia=' + "N"  + '&desc=' + e_body + '&acategory=';
					shareServerUrl += '&groupid=0&pknCommtype=389&prioritymessage=N&sendnotification=N';

					Ti.API.info('shareServerUrl = ' + shareServerUrl);

					var xhr = Titanium.Network.createHTTPClient();
					xhr.onload = function(e) {
						//HAFJ.loadingHide();
						APP.hideActivityindicator();
						var temp = this.responseText;
						Ti.API.info('temp = ' + temp);
						if(temp.indexOf('}]}') > -1) {
							temp = temp.substring(0, temp.indexOf('}]}') + 3);
						}
						var imageUploadResult = JSON.parse(temp);
						//Ti.API.info('imageUploadResult = ' + JSON.stringify(imageUploadResult));
						var uploadStatusDialog = Ti.UI.createAlertDialog({
							title : 'Photo Upload',
							ok : 'OK',
							message : imageUploadResult.message
						});

						uploadStatusDialog.show();
					};
					xhr.onerror = function(e) {
						// Ti.API.info(JSON.stringify(this));
						//HAFJ.loadingHide();
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
					};
					// need to set a timeout for this
					xhr.open('POST', shareServerUrl);
					xhr.setTimeout(120 * 1000);
					//xhr.setRequestHeader("Content-Type", "multipart/form-data");
					/*
					if(OS_IOS)
						var tempBlob = vw_pic.toImage();
					else
						var tempBlob = vw_pic.toBlob();
						*/
					xhr.send({
						File1 : member.blobimage /* event.media holds blob from gallery */
					});
					////////////////////
				}else{
					//Ti.API.info("no photo");
					var dataTemp = {
						atoken			: Ti.App.Properties.getString('user_token'),
						groupid			: "",
						flat			: _coords.lat,
						flon			: _coords.lon,
						usehome			: 0,
						nmessage		: e_body,
						nmparentid		: 0,
						fpcommunity		: "Y",
						nmcrimedataid	: 0,// TODO: check
						prioritymessage : "N",
						sendnotification: "N",
						pknCommtype		: 389
					};
					//Ti.API.info("-->"+JSON.stringify(dataTemp));
					
					/**** / Ti.API.info( 'loadInformation >>> _ws_request:' + JSON.stringify( _ws_request ) ); /****/
					APP.http.request({
						url 	: L( 'ws_sendcoumminty' ),
						type 	: 'GET',
						format 	: 'JSON',
						data	: dataTemp 
					}, function( _result ){
						/**** / Ti.API.info( 'loadInformation >>> _result:' + JSON.stringify( _result ) ); /****/
						if( _result._result == 0 ){
							alert( L( 'something_wrong' ) );
						}
						else{
							if( _result._data.errorcode != 0 ){
								alert( L( 'something_wrong' ) );
							}
							else{
								if(_result._data.errorcode != 0){
									//alert("Message could not be sent, please try again.");
									alert(_result._data.message);
								}else{
									alert("Message sent successful.");
								}
							}
						}
						return true;
					});
					
				}
		}
// CODE

// LSITENERS

// EXPORTS

