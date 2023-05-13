const express = require('express');
const app = express();

const connectDB = require('./DB/connect');

require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Book Directory')
})

const router = require('./routes/routes')

app.use('/api/v1', router)

app.use(express.json())

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