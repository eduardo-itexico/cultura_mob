var APP = require("/core");
var args 	= arguments[0] || {};
var params  = args.params;
var actual  = params.actualCategory ? params.actualCategory : "";
var precios = params.precios;
var option	= params.option; 

Ti.API.info('ACTUAL-------------->'+JSON.stringify(actual));
populateTable(precios);
markSelected(actual);

function numberToCurrency(number, decimalSeparator, thousandsSeparator, nDecimalDigits){
    //default values
    decimalSeparator = decimalSeparator || '.';
    thousandsSeparator = thousandsSeparator || ',';
    nDecimalDigits = nDecimalDigits == null? 2 : nDecimalDigits;

    var fixed = number.toFixed(nDecimalDigits), //limit/add decimal digits
        parts = new RegExp('^(-?\\d{1,3})((?:\\d{3})+)(\\.(\\d{'+ nDecimalDigits +'}))?$').exec( fixed ); //separate begin [$1], middle [$2] and decimal digits [$4]

    if(parts){ //number >= 1000 || number <= -1000
        return parts[1] + parts[2].replace(/\d{3}/g, thousandsSeparator + '$&') + (parts[4] ? decimalSeparator + parts[4] : '');
    }else{
        return fixed.replace('.', decimalSeparator);
    }
}

function populateTable(precios){
	var tableData = [];
	if(precios && precios.length > 0){
		for(var i=0; i < precios.length; i++){
			var row = Ti.UI.createTableViewRow({
			    title:"$ "+ numberToCurrency(precios[i]),
			    valor:precios[i]
			});
			tableData.push(row);
		}
		$.optionTV.setData(tableData);
	}
}

function onClickOptions(e){
	  var state = e.rowData.hasCheck;
	  cleanAllRows();
	  e.source.hasCheck = state ? false : true;
	  Ti.API.info('ROW--'+JSON.stringify(e.rowData));
	  var object = {value:e.rowData.title,
				  	index:option,
				  	precio:e.rowData.valor};
	  params.controller.actualCategory(object);
	  APP.popOut();
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
