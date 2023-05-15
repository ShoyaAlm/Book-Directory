const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
        minLength: 6
    
    },

    email:{
        type: String,
        required: [true, 'enter the email of user'],
        unique: true,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'please provide valid email'],
        maxLength: [120, 'email is too long']        
    },


    // books: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Book'
    //   }]
    
})


User.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})


User.methods.createJWT = () => {
    return jwt.sign({userId:this._id, name:this.name}, 'jwtsecret', {expiresIn: '30d' })
}


User.methods.comparePassword = async (inputPassword) => {
    const isMatch = await bcrypt.compare(inputPassword, this.password)
    return isMatch
}


module.exports = mongoose.model('User', User)