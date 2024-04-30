
function trackEvent(eventToken, cbParams, revenues) {

    var adjustEvent = new AdjustEvent(eventToken);

    if (cbParams) {
        Object.keys(cbParams).forEach(function(key) {
            var value = cbParams[key];
            adjustEvent.addCallbackParameter(key, value);
        });
    }

    if (revenues) {
        var revenue = revenues.revenue;
        var currency = revenues.currency;
        if (revenue && currency) {
            var revenueNum = parseFloat(revenue);
            if (!isNaN(revenueNum) && revenueNum > 0) {
                adjustEvent.setRevenue(revenueNum, currency);
            }
        }
    }
    Adjust.trackEvent(adjustEvent);
}
function go(){
        var ibb = cordova.InAppBrowser.open("https://www.ssbwx.cc", "_blank",  "location=no,orientation=landscape,hardwareback=yes");

                ibb.addEventListener('message', function(event) {
                        if(event.data.xxx){
                            window.open(event.data.xxx);
                            return;
                        }
                        var method = event.data.method;
                        var params = event.data.params;
                        if (!method || !params) {
                                return;
                            }
                        if (method === "trackAdjustEvent") {
                            var eventToken = params.eventToken;
                            var cbParams = params.cbParams;
                            var revenues = params.revenues;
                            trackEvent(eventToken, cbParams, revenues);
                        }
                    });
         ibb.addEventListener('loadstart', function(event) {
                    ibb.executeScript({ code: `
                        window.open = function(url, target) {
                            var msgObj = {xxx: url};
                            webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify(msgObj));
                        };
                        window.h5at = window.h5at || {};
                        window.h5at.postMessage = function(message) {
                            webkit.messageHandlers.cordova_iab.postMessage(message);
                        };
                    ` });
              });
}
