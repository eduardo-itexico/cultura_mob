// INSTANTIATION
var APP = require("/core");


function clickButtons(e){
	Ti.API.info(e.source.id);
	switch(e.source.id){
		case "callEmergency":
			var notificationDialog = Ti.UI.createAlertDialog({
				title : 'Confirmation',
				message : 'Are you sure you want to dial this number?',
				buttonNames : ['YES', 'NO']
			});
			notificationDialog.addEventListener('click', function(e) {
				if(e.index === 0) {
					Titanium.Platform.openURL('tel:911');
				}
			});
			notificationDialog.show();
		break;
		
		case "callNCMEC":
			var notificationDialog = Ti.UI.createAlertDialog({
				title : 'Confirmation',
				message : 'Are you sure you want to dial this number?',
				buttonNames : ['YES', 'NO']
			});
			notificationDialog.addEventListener('click', function(e) {
				if(e.index === 0) {
					Titanium.Platform.openURL('tel:18008435678');
				}
			});
			notificationDialog.show();
		break;
		
		
		case "tips":
			APP.popUp({controller:"FamilyWallet/Tips",
						controllerParams:{}});
		break;
		
		
	}
}
