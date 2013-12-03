// INSTANTIATION
var APP 	= require("/core");
var args 	= arguments[0] || {};
var map 	= OS_IOS ? Ti.Map : Alloy.Globals.Map;

var _isLogged           = false;
var latitude            = 0;
var longitude           = 0;
var _updateLatitude     = 0;
var _updateLongitude    = 0;
var shouldLoadMap       = false;

if (OS_ANDROID) {
	var latitudeDelta  = 0.01;
	var longitudeDelta = 0.01;
} else {
	var latitudeDelta  = 0.02;
	var longitudeDelta = 0.02;
}

var days = [{
	title : 'Last 24 hours',
	filterID : 'last1'
}, {
	title : 'Last 3 days',
	filterID : 'last3'
}, {
	title : 'Last 7 days',
	filterID : 'last7'
}, {
	title : 'Last 30 days',
	filterID : 'last30'
}, {
	title : 'Last 90 days',
	filterID : 'last90'
}, {
	title : 'All Days',
	filterID : 'ALL'
}];

// FUNCTIONS

function changeSettings() {
	/* $.settingsView.animate({
	 view:$.typesView,
	 transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
	 });*/
	var a = Titanium.UI.createAnimation({
		left : APP.numberOperation(-$.mapView.size.width, "/", 2, false),
		duration : 300
	});
	var a2 = Titanium.UI.createAnimation({
		left : 20,
		duration : 300
	});
	var b = Titanium.UI.createAnimation({
		left : APP.numberOperation($.mapView.size.width, "/", 2, false),
		duration : 300
	});
	var o = Titanium.UI.createAnimation({
		opacity : 0.8,
		duration : 300
	});
	var o2 = Titanium.UI.createAnimation({
		opacity : 1,
		duration : 300
	});
	if ($.typesView.isOpen) {
		a.addEventListener('complete', function() {
			$.typesView.zIndex = 98;
			$.typesView.animate(a2);
		});
		if (OS_IOS) {
			$.typesView.animate(o);
		}
		$.typesView.animate(a);

		b.addEventListener('complete', function() {
			$.settingsView.zIndex = 99;
			if (OS_IOS) {
				$.settingsView.animate(o2);
			}
			$.settingsView.animate(a2);
		});
		$.settingsView.animate(b);
	} else {
		a.addEventListener('complete', function() {
			$.settingsView.zIndex = 98;
			$.settingsView.animate(a2);
		});
		if (OS_IOS) {
			$.settingsView.animate(o);
		}
		$.settingsView.animate(a);

		b.addEventListener('complete', function() {
			$.typesView.zIndex = 99;
			if (OS_IOS) {
				$.typesView.animate(o2);
			}
			$.typesView.animate(a2);
		});
		$.typesView.animate(b);
	}
	$.typesView.isOpen = !$.typesView.isOpen;
}

function changeSwitch(_event) {
	if (_event.source.value == true) {
		if (_event.source.filterID == 0) {
			shouldLoadMap = true;
			$.fsw2.value = true;
			$.fsw3.value = true;
			$.fsw4.value = true;
			$.fsw5.value = true;
			$.fsw6.value = true;
			$.fsw7.value = true;
			$.fsw8.value = true;
			$.fsw9.value = true;
			$.fsw10.value = true;
			$.fsw11.value = true;
			$.fsw12.value = true;
			$.fsw13.value = true;
			$.fsw14.value = true;
			$.fsw15.value = true;
			$.fsw17.value = true;
			$.fsw16.value = true;
			setTimeout(function() {
				shouldLoadMap = false;
				Ti.API.info("load map");
				getCrimes({
					lat : latitude,
					lon : longitude
				});
			}, 1500);
		} else {
			var tempString = Ti.App.Properties.getString('MapFilter.Categories.EnabledCategories');
			Ti.App.Properties.setString('MapFilter.Categories.EnabledCategories', tempString + "," + _event.source.filterID);
		}
	} else {
		if (_event.source.filterID == 0) {
			shouldLoadMap = true;
			$.fsw2.value = false;
			$.fsw3.value = false;
			$.fsw4.value = false;
			$.fsw5.value = false;
			$.fsw6.value = false;
			$.fsw7.value = false;
			$.fsw8.value = false;
			$.fsw9.value = false;
			$.fsw10.value = false;
			$.fsw11.value = false;
			$.fsw12.value = false;
			$.fsw13.value = false;
			$.fsw14.value = false;
			$.fsw15.value = false;
			$.fsw17.value = false;
			$.fsw16.value = false;
			setTimeout(function() {
				shouldLoadMap = false;
				getCrimes({
					lat : latitude,
					lon : longitude
				});
			}, 1500);
		} else {
			var tempString = Ti.App.Properties.getString('MapFilter.Categories.EnabledCategories', '4,1,2,3,5,6,7,9,10,11,12,13,14,15,16,18,19');
			var regString = new RegExp("," + _event.source.filterID + "\\b", "g");
			Ti.App.Properties.setString('MapFilter.Categories.EnabledCategories', tempString.replace(regString, ""));
		}
	}
	//Ti.API.info(Ti.App.Properties.getString('MapFilter.Categories.EnabledCategories'));
	if (shouldLoadMap == false) {
		getCrimes({
			lat : latitude,
			lon : longitude
		});
	}
}

