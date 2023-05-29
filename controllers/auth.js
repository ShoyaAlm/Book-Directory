const bcrypt = require('bcryptjs');
const User = require('../model/User')

const {BadRequestError,
       NotFoundError,
       UnauthorizedError
        } = require('../errors')

const signUp = async (req, res) => {
    const user = await User.create({...req.body})
    const token = user.createJWT()
    res.status(201).json({user: {name: user.name}, token})   
}


const login = async (req, res) => {
    const {email, password} = req.body

    if (!email || !password){
        throw new BadRequestError('Please provide both email & password')
        // return res.status(400).json({msg: 'enter both email and password please...'})
    }

    const user = await User.findOne({email})
    
    if(!user){
        throw new NotFoundError('No user with that email was found')
        // return res.status(404).json({msg: `no such user with email ${email} was found`})
    }


    const isPasswordCorrect = await user.comparePassword(password)

    if(!isPasswordCorrect){
        throw new UnauthorizedError('Password is not correct')
    //    return res.status(400).json({msg: 'password is not correct'})
    }
        
    const token = user.createJWT()
    res.status(200).json({user: {name: user.name, id: user._id}, token})

}




module.exports = {signUp, login}