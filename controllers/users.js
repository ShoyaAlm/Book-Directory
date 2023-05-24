const User = require('../model/User')

const getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send({users})
    } catch (error) {
        res.status(400).json({msg: error })
    }
}


const getUser = async (req, res) => {
    
    const {id} = req.params

    try {
        const user = await User.findOne({_id: id})
        if(!user){
            return res.status(404).json({msg: `no user with id ${id} was found`})
        }
        res.status(200).json({ msg: user })
    } catch (error) {
        res.status(500).json({msg: error })
    }
}



const deleteUser = async (req, res) => {
    const {id:id} = req.params

    try {
        
        const user = await User.findOneAndDelete({_id:id})

        if(!user){
            return res.status(404).json({msg: `No User was found with id ${id}`})
        }

        res.status(200).json({msg: 'User was successfully deleted '})


    } catch (error) {
        res.status(400).json({msg: error})
    }
}

const addFavBooks = async (req, res) => {

    const {id:id} = req.params

    try {
        const user = await User.findByIdAndUpdate({_id:id})

        if(!user){
            return res.status(404).json({msg: `no user with id ${id}`})
        }


        res.status(200).json({user})



    } catch (error) {
        res.status(400).json({msg : error })
    }

}



module.exports = {
    getUsers,
    getUser,
    deleteUser,
    addFavBooks,
}