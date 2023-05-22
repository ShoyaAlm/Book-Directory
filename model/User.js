const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
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
        minLength: 4
    
    },

    email:{
        type: String,
        required: [true, 'enter the email of user'],
        unique: true,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'please provide valid email'],
        maxLength: [120, 'email is too long']        
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
})

userSchema.methods.comparePassword = async (inputPassword) => {
    // const isMatch = await bcrypt.compare(inputPassword, this.password)
    let isMatch
    if(inputPassword == this.password){
        isMatch = true
    } else{
        isMatch = false
    }
    return isMatch
}

// userSchema.pre('save', async function(next){
//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
//     next()
// })


userSchema.methods.createJWT = () => {
    return jwt.sign({userId:this._id, name:this.name}, 'jwtsecret', {expiresIn: '30d' })
}



const User = mongoose.model('User',userSchema)


module.exports = User