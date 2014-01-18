var APP = require("/core");
var Utils = require("/utils");

var args 	= arguments[0] || {};
var params  = args.params;
var controller = params.controller; 
var rows_selected = params.rowsSelected ? params.rowsSelected : [];
 
markSelected(rows_selected);

function markSelected(rows){
	var actual_rows = $.optionTV.data[0].rows;
	Ti.API.info('ACTUAL------------->'+JSON.stringify(actual_rows));
	if(rows && rows.length > 0){
		for(var i=0; i< rows.length ;  i++){
			var row = rows[i];
			var index = Utils.inArray(row,actual_rows,"title")
			if(index >= 0){
				$.optionTV.data[0].rows[index].hasCheck = true; 
			}
		}
	}
}

function onClickOptions(e){
	  var state = e.rowData.hasCheck;
	  e.source.hasCheck = state ? false : true;
	  controller.actualOption(getOptionsSelected());
	  APP.popOut();
} 

function getOptionsSelected(){
	var rows = $.optionTV.data[0].rows;
	var selected = [];
	if( rows.length > 0){
		for(var i =0; i < rows.length; i++){
			var row = rows[i];
			if(row.hasCheck){
				selected.push(row.title);
			}
			setOptionsShare(row.title,row.hasCheck);
		}
	}
	return selected;
}

function setOptionsShare(title,value){
    alert(value);
    if(!value){
        value = false;
    }
	switch(title){
		case "DHS":
			Ti.App.Properties.setBool('lawEnforcementS',value);
		break;
		
		case "Community":
			Ti.App.Properties.setBool('communityS',value);
		break;
		
		case "Media":
			Ti.App.Properties.setBool('mediaS',value);
		break;
		
		case "Anonymous":
			Ti.App.Properties.setBool('anonymousS',value);
		break;
		
	}
}
