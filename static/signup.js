const formDiv = document.querySelector('.form-div')

// const User = require('../model/User')

const nameInp = document.querySelector('.name-input')
const emailInp = document.querySelector('.email-input')
const passwordInp = document.querySelector('.password-input')

formDiv.addEventListener('submit', async (e) => {
    e.preventDefault()
    const name = nameInp.value
    const email = emailInp.value
    const password = passwordInp.value
    
    const data = {name, email, password}
    
    const user = await axios.post('/api/v1/users', {data})


    

})


