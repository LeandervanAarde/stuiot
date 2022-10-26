const mongoose = require('mongoose');

const snackDispenserVolume = mongoose.Schema({
    volume: { type: Number, required: true },
    doorState: { type: Boolean, required: true },
    time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('snack-dispenser-volume', snackDispenserVolume);
