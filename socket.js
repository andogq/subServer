// Imports
const socketio = require("socket.io");

// Globals
let server;

// Init function
function init() {
    console.log("Starting websocket server");
    server = socketio.listen(3000);
    console.log("Started websocket server. Awaiting connection");

    // Connection listener
    server.on("connection", (newSocket) => {
        console.log("Connected");
    });
}

module.exports.init = init;
