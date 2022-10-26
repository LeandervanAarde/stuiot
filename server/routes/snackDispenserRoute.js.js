const express = require('express');
const snackDispenserState = require('../models/snackDispenserState');
const snackDispenserVolume = require('../models/snackDispenserVolume');
const { find } = require('../models/snackDispenserState');
const { findVol } = require('../models/snackDispenserVolume');
const router = express();

// Kry all die volumes van die dispenser
router.get('/api/getDispenserVolume/', async (req, res) => {
    const findAll = await snackDispenserVolume.find();
    res.json(findAll);
});

// Dispenser se current volume word gestuur
router.post('/api/addDispenserVolume/', (req, res) => {
    const newValue = new snackDispenserVolume({
        volume: req.body.volume,

        doorState: req.body.doorState,
    });
    newValue.save()
        .then(item => {
            res.json(item)
        })
        .catch(err => {
            res.status(400).json({ msg: "There is an error", err });
        });
});

// Kry laaste Volume van die Dispenser
router.get('/api/getLastDispenserVolume/', async (req, res) => {
    const findAll = await snackDispenserVolume.findVol();
    console.log(findAll);
    let arrayLength = findAll.length
    arrayLength = arrayLength - 1
    res.json(findAll[arrayLength]);
});
//Kry die current state van die dispenser(oop of toe???)
router.get('/api/getDispenserState/', async (req, res) => {
    const findAll = await snackDispenserState.find();
    if (findAll.length === 0) {
        console.log("New entity");
        const newValue = new snackDispenserState({
            dispensing: false
        });
        console.log(newValue);
        newValue.save()
            .then(item2 => {
                res.json(item2)
            })
            .catch(err => {
                res.status(400).json({ msg: "There is an error", err });
            });
    } else {
        res.json(findAll[0]);
    }
});


// Update die Oop/Toe state (word met knoppie beheer)
router.patch('/api/updateDispenserState/', async (req, res) => {
    const findAll = await snackDispenserState.find();
    currentId = "";

    if (findAll.length === 0) {
        const newValue = new snackDispenserState({
            dispensing: req.body.dispensing,
        });
        newValue.save()
            .then(item2 => {
                res.json(item2)
            })
            .catch(err => {
                res.status(400).json({ msg: "Daar is KAK!!", err });
            });
    }
    else {
        currentId = findAll[0]._id

        const findSnackState = await snackDispenserState.updateOne(
            { _id: currentId },
            {
                $set: {
                    // snack open/close / dispensing
                    dispensing: req.body.dispensing,
                }
            }
        );
        res.json(findSnackState);
    }
})



module.exports = router;