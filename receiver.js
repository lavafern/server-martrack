const WebSocket = require('ws')

const socket = new WebSocket(process.env.AIS_URL)

socket.onopen = function (_) {
    let subscriptionMessage = {
        Apikey: process.env.API_KEY,
        BoundingBoxes:  [
       [[4.0, 105.0], [-10.5, 125.0]]
    ],
        // FiltersShipMMSI: ["368207620", "367719770", "211476060"], // Optional!
        FilterMessageTypes: ["PositionReport"] // Optional!
    }
    socket.send(JSON.stringify(subscriptionMessage));
};

// socket.onmessage = function (event) {
    // console.log('AISMESSAGE: ',aisMessage)
// };

module.exports = socket
