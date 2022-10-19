const express = require('express');
const { find } = require('../models/addTempReading');
const addTempReading = require('../models/addTempReading');
const fanState = require('../models/fanState');
const router = express();

router.post('/api/addTemp', (req, res) => {
    const newValue = new addTempReading({
        temp: req.body.temp,
        humidity: req.body.humidity,
    });

    newValue.save()
        .then(item => {
            res.json(item)
        })
        .catch(err => {
            res.status(400).json({ msg: "There is an error", err });
        });
});

router.get('/api/getTemp/', async (req, res) => {
    const findAll = await addTempReading.find();
    // const arrayName = findAll.filter(item => item.name == req.params.name);
    res.json(findAll);
});

router.get('/api/getLastTemp/', async (req, res) => {
    const findAll = await addTempReading.find();
    console.log(findAll);
    // const arrayName = findAll.filter(item => item.name == req.params.name);
    let arrayLength = findAll.length
    arrayLength = arrayLength - 1
    res.json(findAll[arrayLength]);
});

router.patch('/api/updateFan/', async (req, res) => {
    const findAll = await fanState.find();
    // const arrayName = findAll.filter(item => item.name == req.params.name);
    currentId = "";

    if (findAll.length === 0) {
        const newValue = new fanState({
            relay: req.body.relay,
            fanSpeed: req.body.fanSpeed,
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

        const findRelay = await fanState.updateOne(
            { _id: currentId },
            {
                $set: {
                    relay: req.body.relay,
                    fanSpeed: req.body.fanSpeed

                }
            }
        );
        res.json(findRelay);
    }


})

router.get('/api/getFan/', async (req, res) => {
    const findAll = await fanState.find();
    // const arrayName = findAll.filter(item => item.name == req.params.name);
    if (findAll.length === 0) {
        console.log("New entity");
        const newValue = new fanState({
            relay: false,
            fanSpeed: 0
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

module.exports = router;