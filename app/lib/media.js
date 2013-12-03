exports.getPicture = function(_params){
    var dialog = Titanium.UI.createOptionDialog({
        options: ['Camera','Gallery','Cancel'],
        cancel:2
    });
    dialog.show();
    dialog.addEventListener('click',function(e){
        if(e.index == 0){
            Titanium.Media.showCamera({
                success:function(event){
                     //var image = event.media;
                     _params.callback(event);
                },
                cancel:function(){
     
                },
                error:function(error){
                    // create alert
                    var a = Titanium.UI.createAlertDialog({title:'Camera'});
                    // set message
                    if (error.code == Titanium.Media.NO_CAMERA){
                        a.setMessage('Device does not have camera capabilities');
                    }else{
                        a.setMessage('Unexpected error: ' + error.code);
                    }
                    // show alert
                    a.show();
                },
                saveToPhotoGallery:true
            });
       }else if(e.index == 1){
           Titanium.Media.openPhotoGallery({
                success:function(event){
                     //var image = event.media;
                     _params.callback(event);
                },
                cancel:function(){
     
                },
                error:function(error){
                    // create alert
                    var a = Titanium.UI.createAlertDialog({title:'Camera'});
                    // set message
                    if (error.code == Titanium.Media.NO_CAMERA){
                        a.setMessage('Device does not have camera capabilities');
                    }else{
                        a.setMessage('Unexpected error: ' + error.code);
                    }
                    // show alert
                    a.show();
                },
                allowEditing:false
            });
       }
   });
};