function currentPosition() {
	APP.getCurrentLocation(function(_event) {
		if (_event.success) {
			_event.faname = "Current Location";
			getCrimes(_event);
		}else{
		    APP.hideActivityindicator();
		}
	});
}

function getAlerts( event , callback ){
	APP.getToken({
		openLogin 	: true,
		callback	: function( token ){
			var _ws_request = {
				atoken 		: token,
				flat 		: event.lat,
				flon 		: event.lon,
				usehome		: 0
			};
			/**** / Ti.API.info( 'getAlerts >>> _ws_request:' + JSON.stringify( _ws_request ) ); /****/
			APP.http.request({
				url 	: L( 'ws_getalerts' ),
				type 	: 'GET',
				format 	: 'JSON',
				data	: _ws_request 
			},function( response ){
				/**** / Ti.API.info( 'getAlerts >>> response:' + JSON.stringify( response ) ); /****/
				if( response._result == 0 ){
					//alert( L( 'something_wrong' ) );
					APP.closeWindow();
				}
				else{
					if( response._data.errorcode != 0 ){
						Ti.API.warn( response._data.message );
						callback && callback();
					}
					else{
						callback && callback( response._data.data );
					}
				}
				return true;
			});
			return true;
		}
	});
	return true;
}

function getCountCrimes(_event) {
	var dataTemp = {
		url : L("ws_getcrimelevel"),
		type : 'POST',
		format : 'JSON',
		data : {
			atoken : APP.getToken({
				openLogin : false
			}),
			flat : _event.lat,
			flon : _event.lon,
			usehome : 0
		}
	};
	APP.http.request(dataTemp, function(_result) {
		//Ti.API.info("-->"+JSON.stringify(_result));
		if (_result._result == 1) {
			if (_result._data.errorcode == 0) {
				$.crimeTitle.text = _result._data.data[0].crimecnt;
				$.sexTitle.text = _result._data.data[0].oscount;
			} else {
				//alert(_result._data.message);
				//alert("No messages were found.");
			}
		} else {
			//alert("Internet connection error, please try again.");
		}

	});
}

