const bookName = document.querySelector('.book-name')
const bookPrice = document.querySelector('.book-price')
const bookAuthor = document.querySelector('.book-author')
const bookPages = document.querySelector('.book-pages')
const bookGenre = document.querySelector('.book-genre')

const bookDiv = document.querySelector('.book-div')

const Book = require('../model/Book')

const Showcase = async () => {

try {
    const {
        data: books
    } = await axios.get('/api/v1')
    if(books.length < 1){
        
    }
} catch (error) {
    
}


}