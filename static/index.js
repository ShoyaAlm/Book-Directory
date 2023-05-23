const bookName = document.querySelector('.book-name')
const bookPrice = document.querySelector('.book-price')
const bookAuthor = document.querySelector('.book-author')
const bookPages = document.querySelector('.book-pages')
const bookGenre = document.querySelector('.book-genre')

const bookDiv = document.querySelector('.book-div')
const userDiv = document.querySelector('.user-div')

const orderDiv = document.querySelector('.order-div')

const favButton = document.querySelector('.fav-button')

let helloUser = document.querySelector('.hello-user')

const userName = localStorage.getItem('username')
console.log(userName);
helloUser.textContent = `Hello ${userName}`


const token = localStorage.getItem('jwtToken');
if(token){
  console.log(token);
  

} else{
  console.log('no user is logged in');
}

orderDiv.addEventListener("click", async () => {
    console.log(orderDiv.value);
    orderBy = orderDiv.value

    try {
        const {
            data: books
        } = await axios.get('/api/v1')
        if(books.length < 1){
            bookDiv.innerHTML = '<h5>no books were found, error occurred!</h5>';
            return
        }
    
        orderBy = orderDiv.value
    

        const booksList = books.books
    


        if(orderBy == 'name'){
            booksList.sort((a, b) => {
              const nameA = a.name.toUpperCase();
              const nameB = b.name.toUpperCase();
            
              if (nameA < nameB) {
                return -1;
              } else if (nameA > nameB) {
                return 1;
              } else {
                return 0;
              }
            });
        }

        if(orderBy == 'price'){
            booksList.sort((a, b) => {
              const priceA = a.price;
              const priceB = b.price;
            
              if (priceA < priceB) {
                return -1;
              } else if (priceA > priceB) {
                return 1;
              } else {
                return 0;
              }
            });
        }

        if(orderBy == 'pages'){
            booksList.sort((a, b) => {
              const pagesA = a.pages;
              const pagesB = b.pages;
            
              if (pagesA < pagesB) {
                return -1;
              } else if (pagesA > pagesB) {
                return 1;
              } else {
                return 0;
              }
            });
        }
        
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
                    
                    <button class="fav-button" type="submit">Add to favorites</button>
                    
                </div>`
    
    
            )
        }).join('')
    
        bookDiv.innerHTML = allBooks
        
    
    
    } catch (error) {
        console.log(error);
    }
    
})

const Showcase = async () => {

try {
    const {
        data: books
    } = await axios.get('/api/v1')
    if(books.length < 1){
        bookDiv.innerHTML = '<h5>no books were found, error occurred!</h5>';
        return
    }


    const booksList = books.books

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
                
                <button class="fav-button" type="submit">Add to favorites</button>
                
            </div>`


        )
    }).join('')

    bookDiv.innerHTML = allBooks
    
} catch (error) {
    console.log(error);
}

}

Showcase()



favButton.addEventListener('click', async (bookId) => {
  try {
      const token = localStorage.getItem('jwtToken');
      const response = await axios.post(
        '/api/v2/users',
        { bookId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Book added to favorites:', response.data);
    } catch (error) {
      console.log(error);
    }
})
