const User = require('../model/User')

const getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send({users})
    } catch (error) {
        res.status(400).json({msg: error })
    }
}




module.exports = {
    getUsers,

}