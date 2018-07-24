(function () {

    var WebSocket = require("ws");

    const ws_host = "ws://192.168.0.131:8080"

    const ws = new WebSocket(ws_host);

    ws.on('open', function open() {
        console.log("Running listener on " + ws_host);
    });

    ws.on('message', function incoming(data) {
        console.log("Receiving data: ", data);
    });

    ws.on('error', function onerror(error) {
        console.log("Error ws: ", error);
    })

})();