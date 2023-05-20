const formDiv = document.querySelector('.form-div');
const nameInp = document.querySelector('.name-input');
const emailInp = document.querySelector('.email-input');
const passwordInp = document.querySelector('.password-input');



formDiv.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    const name = nameInp.value;
    const email = emailInp.value;
    const password = passwordInp.value;
    
    const data = { name, email, password };
    const response = await axios.post('/api/v1/signin', data);
    console.log(response.data); // Assuming the server responds with data
    
    let helloUser = document.querySelector('.hello-user')
    helloUser.value = name
    // Clear input fields after successful submission
    nameInp.value = '';
    emailInp.value = '';
    passwordInp.value = '';
    

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
