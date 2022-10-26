const mongoose = require('mongoose');

const ledState = mongoose.Schema({
    name: { type: String, required: true},
    state: { type: Boolean, required: true},
    // color: {type: String, default: "RED"},
    red:{type: Number, default: 255},
    green: {type: Number, default: 0},
    blue: {type: Number, default: 0},
    // timeUsage:[
    //     {
    //         timeOn: String,
    //         timeOff: String,
    //         Day: String
    //     }
    // ]
});

module.exports = mongoose.model('LedState', ledState);