const express = require('express')
const ledState =  require('../models/ledSchema')
const router = express()

// router.get('/api/getLed/:name', async (req, res) => {
//     const findAll = await ledState.findOne({
//         Name: req.body.Name
//     });

//     if (findAll) {
//         res.json(findAll)
//     }
// });


router.get('/api/getLed/:name', async (req, res) => {
    const findAll = await ledState.findOne({
        Name: req.params.name
    })
    res.json(findAll)
})

router.patch('/api/setLed/:name', async (req, res) => {
    const {red, green, blue, alpha} = req.body
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
                    // timeUsage: 
                    // findAll.state
                    // ?
                    // {
                    //     // timeOn: req.body.timeOn,
                    //     timeOff: req.body.timeOff,
                    //     Day: req.body.day
                    // }
                    // :
                    // {
                    //     timeOn: req.body.timeOn,
                    //     // timeOff: req.body.timeOff,
                    //     Day: req.body.day
                    // }
                },
                // $push: {
                //     timeUsage: 
                //         findAll.state
                //         ?
                //         {
                //             timeOn: req.body.timeOn,
                //             // timeOff: req.body.timeOff,
                //             Day: req.body.day
                //         }
                //         :
                //         {
                //             // timeOn: req.body.timeOn,
                //             timeOff: req.body.timeOff,
                //             Day: req.body.day
                //         }
                // },

            },
            
        );

        res.json(findLed);
    }

    
})

module.exports = router;

