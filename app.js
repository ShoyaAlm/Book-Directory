const express = require('express');
const app = express();

const connectDB = require('./DB/connect');
const bodyParser = require('body-parser')
app.use(bodyParser.json())

require('dotenv').config();


const books = require('./routes/books')
const auth = require('./routes/auth')
const users = require('./routes/users')

app.use('/api/v1', books)
app.use('/api/v1', auth)
app.use('/api/v2/users',users)


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