// INSTANTIATION
var APP          = require("/core");
var args         = arguments[0] || {};

var _type        = 0;
var _latitude    = 0;
var _longitude   = 0;
var _title       = "";
var _pkorgGroups = 0;
var _ogfAdmin    = "N";
var _controller  = this;

var _counter=0,_headerbar,_maximum=0,_interval,_cinterval=0,_timeout,_touch = false; // These are for pulldown to refresh

// FUNCTIONS

/**
 *	Decrease the counter to refresh
 **/
function decrease() {
	_interval && clearInterval( _interval );
	_interval = setInterval(function(){
		_counter = parseInt(_counter) - 5;
		if( _counter <= 0 ){
			_counter = 0;
			if( _cinterval++ > 25 ){
				_interval && clearInterval( _interval );
				_cinterval = 0;
			}
		}
		_headerbar.refresh_advice.setHeight( _counter + '%' );
		_headerbar.refresh_counter.setWidth( _counter + '%' );
		/**** /	Ti.API.info( 'decrease >>> _counter:' + _counter ); /****/
		return true;
	}, 20);
	return true;
}
	
function getMessages(_event){
	decrease();
	if( APP.walkthru.on ){
		loadFake();
	}
	else if(APP.getToken({openLogin:true})){
        APP.showActivityindicator();
        for(var i = $.commentsContainer.children.length-1; i >= 0;  i--){
            $.commentsContainer.remove($.commentsContainer.children[ i ]);
        }
        _latitude   = _event.lat;
        _longitude  = _event.lon;
        _title      = _event.faname;
        _pkorgGroups= _event.pkorgGroups;
        _ogfAdmin   = _event.ogfAdmin;
        if(_pkorgGroups != 0){
            var groupID = _pkorgGroups;
        }else{
            var groupID = 0;
        }
        var dataTemp = {
            url     : L("ws_getcomments"),
            type    : 'POST',
            format  : 'JSON',
            data    : {
                atoken      : APP.getToken({openLogin:false}),
                groupID     : groupID,
                flat        : _event.lat,
                flon        : _event.lon,
                corder      : "recent",
                pknmessage  : (_event.pknmessage)?_event.pknmessage:0
            }
        };
        Ti.API.info("-->"+JSON.stringify(dataTemp));
        APP.http.request(dataTemp,function(_result){
            //Ti.API.info("-->"+JSON.stringify(_result));
            if(_result._result == 1){
                if(_result._data.errorcode == 0){
                    $.neighborTitle.text = _event.faname;
                    if(_event.pknmessage){
                        $.commentsContainer.add(Ti.UI.createView({height:APP.fixSizeIos7(40)}));
                    }else{
                        $.commentsContainer.add(Ti.UI.createView({height:APP.fixSizeIos7(60)}));
                    }
                    if(_event.pknmessage){
                        $.commentsContainer.add(Alloy.createController("MyNeighborhoods/CommentView",{_data:_result._data.data[0],pknmessage:(_event.pknmessage)?_event.pknmessage:0,isFirst:true}).getView());
                        if(_result._data.data[0].total > 0){
                            for(var i=0;i<_result._data.data.length;i++){
                                //Ti.API.info("-->"+JSON.stringify(_result._data.data[i]));
                                if(_result._data.data[i].nmessage1.length > 0){
                                    $.commentsContainer.add(Alloy.createController("MyNeighborhoods/CommentView",{_data:_result._data.data[i],pknmessage:(_event.pknmessage)?_event.pknmessage:0}).getView());
                                }
                            }
                        }
                    }else{
                        for(var i=0;i<_result._data.data.length;i++){
                            //Ti.API.info("-->"+JSON.stringify(_result._data.data[i]));
                            $.commentsContainer.add(Alloy.createController("MyNeighborhoods/CommentView",{_data:_result._data.data[i],pknmessage:(_event.pknmessage)?_event.pknmessage:0}).getView());
                        }
                    }
                    $.commentsContainer.add(Ti.UI.createView({height:Alloy.Globals.CONTENT_BOTTOM}));
                    APP.hideActivityindicator();
                }else{
                    //alert(_result._data.message);
                    APP.hideActivityindicator();
                    alert("No messages were found.");
                }
            }else{
                APP.hideActivityindicator();
                alert("Internet connection error, please try again.");
            }
            
        });
    }else{
        APP.hideActivityindicator();
    }
}

function updateView(_params){
    $.neighborTitle.text = "";
    _type       = _params.type;
    _latitude   = 0;
    _longitude  = 0;
    _title      = "";
    _pkorgGroups= 0;
    _ogfAdmin   = "N";
    APP.headerbar.removeAllCustomViews()
    APP.headerbar.setLeftButton(0,false);
    APP.headerbar.setRightButton(0,false);
    APP.headerbar.setLeftButton(APP.OPENMENU,true);
    APP.headerbar.setRightButton(APP.OPENOPTIONS,true,{},1);
	if(!APP.getToken({openLogin : false})){
        for(var i = $.commentsContainer.children.length-1; i >= 0;  i--){
            $.commentsContainer.remove($.commentsContainer.children[i]);
        }
    }
    if(_params.type == 0){
        APP.headerbar.setTitle("My Neighborhoods");
        APP.optionbar.changeView(2,
            function(){
                APP.openWindow({
                        controller : 'Settings/EditAddress',
                        controllerParams : {
                            callback : function(){
                                APP.optionbar.updateMyAddresses();
                            }
                        }
                    });
            }
        );
        currentPosition();
    }else if(_params.type == 1){
        for(var i = $.commentsContainer.children.length-1; i >= 0;  i--){
            $.commentsContainer.remove($.commentsContainer.children[i]);
        }
        APP.showActivityindicator();
        APP.headerbar.setTitle("My Groups");
        APP.optionbar.changeView(3,
            function(){
              APP.openWindow({
                    controller : 'MyNeighborhoods/SearchGroups',
                    controllerParams : {
                        callback : function(){
                            //send update
                        }
                    }
                });
            }
        );
    }else if(_params.type == 2){
        for(var i = $.commentsContainer.children.length-1; i >= 0;  i--){
            $.commentsContainer.remove($.commentsContainer.children[i]);
        }
        APP.showActivityindicator();
        APP.headerbar.setTitle("My Friends and Family");
        APP.optionbar.changeView(4,
            function(){
               APP.openWindow({
                    controller : 'MyNeighborhoods/SearchGroups',
                    controllerParams : {
                        callback : function(){
                            //send update
                        }
                    }
                });
            }
        );
    }
    
}

