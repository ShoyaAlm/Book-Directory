const Book = require('../model/Book')


const getAllBooks = async (req, res) => {

    try {
        const books = await Book.find({})
        res.status(200).json({msg : books })        
    
    } catch (error) {
        res.status(400).json({error: error})    
    }


}


const getOneBook = async (req, res) => {
    
    const {id} = req.params

    try {
        const book = await Book.findOne({_id: id})
        if(!book){
            return res.status(404).json({msg: `no book with id ${id} was found`})
        }
        res.status(200).json({ msg: book })
    } catch (error) {
        res.status(500).json({msg: error })
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



const deleteBook = async (req, res) => {
    const {id:id} = req.params

    try {
        
        const Book = await Book.findOneAndDelete({_id:id})

        if(!Book){
            return res.status(404).json({msg: `No Book was found with id ${id}`})
        }

        res.status(200).json({msg: 'Book was successfully deleted '})


    } catch (error) {
        res.status(400).json({msg: error})
    }
}



const updateBook = async (req, res) => {
    const {id:id} = req.params
    
    try {
        
        const newBook = await Book.findOneAndUpdate({_id:id}, req.body, {
            new:true,
            runValidators:true,
        })

        if(!newBook){
            return res.status(404).json({msg: `No such Book was found with id ${id}`})
        }
        
        res.status(200).json({Book: newBook})

    } catch (error) {
        res.status(400).json({msg: error})
    }

}




module.exports = {
    getAllBooks,
    getOneBook,
    addBook,
    deleteBook,
    updateBook,
}