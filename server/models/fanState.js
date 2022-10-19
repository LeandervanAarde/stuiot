const mongoose = require('mongoose');

const fanState = mongoose.Schema({
    relay: { type: Boolean, required: true },
    fanSpeed: { type: Number, required: true },
});

module.exports = mongoose.model('fan-state', fanState);