function currentPosition(){
    APP.getCurrentLocation(function(_event){
        if(_event.success){
            _event.faname       = "Current Location";
            _event.pkorgGroups  = _pkorgGroups;
            _event.ogfAdmin     = _ogfAdmin;
            getMessages(_event);
        }
    });
}

function addComment(){
    if( APP.getToken({ openLogin : true }) && APP.popUpController == null ){
        APP.popUp({
            title       : 'New Post',
            container : {
                width   : 300,
                height  : 340
            },
            controller  : 'MyNeighborhoods/NewPost',
            controllerParams : {
                isAdmin  	: _ogfAdmin,
                isGroup  	: (_pkorgGroups != 0)?1:0,
                groupID  	: (_pkorgGroups != 0)?_pkorgGroups:"",
                lat      	: _latitude,
                lon      	: _longitude,
                pknmessage	: (args.params && args.params.pknmessage)?args.params.pknmessage:0,
                refButton	: (args.params && args.params.refButton)?args.params.refButton:0,
                controller	: _controller,
                callback	: function(){ return true; }
            }
        });
    }
}

function loadFake(){
    for(var i = $.commentsContainer.children.length-1; i >= 0;  i--){
        $.commentsContainer.remove($.commentsContainer.children[i]);
    }
	$.commentsContainer.add(Ti.UI.createView({
		height : APP.fixSizeIos7( 60 )
	}));
	for (var i = 0; i < args.fake.length; i++) {
		$.commentsContainer.add(Alloy.createController("MyNeighborhoods/CommentView", {
			_data : args.fake[ i ],
			pknmessage : 0
		}).getView());
	}
    return true;
}

function refresh(){
	reloadMessages();
	return true;
}

function reloadMessages(){
    if(args.params && args.params.pknmessage){
        getMessages({lat:0,lon:0,faname:"",pkorgGroups:_pkorgGroups,pknmessage:args.params.pknmessage});
    }else{
        getMessages({lat:_latitude,lon:_longitude,faname:_title,pkorgGroups:_pkorgGroups});
    }
}

function removeComment(_view){
    $.commentsContainer.remove(_view);
}

function initializeView(){
    if(_type==1 || _type==2){
        APP.openCloseOptions();
    }
    updateView({type:_type});
}

function clearView(){
    for(var i = $.commentsContainer.children.length-1; i >= 0;  i--){
        $.commentsContainer.remove($.commentsContainer.children[i]);
    }
}

// CODE
$.neighborTitleContainer.top = 40+APP.fixSizeIos7();

if( args.params && args.params.pknmessage ){
    //alert(args.params.pknmessage);
    _headerbar = args.toolBar;
    args.toolBar.setTitle("Thread Detail");
    $.neighborTitleContainer.visible = false;
    getMessages({lat:0,lon:0,faname:"",pkorgGroups:_pkorgGroups,pknmessage:args.params.pknmessage});
}
else{
	_headerbar = APP.headerbar;
}

/** LISTENERS **/

/**
 * Pulldown to refresh
 **/
$.commentsContainer.addEventListener('scroll', function( event ){
	if( _touch && parseInt( event.y ) <= _maximum ){
		if( _counter < 105 ){
			_counter = _counter + ( OS_ANDROID ? 10 : 5 );
			_headerbar.refresh_advice.setHeight( _counter + '%' );
			_headerbar.refresh_counter.setWidth( _counter + '%' );
		}
		else{
			decrease();
			refresh();
		}
	}
	_maximum = parseInt( event.y );
	if( _maximum > 0 ){
		_maximum = 0
	};
	return true;
});
if( OS_ANDROID ){
	$.commentsContainer.addEventListener('touchstart', function(event) {
		Ti.API.warn('touchstart');
		_touch = true;
		return true;
	});	
	$.commentsContainer.addEventListener('touchend', function(event) {
		Ti.API.warn('touchend');
		_touch = false;
		decrease();
		return true;
	});
}
if( OS_IOS ){
	$.commentsContainer.addEventListener('dragstart', function(event) {
		Ti.API.warn('dragstart');
		_touch = true;
		return true;
	});
	$.commentsContainer.addEventListener('dragend', function(event) {
		Ti.API.warn('dragend');
		_touch = false;
		decrease();
		return true;
	});
}

// EXPORTS
exports.updateView      = updateView;
exports.getMessages     = getMessages;
exports.reloadMessages  = reloadMessages;
exports.currentPosition = currentPosition;
exports.removeComment   = removeComment;
exports.initializeView  = initializeView;
exports.clearView       = clearView;

/*
APP.headerbar.setLeftButton(APP.OPENMENU,true);
APP.headerbar.setRightButton(APP.OPENWINDOW,true,{controller:"MyNeighborhoods/MyNeighborhoods"});

*/