function getCrimes(_event) {
    APP.showActivityindicator();
	latitude = _event.lat;
	longitude = _event.lon;
	/** [M] ** /
	$.mapView.setLocation({
		latitude : _event.lat,
		longitude : _event.lon,
		animate : true,
		latitudeDelta : latitudeDelta,
		longitudeDelta : longitudeDelta
	});
	/****/
	$.mapView.setRegion({
		latitude : _event.lat,
		longitude : _event.lon,
		animate : true,
		latitudeDelta : latitudeDelta,
		longitudeDelta : longitudeDelta
	});
	$.alertsTitle.text = _event.faname;
	//if(APP.getToken({openLogin : true})){
		getCountCrimes(_event);
		var dataTemp = {
			url : L("ws_getcrimes"),
			type : 'POST',
			format : 'JSON',
			data : {
				atoken : APP.getToken({
					openLogin : false
				}),
				flat : _event.lat,
				flon : _event.lon,
				usehome : 0,
				weathercheck : 1,
				sodcheck : 1,
				neighborcheck : 1,
				location : "",
				rdate : Ti.App.Properties.getString('MapFilter.Days.NumberOfDays', "ALL"),
				ctype : Ti.App.Properties.getString('MapFilter.Categories.EnabledCategories', '4,1,2,3,5,6,7,9,10,11,12,13,14,15,16,18,19')
			}
		};
		APP.http.request(dataTemp, function(_result) {
			//Ti.API.info("-->"+JSON.stringify(_result));
			if (_result._result == 1) {
				if (_result._data.errorcode == 0) {
					var tempCrimeList = _result._data.data;
					var tempCrimeAnno = [];
					for (var i = 0; i < tempCrimeList.length; i++) {
						//Ti.API.info(JSON.stringify(_result._data.data[i]));
						var tempImage = tempCrimeList[i].ncticon.slice(19, -4) + '.png';
						tempImage = tempImage.split("/");
						var alertImage = "/images/Crimes/" + tempImage[tempImage.length - 1];
						tempCrimeList[ i ].image = alertImage;
						// image
						//Ti.API.info(alertImage);
						if (tempCrimeList[i].cdtype == "Weather" || tempCrimeList[i].cdtype === 'Sex Offender')// URL
							var baseurl = tempCrimeList[i].url;
						else if (tempCrimeList[i].cdtype == "Neighbor") {
							var baseurl = 'http://alertid.com/commmore.asp?athread=' + tempCrimeList[i].pkcrimedata;
							baseurl = "Neighbor";
						} else
							var baseurl = 'http://alertid.com/commmore.asp?cdid=' + tempCrimeList[i].pkcrimedata;

						tempCrimeAnno.push({
							anno : map.createAnnotation({
								latitude : _result._data.data[i].cdlat,
								longitude : _result._data.data[i].cdlon,
								title : _result._data.data[i].ncttype,
								subtitle : _result._data.data[i].cddatetime + " - " + tempCrimeList[i].miles + " miles away " + tempCrimeList[i].cdagency,
								pincolor : Titanium.Map.ANNOTATION_RED,
								animate : true,
								rightButton : alertImage,
								image : alertImage,
								crimeid : _result._data.data[i].pkcrimedata,
								url : baseurl
							})
						});
						$.mapView.addAnnotation(tempCrimeAnno[i].anno);
					}
					getAlerts(_event,function( alertsData ){
						setListView( alertsData , tempCrimeList , tempCrimeAnno );
						return true;
					});
					APP.hideActivityindicator();
				} else {
					//alert(_result._data.message);
					//alert("No messages were found.");
					APP.hideActivityindicator();
				}
			} else {
			    APP.hideActivityindicator();
				// alert("Internet connection error, please try again..");
			}
		});
	//}else{
	  //  APP.hideActivityindicator();
	//}
}

function openListView(_forceClose) {
	if (_forceClose == true) {
		$.listView.isOpen = true;
	} else {
		openSettings(true);
	}
	if ($.listView.isOpen) {
		if (OS_IOS) {
			$.listView.animate({
				right : APP.numberOperation(-$.mapView.size.width, "-", 0, false),
				duration : 150
			});
		}
		$.listView.animate({
			top : APP.numberOperation($.mapView.size.height, "+", 20, false),
			duration : 150
		});
	} else {
		if (OS_IOS) {
			$.listView.animate({
				right : 20,
				duration : 150
			});
		}
		$.listView.animate({
			top : 64,
			duration : 150
		});
	}
	$.listView.isOpen = !$.listView.isOpen;
}

function openSettings( _forceClose ){
	APP.popOut();
	if (_forceClose == true) {
		$.settingsView.isOpen = true;
	} else {
		openListView(true);
	}
	if ($.settingsView.isOpen) {
		if (OS_IOS) {
			$.settingsView.animate({
				left : APP.numberOperation(-$.mapView.size.width, "-", 0, false),
				duration : 150
			});
			$.typesView.animate({
				left : APP.numberOperation(-$.mapView.size.width, "-", 0, false),
				duration : 150
			});
		}
		$.settingsView.animate({
			top : APP.numberOperation($.mapView.size.height, "+", 20, false),
			duration : 150
		});
		$.typesView.animate({
			top : APP.numberOperation($.mapView.size.height, "+", 20, false),
			duration : 150
		});
	} else {
		if (OS_IOS) {
			$.settingsView.animate({
				left : 20,
				duration : 150
			});
			$.typesView.animate({
				left : 20,
				duration : 150
			});
		}
		$.settingsView.animate({
			top : 64,
			duration : 150
		});
		$.typesView.animate({
			top : 64,
			duration : 150
		});
	}
	$.settingsView.isOpen = !$.settingsView.isOpen;
}

