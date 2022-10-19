const mongoose = require('mongoose');

const addTempReading = mongoose.Schema({
    temp: { type: Number, required: true },
    humidity: { type: Number, required: true },
    time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('temp-reading', addTempReading);