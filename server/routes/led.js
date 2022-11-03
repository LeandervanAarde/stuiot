const express = require('express')
const ledState = require('../models/ledSchema')
const router = express()

// router.get('/api/getLed/:name', async (req, res) => {
//     const findAll = await ledState.findOne({
//         Name: req.body.Name
//     });

//     if (findAll) {
//         res.json(findAll)
//     }
// });


router.post('/api/addLed/:name', async (req, res) => {
    const findAll = await ledState.findOne({
        name: req.params.name
    })

    if(!findAll){
        const {name, state, red, green, blue} = req.body
        const newValue = new ledState({
            name: name,
            state: state,
            // color: {type: String, default: "RED"},
            red:  red,
            green: green,
            blue: blue,
        });


    newValue.save()
    .then(item => {
        res.json(item)
    })
    .catch(err => {
        res.status(400).json({ msg: "There is an error", err });
    });
    }

});




router.get('/api/getLed/:name', async (req, res) => {
    const findAll = await ledState.findOne({
        name: req.params.name
    })

 
    res.json(findAll)
})

router.patch('/api/toggleled/:name', async (req, res) => {

    const findAll = await ledState.findOne({
        name: req.params.name
    })

    if (findAll) {
        if (findAll) {
            const findLed = await ledState.updateOne(
                { Name: req.params.name },
                {
                    $set: {
                        breathe: req.body.breathe,
                    },
                },
            );
            res.json(findLed);
        }
    }
});

router.patch('/api/setLed/:name', async (req, res) => {
    const { red, green, blue, alpha } = req.body
    const findAll = await ledState.findOne({
        name: req.params.name
    })

    if (findAll) {
        const findLed = await ledState.updateOne(
            { Name: req.params.name },
            {
                $set: {
                    state: req.body.state,
                    red: red,
                    green: green,
                    blue: blue,
                    alpha: alpha
                },
            },
        );

        res.json(findLed);
    }
});


router.patch('/api/setTimeOn/:name', async (req, res) => {
    const { timeOn} = req.body
    const findAll = await ledState.findOne({
        name: req.params.name
    });

    console.log(findAll)
    if (findAll) {
        const findLed = await ledState.updateOne(
            { Name: req.params.name },
            {
                $set: {
                    timeOn: timeOn
                },
            },
        );

        res.json(findLed);
    }
})

module.exports = router;

