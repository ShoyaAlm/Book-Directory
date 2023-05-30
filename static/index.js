const bookDiv = document.querySelector('.book-div')

const orderDiv = document.querySelector('.order-div')

let helloUser = document.querySelector('.hello-user')

let signinLogout = document.querySelector('.signup-login')

const userName = localStorage.getItem('username')

let token = localStorage.getItem('jwtToken');

if(token){
  helloUser.textContent = `Hello ${userName}`
  signinLogout.textContent = 'Logout'

} else{
  signinLogout.textContent = 'Signup/Login'
  console.log('no user is logged in');

}



const Showcase = async () => {
  try {
    const { data: books } = await axios.get('/api/v1');
    if (books.length < 1) {
      bookDiv.innerHTML = '<h5>No books were found. An error occurred!</h5>';
      return;
    }

    const booksList = books.books;

    const allBooks = booksList
      .map((book) => {
        const { _id, name, price, author, pages, genre } = book;
        return `
          <div class="single-book">
            <h3 class="book-name">${name}</h3>
            <h3 class="book-price">${price}$</h3>
            <h3 class="book-author">${author}</h3>
            <h3 class="book-genre">${genre}</h3>
            <h3 class="book-pages">${pages} pages</h3>
            <h5 class="book-id">${_id}</h5>
            <a class="edit-link"><i class="edit-book">edit</i></a>
            <hr/>
            <button class="fav-button" type="submit">Add to favorites</button>
          </div>`;
      })
      .join('');

    bookDiv.innerHTML = allBooks;

    const favButtons = document.querySelectorAll('.fav-button');
    favButtons.forEach((favButton) => {
      favButton.addEventListener('click', async (event) => {
        try {
          const bookIdElement = event.target.parentElement.querySelector('.book-id');
          const bookId = bookIdElement.textContent;
          const book = await axios.get(`/api/v1/${bookId}`);
          console.log(book.data.msg); // This now has the whole detail of the book
          const bookData = book.data.msg;
          const token = localStorage.getItem('jwtToken');
          const userId = localStorage.getItem('userId');
          const response = await axios.patch(
            `/api/v2/users/${userId}`,
            bookData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log('Book added to favorites: ', response.data.user);
          // response.config.data = all details related to the book
          // response.data.user = all details related to the user 
        } catch (error) {
          console.log(error);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};


Showcase()



// orderDiv.addEventListener("click", async () => {
//     console.log(orderDiv.value);
//     orderBy = orderDiv.value

//     try {
//         const {
//             data: books
//         } = await axios.get('/api/v1')
//         if(books.length < 1){
//             bookDiv.innerHTML = '<h5>no books were found, error occurred!</h5>';
//             return
//         }
    
//         orderBy = orderDiv.value
    

//         const booksList = books.books
    


//         if(orderBy == 'name'){
//             booksList.sort((a, b) => {
//               const nameA = a.name.toUpperCase();
//               const nameB = b.name.toUpperCase();
            
//               if (nameA < nameB) {
//                 return -1;
//               } else if (nameA > nameB) {
//                 return 1;
//               } else {
//                 return 0;
//               }
//             });
//         }

//         if(orderBy == 'price'){
//             booksList.sort((a, b) => {
//               const priceA = a.price;
//               const priceB = b.price;
            
//               if (priceA < priceB) {
//                 return -1;
//               } else if (priceA > priceB) {
//                 return 1;
//               } else {
//                 return 0;
//               }
//             });
//         }

//         if(orderBy == 'pages'){
//             booksList.sort((a, b) => {
//               const pagesA = a.pages;
//               const pagesB = b.pages;
            
//               if (pagesA < pagesB) {
//                 return -1;
//               } else if (pagesA > pagesB) {
//                 return 1;
//               } else {
//                 return 0;
//               }
//             });
//         }
        
//         const allBooks = booksList.map((book) => {
//             const {_id, name, price, author, pages, genre} = book

//             return (
//                 `<div class="single-book">
    
//                     <h3 class="book-name">${name}</h3>
    
//                     <h3 class="book-price">${price}$</h3>
    
//                     <h3 class="book-author">${author}</h3>
    
//                     <h3 class="book-genre">${genre}</h3>
    
//                     <h3 class="book-pages">${pages} pages</h3>
    
//                     <h5 class="book-id">${_id}</h5>
    
//                     <a class="edit-link"><i class="edit-book">edit</i></a>
//                     <hr/>
                    
//                     <button class="fav-button" type="submit">Add to favorites</button>
                    
//                 </div>`
    
    
//             )
//         }).join('')
    
//         bookDiv.innerHTML = allBooks
        

//         favButton.addEventListener("click", async (bookId) => {
//           try {
//               const token = localStorage.getItem('jwtToken');
//               const userId = localStorage.getItem('userId');

//               const response = await axios.post(
//                 `/api/v2/users/${userId}`,
//                 { bookId },
//                 {
//                   headers: {
//                     Authorization: `Bearer ${token}`,
//                   },
//                 }
//               );
//               console.log('Book added to favorites:', response.data);
//             } catch (error) {
//               console.log(error);
//             }
//         })
        
//         console.log(favButton);

//     } catch (error) {
//         console.log(error);
//     }
    
// })
