function Utils(){
	
}

Utils.removeChildren = function(viewObject){
	var children = viewObject.children;
    for (var i = 0; i < children.length; ++i) {
        viewObject.remove(children[i]);
    }
};

Utils.inArray = function(needle, haystack,property) {
    var length = haystack.length;
    var index  = -1;
    for(var i = 0; i < length; i++){
    	if(!property){
	        if(haystack[i] == needle){
	        	index = i;
	        	i = length;
	        } 
       }else{
       		if(haystack[i][property] == needle){
	        	index = i;
	        	i = length;
	        }
       }
    }
    return index;
};

Utils.toMoney = function(precio){
	precio = parseFloat(precio);
	return precio.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
};

module.exports = Utils;