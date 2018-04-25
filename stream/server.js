// Imports
const http = require('http');
const express = require('express');

// Globals
const WebStreamerServer = require('./raspivid.js');

// Start and configure Express
const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + '/vendor/dist'));

// Configure servers
const server  = http.createServer(app);
const silence = new WebStreamerServer(server);

// Start http server
server.listen(8080);