function searchAddress(_address) {
	if (APP.getToken({openLogin : false})) {
	    APP.showActivityindicator();
		var dataTemp = {
			url : "http://maps.google.com/maps/api/geocode/json?address=" + _address + "&sensor=true",
			type : 'GET',
			format : 'JSON'
		};
		// Ti.API.info('dataTemp:'+JSON.stringify(dataTemp));

		APP.http.request(dataTemp, function(_result) {
			//Ti.API.info("-->"+JSON.stringify(_result._data));
			if (_result._result == 1) {
				if (_result._data.results.length > 0) {
					getCrimes({
						lat : _result._data.results[0].geometry.location.lat,
						lon : _result._data.results[0].geometry.location.lng,
						faname : _address
					});
					APP.openCloseOptions();
				} else {
					//alert(_result._data.message);
					// alert("No messages were found.");
					APP.hideActivityindicator();
				}
			} else {
				//alert("Internet connection error, please try again.");
				APP.hideActivityindicator();
			}

		});
	}

	//xhrGeocode.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
}

function selectDays() {
	//Ti.API.info(Ti.App.Properties.getString('MapFilter.Days.NumberOfDays'));
	var daysSelectDialog = Titanium.UI.createOptionDialog({
		title : 'Select Days Filter',
		options : ['Last 24 hours', 'Last 3 days', 'Last 7 days', 'Last 30 days', 'Last 90 days', 'All days'],
		cancel : -1
	});
	daysSelectDialog.addEventListener('click', function(e) {
		if (e.index >= 0) {
			//Ti.App.Properties.setString('MapFilter.Days.NumberOfDays', days[e.index].filterID);
			$.daysLabel.text = "Show: " + days[e.index].title;
			getCrimes({
				lat : latitude,
				lon : longitude
			});
		}
	});
	daysSelectDialog.show();
}

function selectRegion() {
	var zoomSelectDialog = Titanium.UI.createOptionDialog({
		title : 'Select Region',
		options : ['Neighborhood', 'Community', 'City'],
		cancel : -1
	});
	zoomSelectDialog.addEventListener('click', function(e) {
		if (e.index >= 0) {
			if (OS_ANDROID) {
				if (e.index === 0) {
					latitudeDelta = 0.01;
					longitudeDelta = 0.01;
					$.regionLabel.text = "Region: Neighborhood";
				} else if (e.index === 1) {
					latitudeDelta = 0.04;
					longitudeDelta = 0.04;
					$.regionLabel.text = "Region: Community";
				} else if (e.index === 2) {
					latitudeDelta = 0.001;
					longitudeDelta = 0.001;
					$.regionLabel.text = "Region: City";
				}
			} else {
				if (e.index === 0) {
					latitudeDelta = 0.02;
					longitudeDelta = 0.02;
					$.regionLabel.text = "Region: Neighborhood";
				} else if (e.index === 1) {
					latitudeDelta = 0.04;
					longitudeDelta = 0.04;
					$.regionLabel.text = "Region: Community";
				} else if (e.index === 2) {
					latitudeDelta = 0.17;
					longitudeDelta = 0.18;
					$.regionLabel.text = "Region: City";
				}
			}
			$.mapView.setRegion({
				latitude : latitude,
				longitude : longitude,
				animate : true,
				latitudeDelta : latitudeDelta,
				longitudeDelta : longitudeDelta
			});
		}
	});
	zoomSelectDialog.show();
}

function setHybView() {
	$.mapView.setMapType(Titanium.Map.HYBRID_TYPE);
}

