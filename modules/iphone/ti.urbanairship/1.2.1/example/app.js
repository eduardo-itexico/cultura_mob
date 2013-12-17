/*
 * Demonstrates how to set up your UA Airmail Mailbox,
 * and how to display the messages from it via the picker interface.
 */

var window = Ti.UI.createWindow({
    backgroundColor: 'white'
});

// Urban Airship Setup

var UrbanAirship = require('ti.urbanairship');

UrbanAirship.options = {
    APP_STORE_OR_AD_HOC_BUILD: false,
    PRODUCTION_APP_KEY: '=== YOUR PROD APP KEY ===',
    PRODUCTION_APP_SECRET: '=== YOUR PROD APP SECRET ===',
    DEVELOPMENT_APP_KEY: '=== YOUR DEV APP KEY ===',
    DEVELOPMENT_APP_SECRET: '=== YOUR DEV APP SECRET ===',
    LOGGING_ENABLED: true
};

// UrbanAirship.autoBadge = true;
// UrbanAirship.autoResetBadge = true;

var b = Ti.UI.createButton({
    title: 'Open UA Inbox',
    width: 200, height: 40
});
b.addEventListener('click', function() {
    // Open default mailbox
    UrbanAirship.displayInbox({ animated:true });
});
window.add(b);

Ti.Network.registerForPushNotifications({
    types:[
        Ti.Network.NOTIFICATION_TYPE_BADGE,
        Ti.Network.NOTIFICATION_TYPE_ALERT,
        Ti.Network.NOTIFICATION_TYPE_SOUND
    ],
    success: function(e) {
        var token = e.deviceToken;
        //alert(e.deviceToken);
        //Ti.API.log(token);
        UrbanAirship.registerDevice(token, {
            tags: [ 'testing', 'appcelerator', 'my-tags' ],
            alias: 'testDevice-iOS'
        });

        //alert('Registered remotely!');
        b.enabled = true;
    },
    error: function(e) {
        alert("Error: " + e.error);
    },
    callback: function(e) {
        UrbanAirship.handleNotification(e.data);
    }
});

window.open();