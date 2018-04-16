// Imports
const gpio = require("pigpio").Gpio;

// Globals
const xPin = 19;
const yPin = 13;

// Microseconds high to get to position
const pos0 = 500;
const pos90 = 1500;
const pos180 = 2500;

// Pin declarations
const xAxis = new gpio(xPin, {mode: gpio.OUTPUT});
const yAxis = new gpio(yPin, {mode: gpio.OUTPUT});

// Time that last moved
let yLast = 0;
let xLast = 0;

// Delay between presses
const delay = 50;

// Functions to move camera
function up() {
    yAxis.servoWrite(pos0);
    setTimeout(() => {
        yAxis.servoWrite(0);
    }, 20);
    yLast = Date.now();
}

function down() {
    yAxis.servoWrite(pos180);
    setTimeout(() => {
        yAxis.servoWrite(0);
    }, 20);
    yLast = Date.now();
}

function left() {
    xAxis.servoWrite(pos180);
    setTimeout(() => {
        xAxis.servoWrite(0);
    }, 20);
    xLast = Date.now();
}

function right() {
    xAxis.servoWrite(pos0);
    setTimeout(() => {
        xAxis.servoWrite(0);
    }, 20);
    xLast = Date.now();
}

function center() {
    xAxis.servoWrite(pos90);
    setTimeout(() => {
        xAxis.servoWrite(0);
    }, 1000);
}

// Exports
module.exports.up = up;
module.exports.down = down;
module.exports.left = left;
module.exports.right = right;
module.exports.center = center;
