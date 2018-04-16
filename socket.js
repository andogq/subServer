
const socketio = require("socket.io");

const server = socketio.listen(3000);

server.on("connection", (socket) => {
    console.log("connection");

    socket.on("message", (data) => {
        console.log(data);
    });
});
