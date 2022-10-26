const mongoose = require('mongoose');

const snackDispenserState = mongoose.Schema({
    dispensing: {
        type: Boolean,
        required: true
    },
});

module.exports = mongoose.model('snack-dispenser-state', snackDispenserState);