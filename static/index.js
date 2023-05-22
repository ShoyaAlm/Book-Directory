const bookName = document.querySelector('.book-name')
const bookPrice = document.querySelector('.book-price')
const bookAuthor = document.querySelector('.book-author')
const bookPages = document.querySelector('.book-pages')
const bookGenre = document.querySelector('.book-genre')

const bookDiv = document.querySelector('.book-div')
const userDiv = document.querySelector('.user-div')

const orderDiv = document.querySelector('.order-div')

let helloUser = document.querySelector('.hello-user')


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
    


        console.log(booksList);
        if(orderBy == 'name'){
            booksList.sort((a, b) => {
              const nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
              const nameB = b.name.toUpperCase();
            
              if (nameA < nameB) {
                return -1; // a should come before b
              } else if (nameA > nameB) {
                return 1; // a should come after b
              } else {
                return 0; // names are equal
              }
            });
        }

        if(orderBy == 'price'){
            booksList.sort((a, b) => {
              const priceA = a.price; // Convert names to uppercase for case-insensitive sorting
              const priceB = b.price;
            
              if (priceA < priceB) {
                return -1; // a should come before b
              } else if (priceA > priceB) {
                return 1; // a should come after b
              } else {
                return 0; // names are equal
              }
            });
        }

        if(orderBy == 'pages'){
            booksList.sort((a, b) => {
              const pagesA = a.pages; // Convert names to uppercase for case-insensitive sorting
              const pagesB = b.pages;
            
              if (pagesA < pagesB) {
                return -1; // a should come before b
              } else if (pagesA > pagesB) {
                return 1; // a should come after b
              } else {
                return 0; // names are equal
              }
            });
        }

        console.log(booksList);
        
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
                    
                    <button class="button-3" type="submit">Add to favorites</button>
                    
                </div>`
    
    
            )
        }).join('')
    
        bookDiv.innerHTML = allBooks
        
    
    
    } catch (error) {
        console.log(error);
    }
    

    // const {
    //     data: books
    // } = await axios.get('/api/v1')
})

const Showcase = async () => {

// try {
//     const {
//         data: books
//     } = await axios.get('/api/v1')
//     if(books.length < 1){
//         bookDiv.innerHTML = '<h5>no books were found, error occurred!</h5>';
//         return
//     }

//     orderBy = orderDiv.value

//     const booksList = books.msg.sort({orderBy: 1})

//     const allBooks = booksList.map((book) => {
//         const {_id, name, price, author, pages, genre} = book
//         return (
//             `<div class="single-book">

//                 <h3 class="book-name">${name}</h3>

//                 <h3 class="book-price">${price}$</h3>

//                 <h3 class="book-author">${author}</h3>

//                 <h3 class="book-genre">${genre}</h3>

//                 <h3 class="book-pages">${pages} pages</h3>

//                 <h5 class="book-id">${_id}</h5>

//                 <a class="edit-link"><i class="edit-book">edit</i></a>
//                 <hr/>
                
//                 <button class="button-3" type="submit">Add to favorites</button>
                
//             </div>`


//         )
//     }).join('')

//     bookDiv.innerHTML = allBooks
    


// } catch (error) {
//     console.log(error);
// }


}

Showcase()





const showUsers = async () => {

    // try {
    //     const {
    //         data: users
    //     } = await axios.get('/api/v2/users')
    //     if(users.length < 1){
    //         userDiv.innerHTML = '<h5>no users were found, error occurred!</h5>';
    //         return
    //     }
    
    //     const usersList = users.users
    
    //     const allUsers = usersList.map((user) => {
    //         const {name, email} = user
    //         return (
    //             `<div class="single-book">
    
    //                 <h5 class="user-name">${name}</h5>
    
    //                 <h5 class="user-email">${email}</h5>    
    
    //                 <a class="edit-link"><i class="edit-user">edit</i></a>
    //                 <hr/>
    
    
    //             </div>`
    
    
    //         )
    //     }).join('')
    
    //     userDiv.innerHTML = allUsers
        
    // } catch (error) {
    //     console.log(error);
    // }
    
    
    }

// showUsers()


// const getUserInfo = async () => {
//     try {
//       const { data: userInfo } = await axios.get('/api/v2/user-info');
//       const userName = userInfo.name;
//       helloUserElement.textContent = `Hello, ${userName}!`;
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
//   getUserInfo();

