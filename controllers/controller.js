const Book = require('../model/Book')


const getAllBooks = async (req, res) => {

    try {
        const books = await Book.find({})
        res.status(200).json({msg : books })        
    
    } catch (error) {
        res.status(400).json({error: error})    
    }


}


const addBook = async (req, res) => {
    try {
        const book = await Book.create(req.body)
        res.status(201).json({msg: 'successfull', book : book})
    } catch (error) {
        res.status(400).json({ msg : error })
    }
}


module.exports = {
    getAllBooks,
    addBook,
}