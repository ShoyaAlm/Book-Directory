const bookName = document.querySelector('.book-name')
const bookPrice = document.querySelector('.book-price')
const bookAuthor = document.querySelector('.book-author')
const bookPages = document.querySelector('.book-pages')
const bookGenre = document.querySelector('.book-genre')

const bookDiv = document.querySelector('.book-div')
const userDiv = document.querySelector('.user-div')

const Showcase = async () => {

try {
    const {
        data: books
    } = await axios.get('/api/v1')
    if(books.length < 1){
        bookDiv.innerHTML = '<h5>no books were found, error occurred!</h5>';
        return
    }

    const booksList = books.msg

    const allBooks = booksList.map((book) => {
        const {_id, name, price, author, pages, genre} = book
        return (
            `<div class="single-book">

                <h3 class="book-name">${name}</h3>

                <h3 class="book-price">${price}$</h3>

                <h3 class="book-author">${author}</h3>

                <h3 class="book-genre">${genre}</h3>

                <h3 class="book-pages">${pages} pages</h3>

                <h5 class="book-id">${_id}</h5>

                <a class="edit-link"><i class="edit-book">edit</i></a>
                <hr/>


            </div>`


        )
    }).join('')

    bookDiv.innerHTML = allBooks
    


} catch (error) {
    console.log(error);
}


}

Showcase()





const showUsers = async () => {

    try {
        const {
            data: users
        } = await axios.get('/api/v1/users')
        if(users.length < 1){
            userDiv.innerHTML = '<h5>no users were found, error occurred!</h5>';
            return
        }
    
        const usersList = users.msg
    
        const allUsers = usersList.map((user) => {
            const {name, email, password} = user
            return (
                `<div class="single-book">
    
                    <h3 class="user-name">${name}</h3>
    
                    <h3 class="user-email">${email}$</h3>
    
                    <h3 class="user-password">${password}</h3>
    
    
                    <a class="edit-link"><i class="edit-user">edit</i></a>
                    <hr/>
    
    
                </div>`
    
    
            )
        }).join('')
    
        userDiv.innerHTML = allUsers
        
    
    
    } catch (error) {
        console.log(error);
    }
    
    
    }

showUsers()