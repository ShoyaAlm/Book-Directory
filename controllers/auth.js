const User = require('../model/User');
const bcrypt = require('bcrypt');

const signIn = async (req, res) => {
    const user = await User.create({...req.body})
    const token = user.createJWT()
    res.status(201).json({user: {name: user.name}, token})   
}


const login = async (req, res) => {
    const {email, password} = req.body

    if (!email || !password){
        return res.status(400).json({msg: 'enter both email and password please...'})
    }

    const user = await User.findOne({email})

    if(!user){
        res.status(404).json({msg: `no such user with email ${email} was found`})
    }

    const isPasswordCorrect = user.comparePassword(password)

    if(!isPasswordCorrect){
        res.status(400).json({msg: 'password is not correct'})
    }


    const token = user.createJWT()
    res.status(200).json({user: {name: user.name}, token})

}

module.exports = {signIn, login}