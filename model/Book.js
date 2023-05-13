const mongoose = require('mongoose');

const Book = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'please enter the name of the book'],
        trim: true,
        maxLength: [120, 'Name is too long']
    },
    price:{
        type: Number,
        required: [true, 'please enter the price of the book'],
    },
    author:{
        type: String,
        required: [true, 'please name the author of the book'],
        trim: true,
        maxLength: [100, 'Name is too long']
    },
    pages:{
        type: Number,
        required: [true, 'please enter the number of pages'],
    }
})

module.exports = mongoose.model('Book', Book)