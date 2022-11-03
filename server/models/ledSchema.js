const mongoose = require('mongoose');

const ledState = mongoose.Schema({
    name: { type: String},
    state: { type: Boolean},
    // color: {type: String, default: "RED"},
    red:{type: Number, default: 255},
    green: {type: Number, default: 0},
    blue: {type: Number, default: 0},
    breathe: {type: Boolean, default: false},
    timeOn: {type: Number, default: 0}
});

module.exports = mongoose.model('LedState', ledState);