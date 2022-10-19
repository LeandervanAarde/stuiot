const express = require('express');
const mongoose = require('mongoose');
const fanRoute = require('./routes/fanRoute');
const cors = require('cors');
require('dotenv/config');
const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(fanRoute);

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'stuDB',
}).then(() => console.log("Connection Successful to stuDB (STU Database)"))
    .catch((err) => {
        console.log("No Connection. Reason: " + err);
    });



const PORT = process.env.PORT || 80;

app.listen(PORT, () => console.log(`Sever has started on port: ${PORT}`)); 
