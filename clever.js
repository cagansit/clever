var cApi = {};

cApi.loadScript = function (url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = 'async';

    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState == 'loaded' || script.readyState == 'complete') {
                script.onreadystatechange = null;

                if (typeof callback === 'function') {
                    callback();
                }
            }
        }
    } else {
        script.onload = function () {
            if (typeof callback === 'function') {
                callback();
            }
        }
    }

    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
};

var mainFunc = (function(self) {
    var cApiUrl = 'https://c.api.ourdomain.com/hit';
    self.init = function() {

    };

    self.makeRequest = function(payload) {
        var request = {
            url: cApiUrl,
            async: true,
            crossDomain: true,
            type: 'post',
            data: JSON.stringify(payload)
        };

        $.ajax(request).success(function() {
            console.log('cApi sent');
        });
    };

    self.init();
})({});

cApi.loadScript('http://api.ourdomain.com/js/squery.min.js', mainFunc);