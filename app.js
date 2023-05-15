const express = require('express');
const app = express();

const connectDB = require('./DB/connect');
const bodyParser = require('body-parser')
app.use(bodyParser.json())

require('dotenv').config();


const router = require('./routes/routes')

app.use('/api/v1', router)

app.use(express.json())

app.use(express.static('./static'))
app.use(express.urlencoded({ extended: false }))

const port = 3000;

const start = async (req, res) => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();