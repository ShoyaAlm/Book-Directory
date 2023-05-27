const formDivSignup = document.querySelector('.form-div-signup');
const nameInp = document.querySelector('.name-input');
const emailInp = document.querySelector('.email-input');
const passwordInp = document.querySelector('.password-input');


formDivSignup.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    const name = nameInp.value;
    const email = emailInp.value;
    const password = passwordInp.value;
    
    const data = { name, email, password };
    const response = await axios.post('/api/v1/signup', data);
    console.log(response.data); // Assuming the server responds with data
    localStorage.setItem('username', response.data.user.name)

    const token = response.data.token;
    const userId = response.data.user.id
    localStorage.setItem('jwtToken', token);
    localStorage.setItem('userId', userId)

    nameInp.value = '';
    emailInp.value = '';
    passwordInp.value = '';
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
