const formDivSignup = document.querySelector('.form-div-signup');
// const formDivLogin = document.querySelector('.form-div-login');
const nameInp = document.querySelector('.name-input');
const emailInp = document.querySelector('.email-input');
const passwordInp = document.querySelector('.password-input');

// const favButton = document.querySelector('.fav-button')

let curUser //current user that signs up or logs in

formDivSignup.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    const name = nameInp.value;
    const email = emailInp.value;
    const password = passwordInp.value;
    
    const data = { name, email, password };
    const response = await axios.post('/api/v1/signin', data);
    console.log(response.data); // Assuming the server responds with data
    nameInp.value = '';
    emailInp.value = '';
    passwordInp.value = '';
    curUser = name
    alert(`Hello ${curUser}`);
    window.location.href = 'index.html';
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code outside the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
  }
});

// wait, i could put both signup & login in the same js file(i mean in here)
// then, i define a global variable right here called 'curUser'
// and everytime user signs up or logs in, i assign that user to the curUser


//ask chatGPT:
// i have multiple users, they have their own attributes(names, etc.)
// in the front page they have a list of books demonstrated for them
// at the bottom of each book that is listed in front page, there is a button called add to fav
// when i signup/login, i want to lead the user to the front page and then let them choose their favorite books
// then the chosen book will be added to the user's books