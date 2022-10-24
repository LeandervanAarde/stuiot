// Example Code
const mongoose = require('mongoose');

const smartLock = mongoose.Schema({
    name: { type: String, required: true },
    status: {type: Boolean, required: true},
    timerTime : {type: String},
    timeOn:[
        {type: String}
    ],
    timeOff:[
        {type: String}
    ]
});

module.exports = mongoose.model('smarLock', smartLock);

//Colours to be used
//Anything? 