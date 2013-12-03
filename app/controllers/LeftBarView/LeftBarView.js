/** INSTANTIATION **/
var APP = require("/core");
var args = arguments[0] || {}; 
var tempOption = "";

/** FUNCTIONS**/
function onClickMenu(e){
    highligthSelection(this);
	switch(this.id){
		case "avanzada":
            APP.handleNavigation("MyAlerts/MyAlerts");
            APP.openCloseMenu();
        	break;
		case "listado":
			APP.handleNavigation("Listado/Listado");
			APP.openCloseMenu();
			break;
		case "myNeighborhoods":
		    APP.handleNavigation("MyNeighborhoods/MyNeighborhoods",{type:0});
		    APP.openCloseMenu();
			break;
		case "notifications" :
			APP.handleNavigation('Notifications/Notifications');
			APP.openCloseMenu();
			break;	
		case "settings":
			APP.handleNavigation("Settings/Settings");
			APP.openCloseMenu();
			break;
		case "session":
			APP.openCloseMenu();
			Ti.App.Properties.getString( 'user_token' , false ) ? APP.logout() && highligthSelection() : APP.openLogin();
			break;
	   case "myGroups":
            APP.handleNavigation("MyNeighborhoods/MyNeighborhoods",{type:1});
            APP.openCloseMenu({onClose:APP.openCloseOptions});
            break;
       case "myFF":
            APP.handleNavigation("MyNeighborhoods/MyNeighborhoods",{type:2});
            APP.openCloseMenu();
            break;
       case "report":
            APP.handleNavigation("Report/Report");
            APP.openCloseMenu();
			break;
	}
    return true;
}

function highligthSelection(self){
    if( !self ){
    	tempOption                 = $.myAlerts;
        tempOption.backgroundImage = "/images/transparent.png";
        tempOption.backgroundImage = "/images/bg_dashboard_selector.png";
    }
    else
    if( self.id != "session" ){
    	tempOption                 = self;
        tempOption.backgroundImage = "/images/transparent.png";
        tempOption.backgroundImage = "/images/bg_dashboard_selector.png";
    }
    return true;
}

function highlightNotifications(){
	tempOption                 = $.notifications;
	tempOption.backgroundImage = "/images/transparent.png";
	tempOption.backgroundImage = "/images/bg_dashboard_selector.png";
	return true;
}

/** CODE **/
$.backgroundIosBar.height 	= APP.fixSizeIos7();
$.menuContainer.top			= APP.fixSizeIos7();
APP.sessionButton = {
	label 	: $.session_label,
	icon 	: $.session_icon
}; 
APP.notifications.badge = $.notification_number;
/*
tempOption                  = $.myAlerts;
tempOption.backgroundImage  = "/images/bg_dashboard_selector.png";
*/
/** EXPORTS **/
exports.highlightNotifications = highlightNotifications;





