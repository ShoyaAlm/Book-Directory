const formDivLogin = document.querySelector('.form-div-login');
const emailInp = document.querySelector('.email-input');
const passwordInp = document.querySelector('.password-input');


formDivLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      const email = emailInp.value;
      const password = passwordInp.value;
      
      const data = { email, password };
      const response = await axios.post('/api/v1/login', data);
      console.log(response.data.user.name); // Assuming the server responds with data
      
      // Clear input fields after successful submission
      emailInp.value = '';
      passwordInp.value = '';
  
      curUser = response.data.user.name
      alert(`Welcome back ${curUser}!`);
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
  
  