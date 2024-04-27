document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
        var adjustConfig = new AdjustConfig("rbuixr642oe8", AdjustConfig.EnvironmentProduction);

        adjustConfig.setAttributionCallbackListener(function(attribution) {
            console.log("Attribution callback received.");
            console.log("Tracker token = " + attribution.trackerToken);
            console.log("AdNetwork = " + attribution.network);
            console.log("Campaign = " + attribution.campaign);
        });
        Adjust.create(adjustConfig);
}

