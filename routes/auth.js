const express = require('express');
const router = express.Router();


const {signUp, login, getUsers} = require('../controllers/auth')

router.route('/signin').post(signUp)
router.route('/login').post(login)
router.route('/users').get(getUsers)



module.exports = router
