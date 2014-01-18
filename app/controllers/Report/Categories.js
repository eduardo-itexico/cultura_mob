var args 	= arguments[0] || {};
var params  = args.params;
var actual  = params.actualCategory ? params.actualCategory : ""; 

Ti.API.info('ACTUAL-------------->'+JSON.stringify(actual));

markSelected(actual);

function onClickOptions(e){
	  var state = e.rowData.hasCheck;
	  cleanAllRows();
	  e.source.hasCheck = state ? false : true;
	  var object = {value:e.rowData.title,
				  	index:"movimiento"};
	  params.controller.actualCategory(object);
	  //controller.actualOption(getOptionsSelected());
}

function cleanAllRows(){
	var rows = $.optionTV.data[0].rows;
	for(var i=0; i< rows.length ;  i++){
		$.optionTV.data[0].rows[i].hasCheck = false;
	}
} 

function markSelected(row){
	var actual_rows = $.optionTV.data[0].rows;
	if(row){
		for(var i=0; i< actual_rows.length ;  i++){
			if(row.value == actual_rows[i].title){
				$.optionTV.data[0].rows[i].hasCheck = true;
				i = actual_rows.length;
			}
			
		}
	}
}
