// Imports
const io = require("socket.io");

// Globals
let server;

// Init function
function init() {
    console.log("Starting websocket server");
    server = io.listen(3000);
    console.log("Awaiting connection");
    // Connection listener
    server.on("connection", (newSocket) => {
        console.log("Connected");
    });
}

module.exports.init = init;
