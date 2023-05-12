const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('Book Directory')
})

app.listen(3000, (req, res) => {
    console.log('server on port 5000...');
})