function setListView( alerts_data , advisors_data , advisors_annotations ){
	$.listView.remove( $.tableAlerts );
	$.tableAlerts = Alloy.createController('MyAlerts/TableAlerts',{
		map						: $.mapView,
		alerts_data 			: alerts_data,
		advisors_data 			: advisors_data,
		advisors_annotations 	: advisors_annotations,
		openListView			: function(){
			openListView();
			return true;
		}
	}).getView();
	$.listView.add( $.tableAlerts );
}

function setSatView() {
	$.mapView.setMapType(Titanium.Map.SATELLITE_TYPE);
}

function setStandView() {
	$.mapView.setMapType(Titanium.Map.STANDARD_TYPE);
}

function setTrafficView(){
    if(OS_IOS){
        APP.openWindow({controller:"MyAlerts/TrafficView",controllerParams:{title:"Traffic View",lat:latitude,lon:longitude}});
    }else{
        $.mapView.setTraffic(!$.mapView.getTraffic());
    }
}
function updateView() {
	APP.headerbar.removeAllCustomViews()
	APP.headerbar.setLeftButton(0, false);
	APP.headerbar.setRightButton(0, false);
	APP.headerbar.setLeftButton(APP.OPENMENU, true);
	APP.headerbar.setRightButton(APP.OPENOPTIONS, true, {}, 1);
	APP.headerbar.setTitle("My Alerts");
	APP.optionbar.changeView(1, function() {
		APP.openWindow({
			controller : 'Settings/EditAddress',
			controllerParams : {
				callback : function() {
					APP.optionbar.updateMyAddresses();
				}
			}
		});
	});
	if(!APP.getToken({openLogin : false})){
	    $.alertsTitle.text = "";
	    _isLogged = false;
	}else{
	    if(_isLogged == false){
	        currentPosition();
	    }
	    _isLogged = true;
	}
	return true;
}

function refreshMap(){
    if(APP.getToken({openLogin : true})){
        getCrimes({lat:_updateLatitude,lon:_updateLongitude});
    }
}

function initializeView(){
    APP.optionbar.changeView(1, function() {
        APP.openWindow({
            controller : 'Settings/EditAddress',
            controllerParams : {
                callback : function() {
                    APP.optionbar.updateMyAddresses();
                }
            }
        });
    });
    currentPosition();
}            

// CODE
currentPosition();

$.alertsTitleContainer.top = 43 + APP.fixSizeIos7();
$.refreshMap.top = 78 + APP.fixSizeIos7();
$.settingsView.isOpen = false;
$.typesView.isOpen = true;
$.listView.isOpen = false;

var tempFilters = Ti.App.Properties.getString('MapFilter.Categories.EnabledCategories', '4,1,2,3,5,6,7,9,10,11,12,13,14,15,16,18,19');
var regString = new RegExp("," + $.fsw2.filterID + "\\b", "g");
$.fsw2.value = (tempFilters.match(regString) != null && tempFilters.match(regString).length > 0) ? true : false;
var regString = new RegExp("," + $.fsw3.filterID + "\\b", "g");
$.fsw3.value = (tempFilters.match(regString) != null && tempFilters.match(regString).length > 0) ? true : false;
var regString = new RegExp("," + $.fsw4.filterID + "\\b", "g");
$.fsw4.value = (tempFilters.match(regString) != null && tempFilters.match(regString).length > 0) ? true : false;
var regString = new RegExp("," + $.fsw5.filterID + "\\b", "g");
$.fsw5.value = (tempFilters.match(regString) != null && tempFilters.match(regString).length > 0) ? true : false;
var regString = new RegExp("," + $.fsw6.filterID + "\\b", "g");
$.fsw6.value = (tempFilters.match(regString) != null && tempFilters.match(regString).length > 0) ? true : false;
var regString = new RegExp("," + $.fsw7.filterID + "\\b", "g");
$.fsw7.value = (tempFilters.match(regString) != null && tempFilters.match(regString).length > 0) ? true : false;
var regString = new RegExp("," + $.fsw8.filterID + "\\b", "g");
$.fsw8.value = (tempFilters.match(regString) != null && tempFilters.match(regString).length > 0) ? true : false;
var regString = new RegExp("," + $.fsw9.filterID + "\\b", "g");
$.fsw9.value = (tempFilters.match(regString) != null && tempFilters.match(regString).length > 0) ? true : false;
var regString = new RegExp("," + $.fsw10.filterID + "\\b", "g");
$.fsw10.value = (tempFilters.match(regString) != null && tempFilters.match(regString).length > 0) ? true : false;
var regString = new RegExp("," + $.fsw11.filterID + "\\b", "g");
$.fsw11.value = (tempFilters.match(regString) != null && tempFilters.match(regString).length > 0) ? true : false;
var regString = new RegExp("," + $.fsw12.filterID + "\\b", "g");
$.fsw12.value = (tempFilters.match(regString) != null && tempFilters.match(regString).length > 0) ? true : false;
var regString = new RegExp("," + $.fsw13.filterID + "\\b", "g");
$.fsw13.value = (tempFilters.match(regString) != null && tempFilters.match(regString).length > 0) ? true : false;
var regString = new RegExp("," + $.fsw14.filterID + "\\b", "g");
$.fsw14.value = (tempFilters.match(regString) != null && tempFilters.match(regString).length > 0) ? true : false;
var regString = new RegExp("," + $.fsw15.filterID + "\\b", "g");
$.fsw15.value = (tempFilters.match(regString) != null && tempFilters.match(regString).length > 0) ? true : false;
var regString = new RegExp("," + $.fsw16.filterID + "\\b", "g");
$.fsw16.value = (tempFilters.match(regString) != null && tempFilters.match(regString).length > 0) ? true : false;
var regString = new RegExp("," + $.fsw17.filterID + "\\b", "g");
$.fsw17.value = (tempFilters.match(regString) != null && tempFilters.match(regString).length > 0) ? true : false;

