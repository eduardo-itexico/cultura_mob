// INSTANTIATION
var APP = require("/core");
var args = arguments[0] || {};



// ADDITIONS 



// FUNCTIONS
function loadData(){
    APP.currentController.searchAddress(args.address);
}

function addAddress(){
    APP.openWindow({
        controller : 'Settings/EditAddress',
        controllerParams : {
            faaddress   : tempArr[0],
            facity      : (tempArr[1])?tempArr[1]:"",
            fastate     : (tempArr[2])?tempArr[2]:""
        }
    });
}

// CODE
var tempArr         = args.address.split(",");
$.streetLabel.text  = tempArr[0];
$.streetLabel2.text = ((tempArr[1])?tempArr[1]:"")+", "+((tempArr[2])?tempArr[2]:"");

