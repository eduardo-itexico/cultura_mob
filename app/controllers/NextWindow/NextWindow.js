// INSTANTIATION
var APP = require("/core");
var args = arguments[0] || {};
var tempToolbar     = Alloy.createController('TopToolBar/TopToolBar',{});
tempToolbar.removeAllCustomViews()
tempToolbar.setLeftButton(0,false);
tempToolbar.setRightButton(0,false);

var tempController  = Alloy.createController(args.controller,{toolBar:tempToolbar,params:args.controllerParams});

// ADDITIONS
$.topToolBarContainer.add(tempToolbar.getView());
$.container.add(tempController.getView());


// FUNCTIONS


// CODE
tempToolbar.setLeftButton(APP.CLOSEWINDOW,true);
$.backgroundIosBar.height = APP.fixSizeIos7();
$.topToolBarContainer.top = APP.fixSizeIos7();
