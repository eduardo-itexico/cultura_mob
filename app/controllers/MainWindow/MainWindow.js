// INSTANTIATION
var APP = require("/core");
var args = arguments[0] || {};

APP.headerbar 			= Alloy.createController('TopToolBar/TopToolBar',{});
APP.menubar             = Alloy.createController('LeftBarView/LeftBarView',{});
APP.optionbar           = Alloy.createController('RightBarView/RightBarView',{});
APP.mainContainer       = $.mainContainer;
APP.container 			= $.viewContainer;

// ADDITIONS 
$.topToolBarContainer.add(APP.headerbar.getView());
$.leftBar.add(APP.menubar.getView());
$.rightBar.add(APP.optionbar.getView());
//APP.container.add(APP.currentController.getView());

// FUNCTIONS
function poslayoutFnc(){
    APP.DEVICE_WIDTH    = $.win.size.width;
    APP.DEVICE_HEIGHT   = $.win.size.height;
    //TODO: Here we change the first option opened
    APP.handleNavigation("Report/Report");
    $.win.removeEventListener("postlayout",poslayoutFnc);
}
// CODE
APP.optionbarContainer          = $.rightBar;
APP.menubar.getView().isOpen    = false;
APP.optionbar.getView().isOpen  = false;
$.backgroundIosBar.height 		= APP.fixSizeIos7();
$.topToolBarContainer.top 		= APP.fixSizeIos7();



// LISTENERS
$.win.addEventListener('androidback',function(e){
    APP.closeWindow();
});

$.win.addEventListener("postlayout",poslayoutFnc);

$.win.addEventListener('resume', function(){
	Ti.API.info('Resume');
    APP.rateThisApp();
});

$.win.addEventListener('focus',function(){
	Ti.API.info('Focus');
	APP.reportTxtFld && !APP.reportIsOpen && APP.reportTxtFld.blur();
});

$.backgroundIosBar.addEventListener('click',function(){
    APP.startWalkThru();
});

