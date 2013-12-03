// INSTANTIATION
var APP         = require( "/core" );
var args        = arguments[ 0 ] || {};
var params      = null;
var stackViews  = [];

// FUNCTIONS
function openMenu(){
    APP.openCloseMenu();
}

function openOptions(){
    APP.openCloseOptions();
}

function openNextWindow(){
    APP.openWindow(params);
}

function closeWindow(){
	APP.onClose && APP.onClose() && ( APP.onClose = null );
    APP.closeWindow();
}

function setCloseAction( callback ){
	APP.onClose = callback;
	return true;
}

function setLeftButton(_type,_boolean){
    if(_type == APP.OPENMENU){
        $.openMenu.height      = _boolean ? 36 : 0;
        // $.title.left 			= 52;
    }else if(_type == APP.CLOSEWINDOW){
        $.closeWindow.height   = _boolean ? 36 : 0;
        // $.title.left = 37;
    }else{
        $.openMenu.height      = _boolean ? 36 : 0;
        $.closeWindow.height   = _boolean ? 36 : 0;
        // $.title.left = 52;
    }
}

function setRightButton(_type,_boolean,_params,_image){
    if(_type == APP.OPENOPTIONS){
        switch(_image){
            case 1:
                $.openOptions.backgroundImage = "/images/ic_my_neighborhoods.png";
                $.openOptions.backgroundSelectedImage = "/images/ic_my_neighborhoods_pressed.png";
            break;
        }
        $.openOptions.height       = _boolean ? 36 : 0;
        params  = null;
    }else if(_type == APP.OPENWINDOW){
        $.openNextWindow.height    = _boolean ? 36 : 0;
        params = _params;
    }else{
        $.openOptions.height       = _boolean ? 36 : 0;
        $.openNextWindow.height    = _boolean ? 36 : 0;
        params  = null;
    }
}

function addCustomView(_view){
    $.container.add(_view);
    stackViews.push(_view);
}

function removeCustomView(_view){
    $.container.remove(_view);
    _.each(stackViews,function(_value,_key){
        if(_value == _view){
            stackViews.splice(_key, 1);
            return;
        }
    });
}

function removeAllCustomViews(){
    for(var i = stackViews.length;i > 0;i--){
        $.container.remove(stackViews.pop());
    }
}

function setTitle(_string){
    $.title.text = _string;
}

// CODE



// EXPORTS
exports.setCloseAction          = setCloseAction;
exports.setLeftButton           = setLeftButton;
exports.setRightButton          = setRightButton;
exports.addCustomView           = addCustomView;
exports.removeCustomView        = removeCustomView;
exports.removeAllCustomViews    = removeAllCustomViews;
exports.setTitle                = setTitle;
exports.refresh_advice			= $.refresh_advice;
exports.refresh_counter			= $.refresh_counter;