if (tempFilters.length >= 2) {
	$.fsw0.value = true;
} else {
	$.fsw0.value = false;
}

// LISTENERS
$.mapView.addEventListener("postlayout", function() {
	var tempWidth = $.mapView.size.width;
	var tempHeight = $.mapView.size.height;
	if (OS_IOS) {
		$.settingsView.opacity = 0.8;
	}
	$.settingsView.width = APP.numberOperation(tempWidth, "-", 36, false);
	$.settingsView.height = APP.numberOperation(tempHeight, "-", 144, false);
	$.settingsView.left = (OS_ANDROID) ? 20 : APP.numberOperation(-tempWidth, "-", 0, false);
	$.settingsView.top = APP.numberOperation(tempHeight, "+", 20, false);
	$.typesView.width = APP.numberOperation(tempWidth, "-", 36, false);
	$.typesView.height = APP.numberOperation(tempHeight, "-", 144, false);
	$.typesView.left = (OS_ANDROID) ? 20 : APP.numberOperation(-tempWidth, "-", 0, false);
	$.typesView.top = APP.numberOperation(tempHeight, "+", 20, false);
	$.listView.width = APP.numberOperation(tempWidth, "-", 40, false);
	$.listView.height = APP.numberOperation(tempHeight, "-", 144, false);
	$.listView.right = (OS_ANDROID) ? 20 : APP.numberOperation(-tempWidth, "-", 0, false);
	$.listView.top = APP.numberOperation(tempHeight, "+", 20, false);

});

$.mapView.addEventListener('click', function(evt) {
	//Ti.API.info(evt.annotation.crimeid);
	var annotation = evt.annotation;
	var url = (evt.annotation) ? evt.annotation.url : 'http://alertid.com/our-story.asp';

	if (evt.clicksource === 'subtitle' || evt.clicksource === 'leftButton' || evt.clicksource === 'annotation' || evt.clicksource === 'rightButton' || evt.clicksource === 'title') {
		if (url == "Neighbor") {
			APP.openWindow({controller:"MyNeighborhoods/MyNeighborhoods",controllerParams:{pknmessage:annotation.crimeid}});
		} else {
			APP.openWindow({
				controller : 'Widgets/Browser',
				controllerParams : {
					url : url,
					title : evt.annotation.title
				}
			});
		}
	}
});

$.mapView.addEventListener('regionChanged', function(e){
    //Ti.API.info(JSON.stringify(e));
    _updateLatitude = e.latitude;
    _updateLongitude = e.longitude;
});

// EXPORTS
exports.updateView      = updateView;
exports.getCrimes       = getCrimes;
exports.currentPosition = currentPosition;
exports.searchAddress   = searchAddress;
exports.initializeView  = initializeView; 
