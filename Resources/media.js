exports.getPicture = function(_params) {
    var dialog = Titanium.UI.createOptionDialog({
        options: [ "Camera", "Gallery", "Cancel" ],
        cancel: 2
    });
    dialog.show();
    dialog.addEventListener("click", function(e) {
        0 == e.index ? Titanium.Media.showCamera({
            success: function(event) {
                _params.callback(event);
            },
            cancel: function() {},
            error: function(error) {
                var a = Titanium.UI.createAlertDialog({
                    title: "Camera"
                });
                error.code == Titanium.Media.NO_CAMERA ? a.setMessage("Device does not have camera capabilities") : a.setMessage("Unexpected error: " + error.code);
                a.show();
            },
            saveToPhotoGallery: true
        }) : 1 == e.index && Titanium.Media.openPhotoGallery({
            success: function(event) {
                _params.callback(event);
            },
            cancel: function() {},
            error: function(error) {
                var a = Titanium.UI.createAlertDialog({
                    title: "Camera"
                });
                error.code == Titanium.Media.NO_CAMERA ? a.setMessage("Device does not have camera capabilities") : a.setMessage("Unexpected error: " + error.code);
                a.show();
            },
            allowEditing: false
        });
    });
};