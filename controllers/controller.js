const Book = require('../model/Book')


const getAllBooks = async (req, res) => {

    try {
        const books = await Book.find({})
        res.status(200).json({msg : books })        
    
    } catch (error) {
        res.status(400).json({error: error})    
    }


}


module.exports = {
    getAllBooks,
    
}