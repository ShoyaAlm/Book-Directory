const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'enter the name of the user'],
        trim: true,
        maxLength: [100, 'name is too long']
    },

    password:{
        type:String,
        required: [true, 'enter the password of the user'],
        trim: true,
        maxLength: [120, 'password is too long']
    
    },

    email:{
        type: String,
        required: [true, 'enter the email of user'],
        trim: true,
        maxLength: [120, 'email is too long']        
    },


    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
      }]
    
})

module.exports = mongoose.model('User', User)