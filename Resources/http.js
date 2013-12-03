var _listener;

var _callback;

exports.request = function(_params, _callback) {
    var anXhr = Ti.Network.createHTTPClient();
    anXhr.onload = function(e) {
        if (e.error) {
            var data = {
                _result: 0
            };
            _callback(data);
            return;
        }
        if ("JSON" == _params.format) var data = {
            _result: 1,
            _data: JSON.parse(this.responseText)
        }; else var data = {
            _result: 1,
            _data: {
                responseXML: this.responseXML,
                responseText: this.responseText
            }
        };
        _callback(data);
    };
    anXhr.onerror = function() {
        var data = {
            _result: 0
        };
        _callback(data);
    };
    anXhr.open(_params.type, _params.url);
    anXhr.setTimeout(45e3);
    anXhr.send(_params.data);
};

exports.createNetChange = function(_CB) {
    _callback = _CB;
    _listener = function(_event) {
        _event.online ? _callback(true) : _callback(false);
    };
    Ti.Network.addEventListener("change", _listener);
};

exports.removeNetChange = function() {
    Ti.Network.removeEventListener("change", _listener);
};